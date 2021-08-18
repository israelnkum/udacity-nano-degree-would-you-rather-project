import { getInitialData, saveQuestionAnswer } from '../utils/api'
import { addAnswer, getUsers } from './user/UserAction'
import { castVote, getQuestions } from './questions/QuestionAction'


export function handleInitialData () {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(getUsers(users))
                dispatch(getQuestions(questions))
            })
    }
}

export const handleCastVote = (data) => (dispatch) => {
    return saveQuestionAnswer(data).then(() => {
        dispatch(castVote(data))
        dispatch(addAnswer(data))
    })
}
