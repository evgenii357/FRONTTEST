import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Position from './Position';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 25px 25px 30px 25px;
`;

const Head = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    margin-bottom: 40px;
`;

const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const TitleSpan = styled.div`
    color: #ed143a;
    font-family: 'Stalinist One', cursive;
    font-size: 14px;
`;

const LongLine = styled.div`
    width: 95px;
    border-top: 2px solid #ed143a;
    border-right: 5px solid white;

    margin-top: 4px;
    margin-bottom: 4px;
`;

const ShortLine = styled.div`
    width: 75px;
    border-top: 2px solid #ed143a;
    border-right: 5px solid white;
`;

const Close = styled.i`
    color: #ed143a;
    cursor: pointer;
    font-size: 19px;
`;

const ProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: minmax(auto, 60px) minmax(auto, 150px) minmax(auto, 70px) minmax(auto, 70px);    
`;

const Img = styled.img`
    width: 60px;
    height: auto;

    align-self: center;
    justify-self: right;
`;

const Name = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 13px;
    align-self: center;

    padding-left: 10px;
`;

const QuantityWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; 
`;

// в font-awesome нельзя сделать иконки потоньше, поэтому использовал это небольшой хак
const Minus = styled.i`
    -webkit-text-stroke: 2px white;
    margin-top: 1px;

    font-size: 16px;
    cursor: pointer;
`;

const Quantity = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: bold;

    margin-left: 5px;
    margin-right: 5px;
`;

// в font-awesome нельзя сделать иконки потоньше, поэтому использовал это небольшой хак
const Plus = styled.i`
    -webkit-text-stroke: 2px white; 
    margin-top: 1px;

    font-size: 16px;
    cursor: pointer;
`;

const Price = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: #ff3f5f;
    align-self: center;
    justify-self: right;
`;

const Total = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-top: 20px;
`;

const TotalText = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
`;

const TotalPrice = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: bold;

    margin-left: 10px;
    margin-bottom: 1px;
`;

const Confirm = styled.div`
    width: 165px;
    height: 40px;
    background: #fd1c44;
    color: white;

    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: bold;

    cursor: pointer;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    &:hover {
        background: #ff3f5f;
    }

    margin: 20px auto 0 auto;    
`;

const useTotalPrice = () => useSelector(state => state.bucket.data).reduce((accumulator, value) => accumulator + value.product.price * value.quantity, 0);
const usePositions = () => useSelector(state => state.bucket.data);

const Bucket = ({ onClose }) => {
    const selectedOverallPrice = useTotalPrice();
    const selectedPositions = usePositions();

    return (
        <Wrapper>
            <Head>
                <Title>
                    <TitleSpan>Ваш заказ</TitleSpan>
                    <LongLine />
                    <ShortLine />
                </Title>
                <Close className="fa fa-close" onClick={onClose} />
            </Head>



            <ProductsWrapper>
                    {selectedPositions.map((value, index) => <Position key={index} uri={value.product.uri} title={value.product.title} quantity={value.quantity} price={value.product.price * value.quantity} />)}                
            </ProductsWrapper>  


            <Total>
                <TotalText>
                    <span>Итого со скидкой: </span>
                </TotalText>
                <TotalPrice>
                    <span>{selectedOverallPrice} &#8381;</span>
                </TotalPrice>
            </Total>
            <Confirm>Оформить заказ</Confirm>
        </Wrapper>
    );
};

export default Bucket;
