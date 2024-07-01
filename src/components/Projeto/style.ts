import style, { styled } from 'styled-components'

export const Card = style.div`
    border: 1px solid ${(props) => props.theme.corDaBorda};
    padding: 16px;
    height: 28vw;
    position: relative;
    border-radius: 10px;

    @media (max-width: 400px) {
    height: 70vw;
    }

    @media (min-width: 401px) and (max-width: 425px) {
    height: 60vw;
    }

    @media (min-width: 1441px) {
    height: 220px;
    }
`

export const Carddois = style(Card)`
    height: 35vw;

    @media (max-width: 400px) {
    height: 90vw;
    }

    @media (min-width: 401px) and  (max-width: 425px) {
    height: 70vw;
    }
    @media (min-width: 1441px) {
    height: 280px;
    }
`

export const Cardtres = style(Card)`
    height: 30vw;
    @media (max-width: 400px) {
    height: 80vw;
    }
    @media (min-width: 401px) and  (max-width: 425px) {
    height: 65vw;
    }
    @media (min-width: 1441px) {
    height: 250px;
    }
`

export const CardQuatro = style(Card)`
    height: 40vw;

    @media (max-width: 400px) {
    height: 120vw;
    }

    @media (min-width: 401px) and (max-width: 425px) {
    height: 90vw;
    }
    @media (min-width: 1441px) {
    height: 320px;
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