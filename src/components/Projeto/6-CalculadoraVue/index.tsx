import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { Cardtres, LinkBotao} from '../style';

const ProjetoSeis = () => (
    <Cardtres>
        <Titulo> Aplicação de calculadora com VueJs </Titulo>
        <Paragrafo tipo="secundario">
        Esta aplicação é uma calculadora matemática desenvolvida utilizando Vue.js, um framework progressivo JavaScript amplamente utilizado para construir interfaces de usuário interativas e responsivas. 
        A calculadora permite aos usuários realizar uma variedade de operações matemáticas básicas. 
        Com Vue.js, a aplicação oferece uma experiência com atualizações em tempo real à medida que os usuários inserem e modificam os dados.
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/modulo27-Entrega-CalculadoraVue" target="_blank"> Visualizar Código </LinkBotao>
    </Cardtres>
    )



    
export default ProjetoSeis;