import ColorList from './ColorList';
import Form from './Form';
import Values from 'values.js';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10));
  
  const addColor = (color) => {
    try {
      const newColor = new Values(color).all(10);
      
    } catch (error) {

    }
  };

  return (
    <main>
      <Form addColor={addColor}/>
      <ColorList colors={colors} />
      <ToastContainer position='top-center'/>
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
// - s7-228:import toast from react-toastify
// - s7-228:check toast.error with message
// - s7-228:check toast.success with message
// - s7-228:add top-center position to ToastContainer
// - s7-228:defind addColor function
// - s7-228:pass in addColor function to Form component
// - s7-228:check log color @addColor function
// - s7-228:add try catch block @addColor function
// - s7-229: define newColor variable @addColor function

