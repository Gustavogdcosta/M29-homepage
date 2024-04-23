import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { Card, LinkBotao} from '../style';

const ProjetoDezenove = () => (
    <Card>
        <Titulo> Lista de tarefas </Titulo>
        <Paragrafo tipo="secundario">
            Projeto simples lista de tarefas utilizando html, css e JavaScript com Jquery
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Modulo_9_ebac" target="_blank"> Visualizar Código </LinkBotao>
    </Card>
    )


export default ProjetoDezenove;