// src/App.js
import React from "react";
import Tabs from "./components/Tabs";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50">
      {/* Left Side (empty space) */}
      <div className="hidden lg:block lg:w-1/2 bg-gray-200"></div>

      {/* Right Side Widgets */}
      <div className="w-full lg:w-1/2 p-6 space-y-6 bg-zinc-600">
        <Tabs />
        <Gallery />
      </div>
    </div>
  );
};

export default App;
