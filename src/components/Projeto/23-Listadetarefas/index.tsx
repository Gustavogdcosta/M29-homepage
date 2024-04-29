import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { BotaoVizitarSite, Carddois, LinkBotao} from '../style';

const ProjetoVinteTres = () => (
    <Carddois>
        <Titulo> Lista de Tarefas </Titulo>
        <Paragrafo tipo="secundario">
            Projeto de lista de tarefa iterativa, utilizando o React com o Redux, além de plugins complementares como o React Router DOM. O projeto foi pensado de forma a ser iterativo
            com as ações do usuário de forma que os marcações se autocompletam
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Modulo29_exercicio-minhas-tarefas.git" target="_blank"> Visualizar Código </LinkBotao>
        <BotaoVizitarSite href="https://gustavocosta-lista-de-tarefas.vercel.app/" target="_blank"> Visitar Site </BotaoVizitarSite>
    </Carddois>
    )



    
export default ProjetoVinteTres;