import React from 'react'

const ColorList = ({ colors }) => {
  return (
    <section className='colors'>
      {colors.map(() => {

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