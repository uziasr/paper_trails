import axiosWithAuth from "../utils/axiosWithAuthorization"

export const GET_PROJECTS_START = "GET_PROJECTS_START"
export const GET_PROJECTS_SUCCESS = "GET_PROJECTS_SUCCESS"
export const GET_PROJECTS_FAIL = "GET_PROJECTS_FAIL"

export const GET_PROJECTS_BY_ID_START = "GET_PROJECTS_BY_ID_START"
export const GET_PROJECTS_BY_ID_SUCCESS = "GET_PROJECTS_BY_ID_SUCCESS"
export const GET_PROJECTS_BY_ID_FAIL = "GET_PROJECTS_BY_ID_FAIL"

export const POST_PROJECT_START = "POST_PROJECT_START"
export const POST_PROJECT_SUCCESS = "POST_PROJECT_SUCCESS"
export const POST_PROJECT_FAIL = "POST_PROJECT_FAIL"

export const POST_CATEGORY_START = "POST_CATEGORY_START"
export const POST_CATEGORY_SUCCESS = "POST_CATEGORY_SUCCESS"
export const POST_CATEGORY_FAIL = "POST_CATEGORY_FAIL"

export const POST_LINK_START = "POST_LINK_START"
export const POST_LINK_SUCCESS = "POST_LINK_SUCCESS"
export const POST_LINK_FAIL = "POST_LINK_FAIL"


export const getProjects = () => dispatch => {
    dispatch({ type: GET_PROJECTS_START })
    axiosWithAuth().get("/projects/all")
        .then(res => {
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

export const postProject = (project) => dispatch => {
    dispatch({ type: POST_PROJECT_START })
    axiosWithAuth().post("/projects", project)
        .then(res => dispatch({ type: POST_PROJECT_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: POST_PROJECT_FAIL, payload: err }))
}

export const postCategory = (projectID, category) => dispatch => {
    dispatch({ type: POST_CATEGORY_START })
    axiosWithAuth().post(`/category/${projectID}`, category)
        .then(res => dispatch({ type: POST_CATEGORY_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: POST_CATEGORY_FAIL, payload: err }))
}

export const postLink = (categoryID, link) => dispatch => {

    dispatch({ type: POST_LINK_START })
    axiosWithAuth().post(`/links/${categoryID}`, link)
        .then(res => dispatch({ type: POST_LINK_SUCCESS, payload: res.data }))
        .catch(err => dispatch({ type: POST_LINK_FAIL, payload: err }))
}