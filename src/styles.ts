import styled, {createGlobalStyle} from 'styled-components'

const EstiloGlobal = createGlobalStyle `
  *{
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    list-style: none;
  }

  body {
    padding-top: 50px;
    padding-bottom: 80px;
    background-color: ${(props) => props.theme.corDeFundo};
    @media (max-width: 768px) {
      padding-top: 16px;
    }
  }


`

export default EstiloGlobal;

export const Container = styled.div `
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px; 
  img{
    max-width: 100%;
  }

  @media (max-width: 1024px){
    max-width: 80%;
  }
  @media (max-width: 768px){
    max-width: 80%;
    display: block;
  }
`
