import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setActiveCategory } from '../../store/products/actions';
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

    background: ${props => props.active ? '#ed143a' : 'white'};
    height: ${props => props.active ? '130px' : '120px'};

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

const SwitcherItem = ({ uri, title, category, active, onClick }) => {        
    const [spanShow, setSpanShow] = useState(false);

    const onSpanShowToggle = () => {        
        setSpanShow(!spanShow);
    };

    return (
        <Item active={active} onMouseOver={onSpanShowToggle} onMouseOut={onSpanShowToggle} onClick={() => onClick(category)}>
            <Img src={uri} alt="item" />
            <Span spanShow={active || spanShow}>{title}</Span>
        </Item>
    );
};

export default SwitcherItem;
