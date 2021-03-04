import serviceAxios from "./serviceAxios";


const tokenAuth = (token) => {
    if(token) {
        serviceAxios.defaults.headers.common['x-auth-token'] = token;
    } else {
        delete serviceAxios.defaults.headers.common['x-auth-token'];
    }
}
 
export default tokenAuth;