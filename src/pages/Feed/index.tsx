import { Card } from "../../components/Card";
import { UserInfo } from "../../components/UserInfo";

import { Header } from "../../components/Header";

import { Container, Column, Title, TitleHighlight } from "./styles";

const Feed = () => {
  return (
    <>
      <Header autenticado={true} />
      <Container>
        <Column flex={3}>
          <Title>Feed</Title>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </Column>
        <Column flex={1}>
          <TitleHighlight> # RANKING 3 TOP DA SEMANA </TitleHighlight>
          <UserInfo
            nome="Jackson Sousa"
            image="https://avatars.githubusercontent.com/u/95863318?s=400"
            percentual={85}
          />
          <UserInfo
            nome="Jackson Sousa"
            image="https://avatars.githubusercontent.com/u/95863318?s=400"
            percentual={65}
          />
          <UserInfo
            nome="Jackson Sousa"
            image="https://avatars.githubusercontent.com/u/95863318?s=400"
            percentual={45}
          />
        </Column>
      </Container>
    </>
  );
};

export { Feed };
