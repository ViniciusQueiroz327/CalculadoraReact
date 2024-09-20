import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #c1c9c4;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const Content = styled.div`
    background-color: #242424;
    width: 20vw;
    min-width: 300px;
    max-width: 400px;
    border-radius: 15px;
    padding: 15px;
    box-shadow: inset 4px 4px 6px 0 #535454, inset -4px -4px 6px 0 #535454, 4px 4px 10px 0 #00000077;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`