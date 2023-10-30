import React from 'react'

const SingleColor = ({ index, color }) => {
  const { hex, weight } = color
  return (
    <article 
    className='color'
    style={{ backgroundColor: `${hex}` }}
    >
      <p className='percent-value'>{weight}%</p>
      <p className='color-value'>{hex}</p>
    </article>
  )
}

export default SingleColor

// progress:
// - s7-224: Create SingleColor component
// - s7-227: pass in index prop
// - s7-227: pass in color prop
// - s7-227: destructure hex and weight from color prop
// - s7-227: Create article element with text SingleColor
// - s7-227: add className color to article element
// - s7-227: add inline style with backgroundColor property to article element
// - s7-227: add className percent-value to new p element
// - s7-227: add className color-value to new p element

