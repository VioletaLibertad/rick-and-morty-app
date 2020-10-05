import React, { useEffect, useState } from 'react';
import { Image } from 'react-native';
import { fetchSingleCharacter } from '../../../services/api';
import { Left, Card, CardItem, Text, Body, Spinner } from 'native-base';
import styles from './styles';

const CharacterDetail = ({ route, navigation }) => {
  const { id } = route.params;

  const [character, setCharacter] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getSingleCharacter()
  }, [])

  const getSingleCharacter = async () => {
    setLoading(true)
    let data = await fetchSingleCharacter(id);
    setCharacter(data)
    setLoading(false)
  }

  return (
    <Card>
      {loading 
        ? <Spinner color='blue' /> 
        : <CardItem header>
            <Text>{character.name}</Text>
          </CardItem>
        }
      {/* <CardItem cardBody>
        <Image source={{uri: `${image}`}} style={styles.image}/>
      </CardItem> */}
    </Card>
  )
};

export default CharacterDetail;