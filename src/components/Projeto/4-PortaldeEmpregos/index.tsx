import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { Card, LinkBotao} from '../style';

const ProjetoQuatro = () => (
    <Card>
        <Titulo> Portal de Empregos </Titulo>
        <Paragrafo tipo="secundario">
            Site feito com React para servir como portal de empregos
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/M29-homepage" target="_blank"> Visualizar Código </LinkBotao>
    </Card>
    )



    
export default ProjetoQuatro;