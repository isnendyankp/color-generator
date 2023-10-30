import React from 'react'

const SingleColor = ({ index, color }) => {
  const { hex, weight } = color
  return (
    <div>SingleColor</div>
  )
}

export default SingleColor

// progress:
// - s7-224: Create SingleColor component
// - s7-227: pass in index prop
// - s7-227: pass in color prop
// - s7-227: destructure hex and weight from color prop