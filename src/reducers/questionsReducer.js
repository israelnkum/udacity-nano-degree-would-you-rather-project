import { Types } from '../actions/questions/Types'

const initialState = {
    questions: {}
}

export default function questionsReducer (state = initialState, action){
    switch (action.type){
        case Types.GET_QUESTIONS:
            return { ...state, questions: action.questions }

        case Types.ADD_QUESTION:
            return {
                ...state,
                questions: {
                    ...state.questions,
                    [action.question.id]: {
                        ...action.question
                    }
                }
            }
        case Types.CAST_VOTE:
            const question = state.questions[action.payload.qid]
            question[action.payload.answer] = {
                ...question[action.payload.answer],
                votes: question[action.payload.answer].votes.concat(action.payload.authedUser)
            }
            return {
                ...state,
                questions: {
                    ...state.questions, [action.payload.qid]: question
                }
            }
        default:
            return state
    }
}
