import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './app/store';
import AnimatedRoutes from "./features/AnimatedRoutes";
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Footer from './components/footer/Footer';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div id="app">
          <div className="fixed-height">
          <Header />
          <Navbar />
          <main>
            <AnimatedRoutes />
          </main>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
