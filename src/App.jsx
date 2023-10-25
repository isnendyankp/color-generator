import ColorList from './ColorList';
import Form from './Form';
import Values from 'values.js';

const App = () => {
  const [color, setColor] = useState('');
  return (
    <main>
      <Form />
      <ColorList />
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
