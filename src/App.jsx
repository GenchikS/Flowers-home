// import { useState } from 'react'
import { Route, Routes } from "react-router-dom";
import "./App.module.css";
import Layout from "./component/Layout/Layout";
import { lazy, Suspense, useEffect } from "react";
import axios from "axios";

const HomePages = lazy(() => import(`./pages/HomePages/HomePages`));
const FlowersPages = lazy(() => import(`./pages/FlowersPages/FlowersPages`));
const ContactsPages = lazy(() => import(`./pages/ContactsPages/ContactsPages`));

axios.defaults.baseURL = `https://flowers-home-bd.onrender.com`;

export default function App() {
  // const [count, setCount] = useState(0)
  useEffect(() => {
    async function fetchFlowers() {
        const response = await axios.get(
          `https://flowers-home-bd.onrender.com`
        );
        console.log(`data`, response.data);
    }
    fetchFlowers();
  }, [])
  return (
    <div>
      {/* <AppBar/> */}
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePages />} />
            <Route path="flowers" element={<FlowersPages />} />
            <Route path="contacts" element={<ContactsPages />} />
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
}
