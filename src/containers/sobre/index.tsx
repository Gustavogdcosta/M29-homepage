import {Titulo} from "../../components/title";
import Paragrafo from "../../components/paragrafo";
import { SecaoSobre } from "./styles";


const Sobre = () => (
    <section>
        <Titulo fontSize={1.5}>
            Sobre mim
        </Titulo>
        <SecaoSobre>
        <Paragrafo tipo="principal">
        Descobri minha paixão e aptidão no desenvolvimento de sistemas, capacitando-me como desenvolvedor Full Stack. Minha expertise inclui a criação de aplicações web com as 
        melhores práticas de design, utilizando frameworks modernos, além de manter a responsividade de todo o projeto funcionando da melhor forma possível. Na EBAC, adquiri 
        habilidades abrangentes em desenvolvimento back-end e front-end, além de experiência em integração de sistemas e testes com APIs. Com 8 anos de experiência como engenheiro, 
        desenvolvi habilidades sólidas, técnicas e pessoais, além de ter liderado equipes de profissionais de projeto. Agora trago essa experiência para a área de desenvolvimento. 
        Além disso, planejo expandir meus conhecimentos com cursos adicionais em Desenvolvimento de Aplicativos e obter um bacharelado em Engenharia de Software para aprimorar ainda 
        mais minha carreira no desenvolvimento de software.
        </Paragrafo>
        </SecaoSobre>
    </section>
)

export default Sobre