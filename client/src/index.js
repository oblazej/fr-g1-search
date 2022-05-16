import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter,
         Routes,
         Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import Header from './features/header/Header';
import App from './App';
import Sell from "./routes/Sell";
import Search from "./routes/Search";
import Navbar from './features/navbar/Navbar';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <BrowserRouter>
      <Header />
      <Navbar />
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="sell" element={<Sell />} />
      <Route path="search" element={<Search />} />
      </Routes>
      </BrowserRouter>
    </Provider>
);