import Paragrafo from "../../paragrafo";
import {Titulo} from "../../title";
import { Card, LinkBotao} from '../style';

const ProjetoTreza = () => (
    <Card>
        <Titulo> Pagina Restaurante </Titulo>
        <Paragrafo tipo="secundario">
        Este projeto envolve a criação de uma página de um restaurante, utilizando o Bootstrap. O objetivo é desenvolver uma interface atrativa que 
        destaque os pratos, serviços e ambiente oferecidos pelo restaurante, proporcionando aos visitantes uma experiência online que os incentive a visitar o local.
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/modulo14-exemplo" target="_blank"> Visualizar Código </LinkBotao>
    </Card>
    )

    
export default ProjetoTreza;