import 'normalize.css';
import './index.css';
import Header from './views/Header';
import Home from './views/Home';
import { Route, Routes } from 'react-router-dom';
import About from './views/About';
import Work from './views/Work';
const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/about'
          element={<About />}
        />
        <Route
          path='/work'
          element={<Work />}
        />
      </Routes>
    </>
  );
};

export default App;
