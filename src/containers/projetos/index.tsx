import Projeto from "../../components/Projeto";
import Titulo from "../../components/title";
import { Lista } from "./style";

const Projetos = () => (
    <section>
        <Titulo fontSize={20}>Portfólio de Projetos</Titulo>
        <Lista>
            <li>
                <Projeto />
            </li>
        </Lista>
    </section>
)

export default Projetos