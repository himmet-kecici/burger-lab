import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { GlobalStyle } from './global.styles';
import Heading from './components/Heading/heading.component';
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Heading />
    </Router>
  );
}

export default App;
