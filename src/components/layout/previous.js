import React from 'react'
import { PageHeader, Typography } from 'antd'
import { useHistory } from 'react-router'

function Previous() {
    const history = useHistory()
    return (
        <PageHeader
            onBack={() => history.push('/home')}
            title={<Typography.Text style={{cursor: 'pointer'}} onClick={() =>  history.push('/home')}>Go Back</Typography.Text>}
        />
    )
}

export default Previous
