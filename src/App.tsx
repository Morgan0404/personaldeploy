import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ListGroup from "./components/ListGroup";
import About from "./components/About"; // Import the About component
import ContactDetails from "./components/ContactDetails";
import Introduction from "./components/Introduction";
import DownloadCVButton from "./components/DownloadCVButton";

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
            <>
              <Introduction />
              <ContactDetails />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        {/* Define other routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
