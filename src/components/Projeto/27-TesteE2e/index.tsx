import Paragrafo from "../../paragrafo";
import {Titulo} from "../../title";
import { CardQuatro, LinkBotao} from '../style';

const ProjetoVinteSete = () => (
    <CardQuatro>
        <Titulo> EbacJobs- TesteE2E </Titulo>
        <Paragrafo tipo="secundario">
        Teste de Integração E2E para o site do EBAC Jobs realizado com cypress, disponível entre os arquivos do portfólio. O teste é realizado em várias etapas. 
        A primeira etapa consiste em acessar o endereço corretamente e verificar se as vagas estão dispostas de maneira adequada. 
        Em seguida, é testado o mecanismo de buscas e a funcionalidade de seleção de vagas. 
        Por fim, é avaliado o preenchimento do formulário de inscrição, garantindo que as opções de sucesso e falha estejam funcionando 
        corretamente. Este processo assegura que futuras implementações de novas funcionalidades não comprometam as funcionalidades 
        já existentes.
        </Paragrafo>
        <LinkBotao href="https://github.com/Gustavogdcosta/Modulo34-exercicio-TesteE2E" target="_blank"> Visualizar Código </LinkBotao>
    </CardQuatro>
    )


export default ProjetoVinteSete;