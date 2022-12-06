import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//VIEWS
import HomePage from "./views/HomePage";
import ProfilePage from "./views/ProfilePage";
import LeaderboardPage from "./views/LeaderboardPage";
import DownloadPage from "./views/DownloadPage";

//LAYOUTS
import Navbar from "./layouts/Navbar";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div id="main-cont">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/download" element={<DownloadPage />} />
        </Routes>
        <div id="adL">Ad Placement</div>
        <div id="adR">Ad Placement</div>
      </div>
    </BrowserRouter>
  );
};

export default App;
