import React from 'react'
import SingleColor from './SingleColor'

const ColorList = ({ colors }) => {
  return (
    <section className='colors'>
      {colors.map((colors) => {
        
      })}
    </section>
  );
};

export default ColorList

// Progress:
// - s7-224: Create ColorList component
// - s7-224: pass in colors state
// - s7-225: Create colors section with className colors
// - s7-225: map over colors state
// - s7-225: return colors state
// - s7-225: import SingleColor component