import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Avatar, Button, Card, Radio, Spin } from 'antd'
import { useDispatch } from 'react-redux'
import { handleCastVote } from '../../actions/common'
import { useHistory } from 'react-router'

function UnansweredQuestion(props){
    const [voting, setVoting] = useState(false)
    const dispatch = useDispatch()
    const history = useHistory()
    const [answer, setAnswer] = useState('')

    const {author, avatarURL, question, authUser} = props
    const handleChange = (e) => {
        const text = e.target.value
        setAnswer(text)
    }
    const handleVote = () => {
        const data = {
            authedUser: authUser,
            qid: question.id,
            answer: answer
        }
        setVoting(true)
        dispatch(handleCastVote(data)).then(() => {
            history.push(`/questions/${question.id}`)
        })
    }
    return (
        <Spin spinning={voting}>
            <Card
                title={author}
                actions={[
                    <Button disabled={answer === ''} onClick={handleVote}>Vote</Button>
                ]}>

                <Card.Meta
                    title={'Would you rather?'}
                    avatar={<Avatar shape={'square'} size={80} src={avatarURL} />}
                    description={
                        <Radio.Group onChange={handleChange} optionType={'button'}>
                            <Radio value={'optionOne'}>{question.optionOne.text}</Radio>
                            <br/>
                            <Radio value={'optionTwo'}>{question.optionTwo.text}</Radio>
                        </Radio.Group>

                    }
                />
            </Card>
        </Spin>
    )
}

export default UnansweredQuestion

UnansweredQuestion.propTypes = {
    question: PropTypes.object.isRequired,
    avatarURL: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    authUser: PropTypes.string.isRequired,
}
