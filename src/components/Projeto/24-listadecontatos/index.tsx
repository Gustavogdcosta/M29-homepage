import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { BotaoVizitarSite, Card, LinkBotao} from '../style';

const ProjetoVinteQuatro = () => (
    <Card>
        <Titulo> Lista de Contatos - React </Titulo>
        <Paragrafo tipo="secundario">
        O projeto compreende uma lista contataos reativa, construída utilizando React e Redux, e aprimorada por plugins como o React Router DOM. Foi concebido com o propósito de ser adaptável, 
        reagindo às interações do usuário e proporcionando a funcionalidade de atualizações automáticas.
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Modulo31-entrega-lista_de_contatos" target="_blank"> Visualizar Código </LinkBotao>
        <BotaoVizitarSite href="https://modulo31-entrega-lista-de-contatos.vercel.app/" target="_blank"> Visitar Site </BotaoVizitarSite>
    </Card>
    )

    
export default ProjetoVinteQuatro;