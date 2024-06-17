import styled from 'styled-components'

import {Props} from './index';

export const TituloSecoes = styled.h3<Props>`
    color: ${(props) => props.theme.corPrinciapal};
    font-size: ${((props) => (props.fontSize ? props.fontSize + 'px' : '14px'))};
    font-weight: bold;
    white-space: nowrap;
    margin-bottom: 5px;
`;

export const Titulo = styled.h3<Props>`
    color: ${(props) => props.theme.corPrinciapal};
    font-size: ${((props) => (props.fontSize ? props.fontSize + 'px' : '14px'))};
    font-weight: bold;
    white-space: nowrap;
    margin-top: 10px;
    margin-bottom: 20px;
`
