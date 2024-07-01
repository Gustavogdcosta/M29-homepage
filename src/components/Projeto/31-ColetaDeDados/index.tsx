import Paragrafo from "../../paragrafo";
import {Titulo} from "../../title";
import { Card, LinkBotao} from '../style';

const ProjetoTrintaUm = () => (
    <Card>
        <Titulo> Coleta de Dados </Titulo>
        <Paragrafo tipo="secundario">
        Desenvolvi uma aplicação orientada a objetos em Java, projetada para coletar informações dos usuários e criar uma lista ordenada de 
        pessoas com base nos nomes fornecidos. A aplicação também organiza os dados em grupos por gênero, conforme especificado pelos usuários. 
        Todas as informações são inseridas dinamicamente, oferecendo uma experiência personalizada e interativa. 
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/m12-backend-entrega" target="_blank"> Visualizar Código </LinkBotao>
    </Card>
    )


export default ProjetoTrintaUm;