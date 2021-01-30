import React, {useEffect, useState} from 'react';
import {Navbar} from './components/navbar';
import {TodoPage} from './pages/Todos_page';
import {AboutPage} from './pages/About_page';
import {BrowserRouter,Switch,Route} from 'react-router-dom'



const App: React.FC = () => {

    return (
        <BrowserRouter>
            <Navbar/>
            <div className="container">
                <Switch>
                 <Route component={TodoPage} path="/" exact/>
                 <Route component={AboutPage} path="/about" exact/>
                </Switch>

            </div>
        </BrowserRouter>

    );
}

export default App;
