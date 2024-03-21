import React from 'react'
import './Breadcrumb.css'
import arrowIcon from '../Assets/breadcrum_arrow.png'

export const Breadcrumb = (props) => {
  const {product} = props;
  return (
    <div className='breadcrumb'>
      HOME <img src={arrowIcon} alt="" /> SHOP <img src={arrowIcon} alt="" /> {product.category} <img src={arrowIcon} alt="" /> {product.name}
    </div>
  )
}
