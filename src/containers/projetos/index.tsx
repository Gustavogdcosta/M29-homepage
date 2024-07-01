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
import ProjetoVinteQuatro from "../../components/Projeto/24-listadecontatos";
import ProjetoVinteCinco from "../../components/Projeto/25-Testecomstore";
import ProjetoVinteSeis from "../../components/Projeto/26-testeunitarioReact";
import ProjetoTres from "../../components/Projeto/3-Portfolio";
import ProjetoQuatro from "../../components/Projeto/4-PortaldeEmpregos";
import ProjetoCinco from "../../components/Projeto/5-Listadetarefas";
import ProjetoSeis from "../../components/Projeto/6-CalculadoraVue";
import ProjetoSete from "../../components/Projeto/7-LandingPage";
import ProjetoOito from "../../components/Projeto/8-LandingpageAniversario";
import ProjetoNove from "../../components/Projeto/9-Avatarworld";

import {Titulo, TituloSecoes} from "../../components/title";
import { Lista } from "./style";

import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion";
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import './CustomAccordions.css'
import ProjetoVinteSete from "../../components/Projeto/27-TesteE2e";
import ProjetoVinteoito from "../../components/Projeto/28-testeE2E";
import ProjetoVinteNove from "../../components/Projeto/29-Eplay";
import ProjetoTrintaUm from "../../components/Projeto/31-ColetaDeDados";


const Projetos = () => (
    <section>
        <Titulo fontSize={1.5}>Portfólio de Projetos</Titulo>
        <Accordion className="detailsPrincipal" allowZeroExpanded>
            <AccordionItem uuid={"Front-End"}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <Titulo fontSize={1.2}>Projetos de Front-End</Titulo>
                        <span className="icon">
                        <FaChevronDown className="collapsed" />
                        <FaChevronUp className="expanded" />
                        </span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <details className="detailsItem">
                        <summary><TituloSecoes fontSize={1}> Integração e Mutação de API </TituloSecoes></summary>
                        <Lista>
                            <li>
                                <ProjetoVinteNove />
                            </li>
                        </Lista>

                    </details>

                <details className="detailsItem">
                        <summary><TituloSecoes fontSize={1}> Projetos com testes E2E - Cypress </TituloSecoes></summary>
                        <Lista>
                            <li>
                                <ProjetoVinteSete />
                            </li>
                            <li>
                                <ProjetoVinteoito />
                            </li>
                        </Lista>

                    </details>

                    <details className="detailsItem">
                        <summary><TituloSecoes fontSize={1}> Projetos com testes de integração - React </TituloSecoes></summary>
                        <Lista>
                            <li>
                                <ProjetoVinteCinco />
                            </li>
                            <li>
                                <ProjetoVinteSeis />
                            </li>
                        </Lista>

                    </details>
                    
                    <details className="detailsItem">
                        <summary><TituloSecoes fontSize={1}> Projetos utilizando React com Redux </TituloSecoes></summary>
                        <Lista>
                            <li>
                                <ProjetoVinteQuatro />
                            </li>
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
                    </details>
                    
                    <details className="detailsItem">
                        <summary>
                    <TituloSecoes fontSize={1}> Projetos utilizando React </TituloSecoes>
                        </summary>
                    <Lista>
                        <li>
                            <ProjetoTres />
                        </li>
                        <li>
                            <ProjetoQuatro />
                        </li>
                    </Lista>
                    </details>

                    <details className="detailsItem">
                        <summary>
                    <TituloSecoes fontSize={1}> Projetos utilizando VueJS </TituloSecoes>
                        </summary>
                    <Lista>
                        <li>
                            <ProjetoCinco />
                        </li>
                        <li>
                            <ProjetoSeis />
                        </li>
                    </Lista>
                    </details>

                    <details className="detailsItem">
                        <summary>
                    <TituloSecoes fontSize={1}> Projetos utilizando Parcel </TituloSecoes>
                        </summary>
                    <Lista>
                        <li>
                            <ProjetoSete />
                        </li>
                        <li>
                            <ProjetoOito />
                        </li>
                    </Lista>
                    </details>

                    <details className="detailsItem">
                        <summary>
                    <TituloSecoes fontSize={1}> Sass ou Less atribuidos ao Gulp ou Grunt </TituloSecoes>
                        </summary>
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
                    </details>

                    <details className="detailsItem">
                        <summary>
                    <TituloSecoes fontSize={1}> Projetos utilizando Bootstrap </TituloSecoes>
                        </summary>
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
                    </details>

                    <details className="detailsItem">
                        <summary>
                    <TituloSecoes fontSize={1}> Programação convencional </TituloSecoes>
                        </summary>
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
                    </details>

                    <details className="detailsItem">
                        <summary>
                    <TituloSecoes fontSize={1}> JQuery e Fetch Api </TituloSecoes>
                        </summary>
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
                    </details>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
        
        <Accordion className="detailsPrincipal" allowZeroExpanded>
            <AccordionItem uuid={"Front-End"}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <Titulo fontSize={1.2}>Projetos de Back-End</Titulo>
                        <span className="icon">
                        <FaChevronDown className="collapsed" />
                        <FaChevronUp className="expanded" />
                        </span>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <details className="detailsItem">
                        <summary>
                        <TituloSecoes fontSize={1}> Programação Orientada a Objetos - Java </TituloSecoes>
                        </summary>
                            <Lista>
                                <li>
                                    <ProjetoTrintaUm/>
                                </li>
                            </Lista>
                        </details>
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    </section>
)

export default Projetos