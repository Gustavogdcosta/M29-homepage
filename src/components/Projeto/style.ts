import style, { styled } from 'styled-components'

export const Card = style.div`
    border: 1px solid ${(props) => props.theme.corDaBorda};
    padding: 16px;
    height: 220px;
    position: relative;
    border-radius: 10px;

    @media (min-width: 769px) and (max-width: 886px) {
        height: 300px;
    }
`

export const Carddois = style(Card)`
    height: 300px;
    @media (min-width: 769px) and (max-width: 886px) {
        height: 400px;
    }
`

export const Cardtres = style(Card)`
    height: 250px;
    @media (min-width: 769px) and (max-width: 886px) {
        height: 330px;
    }
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
    bottom: 10px;

    &:hover {
        cursor: pointer;
    }
`
export const BotaoVizitarSite = styled(LinkBotao)`
    bottom: 10px;
    left: 165px;
`

export const BotaoVcestaAqui = styled(LinkBotao)`
    background-color: ${(props) => props.theme.corDeFundo};
    color: ${(props) => props.theme.corDeFundoBotao};
    border: 2px solid ${(props) => props.theme.corDeFundoBotao};
    bottom: 10px;
    left: 165px;
`