import React from 'react'
import PropTypes from 'prop-types'
import { Layout } from 'antd';
import Navs from './navs'
import Previous from './previous'
import Store from '../../utils/store'

const { Content } = Layout;

function BaseLayout(props) {
    const state = Store.getState()
    const {authUser, users} = state.usersReducer
    const user = users[authUser];
    const {children} = props
    return (
        <Layout className="layout">
            <Navs avatar={user.avatarURL} name={user.name}/>
            <Content style={{ padding: '0 50px', minHeight: 600 }}>
                { window.location.pathname !== '/home' && <Previous/> }
                {children}
            </Content>
        </Layout>
    )
}

export default BaseLayout
BaseLayout.propTypes = {
    children: PropTypes.node.isRequired
}
