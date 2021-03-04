
const customerIsLogued = (path = '/dashboard', logued, history) => {
    if(logued) {
        history.push(path) 
    }
}

export {
    customerIsLogued
}