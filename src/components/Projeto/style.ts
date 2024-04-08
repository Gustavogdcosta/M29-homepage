import style, { styled } from 'styled-components'

export const Card = style.div`
    border: 1px solid #c1c1c1;
    padding: 16px;
`

export const LinkBotao = styled.a`
    background-color: #4476bf;
    color: #fff;
    font-size: 14px;
    padding: 8px;
    text-decoration: none;
    display: inline-block;
    margin-top: 24px;

    &:hover {
        cursor: pointer;
    }
`