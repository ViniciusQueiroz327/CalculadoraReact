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
    width: 80vw;
    border-radius: 15px;
    padding: 15px;
    box-shadow: inset 2px 3px 4px 0px #535454, 3px 4px 10px #00000077;
    @media (max-width: 340px) {
        width: 85vw;
  }

    @media (min-width: 760px) {
        width: 60vw;
  }

    @media (min-width: 940px) {
        width: 50vw;
  }

    @media (min-width: 1224px) {
        width: 30vw;
  }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`