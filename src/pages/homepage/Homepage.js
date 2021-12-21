// import React from 'react'
import Categories from '../../components/Categories/Categories';
import Popular from '../../components/Popular/Popular';
import Hero from '../../components/Hero/Hero';
import Advanced_Search from '../../components/Advanced_Search/AdvancedSearch';
function Homepage() {
    return (
      <div>
        <Hero />
        
        <Popular />
        <Categories />
      </div>
    );
  }
  
export default Homepage;