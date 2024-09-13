import styled from 'styled-components';

export const InputContainer = styled.div`
    width: 100%;
    height: 75px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    font-size: 2rem;
    font-family: 'Roboto';

    input {
        box-shadow: 3px 2px 8px 0px rgba(0, 0, 0, 0.7);
        width: 100%;
        height: 75px;
        background-color: #cfcccc;
        border: 0;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        align: right;
        padding: 0 10px;
        font-size: 2.5rem;
        font-weight: 700;
        font-family: 'Roboto';
        color: #FFFFFF;
    }
`