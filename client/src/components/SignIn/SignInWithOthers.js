import React from 'react';
import { withTranslate } from 'react-redux-multilingual';
import naverLogo from '../../assets/logos/naver.svg';
import { FaGoogle } from 'react-icons/fa';

const SignInWithOthers = props => {
  const { translate } = props;
  return (
    <div>
      <div className='text-center mt-5 mb-4'>
        {translate('Sign_in_with_others')}
      </div>
      <div className='mb-5'>
        <a
          href='/auth/naver'
          style={{ color: 'white' }}
          className='btn btn-user btn-block btn-naver border-radius-zero'
        >
          <div className='d-flex align-items-center justify-content-center'>
            <img
              src={naverLogo}
              alt='Naver'
              viewBox='0 0 60 55'
              width='13'
              height='13'
              className='mr-2'
            />
            {translate('Sign_in_with_Naver')}
          </div>
        </a>
        <a
          href='/auth/google'
          style={{ color: 'white' }}
          className='btn btn-user btn-block btn-google border-radius-zero'
        >
          <div className='d-flex align-items-center justify-content-center'>
            <FaGoogle className='mr-2' />
            {translate('Sign_in_with_Google')}
          </div>
        </a>
      </div>
      <hr />
    </div>
  );
};

export default withTranslate(SignInWithOthers);
