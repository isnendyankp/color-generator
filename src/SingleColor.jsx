import React from 'react'
import { toast } from 'react-toastify'

const SingleColor = ({ index, color }) => {
  const { hex, weight } = color
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        navigator.clipboard.writeText();
      }
    } else {
      toast.error('Clipboard access not available');
    }
  }
  return (
    <article
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ backgroundColor: `${hex}` }}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
    </article>
  );
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
// - s7-227: add index condition to className color
// - s7-227: add onClick event with pass in saveToClipboard function
// - s7-227: define saveToClipboard function with base async
// - s7-227: check navigator.clipboard with if statement
// - s7-227: add base else statement
// - s7-227: check toast.error with message @else statement
// - s7-227: add try with navigator.clipboard.writeText @if statement
