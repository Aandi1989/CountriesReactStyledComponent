import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { IoMoon, IoMoveOutline } from 'react-icons/io5'

import { Container } from './Container';

const HeaderEl = styled.header`
box-shadow:var(--shadow);
background-color:(--colors-ui-base);

`;

const Wrapper = styled.div``;

const Title = styled.a.attrs({
    href:'/',
})``;

const ModeSwitcher = styled.div``;

export const Header = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  useEffect(() => {
    document.body.setAttribute('data-theme', theme)
  }, [theme])
  return (
    <HeaderEl>
        <Container>
            <Wrapper>
                <Title>Where is the world?</Title>
                <ModeSwitcher onClick={toggleTheme}>
                    <IoMoon/> Light Theme
                </ModeSwitcher>
            </Wrapper>
        </Container>
    </HeaderEl>
  )
}
