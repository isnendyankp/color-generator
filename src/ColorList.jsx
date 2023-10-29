import React from 'react'
import SingleColor from './SingleColor'
import { nanoid } from 'nanoid';

const ColorList = ({ colors }) => {
  return (
    <section className='colors'>
      {colors.map((colors, index) => {
        return <SingleColor colors={colors} index={index} />
      })}
    </section>
  );
};

export default ColorList

// Progress:
// - s7-224: Create ColorList component
// - s7-227: pass in colors state
// - s7-227: Create colors section with className colors
// - s7-227: map over colors state
// - s7-227: return colors state
// - s7-227: import SingleColor component
// - s7-227: return SingleColor component
// - s7-227: pass in colors prop
// - s7-227: add second parameter(index) to map function
// - s7-227: pass in index prop
// - s7-227: import nanoid