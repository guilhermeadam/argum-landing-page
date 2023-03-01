import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;

  > div {
    width: 45%;
  }

  h1 {
    color: #186D77;
    font-size: 56px;
    font-weight: bold;
  }

  h6 {
    font-size: 16px;
    color: rgba(30, 37, 94, 0.7);
    font-weight: normal;
    padding-right: 150px;
    margin-top: 24px;
  }
`;
