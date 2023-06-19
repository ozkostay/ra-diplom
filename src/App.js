import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import Page404 from './components/Page404';
import About from './components/About';
import Contacts from './components/Contacts';
// "bootstrap": "^5.2.3",

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contacts' element={<Contacts />} />
          {/* <Route path='/error' element={<Error />} />
          <Route path='/service/:serviceId' element={<ServiceInfo />} /> */}
          <Route path='*' element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
}

// Главная
// /catalog
// /about.
// /contacts
// Страница товара
// Корзина
// 404

export default App;