import React  from 'react'
import PropTypes from 'prop-types'
import { Tabs } from 'antd'
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons'
import QuestionList from './questionList'

const { TabPane } = Tabs

function Questions(props){
    const {answers, allQuestions } = props
    const questions  = [];
    const unAnsweredQuestions  = [];

    Object.keys(allQuestions).filter(x => (
        Object.keys(answers).indexOf(x) === -1
            ? unAnsweredQuestions.push(allQuestions[x])
            : questions.push(allQuestions[x])
    ));

    return (
        <Tabs defaultActiveKey="unanswered-question">
            <TabPane tab={ <span> <AndroidOutlined /> Unanswered</span> } key="unanswered-question">
                <QuestionList questions={unAnsweredQuestions}/>
            </TabPane>
            <TabPane tab={<span><AppleOutlined /> Answered</span>} key="answered-question">
                <QuestionList questions={questions}/>
            </TabPane>
        </Tabs>
    )
}

export default Questions

Questions.propTypes = {
    askedQuestions: PropTypes.array.isRequired,
    allQuestions: PropTypes.object.isRequired,
    answers: PropTypes.object.isRequired,
}
