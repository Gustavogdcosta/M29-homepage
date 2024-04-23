import {useState} from 'react'
import {ThemeProvider} from 'styled-components';

import React from 'react';
import Sidebar from './containers/Sidebar';
import EstiloGlobal, { Container } from './styles';
import Sobre from './containers/sobre';
import Projetos from './containers/projetos';
import temaLight from './themes/light';
import temaDark from './themes/dark';

function App() {
  const [qualtema, setQualTema] = useState(false);

  function trocaTema () {
    setQualTema (!qualtema)
  }

  return (
  <ThemeProvider theme={qualtema ? temaDark : temaLight}>
    <EstiloGlobal/>
    <Container>
      <Sidebar trocatema={trocaTema}/>
      <main>
        <Sobre/>
        <Projetos/>
      </main>
    </Container>
  </ThemeProvider>
  );
}

export default App;
