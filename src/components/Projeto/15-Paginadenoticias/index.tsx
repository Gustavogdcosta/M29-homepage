import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { Card, LinkBotao} from '../style';

const ProjetoQuinze = () => (
    <Card>
        <Titulo> Página de Notícias </Titulo>
        <Paragrafo tipo="secundario">
        Este projeto é um portal de notícias simples desenvolvido utilizando apenas HTML, CSS e JavaScript padrão. A escolha destas tecnologias permite criar uma experiência de usuário básica, 
        porém funcional, sem depender de frameworks ou bibliotecas externas.
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/modulo11-exemplo" target="_blank"> Visualizar Código </LinkBotao>
    </Card>
    )


export default ProjetoQuinze;