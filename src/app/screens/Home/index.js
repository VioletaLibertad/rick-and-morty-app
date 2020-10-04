import React from 'react';
import { Container, Header, Left, Right, Title, Content, Card, CardItem, Text, Body } from 'native-base';

function Home() {
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
          <Card>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  //Your text here
                </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
  );
}

export default Home;