import React, { useEffect, useState } from 'react';
import { fetchCharacters } from '../../../services/api';
import { Container, Header, Left, Right, Title, Content, Card, CardItem, Text, Body, Spinner } from 'native-base';

function Home() {
  const [allCharacters, setAllCharacters] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCharacters()
  }, [])

  const getCharacters = async () => {
    setLoading(true)
    let data = await fetchCharacters();
    setAllCharacters(data)
    setLoading(false)
  }

  return (
    <Container>
        <Header>
          <Left />
          <Body>
            <Title>Holo</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {loading 
            ? <Spinner /> 
            : allCharacters?.results.map((char, i) => <Text key={i}>{char.name}</Text>)}
        </Content>
      </Container>
  );
}

export default Home;