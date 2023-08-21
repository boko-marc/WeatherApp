import axios from "axios";
const baseUrl = {
    serverProd: 'http://localhost:8080/api',
    local: '',
    serverTest: '',
}
export default axios.create({
    baseURL: baseUrl.serverProd,
    headers: {
        "Content-type": "application/json"
    }
});