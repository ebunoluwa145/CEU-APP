console.log("🔥 App.jsx loaded");

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home";
import BibleStoriesPreview from "./components/BibleStoriesPreview/BibleStoriesPreview";
import BibleStories from "./Pages/Biblestories";
import "./App.css"
import Schedule from "./Pages/Schedule";
import AddChild from "./Pages/AddChild";
import QuizPage from "./Pages/QuizPage";
import Games from "./Pages/Games";
import NotFound from "./Pages/NotFound";
// import StoryDetails from "./Pages/StoryDetails"; // Uncomment later when you create this page

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bible-stories" element={<BibleStories />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/add-child" element={<AddChild />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/games" element={<Games />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all */}
        {/* <Route path="/story/:id" element={<StoryDetails />} /> */}
      </Routes>
    </Router>
   
  );
}
