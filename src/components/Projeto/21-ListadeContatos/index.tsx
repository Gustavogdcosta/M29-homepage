import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { BotaoVizitarSite, Card, LinkBotao} from '../style';

const ProjetoVinteEUm = () => (
    <Card>
        <Titulo> Lista de Contatos </Titulo>
        <Paragrafo tipo="secundario">
            Projeto simples loja virtual utilizando html, css e JavaScript cpm Jquery
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Projeto2EBAC" target="_blank"> Visualizar Código </LinkBotao>
        <BotaoVizitarSite href="https://gustavo-projeto2-ebac.vercel.app/" target="_blank"> Visitar Site </BotaoVizitarSite>
    </Card>
    )

    
export default ProjetoVinteEUm;