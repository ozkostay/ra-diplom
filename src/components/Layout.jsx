import React from 'react';
import {Outlet} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Banner from './Banner';
// import Error from './Error';

export default function Layout() {
  
  return (
    <>
      <Header />

      <main class="container">
        <div class="row">
          <div class="col">
            <Banner />
            <Outlet />
          </div>
        </div>
      </main>
      <Footer />  
    </>
    
  )
}