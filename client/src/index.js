import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter,
         Routes,
         Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import Sell from "./routes/sell";
import Search from "./routes/search";
import './index.css';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} />
      <Route path="sell" element={<Sell />} />
      <Route path="search" element={<Search />} />
      </Routes>
      </BrowserRouter>
    </Provider>
);