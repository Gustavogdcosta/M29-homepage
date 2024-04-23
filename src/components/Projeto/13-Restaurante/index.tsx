import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { Card, LinkBotao} from '../style';

const ProjetoTreza = () => (
    <Card>
        <Titulo> Pagina Restaurante </Titulo>
        <Paragrafo tipo="secundario">
            Projeto de pagina de temática utilizando o BootStrap
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/modulo14-exemplo" target="_blank"> Visualizar Código </LinkBotao>
    </Card>
    )

    
export default ProjetoTreza;