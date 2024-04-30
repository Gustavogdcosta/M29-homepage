import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { BotaoVizitarSite, Card, LinkBotao} from '../style';

const ProjetoOito = () => (
    <Card>
        <Titulo> Lading Page Aniversário </Titulo>
        <Paragrafo tipo="secundario">
        Esta Landing Page foi desenvolvida com o objetivo de promover um evento específico e emprega a tecnologia Parcel para sua construção. 
        O destaque da página é um contador regressivo que marca o tempo restante até o início do evento, criando um senso de urgência que motiva os 
        visitantes a se registrarem ou participarem.
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Modulo22-entrega" target="_blank"> Visualizar Código </LinkBotao>
        <BotaoVizitarSite href="https://gustavogdias-landingpage-aniversario.vercel.app/" target="_blank"> Visitar Site </BotaoVizitarSite>
    </Card>
    )



    
export default ProjetoOito;