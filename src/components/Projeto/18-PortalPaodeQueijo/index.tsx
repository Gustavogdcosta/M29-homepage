import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { BotaoVizitarSite, Card, LinkBotao} from '../style';

const ProjetoDezoito = () => (
    <Card>
        <Titulo> Portal Pão de Queijo </Titulo>
        <Paragrafo tipo="secundario">
            Projeto simples loja virtual utilizando html, css e JavaScript padrão
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Entrega-projeto1-css" target="_blank"> Visualizar Código </LinkBotao>
        <BotaoVizitarSite href="https://portalpaodequeijo.vercel.app/" target="_blank"> Visitar Site </BotaoVizitarSite>
    </Card>
    )

    
export default ProjetoDezoito;