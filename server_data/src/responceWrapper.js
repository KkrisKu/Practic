/* eslint-disable no-undef */


const resWrapper = (body, code = 200, message = "success") => {
    return{
        status: code,
        body: body,
        message: message
    };


}

module.exports = resWrapper;