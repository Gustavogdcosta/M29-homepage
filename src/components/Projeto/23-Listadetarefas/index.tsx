import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { BotaoVizitarSite, Card, LinkBotao} from '../style';

const ProjetoVinteTres = () => (
    <Card>
        <Titulo> Lista de Tarefas </Titulo>
        <Paragrafo tipo="secundario">
        O projeto compreende uma lista de tarefas dinâmica, construída utilizando React e Redux, e aprimorada por plugins como o React Router DOM. Foi concebido com o propósito de ser adaptável, 
        reagindo às interações do usuário e proporcionando a funcionalidade de atualização automática do status conforme o andamento das tarefas.
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Modulo29_exercicio-minhas-tarefas.git" target="_blank"> Visualizar Código </LinkBotao>
        <BotaoVizitarSite href="https://gustavocosta-lista-de-tarefas.vercel.app/" target="_blank"> Visitar Site </BotaoVizitarSite>
    </Card>
    )



    
export default ProjetoVinteTres;