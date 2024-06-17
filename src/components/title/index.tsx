import {Titulo as TituloEstilo} from './styles'
import { TituloSecoes as EstiloTituloSecoes } from './styles';

export type Props = {
    children: string;
    fontSize?: number;
}

export const Titulo = (props: Props) => (<TituloEstilo fontSize={props.fontSize}>{props.children}</TituloEstilo>)


export const TituloSecoes =  (props: Props) => (<EstiloTituloSecoes fontSize={props.fontSize}>{props.children}</EstiloTituloSecoes>)