import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css';
import Header from './features/header/Header';
import Navbar from './features/navbar/Navbar';
import AnimatedRoutes from './features/AnimatedRoutes/AnimatedRoutes';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <Provider store={store}>
      <BrowserRouter>
      <Header />
      <Navbar />
      <main style={{ position: "relative" }}>
      <AnimatedRoutes />
      </main>
      </BrowserRouter>
    </Provider>
);