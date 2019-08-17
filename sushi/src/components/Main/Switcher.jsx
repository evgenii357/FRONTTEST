import React from 'react';
import SwitcherItem from './SwitcherItem';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;    

    width: 100%;
    height: 120px;

    box-shadow: 0 0.1px 10px rgba(80, 78, 78, 0.1);
`;

const imgUrls = [
    {
        url: '/img/002-sushi.png',
        title: 'Суши'
    },
    {
        url: '/img/001-fish.png',
        title: 'Роллы №1'
    },
    {
        url: '/img/003-sushi-1.png',
        title: 'Роллы №2'
    },
    {
        url: '/img/004-noodles.png',
        title: 'Воки'
    },
    {
        url: '/img/005-soup.png',
        title: 'Супы'
    }
];

const Switcher = () => {
    return (
        <Wrapper>
            {imgUrls.map((value, index) => <SwitcherItem key={index} imgUrl={value.url} title={value.title} />)}
        </Wrapper>
    );
};

export default Switcher;
