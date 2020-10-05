import React, { useEffect, useState, useCallback } from 'react';
import { FlatList } from 'react-native';
import { fetchCharacters } from '../../../services/api';
import { Container, Header, Left, Right, Title, Content, Body, Spinner } from 'native-base';
import CharacterCard from '../../components/CharacterCard';
import styles from './styles';

function Home() {
  const [allCharacters, setAllCharacters] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCharacters()
  }, [])

  const getCharacters = async () => {
    setLoading(true)
    let data = await fetchCharacters();
    setAllCharacters(data.results)
    setLoading(false)
  }

  const renderItem = ({ item }) => <CharacterCard character={item} />

  return (
    <Container style={styles.container}>
      <Header style={styles.header}>
        <Left />
        <Body>
          <Title>Rick and Morty</Title>
        </Body>
        <Right />
      </Header>
      <Content style={styles.content}>
        {loading 
          ? <Spinner color='blue' /> 
          : <FlatList
              data={allCharacters}
              renderItem={renderItem}
            />
        }
      </Content>
    </Container>
  );
}

export default Home;