import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import {Card, LinkBotao} from '../style';

const ProjetoDois = () => (
    <Card>
        <Titulo> Loja de artigos esportivos </Titulo>
        <Paragrafo tipo="secundario">
            Site de compras virtual, feito com React utilizando o Redux para interação do código a modificações do usuário
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Modulo28_entrega_ebac_sports" target="_blank"> Visualizar Código </LinkBotao>
    </Card>
    )



    
export default ProjetoDois;