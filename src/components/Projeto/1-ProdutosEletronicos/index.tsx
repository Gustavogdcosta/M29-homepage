import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import {Card, LinkBotao} from '../style';

const Projeto = () => (
    <Card>
        <Titulo> Game Shop </Titulo>
        <Paragrafo tipo="secundario">
            Site de compras virtual, feito com React utilizando o Redux para interação do código a modificações do usuário
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/ebac_games_redux" target="_blank"> Visualizar Código </LinkBotao>
    </Card>
    )



    
export default Projeto;