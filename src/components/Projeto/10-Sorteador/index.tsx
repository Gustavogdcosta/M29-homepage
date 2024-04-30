import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { Cardtres, LinkBotao} from '../style';

const ProjetoDez = () => (
    <Cardtres>
        <Titulo> Sorteador de Números </Titulo>
        <Paragrafo tipo="secundario">
        Esta é uma página web que exemplifica um sorteio de números, desenvolvida utilizando as ferramentas Grunt e Less. Nesta página, os usuários podem utilizar o sorteio de 
        números para diversos propósitos. A interface é projetada de forma simples e intuitiva, permitindo aos usuários inserir 
        parâmetros para o sorteio, como o intervalo de números e a quantidade de números a serem sorteados.
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/modulo18-entrega" target="_blank"> Visualizar Código </LinkBotao>
    </Cardtres>
    )



    
export default ProjetoDez;