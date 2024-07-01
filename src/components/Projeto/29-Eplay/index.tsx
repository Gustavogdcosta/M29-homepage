import Paragrafo from "../../paragrafo";
import {Titulo} from "../../title";
import { BotaoVizitarSite, CardQuatro, LinkBotao} from '../style';

const ProjetoVinteNove = () => (
    <CardQuatro>
        <Titulo> Eplay </Titulo>
        <Paragrafo tipo="secundario">
        Este é utilizando Redux para criar uma loja virtual com uma interface responsiva e intuitiva. 
        O site é altamente reativo, oferecendo uma experiência de usuário fluida e agradável. Além disso, a aplicação 
        realiza integração e mutação da API conforme as escolhas do usuário, informando as formas de pagamento/parcelamento 
        escolhidas pelo usuário garantindo uma interação dinâmica e personalizada. 
        Este projeto conta com algumas outras funcionalidades, como por exemplo: react-router-dom, manipulação de estados com uso do 
        dispatch e selectors, demonstrando minhas habilidades em gerenciamento de estado com Redux e meu compromisso em criar soluções web eficientes 
        e centradas no usuário.
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/M35-frontend-exercicio" target="_blank"> Visualizar Código </LinkBotao>
        <BotaoVizitarSite href="https://ebacgames-six.vercel.app/" target="_blank"> Visitar Site </BotaoVizitarSite>
    </CardQuatro>
    )

    
export default ProjetoVinteNove;