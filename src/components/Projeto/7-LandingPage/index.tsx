import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { BotaoVizitarSite, Card, LinkBotao} from '../style';

const ProjetoSete = () => (
    <Card>
        <Titulo> Lading Page </Titulo>
        <Paragrafo tipo="secundario">
            Modelo de Landing Page de Evento utilizando parcel com contador de tempo
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Modulo22-exemplo-landingPage" target="_blank"> Visualizar Código </LinkBotao>
        <BotaoVizitarSite href="https://modulo22-exemplo-landing-page.vercel.app/" target="_blank"> Visitar Site </BotaoVizitarSite>
    </Card>
    )



    
export default ProjetoSete;