import Paragrafo from "../../paragrafo";
import {Titulo} from "../../title";
import { BotaoVizitarSite, Carddois, LinkBotao} from '../style';

const ProjetoSete = () => (
    <Carddois>
        <Titulo> Lading Page </Titulo>
        <Paragrafo tipo="secundario">
        Este modelo é uma Landing Page projetada para promover um evento específico e foi construído utilizando Parcel, a pagina apresenta um contador de tempo que destaca a 
        contagem regressiva para o início do evento, criando um senso de urgência e incentivando os visitantes a se registrarem ou participarem. Além do contador de tempo, a página 
        pode incluir elementos como informações sobre o evento, agenda, palestrantes, formulários de registro, depoimentos e muito mais, dependendo das necessidades e objetivos do evento. 
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Modulo22-exemplo-landingPage" target="_blank"> Visualizar Código </LinkBotao>
        <BotaoVizitarSite href="https://modulo22-exemplo-landing-page.vercel.app/" target="_blank"> Visitar Site </BotaoVizitarSite>
    </Carddois>
    )



    
export default ProjetoSete;