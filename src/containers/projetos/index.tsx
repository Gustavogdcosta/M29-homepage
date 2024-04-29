import Projeto from "../../components/Projeto/1-ProdutosEletronicos";
import ProjetoDez from "../../components/Projeto/10-Sorteador";
import ProjetoOnze from "../../components/Projeto/11-LojaVirtual";
import ProjetoDoze from "../../components/Projeto/12-Projeto";
import ProjetoTreza from "../../components/Projeto/13-Restaurante";
import ProjetoQuatorze from "../../components/Projeto/14-Animelist";
import ProjetoQuinze from "../../components/Projeto/15-Paginadenoticias";
import ProjetoDezesseis from "../../components/Projeto/16-Paginadevendas";
import ProjetoDezessete from "../../components/Projeto/17-GameShop";
import ProjetoDezoito from "../../components/Projeto/18-PortalPaodeQueijo";
import ProjetoDezenove from "../../components/Projeto/19-ListaDetarefas";
import ProjetoDois from "../../components/Projeto/2-Lojacarrinho";
import ProjetoVinte from "../../components/Projeto/20-GaleriaDefotos";
import ProjetoVinteEUm from "../../components/Projeto/21-ListadeContatos";
import ProjetoVinteDois from "../../components/Projeto/22-AplicacaoFetch";
import ProjetoVinteTres from "../../components/Projeto/23-Listadetarefas";
import ProjetoTres from "../../components/Projeto/3-Portfolio";
import ProjetoQuatro from "../../components/Projeto/4-PortaldeEmpregos";
import ProjetoCinco from "../../components/Projeto/5-Listadetarefas";
import ProjetoSeis from "../../components/Projeto/6-CalculadoraVue";
import ProjetoSete from "../../components/Projeto/7-LandingPage";
import ProjetoOito from "../../components/Projeto/8-LandingpageAniversario";
import ProjetoNove from "../../components/Projeto/9-Avatarworld";
import Titulo from "../../components/title";
import { Lista } from "./style";

const Projetos = () => (
    <section>
        <Titulo fontSize={20}>Portfólio de Projetos</Titulo>
        <Titulo fontSize={18}> Projetos utilizando React com Redux </Titulo>
        <Lista>
            <li>
                <ProjetoVinteTres />
            </li>
            <li>
                <Projeto />
            </li>
            <li>
                <ProjetoDois />
            </li>
        </Lista>
        <Titulo fontSize={18}> Projetos utilizando React </Titulo>
        <Lista>
            <li>
                <ProjetoTres />
            </li>
            <li>
                <ProjetoQuatro />
            </li>
        </Lista>
        <Titulo fontSize={18}> Projetos utilizando VueJS </Titulo>
        <Lista>
            <li>
                <ProjetoCinco />
            </li>
            <li>
                <ProjetoSeis />
            </li>
        </Lista>
        <Titulo fontSize={18}> Projetos utilizando Parcel </Titulo>
        <Lista>
            <li>
                <ProjetoSete />
            </li>
            <li>
                <ProjetoOito />
            </li>
        </Lista>
        <Titulo fontSize={16}> Sass ou Less atribuidos ao Gulp ou Grunt </Titulo>
        <Lista>
            <li>
                <ProjetoNove />
            </li>
            <li>
                <ProjetoDez />
            </li>
            <li>
                <ProjetoOnze />
            </li>
        </Lista>
        <Titulo fontSize={18}> Projetos utilizando Bootstrap </Titulo>
        <Lista>
            <li>
                <ProjetoDoze />
            </li>
            <li>
                <ProjetoTreza />
            </li>
            <li>
                <ProjetoQuatorze />
            </li>
        </Lista>
        <Titulo fontSize={18}> Programação convencional </Titulo>
        <Lista>
            <li>
                <ProjetoQuinze />
            </li>
            <li>
                <ProjetoDezesseis />
            </li>
            <li>
                <ProjetoDezessete />
            </li>
            <li>
                <ProjetoDezoito />
            </li>
        </Lista>
        <Titulo fontSize={18}> JQuery e Fetch Api </Titulo>
        <Lista>
            <li>
                <ProjetoDezenove />
            </li>
            <li>
                <ProjetoVinte />
            </li>
            <li>
                <ProjetoVinteEUm />
            </li>
            <li>
                <ProjetoVinteDois />
            </li>
        </Lista>
    </section>
)

export default Projetos