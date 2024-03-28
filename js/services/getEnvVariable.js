//import { ajaxCall } from './../services/ajaxService.js'
//import { ajaxCall } from '/js/services/ajaxService.js'
import { ajaxCall } from './ajaxService.js'

function getEnviromentVariable(envVar) {
    return ajaxCall('GET', '/api/envVar.php', envVar);
    //return ajaxCall('GET', '/api/envVar/get.php', envVar);
}


export {
    getEnviromentVariable
};