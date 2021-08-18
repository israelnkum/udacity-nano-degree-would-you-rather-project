import React from 'react'
import PropTypes from 'prop-types'
import { Avatar, Card, List } from 'antd'
import { getPercentage } from '../../utils/helpers'

function AnsweredQuestion(props){

    const {author, avatarURL, question, chosen} = props
    const optionOneVotes = question.optionOne.votes.length
    const optionTwoVotes = question.optionTwo.votes.length
    const totalVotes = optionOneVotes + optionTwoVotes
    console.log(question)
    return (
        <Card title={'Would you rather?'} extra={author}>
            <Card.Meta
                avatar={<Avatar shape={'square'} size={80} src={avatarURL} />}
                description={
                    <List>
                        <List.Item style={{ border: chosen === 'OptionOne' && 'solid gray 1px', padding: 10}}>
                            <List.Item.Meta title={question.optionOne.text} description={getPercentage(optionOneVotes, totalVotes)}/>
                            <div>
                                {optionOneVotes}/{totalVotes} votes
                            </div>
                        </List.Item>
                        <List.Item style={{ border: chosen === 'OptionTwo' && 'solid gray 1px', padding: 10}}>
                            <List.Item.Meta title={question.optionTwo.text} description={getPercentage(optionTwoVotes, totalVotes)}/>
                            <div>
                                {optionTwoVotes}/{totalVotes} votes
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
    chosen: PropTypes.string.isRequired,
}
