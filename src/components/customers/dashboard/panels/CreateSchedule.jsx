import React, { useState, useContext, Fragment } from "react";
import Swal from "sweetalert2";
import ScheduleContext from "../../../../contexts/schedules/ScheduleContext";
import styled from "@emotion/styled";
import UserAuthContext from "../../../../contexts/authenticate/UserAuthContext";
import { useRouter } from "next/router";

const ListHours = styled.ul`
  padding: 0.5rem 1rem;
  padding-bottom: 1rem;
  box-shadow: -5px 0px 10px 1px rgba(0, 0, 0, 0.4);
  border-radius: 10px;

  li.element_occupied_false {
    padding: 0.5rem;
    border-radius: 10px;
    margin-top: 0.5rem;
    text-align: center;
    transition: all 0.4s;

    input[type="checkbox"] {
      display: none;
    }

    &:hover {
      cursor: pointer;
      background-color: #17a2b8;
    }
  }

  li.element_occupied_true {
    padding: 0.5rem;
    margin-top: 0.5rem;
    text-align: center;
    border-radius: 10px;
    transition: all 0.4s;
    background-color: lightgrey;

    input[type="checkbox"] {
      display: none;
    }

    &:hover {
      cursor: not-allowed;
    }
  }
`;

const ContainerCoupon = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 5;

  form {
    position: relative;
    border-radius: 0.5rem;
    padding: 2rem;
    padding-bottom: 0.2rem;

    .closeBox {
      position: absolute;
      right: -10px;
      top: -10px;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      color: white;
      text-align: center;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

const CreateSchedule = (props) => {
  const router = useRouter();

  const { customer, addCreditsByCustomer } = useContext(UserAuthContext);
  const { hours, addSchedule, lstHoursByDay } = useContext(ScheduleContext);

  const { credits } = customer;

  const [hourSelected, setHourSelected] = useState({});

  const [intents, setIntents] = useState(0);

  const { early, morning, afternoon, night } = hours;

  const [coupon, setCoupon] = useState(false);
  const [numberCoupon, setNumberCoupon] = useState("");

  const [dateSelected, setDateSelected] = useState("");

  const handleCreateSchedule = (e) => {
    e.preventDefault();

    if (!dateSelected) {
      Swal.fire({
        icon: "error",
        title: "La fecha seleccionada no es válida",
        timer: 3000,
      });

      return;
    }

    if (Object.keys(hourSelected).length === 0) {
      Swal.fire({
        icon: "error",
        title: "No ha seleccionado una hora",
        timer: 3000,
      });

      return;
    }

    const xschedule = {
      dateDay: dateSelected,
      hour: hourSelected,
    };

    addSchedule(xschedule);

    setDateSelected("");

    setTimeout(() => {
      // history.push('/');
    }, 1200);

    Swal.fire({
      icon: "success",
      title: "Horario reservado correctamente",
      timer: 3000,
    });

    setTimeout(() => {
      router.reload();
    }, 2000);
  };

  const loadOptions = (options, hourId) => {
    options.map((hour) => {
      if (hour.id === hourId) {
        hour.status = true;
        console.log(hour);
        setHourSelected(hour);
        setIntents(0);
      } else {
        hour.status = false;
      }

      return hour;
    });
  };

  const handleChoosehour = (hourId, occupied, status) => {
    if (occupied === true) {
      return;
    }

    if (intents >= 1) {
      Swal.fire({
        icon: "error",
        title: "Debe seleccionar solo uno",
        timer: 3000,
      });

      return;
    }

    loadOptions(early, hourId);
    loadOptions(morning, hourId);
    loadOptions(afternoon, hourId);
    loadOptions(night, hourId);
  };

  const handleUpdateDate = (e) => {
    setDateSelected(e.target.value);
    lstHoursByDay(e.target.value);
  };

  const handleAddCredits = async (e) => {
    e.preventDefault();

    if (numberCoupon.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Ingrese un cupón válido",
        timer: 3000,
      });
      return;
    }

    const successfull = await addCreditsByCustomer({ numcoupon: numberCoupon });

    if (!successfull.ok) {
      Swal.fire({
        icon: "error",
        title: successfull.msg,
        timer: 3000,
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "El cupón se aplicó correctamente",
      timer: 3000,
    });

    setCoupon(false);

    setTimeout(() => {
      history.push("/");
    }, 1200);
  };

  const ListHoursTime = (arrHours, title, apm) => {
    return (
      <Fragment>
        <h4 className="mb-4">{title}</h4>

        <ListHours>
          {arrHours.map((hour) => (
            <li
              key={hour.id}
              onClick={() =>
                handleChoosehour(hour.id, hour.occupied, hour.status)
              }
              disabled={hour.occupied}
              className={`list-group-item ${hour.status ? "bg-info" : ""} ${
                hour.occupied
                  ? "element_occupied_true"
                  : "element_occupied_false"
              }`}
            >
              <input type="checkbox" /> {hour.hour} {apm}
            </li>
          ))}
        </ListHours>
      </Fragment>
    );
  };

  return (
    <div>
      {coupon ? (
        <ContainerCoupon>
          <form
            onSubmit={handleAddCredits}
            className="col-sm-3 m-auto bg-white"
          >
            <button
              type="button"
              onClick={() => setCoupon(false)}
              className="closeBox bg-danger"
            >
              X
            </button>

            <h4 className="p-2">Consigue créditos adicionales!</h4>
            <div className="form-group">
              <input
                placeholder="Introduce el cupón que desea canjear"
                className="form-control"
                type="text"
                value={numberCoupon}
                onChange={(e) => setNumberCoupon(e.target.value)}
              />
            </div>

            <div className="form-group text-center">
              <button type="submit" className="btn btn-success">
                APLICAR
              </button>
            </div>
          </form>
        </ContainerCoupon>
      ) : null}
      <form onSubmit={handleCreateSchedule} className="mt-5">
        <div className="form-row m-b-25 d-flex justify-content-center align-items-center">
          <div className="name col-sm-4 text-center text-right">
            <p style={{ textAlign: "right" }}>
              Seleccione fecha y hora de la reserva
            </p>
          </div>

          <div className="value col-sm-3">
            <div className="col-sm-4 mr-auto">
              <div className="row input-date">
                <div className="row">
                  <input
                    className="date-input"
                    type="date"
                    name="dateSelected"
                    value={dateSelected}
                    onChange={handleUpdateDate}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8 col-md-12 m-auto">
          {credits <= 0 ? (
            <div className="row">
              <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
                <p
                  className="alert alert-danger text-center"
                  style={{ width: "100%", height: "100%", fontSize: "13px" }}
                >
                  Ya utilizó el tiempo máximo de hoy
                </p>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col-3">
                <button
                  type="button"
                  onClick={() => setCoupon(true)}
                  className="btn btn-info"
                  style={{ width: "100%", height: "100%", fontSize: "13px" }}
                >
                  APLICAR CUPÓN
                </button>
              </div>
            </div>
          ) : (
            <div></div>
          )}
          {dateSelected ? (
            <div className="pt-4 mb-4">
              <button
                className="btn btn-block btn-success col-6 m-auto"
                type="submit"
              >
                RESERVAR
              </button>
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <div className=" col-lg-8 col-md-12 m-auto">
          {dateSelected ? (
            <div className="row">
              <div className="col-sm-6 col-md-4 mt-5">
                {ListHoursTime(early.concat(morning), "Turno Mañana", "AM")}
              </div>

              <div className="col-sm-6 col-md-4 mt-5">
                {ListHoursTime(afternoon, "Turno tarde", "PM")}
              </div>

              <div className="col-sm-6 col-md-4 mt-5">
                {ListHoursTime(night, "Turno noche", "PM")}
              </div>
            </div>
          ) : credits <= 0 ? (
            <p className="alert alert-warning text-center mt-3">
              Adquiera un nuevo paquete de créditos para continuar con el
              servicio
            </p>
          ) : (
            <p className="alert alert-warning text-center mt-3">
              Seleccione una fecha
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateSchedule;
