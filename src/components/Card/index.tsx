import { FiThumbsUp } from "react-icons/fi";
import React from "react";

import {
  CardContainer,
  ImageBackground,
  Content,
  UserInfo,
  UserPicture,
  PostInfo,
  HasInfo,
} from "./styles";
const Card = () => {
  return (
    <CardContainer>
      <ImageBackground src="https://hermes.digitalinnovation.one/tracks/cover/8c498256-7acb-4b81-b001-41be4bd1bf47.png" />
      <Content>
        <UserInfo>
          <UserPicture src="https://avatars.githubusercontent.com/u/95863318?s=400&u=f9a333c517e20792ce53f09d3afdb24257a27005&v=4" />
          <div>
            <h4>JACKSON SOUSA</h4>
            <p>Há 11 minutos</p>
          </div>
        </UserInfo>
        <PostInfo>
          <h4>Projeto para curso de HTML e CSS </h4>
          <p>
            Projeto feito no curso de html e css no bootcamp da dio do Global
            avanade...<strong>Saiba Mais</strong>
          </p>
        </PostInfo>
        <HasInfo>
          <h4>#HTML #CSS #Javascript</h4>
          <p>
            <FiThumbsUp />
            213
          </p>
        </HasInfo>
      </Content>
    </CardContainer>
  );
};

export { Card };
