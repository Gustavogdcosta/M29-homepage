import Paragrafo from "../../paragrafo";
import {Titulo} from "../../title";
import { Cardtres, LinkBotao} from '../style';

const ProjetoVinteDois = () => (
    <Cardtres>
        <Titulo> Resumo Github </Titulo>
        <Paragrafo tipo="secundario">
        Este projeto consiste em um mostruário de repositórios do GitHub, onde as informações são obtidas através da Fetch API, que é uma interface do JavaScript para realizar requisições HTTP. 
        O objetivo é receber dados do backend que contenham informações sobre os repositórios já criados em uma conta do GitHub e, em seguida, apresentar essas informações de forma resumida na 
        interface do usuário.
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Modulo23-Entrega" target="_blank"> Visualizar Código </LinkBotao>
    </Cardtres>
    )


export default ProjetoVinteDois;