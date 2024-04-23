import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { BotaoVizitarSite, Card, LinkBotao} from '../style';

const ProjetoDezessete = () => (
    <Card>
        <Titulo> GameShop </Titulo>
        <Paragrafo tipo="secundario">
            Projeto simples loja virtual utilizando html, css e JavaScript padrão
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/GamesShop" target="_blank"> Visualizar Código </LinkBotao>
        <BotaoVizitarSite href="https://games-shop-wine.vercel.app/" target="_blank"> Visitar Site </BotaoVizitarSite>
    </Card>
    )

    
export default ProjetoDezessete;