import React from 'react'
import { Route, Switch } from 'react-router-dom'
import '../App.css'
import 'antd/dist/antd.css'
import Login from './login'
import { connect } from 'react-redux'
import Home from './home'
import QuestionDetail from './questions/questionDetail'
import NewQuestion from './questions/newQuestion'
import Leaderboard from './leaderboard'
import NoPageFound from './404'

function App(props) {
    const { authUser } = props
    return (
        <div>
            { authUser === null ?
                <Route path={'/'}>
                    <Login/>
                </Route>:
                <Switch>
                    <Route path={['/', '/home']} exact component={Home}/>
                    <Route path={'/add'} exact component={NewQuestion}/>
                    <Route path={'/leaderboard'} exact component={Leaderboard}/>
                    <Route path={'/questions/:question_id'} exact component={QuestionDetail}/>
                    <Route path={'*'} exact component={NoPageFound} />
                </Switch>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return {
        authUser: state.usersReducer.authUser
    }
}

export default connect(mapStateToProps)(App)
