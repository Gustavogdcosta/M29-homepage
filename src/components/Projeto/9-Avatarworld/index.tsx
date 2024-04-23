import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { BotaoVizitarSite, Card, LinkBotao} from '../style';

const ProjetoNove = () => (
    <Card>
        <Titulo> Avatar World </Titulo>
        <Paragrafo tipo="secundario">
            Projeto de pagina de temática utilizando o Gulp com o Sass
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/modulo21-entrega" target="_blank"> Visualizar Código </LinkBotao>
        <BotaoVizitarSite href="https://modulo21-entrega.vercel.app/" target="_blank"> Visitar Site </BotaoVizitarSite>
    </Card>
    )



    
export default ProjetoNove;