import React from 'react'
import Content from '../components/Content'
import PageHeader from '../components/PageHeader'
import { TwitterTimelineEmbed } from 'react-twitter-embed';
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
        </div>
      <div className='twittercontainer'>
        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="malditoperromx"
            options={{width: 450, height: 1500, margin: 20,}}
            noScrollbar
        />
      </div>

      </div>
    </main>
  )
}
