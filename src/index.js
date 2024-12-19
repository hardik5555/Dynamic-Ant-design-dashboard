import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/reset.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import DynamicDashboard from './App';
import 'antd/dist/reset.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <DynamicDashboard />
   
  </React.StrictMode>
);