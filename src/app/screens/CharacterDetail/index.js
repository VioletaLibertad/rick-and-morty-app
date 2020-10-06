import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { fetchSingleCharacter } from '../../../services/api';
import { Card, CardItem, Text, Spinner, H1 } from 'native-base';
import styles from './styles';

const CharacterDetail = ({ route }) => {
  const { id } = route.params;

  const [character, setCharacter] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSingleCharacter()
  }, []);

  const getSingleCharacter = async () => {
    setLoading(true);
    let data = await fetchSingleCharacter(id);
    setCharacter(data);
    setLoading(false);
  };

  return (
    <Card style={styles.card_characterDetail}>
      {loading 
        ? <Spinner color='blue' /> 
        : <>
            <CardItem header>
              <H1>{character.name}</H1>
            </CardItem>
            <CardItem>
              <Text>Status: </Text>
              <Text>{character.status}</Text>
            </CardItem>
            <CardItem>
              <Text>Species: </Text>
              <Text>{character.species}</Text>
            </CardItem>
            <CardItem>
              <Text>Gender: </Text>
              <Text>{character.gender}</Text>
            </CardItem>
            <CardItem>
              <Text>Origin: </Text>
              <Text>{character.origin.name}</Text>
            </CardItem>
            <CardItem>
              <Text>Location: </Text>
              <Text>{character.location.name}</Text>
            </CardItem>
            <CardItem cardBody style={styles.card_imgContainer}>
              <Image source={{uri: `${character.image}`}} style={styles.image} resizeMode='cover'/>
            </CardItem>
          </>
        }
    </Card>
  )
};

export default CharacterDetail;