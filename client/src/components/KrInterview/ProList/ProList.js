import React from 'react';
import { Link } from 'react-router-dom';
import ReviewBoard from '../ProPage/ReviewBoard';
import { FaExclamation } from 'react-icons/fa';

const pros = require('./professionals');

const renderPros = () => {
  return pros.map(
    (
      {
        name,
        photoName,
        reviewScore,
        numberOfReviews,
        ex1_short,
        ex2_short,
        ex3_short,
        ex4_short,
      },
      index
    ) => {
      return (
        <div key={index} className="col-sm-3 mb-3">
          <div className="category-wrapper px-3">
            <div>
              <img
                src={require(`../../../assets/photos/${photoName}.jpg`)}
                className="img-fluid blur-up lazyload bg-img"
                alt=""
              />
            </div>
            <p
              className="pb-1 mt-4"
              style={{ fontSize: '1.5rem', color: 'black' }}
            >
              {name}
            </p>
            <ReviewBoard
              reviewScore={reviewScore}
              numberOfReviews={numberOfReviews}
            />
            <ul className="category-link" style={{ textAlign: 'left' }}>
              <li>
                <p style={{ lineHeight: '1.5', fontSize: '0.95rem' }}>
                  {ex1_short}
                </p>
              </li>
              <li>
                <p style={{ lineHeight: '1.5', fontSize: '0.95rem' }}>
                  {ex2_short}
                </p>
              </li>
              <li>
                <p style={{ lineHeight: '1.5', fontSize: '0.95rem' }}>
                  {ex3_short}
                </p>
              </li>
              <li>
                <p style={{ lineHeight: '1.5', fontSize: '0.95rem' }}>
                  {ex4_short}
                </p>
              </li>
            </ul>

            <Link to={`/pro/${index}`} className="btn btn-outline">
              더 자세히보기
            </Link>
          </div>
        </div>
      );
    }
  );
};

const ProList = () => {
  return (
    <section className="blog blog-2 section-b-space ratio3_2">
      <div className="container">
        <div className="row mt-5">
          <div className="col">
            <div className="title1">
              <h4>InterviewOn Professionals</h4>
              <h2 className="title-inner1 introduce-pros">
                인터뷰온의 취업전문가들을 소개합니다.
              </h2>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row slide-4 category-m no-arrow">{renderPros()}</div>
      </div>
    </section>
  );
};

export default ProList;
