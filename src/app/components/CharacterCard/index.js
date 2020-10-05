import React from 'react';
import { Image } from 'react-native';
import { Left, Card, CardItem, Text, Body } from 'native-base';
import styles from './styles';

const CharacterCard = ({ character: { name, status, image } }) => {
  return (
    <Card>
      <CardItem>
        <Left>
          <Body>
            <Text>{name}</Text>
            <Text note>{status}</Text>
          </Body>
        </Left>
      </CardItem>
      <CardItem cardBody>
        <Image source={{uri: `${image}`}} style={styles.image}/>
      </CardItem>
    </Card>
  )
};

export default CharacterCard;