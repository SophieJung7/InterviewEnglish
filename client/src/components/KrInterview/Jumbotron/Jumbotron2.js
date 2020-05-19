import React from 'react';
import { Link } from 'react-router-dom';

const Jumbotron2 = () => {
  return (
    <header className="masthead-2 d-flex align-items-center">
      <div className="container">
        <div className="row d-flex justify-content-center">
          {/* <div className="col-4 d-none d-sm-block"></div> */}
          <div className="col-10 intro-text d-none d-sm-block">
            <div className="intro-text-bg" style={{ fontFamily: '궁서체' }}>
              코로나사태의 채용악화로 저희 인터뷰온에서는 이력서/자소서를 무료로
              첨삭하고 있습니다. 지금 신청하세요!
            </div>
          </div>
          <div className="col-11 intro-text d-block d-sm-none">
            <div className="intro-text-bg" style={{ fontFamily: '궁서체' }}>
              코로나사태의 채용악화로 저희 인터뷰온에서는 이력서/자소서를 무료로
              첨삭하고 있습니다. 지금 신청하세요!
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <Link
              to="/consulting"
              className="btn btn-solid mt-5"
              style={{
                fontSize: '1.2rem',
                border: 'none',
                backgroundImage:
                  'linear-gradient(50deg, #4df6c0 50%, transparent 50%)',
              }}
            >
              무료첨삭 신청하기
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Jumbotron2;
