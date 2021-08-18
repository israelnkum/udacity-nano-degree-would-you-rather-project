import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Card, List } from 'antd'
import { getPercentage } from '../../utils/helpers'

function AnsweredQuestion(props){

    const {author, avatarURL, question, totalQuestions, chosen} = props
    const optionOneVotes = question.optionOne.votes
    const optionTwoVotes = question.optionTwo.votes
    return (
        <Card title={'Would you rather?'} extra={author}>
            <Card.Meta
                avatar={<Avatar shape={'square'} size={80} src={avatarURL} />}
                description={
                    <List>
                        <List.Item style={{ border: chosen === 'OptionOne' && 'solid gray 1px', padding: 10}}>
                            <List.Item.Meta title={question.optionOne.text} description={getPercentage(optionOneVotes.length, totalQuestions)}/>
                            <div>
                                {optionOneVotes.length}/{totalQuestions} votes
                            </div>
                        </List.Item>
                        <List.Item style={{ border: chosen === 'OptionTwo' && 'solid gray 1px', padding: 10}}>
                            <List.Item.Meta title={question.optionTwo.text} description={getPercentage(optionTwoVotes.length, totalQuestions)}/>
                            <div>
                                {optionTwoVotes.length}/{totalQuestions} votes
                            </div>
                        </List.Item>
                    </List>
                }
            />
        </Card>
    )
}

export default AnsweredQuestion

AnsweredQuestion.propTypes = {
    question: PropTypes.object.isRequired,
    avatarURL: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    totalQuestions: PropTypes.number.isRequired,
    chosen: PropTypes.string.isRequired,
}
