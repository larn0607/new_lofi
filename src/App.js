import React from "react";
import Intro from "./components/intro/index.tsx"
import Background from "./components/background/index.tsx";
import Navbar from "./components/navbar/index.tsx";
import BottomBar from "./components/bottom-bar/index.tsx";

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden">
      <Intro />
      <Navbar />
      <Background />
      <BottomBar />
    </div>
  );
}

export default App;
