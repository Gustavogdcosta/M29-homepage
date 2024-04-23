import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { BotaoVizitarSite, Card, LinkBotao} from '../style';

const ProjetoQuatorze = () => (
    <Card>
        <Titulo> AnimeList </Titulo>
        <Paragrafo tipo="secundario">
            Projeto de pagina de temática utilizando o BootStrap
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Modulo13-enxercicio-entrega" target="_blank"> Visualizar Código </LinkBotao>
        <BotaoVizitarSite href="https://modulo13-enxercicio-entrega.vercel.app/" target="_blank"> Visitar Site </BotaoVizitarSite>
    </Card>
    )

    
export default ProjetoQuatorze;