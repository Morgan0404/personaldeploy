import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListGroup from "./components/ListGroup";
import About from "./components/About"; // Import the About component

function App() {
  let items = ["Project 1", "Project 2", "Project 3", "Project 4", "Project 5"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <ListGroup
              items={items}
              heading="Work in progress: "
              onSelectItem={handleSelectItem}
            />
          }
        />
        <Route path="/about" element={<About />} />
        {/* Define other routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
