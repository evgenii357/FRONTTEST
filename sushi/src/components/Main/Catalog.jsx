import React from 'react';
import Product from './Product';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    max-width: 970px;
    background: white;
    margin: 110px auto;
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

    margin-top: 50px;
`;

const Catalog = () => {
    return (
        <Wrapper>
            <Head>
                <Title>
                    <TitleSpan>Суши</TitleSpan>
                    <LongLine />
                    <ShortLine />
                </Title>
                <Filter>
                    <FilterSpan>Фильтр</FilterSpan>
                    <FilterPlus className="fa fa-plus" />
                </Filter>
            </Head>

            <Products>
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </Products>
        </Wrapper>
    );
};

export default Catalog;
