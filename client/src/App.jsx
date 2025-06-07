import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
// Comment out missing imports
// import CVSubmissionPage from './pages/CVSubmissionPage';
// import InterviewSchedulerPage from './pages/InterviewSchedulerPage';
// import InterviewDashboardPage from './pages/InterviewDashboardPage';
// import InterviewRoomPage from './pages/InterviewRoomPage';
// import FeedbackPage from './pages/FeedbackPage';
// import ResourcesPage from './pages/ResourcesPage';
// import AboutPage from './pages/AboutPage';
// import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* Comment out routes for missing components */}
            {/* <Route path="/cv-submission" element={<CVSubmissionPage />} /> */}
            {/* <Route path="/scheduler" element={<InterviewSchedulerPage />} /> */}
            {/* <Route path="/dashboard" element={<InterviewDashboardPage />} /> */}
            {/* <Route path="/interview-room/:id" element={<InterviewRoomPage />} /> */}
            {/* <Route path="/feedback/:id" element={<FeedbackPage />} /> */}
            {/* <Route path="/resources" element={<ResourcesPage />} /> */}
            {/* <Route path="/about" element={<AboutPage />} /> */}
            {/* <Route path="/contact" element={<ContactPage />} /> */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;