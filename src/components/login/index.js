import React, { useEffect, useState } from 'react'
import { Form, Button, Card, Select, Avatar, Divider, Row, Col, Spin } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import { connect } from 'react-redux'
import { handleGetUsers, handleSetAuthUser } from '../../actions/user/UserAction'
import { handleGetQuestions } from '../../actions/questions/QuestionAction'
import { useHistory } from 'react-router'

function Login (props) {
    const [loading, setLoading] = useState(true)
    const {users, handleGetUsers, handleSetAuthUser, handleGetQuestion} = props
    const history = useHistory()
    const onFinish = (values) => {
        handleSetAuthUser(values.username)
        // history.push('/home')
    }

    useEffect(() => {
        function fetchUser() {
            handleGetUsers().then(() => {
                setLoading(false)
            })
            handleGetQuestion()
        }
        fetchUser()
    },[])

    return (
        <Row justify={'center'} align={'middle'}>
            <Col span={6}>
                <Spin spinning={loading}>
                    <Card style={{ marginTop: '100px' }}>
                        <div align={'center'}>
                            <Avatar size={50} style={{ background: '#1890ff' }} icon={<UserOutlined />}/>
                        </div>
                        <Divider/>
                        <Form layout={'vertical'} onFinish={onFinish}>
                            <Form.Item
                                label="Select a user"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Choose user!',
                                    },
                                ]}>
                                <Select placeholder={'Select a user'} style={{ width: '100%' }} allowClear>
                                    {
                                        !loading &&
                                        Object.keys(users).map((user) => (
                                            <Select.Option key={users[user].id} value={users[user].id}>{users[user].name}</Select.Option>
                                        ))
                                    }

                                </Select>
                            </Form.Item>
                            <Form.Item>
                                <Button block type="primary" htmlType="submit">
                                    LOGIN
                                </Button>
                            </Form.Item>
                        </Form>
                    </Card>
                </Spin>
            </Col>
        </Row>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users
    }
}

const mapDispatchToProps =  (dispatch) => {
    return {
        handleSetAuthUser: (id) => dispatch(handleSetAuthUser(id)),
        handleGetUsers: () => dispatch(handleGetUsers()),
        handleGetQuestion: () => dispatch(handleGetQuestions()),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
