import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import Layout from "./component/Layout/Layout";
import { lazy, Suspense } from "react";

const HomePages = lazy(() => import(`./pages/HomePages/HomePages`));
const FlowersPages = lazy(() => import(`./pages/FlowersPages/FlowersPages`));
const SourceFlowersPage = lazy(() => import(`./pages/SourceFlowersPage/SourceFlowersPage.jsx`)
);
const ContactsPages = lazy(() => import(`./pages/ContactsPages/ContactsPages`));



// axios.defaults.baseURL = `https://flowers-home-bd.onrender.com`;


export default function App() {
 return (
   <div className={css.container}>
     <Layout>
       <Suspense fallback={null}>
         <Routes>
           <Route path="/homePage" element={<HomePages />} />
           <Route path="/flowers" element={<FlowersPages />} />
           <Route
             path="/flowers/chrysanthemums"
             element={<SourceFlowersPage titleSource ="хризантеми" />}
           />
           <Route
             path="/flowers/daisies"
             element={<SourceFlowersPage titleSource ="ромашки" />}
           />
           <Route path="contacts" element={<ContactsPages />} />
           {/* <Route path="*" element={<NotFound />} /> */}
         </Routes>
       </Suspense>
     </Layout>
   </div>
 );
}
