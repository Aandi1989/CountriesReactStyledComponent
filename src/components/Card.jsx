import React from 'react';
import styled from 'styled-components';

import uuid from 'react-uuid';

const Wrapper = styled.article``;

const CardImage = styled.img``;

const CardBody = styled.div``;

const CardTitle = styled.h3``;

const CardList = styled.ul``;

const CardListItem = styled.li``;

export const Card = ({img, name, info=[], onClick}) => {
    // console.log(info)
  return (
    <Wrapper onClick={onClick}>
        <CardImage/>
        <CardBody>
            <CardTitle>{name}</CardTitle>
            <CardList>
                {info.map(el => {
                   return  (
                   <CardListItem key={uuid()}>
                    <b>{el.title}:</b> {el.description}
                   </CardListItem>)
                })}
            </CardList>
        </CardBody>
    </Wrapper>
  )
}
