import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    background: no-repeat center url(/public/img/pille-riin.jpg);
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

    padding-top: 25px;
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

const SliderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    max-width: 970px;
    margin: 0 auto;

    position: relative;
`;

const ContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-top: 100px;
`;

const Text1 = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 35px;
    font-weight: bold;
    color: white;
`;

const Text2 = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 35px;
    font-weight: bold;
    color: white;
`;

const Span = styled.span`
    font-family: 'Stalinist One', cursive;
    font-size: 35px;
    font-weight: bold;
    color: #fd1c44;
`;

const Button = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    width: 230px;
    height: 55px;

    background: #fd1c44;
    color: white;

    &:hover {
        background: #ff3f5f;
    }

    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    cursor: pointer;

    margin-top: 50px;
`;

const Img = styled.img`
    position: absolute;
    right: -130px;
`;

const Slider = () => {
    return (
        <Wrapper>
            <MenuWrapper>
                <img src="/public/img/logo.png" alt="logo"/>
                <MenuItems>
                    <MenuItem active>Главная</MenuItem>
                    <MenuItem>Меню</MenuItem>
                    <MenuItem>Новости</MenuItem>
                    <MenuItem>Акции</MenuItem>
                    <MenuItem>Рестораны</MenuItem>
                    <MenuItem>География доставки</MenuItem>
                </MenuItems>
            </MenuWrapper>
            <SliderWrapper>
                <ContentWrapper>
                    <Text1>Бесплатная доставка при</Text1>
                    <Text2>заказе <Span>от 800 руб.</Span></Text2>
                    <Button>Перейти к заказу</Button>
                </ContentWrapper>
                <Img src="/public/img/sushi_main.png">

                </Img>
            </SliderWrapper>
        </Wrapper>
        
    );
};

export default Slider;
