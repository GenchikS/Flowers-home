// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.module.css";
import Layout from "./component/Layout/Layout";
import HomePages from "./pages/HomePages/HomePages";
import { lazy, Suspense } from "react";
import AppBar from "./component/AppBar/AppBar.jsx";

// const HomePages = lazy(() => import(`./pages/HomePages/HomePages`));

export default function App() {
  // const [count, setCount] = useState(0)
  return (
    <div>
      {/* <AppBar/> */}
      <Layout>
        <HomePages />
        <Suspense fallback={null}>
        {/* <Routes> */}
          {/* <Route path="/" element={<HomePages />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        {/* </Routes> */}
      </Suspense>
      </Layout>
    </div>
  );
}
