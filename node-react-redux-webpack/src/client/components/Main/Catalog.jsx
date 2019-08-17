import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setProducts } from '../../store/products/actions';
import { switcherItems } from './Switcher';
import Product from './Product';
import axios from 'axios';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    max-width: 970px;
    background: white;
    margin: 70px auto 110px auto;
`;

const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TitleSpan = styled.div`
    color: #ed143a;
    font-family: 'Stalinist One', cursive;
`;

const LongLine = styled.div`
    width: 70px;
    border-top: 2px solid #ed143a;
    border-right: 5px solid white;

    margin-top: 4px;
    margin-bottom: 4px;
`;

const ShortLine = styled.div`
    width: 50px;
    border-top: 2px solid #ed143a;
    border-right: 5px solid white;
`;

const Filter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const FilterSpan = styled.span`
    color: #ed143a;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: bold;
`;

const FilterPlus = styled.i`
    color: #ed143a;
    margin-top: 2px;
    margin-left: 15px;

    cursor: pointer;
`;

const Products = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    margin-top: 50px;
`;

const useFetching = (activeCategory, setProducts, dispatch) => {
    useEffect(() => {
        axios.get('/api/products/' + activeCategory)
            .then(response => {                 
                dispatch(setProducts(response.data));
            })
            .catch(error => {    
                console.log(error);
            }); 
    }, [activeCategory]);
};

const getTitle = (activeCategory) => switcherItems.find(value => value.category === activeCategory).title;

const Catalog = () => {
    const selectedProducts = useSelector(state => state.products.data);
    const selectedActiveCategory = useSelector(state => state.products.activeCategory);
    useFetching(selectedActiveCategory, setProducts, useDispatch());

    return (
        <Wrapper>
            <Head>
                <Title>
                    <TitleSpan>{getTitle(selectedActiveCategory)}</TitleSpan>
                    <LongLine />
                    <ShortLine />
                </Title>
                <Filter>
                    <FilterSpan>Фильтр</FilterSpan>
                    <FilterPlus className="fa fa-plus" />
                </Filter>
            </Head>

            <Products>
                {selectedProducts.map((value, index) => 
                    <Product 
                        key={value._id} 
                        _id={value._id}
                        title={value.title} 
                        description={value.description} 
                        price={value.price} 
                        gram={value.gram} 
                        type={value.type} 
                        uri={value.uri} 
                    />)}
            </Products>
        </Wrapper>
    );
};

export default Catalog;
