import Paragrafo from "../../paragrafo";
import {Titulo} from "../../title";
import { BotaoVizitarSite, Card, LinkBotao} from '../style';

const ProjetoDoze = () => (
    <Card>
        <Titulo> Porto Seguro Jorney </Titulo>
        <Paragrafo tipo="secundario">
        Este projeto consiste na criação de uma página web com temática voltada para passeios em Porto Seguro, Bahia. Utilizando o framework Bootstrap, a página é desenvolvida com o 
        intuito de apresentar aos visitantes uma variedade de opções de passeios e atividades disponíveis na região. 
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Modulo14-entrega" target="_blank"> Visualizar Código </LinkBotao>
        <BotaoVizitarSite href="https://gustavo-dias-modulo14-entrega.vercel.app/" target="_blank"> Visitar Site </BotaoVizitarSite>
    </Card>
    )

    
export default ProjetoDoze; 