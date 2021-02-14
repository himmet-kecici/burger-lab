import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './global.styles';
import Heading from './components/Heading/heading.component';
import Products from './components/Products/products.components';
import { ProductData, ProductDataTwo } from './components/Products/data';
import Feature from './components/Feature/feature.component';
import Footer from './components/Footer/footer.component';
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Heading />
      <Products heading='Choose your favorite hamburger' data={ProductData} />
      <Feature />
      <Products heading='Sweet offers for you' data={ProductDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
