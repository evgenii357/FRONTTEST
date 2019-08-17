import React from 'react';
import BucketComponent from './Bucket';
import Popover from '@material-ui/core/Popover';
import styled from 'styled-components';

const StickyWrapper = styled.div`
    position: -webkit-sticky;
    position: sticky;
    top: 0;

    background: white;
    border-bottom: 0.5px solid rgba(1, 1, 1, 0.1);
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    background: white;
    height: 40px;
    max-width: 970px;
    margin: 0 auto;

    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
`;

const LeftWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const LangWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const LangItem = styled.span`
    margin-right: 15px;
    ${props => props.active ? 'color: #fd1c44;' : null}
`;

const Location = styled.div`
    margin-left: 15px;
`;

const RightWrapper = styled.div`    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const ContactWrapper = styled.div`    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-left: 30px;
`;

const PhoneIcon = styled.i`    
    margin-top: 2px;
    margin-right: 10px;

    color: #fd1c44;
`;

const UserWrapper = styled.div`    
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    margin-left: 40px;
`;

const UserIcon = styled.i`    
    margin-top: 2px;
    margin-left: 10px;

    color: #fd1c44;
`;

const BucketWrapper = styled.div`    
    align-self: stretch;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background: #fd1c44;
    color: white;
    margin-left: 40px;

    padding-left: 20px;
    padding-right: 10px; 

    cursor: pointer;
`;

const BucketIcon = styled.i`    
    margin-left: 10px;
`;

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleOnClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log('OPEN');
    };
  
    const handleOnClose = () => {
        setAnchorEl(null);
        console.log('CLOSE');
    };
    
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <StickyWrapper>
            <Wrapper>
                <LeftWrapper>                
                    <LangWrapper>
                        <LangItem active>RU</LangItem>
                        <LangItem>EN</LangItem>
                    </LangWrapper>
                    <Location>
                        <span>Санкт-Петербург</span>
                    </Location>
                </LeftWrapper>

                <RightWrapper>
                    <ContactWrapper>
                        <PhoneIcon className="fa fa-phone" />
                        <span>8-800-900-500-5</span>
                    </ContactWrapper>
                    <UserWrapper>
                        <span>Александр</span>
                        <UserIcon className="fa fa-user" />                        
                    </UserWrapper>                  
                    <BucketWrapper aria-describedby={id} onClick={handleOnClick} >
                        <span>2 500 &#8381;</span>
                        <BucketIcon className="fa fa-shopping-bag" />                        
                    </BucketWrapper>
                </RightWrapper>
            </Wrapper>

            <Popover 
            id={id}
            open={open} 
            anchorEl={anchorEl} 
            onClose={handleOnClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
           
            >
                <BucketComponent onClose={handleOnClose} />
            </Popover>
        </StickyWrapper>
    );
};

export default Header;
