import styled from "styled-components";

// duas crases: template strings
const Button = styled.button` 
    color: var(--white);
    border: 1px solid var(--white);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 24px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    &:hover, /* & = .ButtonLink */
    &:focus { /* quase tudo que funciona com sass funciona com styled components */
    opacity: .5;
    }
`;

export default Button;