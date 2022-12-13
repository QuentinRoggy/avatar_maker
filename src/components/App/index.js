// == Import
import { Route, Routes } from 'react-router-dom';
import Avatar from '../Avatar';
import './styles.css';

// == Composant
function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Avatar />} />
      </Routes>
    </div>
  );
}

// == Export
export default App;
