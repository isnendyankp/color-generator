import { useState } from 'react';

const Form = ({ addColor }) => {
  const [color, setColor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color);
  };
  return (
    <section className="container">
      <h4>color generator</h4>
      <form className="color-form" onSubmit={handleSubmit}>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <input
          type="text"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder="#f15025"
        />
        <button className="btn" type="submit" style={{ background: color }}>
          submit
        </button>
      </form>
    </section>
  );
};
export default Form;

// Progress:
// - s7-224: Create Form component
// - s7-224: Create color state
// - s7-224: Create handleSubmit function for form
// - s7-224: Create form element
// - s7-224: fix h4 tag
// - s7-224: add value with pass in color state @input form
// - s7-224: add onChange event @input form
// - s7-224: add placeholder @input form
// - s7-224: add className container @section
// - s7-224: add className color-form @form
// - s7-224: add onSubmit event with pass in handleSubmit @form
// - s7-224: create button element @form
// - s7-224: pass in addColor function to Form component
// - s7-224: add preventDefault to handleSubmit function
// - s7-224: pass in addcolor(color) to handleSubmit function
