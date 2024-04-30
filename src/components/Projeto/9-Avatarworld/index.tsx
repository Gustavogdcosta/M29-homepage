import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { BotaoVizitarSite, Cardtres, LinkBotao} from '../style';

const ProjetoNove = () => (
    <Cardtres>
        <Titulo> Avatar World </Titulo>
        <Paragrafo tipo="secundario">
        Este projeto consiste na criação de uma página com temática inspirada no universo do filme Avatar, dirigido por James Cameron. 
        A página é desenvolvida utilizando Gulp, uma ferramenta de automação de tarefas, e Sass, uma linguagem de folha de estilo CSS pré-processada que oferece recursos 
        avançados de organização, responsividade e reutilização de código. 
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/modulo21-entrega" target="_blank"> Visualizar Código </LinkBotao>
        <BotaoVizitarSite href="https://modulo21-entrega.vercel.app/" target="_blank"> Visitar Site </BotaoVizitarSite>
    </Cardtres>
    )



    
export default ProjetoNove;