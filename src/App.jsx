import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Videos from "./Components/Videos";
import Upload from "./Components/Upload";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { useState } from "react";

function App() {
  const initialVideos = [
    {
      url: "https://player.vimeo.com/progressive_redirect/playback/689949818/rendition/540p?loc=external&oauth2_token_id=1027659655&signature=cf602155bf49e4e74db6f2ec9d4ecf067fbab44c4295a8950d58ecdb88910882",
      title: "Sample Video 1",
      description:
        "This is a sample video for testing and demo. This is called description.",
    },
    {
      url: "https://player.vimeo.com/progressive_redirect/playback/697718184/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=26d69c3df603d083fedd663acaab4d35a33444d11033a626864cf1e578e136cf",
      title: "Sample Video 2",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, perspiciatis. placeat, eos possimus! Odio, vero.",
    },
    {
      url: "https://player.vimeo.com/external/510850877.hd.mp4?s=d5e9ed9ea40ba755e28512cce6c1ad00d92506f7&profile_id=174",
      title: "Sample Video 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo porro sed tempora obcaecati ea non.",
    },
    {
      url: "https://player.vimeo.com/external/577442929.hd.mp4?s=95231c8a7fe2066ffb640204591b01a6c326b97c&profile_id=174",
      title: "Sample Video 4",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quisquam impedit iure, obcaecati ea dolor.",
    },
    {
      url: "https://player.vimeo.com/progressive_redirect/playback/689925384/rendition/360p?loc=external&oauth2_token_id=1027659655&signature=5a819f11298d53cc1ed85837342f47ea61c8f95b9aeeb0c38edab72a80e0db78",
      title: "Sample Video 5",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero minus illo, voluptatem ipsum velit corrupti.",
    },
    {
      url: "https://player.vimeo.com/progressive_redirect/playback/688648666/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=070a16d4b244bc11c2bd17b03e04e50460be3d2726ed554959a49fc05dbd0281",
      title: "Sample Video 6",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum modi saepe pariatur, hic omnis dolore!",
    },
    {
      url: "https://player.vimeo.com/progressive_redirect/playback/690770660/rendition/720p?loc=external&oauth2_token_id=1027659655&signature=3a048039957fd878fc72b809b9a0e5f2102eded879a83e00784ecd3ba5123614",
      title: "Sample Video 7",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod quisquam impedit iure, obcaecati ea dolor.",
    },
  ];

  const [videosArr, setVideosArr] = useState(initialVideos);

  const handleVideoUpload = (newVideo) => {
    setVideosArr((prevVideos) => [...prevVideos, newVideo]);
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/videos"
          element={
            <Videos videosArr={videosArr} onVideoUpload={handleVideoUpload} />
          }
        />
        <Route
          path="/upload"
          element={<Upload onVideoUpload={handleVideoUpload} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
