import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { Card, LinkBotao} from '../style';

const ProjetoCinco = () => (
    <Card>
        <Titulo> To Do List com VueJs </Titulo>
        <Paragrafo tipo="secundario">
            Modelo de lista de afazeres executado com o VueJs.
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Modulo27-exemplo-todoListComVueJs" target="_blank"> Visualizar Código </LinkBotao>
    </Card>
    )



    
export default ProjetoCinco;