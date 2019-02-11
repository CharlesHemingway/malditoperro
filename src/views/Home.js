import React from 'react'
import Content from '../components/Content'
import PageHeader from '../components/PageHeader'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import './Home.css'

export default ({ fields }) => {
  const { title, subtitle, featuredImage, body } = fields
  return (
    <main className='Home'>
      <PageHeader
        large
        title={title}
        subtitle={subtitle}
        backgroundImage={featuredImage}
      />



      <div className='section'>
        <div className='container'>
          <Content source={body} />

           

        

        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="malditoperromx"
            options={{height: 400}}
            noScrollbar
        />
        </div>

      </div>
    </main>
  )
}
