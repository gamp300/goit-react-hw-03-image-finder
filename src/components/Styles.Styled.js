import styled from 'styled-components';

export const Container = styled.div`
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

export const Button = styled.button`
  margin: 10px;
  padding: 5px;
  border-radius: 9px;
  border: 1px solid gray;
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

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
`;
/* 

@media screen and (min-width: 900px) {
  input {
    width: 300px;
  }
  .gallery {
    grid-template-columns: 1fr 1fr 1fr;
  }
  .photo-card {
    width: calc(31vw - 5px);
    height: calc(26vw - 5px);
  }
  .info {
    font-size: 12px;
  }
}

@media screen and (min-width: 1200px) {
  input {
    width: 320px;
  }
  .gallery {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
  }
  .photo-card {
    width: calc(24vw - 5px);
    height: calc(20vw - 5px);
  }
}

.btn-container {
  display: flex;
  justify-content: center;
}

.load-more {
  margin-bottom: 10px;
  width: 202px;
  min-height: 50px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.875;
  letter-spacing: 0.06em;
  color: white;
  background-color: midnightblue;
  border: none;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  cursor: pointer;
  text-align: center;
}

.up-btn {
  position: fixed;
  right: 0;
  bottom: 0;
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  background-color: midnightblue;
  border: none;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.15);
  border-radius: 50px;
  cursor: pointer;
  text-align: center;
} */
