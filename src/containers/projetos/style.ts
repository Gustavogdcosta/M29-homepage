import styled from "styled-components";

export const Lista = styled.ul`
    @media (min-width: 769px) {
        display: grid;
        grid-template-columns: 50% 50%;
        column-gap: 10px;
        row-gap: 10px;
        margin-bottom: 40px;
    }

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        column-gap: 0;

        li {
            margin-bottom: 16px;
        }
    }
`