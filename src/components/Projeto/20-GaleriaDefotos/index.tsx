import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { Card, LinkBotao} from '../style';

const ProjetoVinte = () => (
    <Card>
        <Titulo> Galeria de fotos </Titulo>
        <Paragrafo tipo="secundario">
            Projeto simples da galeria utilizando html, css e JavaScript com Jquery
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/modulo9-exemplo" target="_blank"> Visualizar Código </LinkBotao>
    </Card>
    )


export default ProjetoVinte;