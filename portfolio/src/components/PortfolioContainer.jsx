import React, { useState } from 'react';
import Header from "./pages/Header";
import Nav from "./Nav";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Header');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Header') {
      return <Header />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Experience') {
      return <Experience />;
    }
    if (currentPage === 'Services') {
        return <Services />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
    return <Footer/>;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
      < Footer />
    </div>
  );
}