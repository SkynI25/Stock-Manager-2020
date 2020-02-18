// const generateRandomJson = require('./random_json.js');
import { generateRandomJson, prettyPrintJson } from "./random_json.js";

let INFINITE_NUM = 2500;
onload = () => {
    for(let i = 0; i < INFINITE_NUM; i++) {
        let json = generateRandomJson(3);
        setTimeout(() => {
            document.getElementById('content').innerHTML = prettyPrintJson(json);
        }, 1000 * i);
    }
}