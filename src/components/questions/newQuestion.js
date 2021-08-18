import React, { useState } from 'react'
import { Button, Card, Col, Divider, Input, Row, Typography } from 'antd'
import BaseLayout from '../layout'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../../actions/questions/QuestionAction'
import { useHistory } from 'react-router'
function NewQuestion(props){
    const [adding, setAdding] = useState(false)
    const history = useHistory()
    const [optionOne, setOptionOne] = useState('')
    const [optionTwo, setOptionTwo] = useState('')

    const {author} = props

    const handleOptionOneChange = (e) => {
        const text = e.target.value
        setOptionOne(text)
    }

    const handleOptionTwoChange = (e) => {
        const text = e.target.value
        setOptionTwo(text)
    }

    const handleSubmitQuestion = (e) => {
        setAdding(true)
        e.preventDefault()
        const question = {
            author: author,
            optionOneText: optionOne,
            optionTwoText: optionTwo
        }
        props.handleAddQuestion(question).then(() => {
            setAdding(false)
            history.push('/home')
        })
    }

    return (
        <BaseLayout>
            <Row align={'middle'} justify={'center'}>
                <Col>
                    <Card title={'Would you rather?'} style={{ width: 500}}>
                        <form onSubmit={handleSubmitQuestion}>
                            <label>Option 1</label>
                            <Input onChange={handleOptionOneChange}/>
                            <Divider>
                                <Typography.Text>OR</Typography.Text>
                            </Divider>
                            <label>Option 2</label>
                            <Input onChange={handleOptionTwoChange}/>
                            <div align={'center'} style={{marginTop: 10}}>
                                <Button loading={adding} htmlType={'submit'} disabled={
                                    optionOne === '' || optionTwo === ''
                                    || (optionOne.toLowerCase() === optionTwo.toLowerCase())}>
                                    Submit
                                </Button>
                            </div>
                        </form>
                    </Card>
                </Col>
            </Row>
        </BaseLayout>
    )
}

const mapStateToProps = (state) => {
    return {
        author: state.usersReducer.authUser
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleAddQuestion: (question) => dispatch(handleAddQuestion(question))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewQuestion)
