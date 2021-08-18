import { Types } from './Types'
import { getInitialData, saveQuestion } from '../../utils/api'
import { handleAddUserQuestion } from '../user/UserAction'
export function getQuestions (questions) {
    return {
        type: Types.GET_QUESTIONS,
        questions
    }
}

export const handleGetQuestions = () => (dispatch) => {
    return getInitialData().then(({ questions }) => {
        dispatch(getQuestions(questions))
    })
}


export function castVote (payload){
    return {
        type: Types.CAST_VOTE,
        payload
    }
}

export function addQuestion (question){
    return {
        type: Types.ADD_QUESTION,
        question
    }
}

export const handleAddQuestion = (question) => (dispatch) => {
    return saveQuestion(question).then((ques) => {
        dispatch(addQuestion(ques))
        dispatch(handleAddUserQuestion(ques.id))
    })
}
