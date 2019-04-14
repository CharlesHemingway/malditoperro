import React from 'react'
import _sortBy from 'lodash/sortBy'

//import PageHeader from '../components/PageHeader'
import PostCategoriesNav from '../components/PostCategoriesNavguias'
import PostSection from '../components/PostSectionguias'

import './Guias.css'

export default ({
  fields,
  postsguias = [],
  postCategoriesguias = [],
  showFeatured = true
}) => {
  //const { title, subtitle, featuredImage } = fields
  postsguias = _sortBy(postsguias, ['date']).reverse()

  return (
    <main className='Guias'>
      {!!postCategoriesguias.length && (
        <PostCategoriesNav categories={postCategoriesguias} />
      )}

      {!!postsguias.length && <PostSection posts={postsguias} />}
    </main>
  )
}
