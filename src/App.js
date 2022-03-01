import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

const MainBox = styled.div`
  display: flex;
  flex-flow: row wrap;
  /* align-items: flex-start; */
  line-height: 1.25rem;

  button {
    position: sticky;
    width: 240px;
    padding: 16px;
    height: 80px;
    background-color: rgb(3, 253, 236);
    border-radius: 8px;
    font-size: 14px;
    font-family: 'Roboto';
    border-style: none;
    margin: 3px;
  }

  button:hover {
    background-color: rgba(171, 253, 236);
  }

  button:active {
    background-color: rgba(3, 253, 236);
  }
`;

const Joke = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  width: 240px;
  border-radius: 8px;
  font-size: 14px;
  border: 1px solid grey;
  border-color: rgb(230, 230, 230);
  padding: 16px;
  position: static;
  margin: 3px;
`;

function App() {
  const store = useSelector((store) => store);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'get' })
  }, [])

  return (
    <MainBox>
      <button onClick={() => dispatch({ type: 'kick' })}>MORE</button>
      {store.joke.map((item) => {
        if(item) {
          return <Joke>{item}</Joke>;
        }
      })}
    </MainBox>
  );
}

export default App;
