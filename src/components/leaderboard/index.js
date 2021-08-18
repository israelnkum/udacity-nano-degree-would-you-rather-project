import React  from 'react'
import BaseLayout from '../layout'
import { Avatar, Card, Col, Row, Space, Typography } from 'antd'
import { connect } from 'react-redux'
function Leaderboard(props) {
    const { users } = props

    const sorted = Object.values(users).sort((a, b) => {
        const sumA = Object.keys(a.answers).length + a.questions.length
        const sumB = Object.keys(b.answers).length + b.questions.length
        return (sumB - sumA)
    })

    return (
        <BaseLayout>
            <Row align={'middle'} justify={'center'} gutter={[10, 10]}>
                {
                    sorted.map(user => (
                        <Col span={24} key={user.id}>
                            <div align={'center'}>
                                <Card
                                    title={user.name}
                                    style={{width: 500, textAlign: 'left'}}>
                                    <Card.Meta
                                        avatar={<Avatar size={70} src={user.avatarURL}/>}
                                        description={
                                            <Space size={'large'}>
                                                <div>
                                                    <Typography.Text style={{ width: '100%'}}>
                                                        Questions Asked:  {user.questions.length}
                                                    </Typography.Text>
                                                    <br/>
                                                    <Typography.Text style={{ width: '100%'}}>
                                                        Answered Question: {Object.keys(user.answers).length}
                                                    </Typography.Text>
                                                </div>
                                                <Card title={'Total'} size={'small'}>
                                                    <div align={'center'}>
                                                        {Object.keys(user.answers).length + user.questions.length}
                                                    </div>
                                                </Card>
                                            </Space>
                                        }
                                    />
                                </Card>
                            </div>
                        </Col>
                    ))
                }

            </Row>
        </BaseLayout>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.usersReducer.users
    }
}

export default connect(mapStateToProps)(Leaderboard)
