import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FormComponent from "./components/formcomponent";
import ConfirmationPage from "./components/ConfirmationPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FormComponent />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;