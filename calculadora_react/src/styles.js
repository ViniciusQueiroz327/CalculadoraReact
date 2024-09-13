import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #7a7777;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const Content = styled.div`
    background-color: #cfcccc;
    width: 80vw;
    border: 2px solid #000000;
    border-radius: 15px;
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.5);

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