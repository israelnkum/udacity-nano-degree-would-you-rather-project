import { Types } from './Types'
import { getInitialData } from '../../utils/api'

export function getUsers (users) {
    return {
        type: Types.GET_USERS,
        users
    }
}

export const handleGetUsers = () => (dispatch) => {
    return getInitialData().then(({ users }) => {
        dispatch(getUsers(users))
    })
}

export function setAuthUser(id) {
    return {
        type: Types.SET_AUTH_USER,
        id
    }
}

export function addUserQuestion(id) {
    return {
        type: Types.ADD_USER_QUESTION,
        id
    }
}
export function logout() {
    return {
        type: Types.LOGOUT
    }
}

export const handleLogout = () => (dispatch) => {
    return dispatch(logout())
}

export const handleAddUserQuestion = (id) => (dispatch) => {
    return dispatch(addUserQuestion(id))
}

export const handleSetAuthUser = (id) => (dispatch) => {
    return new Promise((resolve, reject) => {
        dispatch(setAuthUser(id))
        resolve()
    })
}


export function addAnswer(payload) {
    return {
        type: Types.SET_USER_ANSWER,
        payload
    }
}
