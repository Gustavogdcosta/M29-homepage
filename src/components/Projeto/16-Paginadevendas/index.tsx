import Paragrafo from "../../paragrafo";
import {Titulo} from "../../title";
import { Card, LinkBotao} from '../style';

const ProjetoDezesseis = () => (
    <Card>
        <Titulo> Loja Virtual </Titulo>
        <Paragrafo tipo="secundario">
        A página inicial da loja apresenta uma variedade de produtos organizados em categorias. Cada produto é exibido com uma imagem, título, preço e botão de adição ao carrinho. 
        Os usuários podem ver mais detalhes, como descrição, opções de tamanho e cor, e adicionar itens ao carrinho de compras.
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/EBAC-modulo10-2xemplo" target="_blank"> Visualizar Código </LinkBotao>
    </Card>
    )


export default ProjetoDezesseis;