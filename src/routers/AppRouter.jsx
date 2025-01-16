import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';  // Ensure correct path if required
import About from '../pages/About';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import Chat from '../pages/Chat';  // Ensure the path is correct based on the file structure
import Dashboard from '../pages/Dashboard';
import Signup from '../pages/Signup';  // Ensure the correct path
import StudyGroupsPage from '../pages/StudyGroupPage';  // Correct path for StudyGroupsPage

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/groups" element={<StudyGroupsPage />} />
        <Route path="/chat" element={<Chat />} /> {/* Ensure proper casing */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
