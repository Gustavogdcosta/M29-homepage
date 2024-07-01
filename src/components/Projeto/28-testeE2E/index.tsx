import Paragrafo from "../../paragrafo";
import {Titulo} from "../../title";
import { CardQuatro, LinkBotao} from '../style';

const ProjetoVinteoito = () => (
    <CardQuatro>
        <Titulo> Agenda - TesteE2E </Titulo>
        <Paragrafo tipo="secundario">
        Teste de Integração E2E para a aplicação de Agenda realizado com cypress, disponível entre os arquivos do portfólio. O teste é realizado em várias etapas. 
        A primeira etapa consiste em acessar o endereço corretamente. 
        Em seguida, é testado o mecanismo adição e edição de contato, sendo vericado cada campo existente. 
        Por fim, a exclusao do contato e verificando se ele foi excluido corretamente da Agenda.
        Todo o processo é filmado e e printando para veriricar o teste está executando corretamente. 
        Este processo assegura que futuras implementações de novas funcionalidades não comprometam as funcionalidades 
        já existentes.
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Modulo34-entrega-Teste-E2E" target="_blank"> Visualizar Código </LinkBotao>
    </CardQuatro>
    )


export default ProjetoVinteoito;