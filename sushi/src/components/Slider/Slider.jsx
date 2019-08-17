import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: no-repeat center url(/img/pille-riin.jpg);
    background-position-y: -87px;
    width: 100%;
    height: 500px;
`;

const MenuWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    max-width: 970px;
    margin: 0 auto;

    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
`;

const MenuItems = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const MenuItem = styled.div`
    margin-left: 20px;
    cursor: pointer;
    color: ${props => props.active ? '#ed143a' : 'black'};

    &:hover {
        color: #fd1c44;
    }
`;

const Slider = () => {
    return (
        <Wrapper>
            <MenuWrapper>
                <img src="/img/logo.png" alt="logo"/>
                <MenuItems>
                    <MenuItem active>Главная</MenuItem>
                    <MenuItem>Меню</MenuItem>
                    <MenuItem>Новости</MenuItem>
                    <MenuItem>Акции</MenuItem>
                    <MenuItem>Рестораны</MenuItem>
                    <MenuItem>География доставки</MenuItem>
                </MenuItems>
            </MenuWrapper>
        </Wrapper>
        
    );
};

export default Slider;
