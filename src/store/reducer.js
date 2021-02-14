import {
    GET_PROJECTS_START,
    GET_PROJECTS_SUCCESS,
    GET_PROJECTS_FAIL,
    GET_PROJECTS_BY_ID_START,
    GET_PROJECTS_BY_ID_SUCCESS,
    GET_PROJECTS_BY_ID_FAIL,
    POST_PROJECT_START,
    POST_PROJECT_SUCCESS,
    POST_PROJECT_FAIL,
    POST_CATEGORY_START,
    POST_CATEGORY_SUCCESS,
    POST_CATEGORY_FAIL,
    POST_LINK_START,
    POST_LINK_SUCCESS,
    POST_LINK_FAIL,
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
                loading: true,
                errors: null
            }
        }
        case (GET_PROJECTS_SUCCESS): {
            return {
                ...state,
                loading: false,
                projects: action.payload.reverse()
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
                loading: true,
                errors: null
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
                errors: action.payload
            }
        }
        case (POST_PROJECT_START): {
            return {
                ...state,
                loading: true,
                errors: null
            }
        }
        case (POST_PROJECT_SUCCESS): {
            return {
                ...state,
                loading: false,
                projects: [action.payload, ...state.projects]
            }
        }
        case (POST_PROJECT_FAIL): {
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        }
        case (POST_CATEGORY_START): {
            return {
                ...state,
                loading: true,
                errors: null
            }
        }
        case (POST_CATEGORY_SUCCESS): {
            return {
                ...state,
                loading: false,
                fullProject: {
                    ...state.fullProject,
                    categories: [
                        ...state.fullProject.categories,
                        { ...action.payload, links: [] }
                    ]
                }
            }
        }
        case (POST_CATEGORY_FAIL): {
            return {
                ...state,
                loading: false,
                errors: action.payload
            }
        }
        case (POST_LINK_START): {
            return {
                ...state,
                loading: true,
                errors: null
            }
        }
        case (POST_LINK_SUCCESS): {
            // console.log(state.fullProject.categories)
            let b = {
                ...state,
                loading: false,
                fullProject: {
                    ...state.fullProject,
                    categories: state.fullProject.categories.map(category => {
                        // console.log("hello", action.payload.category_id, category.id, category)
                        if (action.payload.category_id === category.id) {
                            // console.log(action.payload)
                            return {
                                ...category, links: [...category.links, action.payload]
                            }
                        } else {
                            return category
                        }
                    })
                }
            }
            console.log(b)
            return b
        }
        case (POST_LINK_FAIL): {
            console.log("hello",action.payload)
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        }
        default: {
            return state
        }
    }
}

export default reducer