import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { withTranslate } from 'react-redux-multilingual';
import * as actions from '../../actions';
import SignInForm from './SignInForm';
import SignInWithOthers from './SignInWithOthers';

class SignIn extends Component {
  componentDidMount() {
    this.props.removeAuthError();
  }
  render() {
    const { translate } = this.props;

    return (
      <div className='container'>
        {/* <!-- Outer Row --> */}
        <div className='row justify-content-center'>
          <div className='col-xl-10 col-lg-12 col-md-9'>
            <div className='card o-hidden border-0 shadow-lg my-5'>
              <div className='card-body p-0'>
                {/* <!-- Nested Row within Card Body --> */}
                <div className='row'>
                  <div className='col-lg-6 d-none d-lg-block bg-login-image'></div>
                  <div className='col-lg-6'>
                    <div className='p-5'>
                      <div className='text-center'>
                        <h1 className='h4 text-gray-900 mb-4'>
                          {translate('Login')}
                        </h1>
                      </div>
                      <SignInForm />
                      <hr />
                      <SignInWithOthers />
                      <Link
                        to='/signup'
                        className='mt-5 btn btn-user btn-block btn-yellow'
                      >
                        {translate('Signup')}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(withTranslate(SignIn));
