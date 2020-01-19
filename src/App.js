import React from 'react';
import './App.css';
import AppHeader from "./AppHeader";
import {Switch, Route, BrowserRouter} from "react-router-dom";
import Home from "./Home";
import Find from "./Find";
import Form from "./Form";
import Admin from "./Admin";


function App() {
    return (
        <div className="App">
            <div className="children">
                <BrowserRouter>
                    <AppHeader/>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/form" component={Form}/>
                        <Route path="/find" component={Find}/>
                        <Route path="/admin" component={Admin}/>
                    </Switch>
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
