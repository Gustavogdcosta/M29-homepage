import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { Card, LinkBotao} from '../style';

const ProjetoQuinze = () => (
    <Card>
        <Titulo> Página de Notícias </Titulo>
        <Paragrafo tipo="secundario">
            Projeto simples de portal de notícias utilizando html, css e JavaScript padrão
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/modulo11-exemplo" target="_blank"> Visualizar Código </LinkBotao>
    </Card>
    )


export default ProjetoQuinze;