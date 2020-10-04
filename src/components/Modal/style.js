import styled from "styled-components";

export const Modal = styled.div`
    display: inline-flex;
    z-index: 1;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%;
    background-color: rgba(0,0,0,0.4);
`

export const ModalContent = styled.div`
    background-color: white;
    padding: 20px;
    border: 2px solid #BDBDBD;
    width: 20%;
    margin: auto;
`

export const Message = styled.div`
    font-size: 32px;
    color: ${({ communist }) => communist ? "#ef5350" : "#0097A7"};
`