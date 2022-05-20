import React from 'react';
import { BrowserRouter
} from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import AnimatedRoutes from "./features/AnimatedRoutes";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
