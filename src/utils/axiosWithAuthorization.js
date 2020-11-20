import axios from "axios"

const axiosWithAuthorization = () => {
    const token = localStorage.getItem("token") || ""
    const productionAPI = "https://papertrail1.herokuapp.com/"
    return axios.create({
        baseURL: productionAPI,
        headers: {
            'Content-Type': 'application/json',
            authorization: token
        }
    })
}

export default axiosWithAuthorization