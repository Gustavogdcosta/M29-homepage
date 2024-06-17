import Paragrafo from "../../paragrafo";
import {Titulo} from "../../title";
import { Cardtres, LinkBotao} from '../style';

const ProjetoOnze = () => (
    <Cardtres>
        <Titulo> Loja Virtual </Titulo>
        <Paragrafo tipo="secundario">
        Este exemplo demonstra uma loja virtual desenvolvida com a utilização do Less, uma linguagem dinâmica de folha de estilo que se compila em CSS. 
        O Less oferece recursos avançados para estilização de páginas web, incluindo variáveis, mixins, aninhamento e outras funcionalidades que simplificam o 
        processo de estilização e manutenção do código CSS.
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Modulo17-entrega" target="_blank"> Visualizar Código </LinkBotao>
    </Cardtres>
    )



    
export default ProjetoOnze;