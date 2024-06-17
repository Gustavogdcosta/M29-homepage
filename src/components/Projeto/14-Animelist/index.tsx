import Paragrafo from "../../paragrafo";
import {Titulo} from "../../title";
import { BotaoVizitarSite, Card, LinkBotao} from '../style';

const ProjetoQuatorze = () => (
    <Card>
        <Titulo> AnimeList </Titulo>
        <Paragrafo tipo="secundario">
        O projeto consiste na criação de uma página web destinada a um portal de animes, utilizando o framework Bootstrap. Este portal tem como objetivo central proporcionar aos fãs 
        de anime um ambiente online onde possam descobrir, explorar e desfrutar de uma variedade de conteúdos relacionados a esse universo vibrante.
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Modulo13-enxercicio-entrega" target="_blank"> Visualizar Código </LinkBotao>
        <BotaoVizitarSite href="https://modulo13-enxercicio-entrega.vercel.app/" target="_blank"> Visitar Site </BotaoVizitarSite>
    </Card>
    )

    
export default ProjetoQuatorze;