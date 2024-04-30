import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { Card, LinkBotao} from '../style';

const ProjetoDezenove = () => (
    <Card>
        <Titulo> Lista de tarefas </Titulo>
        <Paragrafo tipo="secundario">
        Este projeto consiste em uma página web que recebe uma lista de tarefas e foi desenvolvido utilizando HTML, CSS e JavaScript, com o auxílio da biblioteca jQuery. 
        A página oferece uma interface intuitiva para os usuários inserirem, visualizarem e gerenciarem suas tarefas de forma eficiente.
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Modulo_9_ebac" target="_blank"> Visualizar Código </LinkBotao>
    </Card>
    )


export default ProjetoDezenove;