import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import 'antd/dist/antd.css';
import './App.css';
import { Layout } from 'antd';
import Sidebar from "./Components/Sidebar";
import GlobalHeader from './Components/Header';
import Content from './Components/Content';
import GlobalFooter from './Components/Footer';
import Dashboard from "./Pages/Dashboard";
import Reports from "./Pages/Reports";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
            <Layout style={{minHeight: '100vh'}}>
              <Sidebar />        
              <Layout>                    
                <GlobalHeader />
                <Routes>
                  {/* <Route path="/" element={<Content />} /> */}
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/reports" element={<Reports />} />
                </Routes>
                <GlobalFooter />
              </Layout>
            </Layout>
        </div>
    </BrowserRouter>
  );
}

export default App;
