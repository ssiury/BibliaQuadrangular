import axios from "axios";

//https://www.abibliadigital.com.br/api/verses/ra/sl/23

const api = axios.create({
    baseURL: "https://www.abibliadigital.com.br/api/"

})

export default api