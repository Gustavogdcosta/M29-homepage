import style, { styled } from 'styled-components'

export const Card = style.div`
    border: 1px solid ${(props) => props.theme.corDaBorda};
    padding: 16px;
    height: 150px;
    position: relative;
`

export const LinkBotao = styled.a`
    background-color: ${(props) => props.theme.corDeFundoBotao};
    color: ${(props) => props.theme.corDeFundo};
    font-size: 14px;
    padding: 8px;
    text-decoration: none;
    display: inline-block;
    margin-top: 24px;
    margin-right: 10px;
    border-radius: 10px;
    position: absolute;
    top: 110px;

    &:hover {
        cursor: pointer;
    }
`
export const BotaoVizitarSite = styled.a`
    background-color: ${(props) => props.theme.corDeFundoBotao};
    color: ${(props) => props.theme.corDeFundo};
    font-size: 14px;
    padding: 8px;
    text-decoration: none;
    display: inline-block;
    margin-top: 24px;
    margin-right: 10px;
    border-radius: 10px;
    position: absolute;
    top: 110px;
    left: 165px;

    &:hover {
        cursor: pointer;
    }

    @media (min-width: 769px) and (max-width: 886px) {
        position: absolute;
        top: 110px;
        left: 165px;
        
        &:hover {
            cursor: pointer;
        }
    }

`

export const BotaoVcestaAqui = styled.button`
    background-color: ${(props) => props.theme.corDeFundo};
    color: ${(props) => props.theme.corDeFundoBotao};
    font-size: 14px;
    padding: 8px;
    display: inline-block;
    margin-top: 24px;
    margin-right: 10px;
    border: 2px solid ${(props) => props.theme.corDeFundoBotao};
    border-radius: 10px;
    position: absolute;
    top: 110px;
    left: 165px;

    @media (min-width: 769px) and (max-width: 886px) {
            position: absolute;
            top: 90px;
            left: 165px;
        }

    @media (max-width: 439px) {
            position: absolute;
            top: 90px;
            left: 165px;
        }
    }
`