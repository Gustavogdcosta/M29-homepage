import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { BotaoVizitarSite, Card, LinkBotao} from '../style';

const ProjetoOito = () => (
    <Card>
        <Titulo> Lading Page Aniversário </Titulo>
        <Paragrafo tipo="secundario">
            Modelo de Landing Page de Evento utilizando parcel com contador de tempo
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Modulo22-entrega" target="_blank"> Visualizar Código </LinkBotao>
        <BotaoVizitarSite href="https://gustavogdias-landingpage-aniversario.vercel.app/" target="_blank"> Visitar Site </BotaoVizitarSite>
    </Card>
    )



    
export default ProjetoOito;