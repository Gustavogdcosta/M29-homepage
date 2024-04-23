import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import {BotaoVcestaAqui, Card, LinkBotao} from '../style';

const ProjetoTres = () => (
    <Card>
        <Titulo> Portfólio Gustavo Costa </Titulo>
        <Paragrafo tipo="secundario">
            Site feito com React para servir como Portfólio de projetos do Engenheiro Gustavo Dias
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/M29-homepage" target="_blank"> Visualizar Código </LinkBotao>
        <BotaoVcestaAqui> Você está nesta página </BotaoVcestaAqui>
    </Card>
    )



    
export default ProjetoTres;