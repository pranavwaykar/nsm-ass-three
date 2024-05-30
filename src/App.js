import "./App.css"; // Importing the main CSS file for the app
import React from "react"; //Importing React library
// Importing the components
import SideBar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";


function App() {
  return (
    <>
      <div className="App">
        <div className="app-dashboard-content">
          {/* Global sidebar component */}
          <SideBar />
          {/* Transaction Detail Page */}
          <Dashboard />
        </div>
      </div>
    </>
  );
}

export default App;
