import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/paragrafo"
import {Titulo} from "../../components/title"
import {BotaoTema, Descricao, SidebarContainer} from './styles'

type Props = {
    trocatema: () => void;
}

const Sidebar = (props: Props) => (
    <aside>
        <SidebarContainer>
            <Avatar/>
            <Titulo fontSize={1.3}>Gustavo Costa</Titulo>
            <Paragrafo tipo="secundario" fontSize={0.9}> Gustavogdcosta </Paragrafo>
            <Descricao tipo="principal" fontSize={0.9}>Full-Stack Developer</Descricao>
            <BotaoTema onClick={props.trocatema}> Trocar tema </BotaoTema>
        </SidebarContainer>
    </aside>
)

export default Sidebar