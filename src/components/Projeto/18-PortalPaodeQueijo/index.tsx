import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { BotaoVizitarSite, Card, LinkBotao} from '../style';

const ProjetoDezoito = () => (
    <Card>
        <Titulo> Portal Pão de Queijo </Titulo>
        <Paragrafo tipo="secundario">
        Este projeto consiste em uma loja virtual simples dedicada à venda de pão de queijo e à disponibilização de receitas relacionadas, utilizando apenas HTML, CSS e JavaScript padrão. 
        Optar por essas tecnologias básicas permite criar uma experiência de usuário funcional e acessível sem depender de frameworks ou bibliotecas externas.
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Entrega-projeto1-css" target="_blank"> Visualizar Código </LinkBotao>
        <BotaoVizitarSite href="https://portalpaodequeijo.vercel.app/" target="_blank"> Visitar Site </BotaoVizitarSite>
    </Card>
    )

    
export default ProjetoDezoito;