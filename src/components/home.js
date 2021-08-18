import React from 'react'
import BaseLayout from './layout'
import Questions from './questions'
import { connect } from 'react-redux'
function Home(props){
    const {authUser, users, questions} = props

    const user = users[authUser];

    return (
        <BaseLayout>
            <Questions
                askedQuestions={user.questions}
                answers={user.answers}
                allQuestions={questions}
            />
        </BaseLayout>
    )
}

const mapStateToProps = state => {
    return {
        users: state.usersReducer.users,
        authUser: state.usersReducer.authUser,
        questions: state.questionsReducer.questions,
    }
}

export default connect(mapStateToProps)(Home)
