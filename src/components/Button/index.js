import styled from "styled-components";

const Button = styled.button`
    
    width: 100%;
    padding: 20px 30px;
    margin-top: 30px;

    border: 1px solid #516391;
    border-radius: 4px;
    background-color: #0e101c;
    
    font-size: inherit;
    color: #f2f2f2;

    transition: .5s;

    &:hover {
        border: 1px solid #bf1650;
        cursor: pointer;
    }
`;  

export default Button;