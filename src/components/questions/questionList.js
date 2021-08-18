import React  from 'react'
import PropTypes from 'prop-types'
import { Avatar, Button, Card, Col, Empty, Row, Typography } from 'antd'
import Store from '../../utils/store'
import { useHistory } from 'react-router'

function QuestionList(props){
    const state = Store.getState()
    const history = useHistory()
    const { users } = state.usersReducer
    const {questions} = props

    questions.sort(function(x, y){
        return y.timestamp - x.timestamp;
    })

    const questionDetail = (questionId) => {
        history.push(`/questions/${questionId}`)
    }

    return (
        questions.length === 0 ?
            <Row align={'top'} justify={'center'}>
                <Empty description={'Oops! No Question Found'}/>
            </Row> :
            <Row align={'top'} justify={'left'} gutter={[10, 10]}>
                {
                    questions.map((question) => (
                        <Col span={12} xs={24} sm={24} lg={12} md={12} xl={12} key={question.id}>
                            <Card
                                title={'Asked By: ' + users[question.author].name}
                                extra={<Avatar size={50} src={users[question.author].avatarURL} />}
                                actions={[
                                    <Button onClick={() => questionDetail(question.id)}>View Poll</Button>
                                ]}>

                                <Card.Meta
                                    title={'Would you rather'}
                                    description={
                                        <Typography.Text>
                                            {question.optionOne.text} | {question.optionTwo.text}
                                        </Typography.Text>
                                    }
                                />
                            </Card>
                        </Col>
                    ))
                }
            </Row>
    )
}

export default QuestionList

QuestionList.propTypes = {
    questions: PropTypes.array.isRequired
}

QuestionList.defaultProps = {
    questions: [],
}
