// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.module.css";
import Layout from "./component/Layout/Layout";
import { lazy, Suspense } from "react";
// import AppBar from "./component/AppBar/AppBar.jsx";
// import { useDispatch } from "react-redux";
// import { fetchFlowers } from "./redux/flowers/operations.js";
// import axios from "axios";

const HomePages = lazy(() => import(`./pages/HomePages/HomePages`));
const FlowersPages = lazy(() => import(`./pages/FlowersPages/FlowersPages`));
const ContactsPages = lazy(() => import(`./pages/ContactsPages/ContactsPages`));

// axios.defaults.baseURL = `https://flowers-home-bd.onrender.com`;

export default function App() {
  // const [count, setCount] = useState(0)
  return (
    <div>
      {/* <AppBar/> */}
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="/flowers" element={<FlowersPages />} />
            <Route path="contacts" element={<ContactsPages />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}
