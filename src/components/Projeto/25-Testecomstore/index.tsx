import Paragrafo from "../../paragrafo";
import {Titulo} from "../../title";
import { Carddois, LinkBotao} from '../style';

const ProjetoVinteCinco = () => (
    <Carddois>
        <Titulo> Loja virtual com testes no Redux </Titulo>
        <Paragrafo tipo="secundario">
        Este projeto é uma loja virtual utilizando React, incorporando Redux para otimizar a reatividade às ações dos usuários. Nesta aplicação, os clientes podem adicionar e remover itens do carrinho 
        de compras, com atualizações automáticas de valores e itens em tempo real. Além disso, foram configurados testes de estabilidade e funcionalidade para a store, reducers e actions, 
        garantindo que funcionalidades existentes possam ser testadas de forma prática a cada funcionalidade introduzida no código
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Modulo33-exemplo-Testes-de-integracao-store" target="_blank"> Visualizar Código </LinkBotao>
    </Carddois>
    )


export default ProjetoVinteCinco;