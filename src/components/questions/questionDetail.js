import React  from 'react'
import { Col, Empty, Row } from 'antd'
import { useParams } from 'react-router'
import BaseLayout from '../layout'
import AnsweredQuestion from './answeredQuestion'
import UnansweredQuestion from './unansweredQuestion'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function QuestionDetail(props){
    const { users, authUser, questions } = props
    const { question_id } = useParams()
    const question = questions[question_id]
    if (question === undefined){
        return (
            <BaseLayout>
                <Empty description={'Oops! question not found.'}>
                    <Link to={'/home'}>View all questions</Link>
                </Empty>
            </BaseLayout>
        )
    }
    const checkOptionOne = question.optionOne.votes.indexOf(authUser);
    const checkOptionTwo = question.optionTwo.votes.indexOf(authUser);
    const answered = checkOptionOne >= 0 || checkOptionTwo >= 0

    let chosen = ''
    if (checkOptionOne >= 0){
        chosen = 'OptionOne'
    }else if(checkOptionTwo >= 0){
        chosen = 'OptionTwo'
    }
    return (
        <BaseLayout>
            <Row align={'top'} justify={'center'} gutter={[10, 10]}>
                <Col span={12} xs={24} sm={24} lg={12} md={12} xl={12}>
                    {
                        answered
                            ? <AnsweredQuestion
                                question={question}
                                avatarURL={users[question.author].avatarURL}
                                author={users[question.author].name}
                                chosen={chosen}
                            />
                            :<UnansweredQuestion
                                question={question}
                                avatarURL={users[question.author].avatarURL}
                                author={users[question.author].name}
                                authUser={authUser}
                            />

                    }

                </Col>
            </Row>
        </BaseLayout>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users,
        authUser: state.usersReducer.authUser,
        questions: state.questionsReducer.questions,
    }
}

export default connect(mapStateToProps)(QuestionDetail)
