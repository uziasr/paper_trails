import {
    GET_PROJECTS_START,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_FAIL,
    GET_PROJECTS_BY_ID_START,
    GET_PROJECTS_BY_ID_SUCCESS,
    GET_PROJECTS_BY_ID_FAIL,
} from "./actions"

const initialState = {
    projects: [],
    fullProject: {
        project: null,
        projectId: null,
        description: null,
        categories: []
    },
    loading: false,
    errors: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case (GET_PROJECTS_START): {
            return {
                ...state,
                loading: true
            }
        }
        case (GET_PROJECTS_SUCCESS): {
            return {
                ...state,
                loading: false,
                projects: action.payload
            }
        }
        case (GET_PROJECTS_FAIL): {
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        }
        case (GET_PROJECTS_BY_ID_START): {
            return {
                ...state,
                loading: true
            }
        }
        case (GET_PROJECTS_BY_ID_SUCCESS): {
            return {
                ...state,
                loading: false,
                fullProject: action.payload,
            }
        }
        case (GET_PROJECTS_BY_ID_FAIL): {
            return {
                ...state,
                loading: false,
                err: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default reducer