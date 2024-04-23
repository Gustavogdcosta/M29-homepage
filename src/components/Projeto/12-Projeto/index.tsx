import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { BotaoVizitarSite, Card, LinkBotao} from '../style';

const ProjetoDoze = () => (
    <Card>
        <Titulo> Porto Seguro Jorney </Titulo>
        <Paragrafo tipo="secundario">
            Projeto de pagina de temática utilizando o BootStrap
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Modulo14-entrega" target="_blank"> Visualizar Código </LinkBotao>
        <BotaoVizitarSite href="https://gustavo-dias-modulo14-entrega.vercel.app/" target="_blank"> Visitar Site </BotaoVizitarSite>
    </Card>
    )

    
export default ProjetoDoze;