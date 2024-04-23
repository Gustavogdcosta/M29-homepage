import styled from "styled-components";
import { P } from "../../components/paragrafo/styles";

export const Descricao = styled(P) `
    margin-top: 24px;
    margin-bottom: 40px;
`

export const BotaoTema = styled.button`
    font-size: 10px;
    font-weight: bold;
    padding: 8px;
    border-radius: 12px;
    color: ${(props) => props.theme.corDeFundo};
    background-color: ${(props) => props.theme.corPrinciapal};
    cursor:pointer;
`

export const SidebarContainer = styled.div`
    position: sticky;
    top: 80px;
    left: 0;
    text-align: center;
`