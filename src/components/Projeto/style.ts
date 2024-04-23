import style, { styled } from 'styled-components'

export const Card = style.div`
    border: 1px solid ${(props) => props.theme.corDaBorda};
    padding: 16px;
`

export const LinkBotao = styled.a`
    background-color: ${(props) => props.theme.corDeFundoBotao};
    color: ${(props) => props.theme.corDeFundo};
    font-size: 14px;
    padding: 8px;
    text-decoration: none;
    display: inline-block;
    margin-top: 24px;

    &:hover {
        cursor: pointer;
    }
`