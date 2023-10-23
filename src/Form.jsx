import React from 'react'

const Form = () => {
  const [color, setColor] = useState('')
  const handleSubmit = (e) => {

  };
  return (
    <section>
      <h4>color generator</h4>
      <form>
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </form>
    </section>
  );
}

export default Form

// Progress:
// - ss7-224: Create Form component
// - ss7-224: Create color state
// - ss7-224: Create handleSubmit function for form
// - ss7-224: Create form element
// - ss7-224: fix h4 tag
// - ss7-224: add value with pass in color state @input form
// - ss7-224: add onChange event @input form