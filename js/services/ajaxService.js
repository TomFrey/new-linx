const DONE = 4;


function ajaxCall(method, url, data) {
    var promise = new Promise((resolve, reject) => {
        var request = new XMLHttpRequest();
        var jsonRequestData = JSON.stringify(data);
        var jsonResponseData;

        request.open(method, url, true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(jsonRequestData);
        console.log('Request: '+jsonRequestData);

        request.onreadystatechange = function () {
            if (request.readyState === DONE) {
                console.log('request.status: '+request.status);
                console.log(request.responseText);
                jsonResponseData = JSON.parse(request.responseText);
                if (request.status >= 200 && request.status < 400) {
                    resolve(jsonResponseData);
                } else {
                    const error = new Error('Http Response Code: ' + request.status + ', Message: ' + jsonResponseData.message);
                    error.jow_message = jsonResponseData.message;
                    reject(error);
                }
            }
        };
    });
    return promise;
}


export {
    ajaxCall
};
