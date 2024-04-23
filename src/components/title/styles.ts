import styled from 'styled-components'

import {Props} from './index';

export const Titulo = styled.h3<Props>`
    color: ${(props) => props.theme.corPrinciapal};;
    font-size: ${((props) => (props.fontSize ? props.fontSize + 'px' : '14px'))};
    font-weight: bold;
    white-space: nowrap;
    margin-bottom: 16px;
`;
