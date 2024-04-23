import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { Card, LinkBotao} from '../style';

const ProjetoVinteDois = () => (
    <Card>
        <Titulo> Galeria de fotos </Titulo>
        <Paragrafo tipo="secundario">
            Projeto para mostruário de LinkedIn Recebendo resposta do Back-end através do Fetch Api
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Modulo23-Entrega" target="_blank"> Visualizar Código </LinkBotao>
    </Card>
    )


export default ProjetoVinteDois;