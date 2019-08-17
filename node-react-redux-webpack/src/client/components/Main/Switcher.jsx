import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setActiveCategory } from '../../store/products/actions';
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

// Категории также проставлены в файле products.json по адресу /src/server/db по такому же принципу (1, 2, 3, 4, 5) для того, чтобы можно было
// выводить на экран разные товары))
export const switcherItems = [
    {
        uri: '/public/img/002-sushi.png',
        title: 'Суши',
        category: 1
    },
    {
        uri: '/public/img/001-fish.png',
        title: 'Роллы №1',
        category: 2
    },
    {
        uri: '/public/img/003-sushi-1.png',
        title: 'Роллы №2',
        category: 3
    },
    {
        uri: '/public/img/004-noodles.png',
        title: 'Воки',
        category: 4
    },
    {
        uri: '/public/img/005-soup.png',
        title: 'Супы',
        category: 5
    }
];

const Switcher = () => {
    const selectedCategory = useSelector(state => state.products.activeCategory);

    const dispatch = useDispatch();
    const handleOnClick = useCallback(category => dispatch(setActiveCategory(category)), [dispatch]);

    return (
        <Wrapper>
            {switcherItems.map((value, index) => <SwitcherItem key={index} onClick={handleOnClick} uri={value.uri} title={value.title} category={value.category} active={value.category === selectedCategory} />)}
        </Wrapper>
    );
};

export default Switcher;
