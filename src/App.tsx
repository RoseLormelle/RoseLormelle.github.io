import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Project from './components/Project';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;

