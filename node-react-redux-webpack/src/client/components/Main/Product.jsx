import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { plusProductToBucket, minusProductToBucket } from '../../store/bucket/actions';
import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-bottom: 60px;
`;

const Top = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Gram = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: bold;
`;

const Type = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;  
    font-weight: bold;

    background: ${props => props.type === 'Hit' ? '#f7cc20' : '#8baf33'};
    color: white;

    padding: 3px 10px;
    margin-right: 25px;
`;

const Img = styled.img`
    width: 165px;
    height: auto;

    margin-top: 10px;
    margin-bottom: 10px;

    cursor: pointer;
`;

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const Title = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: bold;

    cursor: pointer;
`;

const Description = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
`;

const Actions = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center; 

    margin-top: 40px;
`;

const Price = styled.span`
    color: #ed143a;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: bold;
`;

const QuantityWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center; 

    margin-right: 25px;
`;

// в font-awesome нельзя сделать иконки потоньше, поэтому использовал это небольшой хак
const Minus = styled.i`
    -webkit-text-stroke: 2px white;
    margin-top: 2px;

    font-size: 19px;
    cursor: pointer;
`;

const Quantity = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    font-weight: bold;

    margin-left: 15px;
    margin-right: 15px;
`;

// в font-awesome нельзя сделать иконки потоньше, поэтому использовал это небольшой хак
const Plus = styled.i`
    -webkit-text-stroke: 2px white; 
    margin-top: 2px;

    font-size: 19px;
    cursor: pointer;
`;

const Product = ({ _id, title, description, price, gram, type, uri }) => {
    const [quantity, setQuantity] = useState(0);

    const dispatch = useDispatch();

    const handleOnMinusClick = () => {        
        setQuantity(quantity ? quantity - 1 : 0);
        quantity && dispatch(minusProductToBucket(_id));
    };

    const handleOnPlusClick = () => {
        setQuantity(quantity === 99 ? 99 : quantity + 1);
        quantity < 100 && dispatch(plusProductToBucket(_id));
    };

    return (
        <Wrapper>
            <Top>
                <Gram>{gram} г.</Gram>
                {type === 'Hit' || type === 'Veg' ? <Type type={type}>{type}</Type> : null}                
            </Top>

            <Img src={uri} alt="product" />

            <Info>
                <Title>{title}</Title>
                <Description>{description}</Description>
            </Info>

            <Actions>
                <Price>{price} &#8381;</Price>
                <QuantityWrapper>
                    <Minus className="fa fa-minus" onClick={handleOnMinusClick} />
                    <Quantity>{quantity}</Quantity>
                    <Plus className="fa fa-plus" onClick={handleOnPlusClick} />
                </QuantityWrapper>
            </Actions>
        </Wrapper>      
    );
};

export default Product;
