import '../../style/styles.css';
import ResponsiveHeader from './ResponsiveHeader'
import React from 'react';


const  Header = () => {
  return (
    <>
      <section className='main-header'>
        <ResponsiveHeader />
       
      </section>
    </>
  );
};

export default Header;