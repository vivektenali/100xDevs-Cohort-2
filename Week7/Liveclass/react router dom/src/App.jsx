import "./App.css";
import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Appbar } from "./Components/Appbar";

const Landing = React.lazy(() => import("./Components/Landing"));
const Dashboard = React.lazy(() => import("./Components/Dashboard"));

function App() {
  return (
    <div>
      <div>
        <h1>Welcome to Linkedin</h1>
      </div>
      <BrowserRouter>
        <Appbar />
        <Routes>
          <Route
            path="/dashboard"
            element={
              <Suspense fallback={"loading.."}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/"
            element={
              <Suspense fallback={"loading..."}>
                <Landing />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
