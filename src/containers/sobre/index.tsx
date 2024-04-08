import Titulo from "../../components/title";
import Paragrafo from "../../components/paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
    <section>
        <Titulo fontSize={16}>
            Sobre mim
        </Titulo>
        <Paragrafo tipo="principal">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae consequuntur itaque, quae optio saepe corporis nesciunt, aliquam esse laudantium, sunt officia culpa ex explicabo facilis expedita harum praesentium voluptates? Itaque.
        </Paragrafo>
        <GithubSecao>
            <img src="https://github-readme-stats.vercel.app/api?username=Gustavogdcosta&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"/>
            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=Gustavogdcosta&layout=compact&langs_count=7&theme=dracula"/>
        </GithubSecao>
    </section>
)

export default Sobre