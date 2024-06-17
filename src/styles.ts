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
  
  .detailsPrincipal{
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 10px;
  border-radius: 8px;
  width: 98.5%;
  cursor: pointer;  
  margin-bottom: 10px;

  .detailsPrincipal[open] {
  &:hover{
    background-color: transparent;
    }
  }
  

  .detailsItem>summary{
    border-bottom: 1px solid ${(props) => props.theme.corDaBorda};
    margin-top: 10px;

    &:hover{
    background-color: ${(props) => props.theme.corDaBorda};
    }
  }
  
  .accordion__button {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .icon {
    margin-left: 10px;
    display: flex;
  }

  .icon .expanded {
    display: none;
  }

  .accordion__item--expanded .icon .collapsed {
    display: none;
  }

  .accordion__item--expanded .icon .expanded {
    display: block;
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

  @media (max-width: 768px){
    max-width: 80%;
    display: block;
  }
`
