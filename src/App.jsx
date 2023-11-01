import ColorList from './ColorList';
import Form from './Form';
import Values from 'values.js';
import { useState } from 'react';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10));
  return (
    <main>
      <Form />
      <ColorList colors={colors} />
      <ToastContainer />
    </main>
  );
};
export default App;

// Progress:
// - s7-224:Create main App with pass in Form and ColorList components
// - s7-226:import ColorList component
// - s7-226:import Form component
// - s7-226:import Values from values.js
// - s7-226:Create color state
// - s7-226:import useState from react
// - s7-226:pass in new Values as default value @color state
// - s7-227:pass in colors state to ColorList component
// - s7-228:import ToastContainer from react-toastify
// - s7-228:pass in ToastContainer component
