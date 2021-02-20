import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CreateUser from './pages/CreateUser'
import Home from './pages/home'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/create-user" component={CreateUser}/>
            </Switch>
        </BrowserRouter>
    )
}