import axiosWithAuth from "../utils/axiosWithAuthorization"

export const GET_PROJECTS_START = "GET_PROJECTS_START"
export const GET_PROJECTS_SUCCESS = "GET_PROJECTS_SUCCESS"
export const GET_PROJECTS_FAIL = "GET_PROJECTS_FAIL"

export const GET_PROJECTS_BY_ID_START = "GET_PROJECTS_BY_ID_START"
export const GET_PROJECTS_BY_ID_SUCCESS = "GET_PROJECTS_BY_ID_SUCCESS"
export const GET_PROJECTS_BY_ID_FAIL = "GET_PROJECTS_BY_ID_FAIL"

export const getProjects = () => dispatch => {
    dispatch({ type: GET_PROJECTS_START })
    axiosWithAuth().get("/projects/all")
        .then(res => {
            console.log("this is res", res)
            dispatch({ type: GET_PROJECTS_SUCCESS, payload: res.data })
        })
        .catch(err => dispatch({ type: GET_PROJECTS_FAIL, payload: err }))
}

export const getProjectByID = (id) => dispatch => {
    dispatch({ type: GET_PROJECTS_BY_ID_START })
    axiosWithAuth().get(`projects/${id}`)
        .then(res => dispatch({ type: GET_PROJECTS_BY_ID_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: GET_PROJECTS_BY_ID_FAIL, payload: err }))
}