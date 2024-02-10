import styled from 'styled-components';

export const Container = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #212121;
  line-height: 1.5;
  margin: 0;
`;

export const Search = styled.div`
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  margin: 25px auto;
  text-align: center;
`;

export const ButtonSearchMore = styled.button`
  margin: 10px;
  padding: 5px;
  border-radius: 9px;
  border: 1px solid gray;

  &:hover {
    background-color: blue;
    color: white;
  }
`;

export const Input = styled.input`
  margin: 10px;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid gray;
`;

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  padding: 20px;
`;

export const Li = styled.li`
  display: flex;
  margin: 20px;
`;

export const Img = styled.img`
  width: 300px;
`;
