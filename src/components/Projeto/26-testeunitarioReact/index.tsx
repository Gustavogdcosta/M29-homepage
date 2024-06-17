import Paragrafo from "../../paragrafo";
import {Titulo} from "../../title";
import { Carddois, LinkBotao} from '../style';

const ProjetoVinteSeis = () => (
    <Carddois>
        <Titulo> Cards de lembrete com testes no Redux </Titulo>
        <Paragrafo tipo="secundario">
        Este projeto um projeto de funcionalidade para lista de tarefas utilizando React, incorporando Redux para otimizar a reatividade às ações dos usuários. Nesta aplicação, os clientes podem adicionar 
        e remover tarefas, com atualizações automáticas e em tempo real. Além disso, foram configurados testes de estabilidade e funcionalidade na forma de testes de integração 
        garantindo que funcionalidades existentes possam ser testadas de forma prática a cada funcionalidade introduzida no código
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Modulo33-entrega-testesReact" target="_blank"> Visualizar Código </LinkBotao>
    </Carddois>
    )


export default ProjetoVinteSeis;