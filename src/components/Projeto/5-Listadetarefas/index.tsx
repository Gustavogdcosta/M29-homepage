import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { Cardtres, LinkBotao} from '../style';

const ProjetoCinco = () => (
    <Cardtres>
        <Titulo> To Do List com VueJs </Titulo>
        <Paragrafo tipo="secundario">
            Este modelo representa uma lista de afazeres desenvolvida utilizando Vue.js. Neste modelo, os usuários podem criar, visualizar, editar e excluir tarefas em uma lista de afazeres,  
            ele serve como uma base sólida para a implementação de uma variedade de aplicativos de lista de afazeres, com flexibilidade para personalização e extensão conforme necessário.
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Modulo27-exemplo-todoListComVueJs" target="_blank"> Visualizar Código </LinkBotao>
    </Cardtres>
    )



    
export default ProjetoCinco;