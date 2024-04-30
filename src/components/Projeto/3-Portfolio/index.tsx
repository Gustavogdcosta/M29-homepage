import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import {BotaoVcestaAqui, Carddois, LinkBotao} from '../style';

const ProjetoTres = () => (
    <Carddois>
        <Titulo> Portfólio Gustavo Costa </Titulo>
        <Paragrafo tipo="secundario">
        Este site é uma plataforma construída utilizando React e foi especificamente concebida para atuar como o portfólio online do Engenheiro Gustavo Costa. 
        Nele, os visitantes podem explorar uma coleção abrangente dos projetos desenvolvidos pelo Engenheiro a ao longo de sua carreira. 
        O site apresenta uma interface amigável e intuitiva, permitindo aos usuários navegar facilmente pelos projetos, visualizar detalhes técnicos e visitar alguns sites que estão online no momento.
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/M29-homepage" target="_blank"> Visualizar Código </LinkBotao>
        <BotaoVcestaAqui> Você está nesta página </BotaoVcestaAqui>
    </Carddois>
    )



    
export default ProjetoTres;