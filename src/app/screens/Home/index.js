import React, { useEffect, useState } from 'react';
import { FlatList, Image } from 'react-native';
import { fetchCharacters } from '../../../services/api';
import { Container, Header, Left, Right, Title, Content, Card, CardItem, Text, Body, Spinner } from 'native-base';
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

  const renderItem = ({ item }) => (
    <Card>
      <CardItem>
        <Left>
          <Body>
            <Text>{item.name}</Text>
            <Text note>{item.status}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image source={{uri: `${item.image}`}} style={{height: 200, width: null, flex: 1}}/>
      </CardItem>
    </Card>
  )

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
          // : allCharacters?.results.map((char, i) => <Text key={i}>{char.name}</Text>)
          
        }
      </Content>
    </Container>
  );
}

export default Home;