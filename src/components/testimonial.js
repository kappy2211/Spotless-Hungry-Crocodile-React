import React from 'react'

import PropTypes from 'prop-types'

import './testimonial.css'

const Testimonial = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial-max-width thq-section-max-width">
        <div className="testimonial-container">
          <h2 className="thq-heading-2">{props.heading1}</h2>
          <span className="testimonial-text01 thq-body-small">
            {props.content1}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card">
                <div className="testimonial-container02">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial-image"
                  />
                  <div className="testimonial-container03">
                    <strong className="thq-body-large">
                      {props.author1Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author1Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text04 thq-body-small">
                  {props.review1}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card1">
                <div className="testimonial-container04">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial-image1"
                  />
                  <div className="testimonial-container05">
                    <strong className="thq-body-large">
                      {props.author2Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author2Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text07 thq-body-small">
                  {props.review2}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card2">
                <div className="testimonial-container06">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial-image2"
                  />
                  <div className="testimonial-container07">
                    <strong className="thq-body-large">
                      {props.author3Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author3Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text10 thq-body-small">
                  {props.review3}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div data-animated="true" className="thq-card testimonial-card3">
                <div className="testimonial-container08">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial-image3"
                  />
                  <div className="testimonial-container09">
                    <strong className="thq-body-large">
                      {props.author4Name}
                    </strong>
                    <span className="thq-body-small">
                      {props.author4Position}
                    </span>
                  </div>
                </div>
                <span className="testimonial-text13 thq-body-small">
                  {props.review4}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial.defaultProps = {
  author2Src:
    'https://images.unsplash.com/photo-1548783300-70b41bc84f56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk4MjM2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Src:
    'https://images.unsplash.com/photo-1578489758854-f134a358f08b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk4MjM2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  review4: 'User-friendly and efficient service!',
  heading1: 'Testimonials',
  author2Alt: 'Caregiver Jane Smith',
  author4Position: 'Senior Citizen',
  author4Name: 'Kunal',
  author3Position: 'Medical Professional',
  author1Position: 'Patient',
  author3Alt: 'Medical Professional Emily Johnson',
  review2: 'Highly recommended for caregivers!',
  author3Name: 'Sanjay',
  author1Alt: 'Patient John Doe',
  author2Position: 'Caregiver',
  author2Name: 'Gaurav',
  author1Src:
    'https://images.unsplash.com/photo-1506863530036-1efeddceb993?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk4MjM2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  content1:
    'I found the perfect doctor for my needs through this website. The search functionality is easy to use and the reviews helped me make an informed decision.',
  author1Name: 'Saurav',
  review3: 'Excellent tool for healthcare professionals!',
  author3Src:
    'https://images.unsplash.com/photo-1636041282610-781dc189e8fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk4MjM3MHw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'Senior Citizen David Brown',
  review1: 'Great platform for finding doctors!',
}

Testimonial.propTypes = {
  author2Src: PropTypes.string,
  author4Src: PropTypes.string,
  review4: PropTypes.string,
  heading1: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Position: PropTypes.string,
  author4Name: PropTypes.string,
  author3Position: PropTypes.string,
  author1Position: PropTypes.string,
  author3Alt: PropTypes.string,
  review2: PropTypes.string,
  author3Name: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Position: PropTypes.string,
  author2Name: PropTypes.string,
  author1Src: PropTypes.string,
  content1: PropTypes.string,
  author1Name: PropTypes.string,
  review3: PropTypes.string,
  author3Src: PropTypes.string,
  author4Alt: PropTypes.string,
  review1: PropTypes.string,
}

export default Testimonial
