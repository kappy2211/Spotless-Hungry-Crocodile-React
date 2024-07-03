import React, { useState } from 'react'

import PropTypes from 'prop-types'

import './features1.css'

const Features1 = (props) => {
  const [activeTab, setActiveTab] = useState(0)
  return (
    <div className="thq-section-padding">
      <div className="features1-container1 thq-section-max-width">
        <div className="features1-image-container">
          {activeTab === 0 && (
            <img
              alt={props.feature1ImgAlt}
              src={props.feature1ImgSrc}
              className="features1-image thq-img-ratio-16-9"
            />
          )}
          {activeTab === 1 && (
            <img
              alt={props.feature2ImgAlt}
              src={props.feature2ImgSrc}
              className="features1-image1 thq-img-ratio-16-9"
            />
          )}
          {activeTab === 2 && (
            <img
              alt={props.feature3ImgAlt}
              src={props.feature3ImgSrc}
              className="features1-image2 thq-img-ratio-16-9"
            />
          )}
        </div>
        <div className="features1-tabs-menu">
          <div
            onClick={() => setActiveTab(0)}
            className="features1-tab-horizontal"
          >
            <div className="features1-divider-container">
              {activeTab === 0 && <div className="features1-container2"></div>}
            </div>
            <div className="features1-content">
              <h2 className="thq-heading-2">{props.feature1Title}</h2>
              <span className="thq-body-small">
                {props.feature1Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className="features1-tab-horizontal1"
          >
            <div className="features1-divider-container1">
              {activeTab === 1 && <div className="features1-container3"></div>}
            </div>
            <div className="features1-content1">
              <h2 className="thq-heading-2">{props.feature2Title}</h2>
              <span className="thq-body-small">
                {props.feature2Description}
              </span>
            </div>
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className="features1-tab-horizontal2"
          >
            <div className="features1-divider-container2">
              {activeTab === 2 && <div className="features1-container4"></div>}
            </div>
            <div className="features1-content2">
              <h2 className="thq-heading-2">{props.feature3Title}</h2>
              <span className="thq-body-small">
                {props.feature3Description}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Features1.defaultProps = {
  feature2Description:
    'Filter search results based on location, availability, insurance accepted, and more.',
  feature3Title: 'Doctor Profiles',
  feature2ImgAlt: 'Filter Search Results',
  feature1ImgAlt: 'Search for Doctors',
  feature1ImgSrc:
    'https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk4MjM3MHw&ixlib=rb-4.0.3&q=80&w=1080',
  feature2Title: 'Advanced Filters',
  feature2ImgSrc:
    'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk4MjM3MXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature3ImgAlt: 'Doctor Profile Image',
  feature3Description:
    'View detailed profiles of doctors including their specialties, qualifications, and patient reviews.',
  feature3ImgSrc:
    'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxOTk4MjM2OXw&ixlib=rb-4.0.3&q=80&w=1080',
  feature1Description:
    'Easily search for doctors in your area and book appointments online.',
  feature1Title: 'Find the Right Doctor',
}

Features1.propTypes = {
  feature2Description: PropTypes.string,
  feature3Title: PropTypes.string,
  feature2ImgAlt: PropTypes.string,
  feature1ImgAlt: PropTypes.string,
  feature1ImgSrc: PropTypes.string,
  feature2Title: PropTypes.string,
  feature2ImgSrc: PropTypes.string,
  feature3ImgAlt: PropTypes.string,
  feature3Description: PropTypes.string,
  feature3ImgSrc: PropTypes.string,
  feature1Description: PropTypes.string,
  feature1Title: PropTypes.string,
}

export default Features1
