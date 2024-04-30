import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { Card, LinkBotao} from '../style';

const ProjetoVinte = () => (
    <Card>
        <Titulo> Galeria de fotos </Titulo>
        <Paragrafo tipo="secundario">
        Este projeto consiste em uma página web que recebe uma galeria de fotos e foi desenvolvido utilizando HTML, CSS e JavaScript, com o auxílio da biblioteca jQuery. 
        A página oferece uma interface intuitiva para os usuários inserirem, visualizarem e gerenciarem suas fotos, podendo colocar titulos e descrições.
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/modulo9-exemplo" target="_blank"> Visualizar Código </LinkBotao>
    </Card>
    )


export default ProjetoVinte;