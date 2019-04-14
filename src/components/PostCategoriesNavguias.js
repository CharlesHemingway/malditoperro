import React from 'react'
import { NavLink } from 'react-router-dom'

import { slugify } from '../util/url'
import './PostCategoriesNav.css'

const PostCategoriesNavguias = ({ categories }) => (
  <div className='container'>
    <div className='PostCategoriesNav'>
      <NavLink className='NavLink' exact to={`/guias/`}>
        Todo
      </NavLink>
      {categories.map((category, index) => (
        <NavLink
          className='NavLink'
          key={category.title + index}
          to={`/guias/category/${slugify(category.title)}/`}
        >
          {category.title}
        </NavLink>
      ))}
    </div>
  </div>
)

export default PostCategoriesNavguias
