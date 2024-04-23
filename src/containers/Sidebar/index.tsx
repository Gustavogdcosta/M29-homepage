import Avatar from "../../components/Avatar"
import Paragrafo from "../../components/paragrafo"
import Titulo from "../../components/title"
import {BotaoTema, Descricao, SidebarContainer} from './styles'

type Props = {
    trocatema: () => void;
}

const Sidebar = (props: Props) => (
    <aside>
        <SidebarContainer>
            <Avatar/>
            <Titulo fontSize={18}>Gustavo Costa</Titulo>
            <Paragrafo tipo="secundario" fontSize={16}> Gustavogdcosta </Paragrafo>
            <Descricao tipo="principal" fontSize={12}>Engenheiro Front-End</Descricao>
            <BotaoTema onClick={props.trocatema}> Trocar tema </BotaoTema>
        </SidebarContainer>
    </aside>
)

export default Sidebar