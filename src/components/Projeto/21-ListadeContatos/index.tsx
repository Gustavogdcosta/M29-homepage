import Paragrafo from "../../paragrafo";
import Titulo from "../../title";
import { BotaoVizitarSite, Cardtres, LinkBotao} from '../style';

const ProjetoVinteEUm = () => (
    <Cardtres>
        <Titulo> Lista de Contatos </Titulo>
        <Paragrafo tipo="secundario">
        Este projeto é uma loja virtual simples desenvolvida utilizando HTML, CSS e JavaScript, com a inclusão da biblioteca jQuery para aprimorar a interatividade e funcionalidades da página. 
        A loja virtual oferece aos visitantes uma experiência de compra intuitiva e agradável, permitindo que eles naveguem e se encantem pelos produtos
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Projeto2EBAC" target="_blank"> Visualizar Código </LinkBotao>
        <BotaoVizitarSite href="https://gustavo-projeto2-ebac.vercel.app/" target="_blank"> Visitar Site </BotaoVizitarSite>
    </Cardtres>
    )

    
export default ProjetoVinteEUm;