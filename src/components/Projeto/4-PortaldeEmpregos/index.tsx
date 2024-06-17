import Paragrafo from "../../paragrafo";
import {Titulo} from "../../title";
import { Carddois, LinkBotao} from '../style';

const ProjetoQuatro = () => (
    <Carddois>
        <Titulo> Portal de Empregos </Titulo>
        <Paragrafo tipo="secundario">
        Este site é uma plataforma desenvolvida utilizando React, criada com o propósito de servir como um portal de empregos. Ele oferece aos usuários uma experiência abrangente e intuitiva 
        para explorar oportunidades de trabalho em diversos setores e regiões geográficas. O site é projetado para facilitar a conexão entre empregadores e talentos, promovendo um ambiente 
        dinâmico e eficiente para o recrutamento e seleção de pessoal.
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/M29-homepage" target="_blank"> Visualizar Código </LinkBotao>
    </Carddois>
    )



    
export default ProjetoQuatro;