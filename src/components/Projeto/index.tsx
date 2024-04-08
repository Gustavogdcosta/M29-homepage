import Paragrafo from "../paragrafo";
import Titulo from "../title";
import {Card, LinkBotao} from './style';

const Projeto = () => (
    <Card>
        <Titulo>Projeto Lista de Tarefas</Titulo>
        <Paragrafo tipo="secundario">
            Lista de tarfa feita com VueJS
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta" target="_blank"> Vizualizar </LinkBotao>
    </Card>
    )



    
export default Projeto;