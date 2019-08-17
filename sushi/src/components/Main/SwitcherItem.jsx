import React, { useState } from 'react';
import styled from 'styled-components';

const Item = styled.div`
    align-self: stretch;
    display: flex;
    flex-direction: column;
    justify-content: center;    
    align-items: center;

    width: 194px;

    font-family: 'Stalinist One', cursive;
    cursor: pointer;

    &:hover {
        background: #fd1c44;
        height: 130px;
    }
`;

const Img = styled.img`
    width:60px;
    height: auto;
`;

const Span = styled.span`
    margin-top: 10px;
    color: white;
    ${props => props.spanShow ? null : 'display: none;'}
`;

const SwitcherItem = ({ imgUrl, title }) => {        
    const [spanShow, setSpanShow] = useState(false);

    const onSpanShowToggle = () => {        
        setSpanShow(!spanShow);
    };

    return (
        <Item onMouseOver={onSpanShowToggle} onMouseOut={onSpanShowToggle}>
            <Img src={imgUrl} alt="item" />
            <Span spanShow={spanShow}>{title}</Span>
        </Item>
    );
};

export default SwitcherItem;
