import React from 'react'
import { Avatar, Button, Col, Layout, Menu, Row, Space, Typography } from 'antd'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { handleLogout } from '../../actions/user/UserAction'

const { Header } = Layout;

function Navs (props){
    const {name, avatar, handleLogout} = props

    const logout = () => {
      handleLogout()
    }
    return (
        <Header>
            <Row>
                <Col span={6}>
                    <div className="logo">
                        WouldYouRather
                    </div>
                </Col>
                <Col span={10}>
                    <Menu theme="dark" mode="horizontal" >
                        <Menu.Item key={'home'}>
                            <Link to={'/home'}>Home</Link>
                        </Menu.Item>
                        <Menu.Item key={'add'}>
                            <Link to={'/add'}>Add</Link>
                        </Menu.Item>
                        <Menu.Item key={'leader-board'}>
                            <Link to={'/leaderboard'}>Leader Board</Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col span={6}>
                    <Space>
                        <h4 style={{ color: '#fff'}}>Hi {name}</h4>
                        <Avatar src={avatar}/>
                        <Button onClick={() => handleLogout()} style={{ color: '#fff'}} type={'text'}>LOGOUT</Button>
                    </Space>
                </Col>
            </Row>
        </Header>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleLogout: () => dispatch(handleLogout())
    }
}
export default connect(null, mapDispatchToProps)(Navs)

Navs.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
}
