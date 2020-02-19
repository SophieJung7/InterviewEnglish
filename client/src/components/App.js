import React from 'react';
import { Router, Route } from 'react-router-dom';
import history from '../history';
import Landing from './Landing';
import SignUpForm from './SignIn/SignUpForm';
import MyPage from './MyPage/MyPage';

const App = () => {
    return (
        <div>
            <Router history={ history }>
                <div>
                    <Route exact path="/" component={ Landing } />
                    <Route exact path="/signup" component={ SignUpForm } />
                    <Route exact path="/mypage" component={ MyPage } />
                </div>
            </Router>
        </div>
    );
};

export default App;
