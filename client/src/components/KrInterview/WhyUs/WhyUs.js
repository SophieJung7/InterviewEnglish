import React from 'react';

const WhyUs = () => {
  return (
    <div className="container">
      <section className="blog blog-2 section-b-space ratio3_2">
        <div className="container">
          <div className="row mt-5">
            <div className="col">
              <div className="title1">
                <h4>Perfect Practice Makes Perfect</h4>
                <h2 className="title-inner1">
                  지독하게 준비하는 취준생들만 인터뷰온을 찾습니다.
                </h2>
                <hr />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="row mb-10">
        <div className="col-lg-6 mb-5 mb-lg-0 divider-right" data-aos="fade">
          <div className="testimonial p-5">
            <p className="testimonial-quote text-dark">
              연습이 완벽함을 만들지는 않는다. <br /> 완벽한 연습만이 <br />{' '}
              완벽함을 만들어낼 수 있다.
            </p>
            <div className="testimonial-name">빈스 롬바디</div>
            <div className="testimonial-position">
              미국 축구코치, 프로미식축구연맹(NFL) 이사
            </div>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade" data-aos-delay="100">
          <div className="testimonial p-5">
            <p className="testimonial-quote text-dark">
              2020년은 취직난이 가장 심할 것으로 예상됩니다. 따라서 전문가의
              도움이 어느 때보다 필요한 때입니다.
            </p>
            <div className="testimonial-name">박재원</div>
            <div className="testimonial-position">
              취업코치, 한국취업컨설팅협회 이사
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
