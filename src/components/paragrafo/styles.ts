import styled from 'styled-components'
import { Props } from '.';

export const P = styled.p<Props>`
    font-size: ${(props) => (props.fontSize ? props.fontSize + 'em' : '0.75em')};
    text-align: justify;
    color: ${(props) => (props.tipo === 'principal' ? props.theme.corPrinciapal : props.theme.corSecundaria)};
    line-height: 22px;
`;
