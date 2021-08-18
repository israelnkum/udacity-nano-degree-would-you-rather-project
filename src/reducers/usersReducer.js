import { Types } from '../actions/user/Types'

const initialState = {
    users: {},
    authUser: null
}

export default function usersReducer (state = initialState, action){
    switch (action.type){
        case Types.GET_USERS:
            return { ...state, users: action.users }

        case Types.SET_AUTH_USER:
            return { ...state, authUser: action.id }

        case Types.ADD_USER_QUESTION:
            const authUser = state.users[state.authUser]
            authUser.questions.push(action.id)
            return {
                ...state,
                users: {
                    ...state.users, [state.authUser]: authUser
                }
            }

        case Types.SET_USER_ANSWER:
            const user = state.users[action.payload.authedUser]
            user.answers = { ...user.answers, [action.payload.qid] : action.payload.answer }
            return {
                ...state,
                users: {
                    ...state.users, [action.payload.authedUser]: user
                }
            }

        case Types.LOGOUT:
            return {
                authUser: null
            }

        default:
            return state
    }
}
