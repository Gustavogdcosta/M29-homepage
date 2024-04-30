import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import {Card, LinkBotao} from '../style';

const ProjetoDois = () => (
    <Card>
        <Titulo> Loja de artigos esportivos </Titulo>
        <Paragrafo tipo="secundario">
        Trata-se de um portal de compras virtual desenvolvido com React, onde o Redux é empregado para gerenciar a interação entre o código e as modificações 
        efetuadas pelo usuário no carrinho de compras e nos favoritos. Este sistema é projetado para atualizar automaticamente esses elementos em resposta às ações do usuário.
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Modulo28_entrega_ebac_sports" target="_blank"> Visualizar Código </LinkBotao>
    </Card>
    )



    
export default ProjetoDois;