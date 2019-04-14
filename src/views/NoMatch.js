import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './NoMatch.css'

const NoMatch = ({ siteUrl }) => (
  <div className='NoMatch'>
    <section className='section thick'>
      <div className='container taCenter'>
        <h1>Coming Soon</h1>
        <p>
          Yikes, this page is currently under construction. Come back later!<br />Head back to{' '}
          <a href={siteUrl}>
            {siteUrl.replace(/(^https?:\/\/)/, '').replace(/\/$/, '')}
          </a>
        </p>
      </div>
    </section>
    <Helmet>
      <title>Coming Soon</title>
      <body className='body--NoMatch' />
    </Helmet>
  </div>
)

NoMatch.propTypes = {
  siteUrl: PropTypes.string.isRequired
}

export default NoMatch
