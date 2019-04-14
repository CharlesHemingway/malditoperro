import React from 'react'
import _sortBy from 'lodash/sortBy'

//import PageHeader from '../components/PageHeader'
import PostCategoriesNav from '../components/PostCategoriesNav'
import PostSection from '../components/PostSection'

import './Reportes.css'

export default ({
  fields,
  posts = [],
  postCategories = [],
  showFeatured = true
}) => {
  //const { title, subtitle, featuredImage } = fields
  posts = _sortBy(posts, ['date']).reverse()

  return (
    <main className='Reportes'>
      {!!postCategories.length && (
        <PostCategoriesNav categories={postCategories} />
      )}

      {!!posts.length && <PostSection posts={posts} />}
    </main>
  )
}
