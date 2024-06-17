import Paragrafo from "../../paragrafo";
import {Titulo} from "../../title";
import { BotaoVizitarSite, Card, LinkBotao} from '../style';

const ProjetoDezessete = () => (
    <Card>
        <Titulo> GameShop </Titulo>
        <Paragrafo tipo="secundario">
        A página inicial da loja apresenta uma variedade de produtos especificos do ambiente de Games. Cada produto é exibido com uma imagem, título, preço e botão de adição ao carrinho. 
        Os usuários podem ver mais detalhes, como descrição, opções de tamanho e cor, e adicionar itens ao carrinho de compras.
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/GamesShop" target="_blank"> Visualizar Código </LinkBotao>
        <BotaoVizitarSite href="https://games-shop-wine.vercel.app/" target="_blank"> Visitar Site </BotaoVizitarSite>
    </Card>
    )

    
export default ProjetoDezessete;