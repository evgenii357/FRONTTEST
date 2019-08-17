import React from 'react';
import styled from 'styled-components';

const ShadowWrapper = styled.div`
    width: 100%;
    height: fit-content;
    box-shadow: 0 -0.1px 10px rgba(80, 78, 78, 0.1);
    border-top: 1px solid rgba(0, 0, 0, 0);
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    max-width: 970px;
    background: white;

    margin: 60px auto 40px auto;

    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
`;

const LeftColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;  
`;

const Logo = styled.img`
    align-self: flex-start; 
`;

const ContactsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    margin-top: 50px;
    margin-bottom: 70px;
`;

const PhoneWrapper = styled.div`
    display: flex;
    flex-direction: row;    
    align-items: flex-start;
`;

const PhoneIcon = styled.i`
    align-self: center;
    color: #ed143a;
    font-size: 16px;
    margin-top: 1px;
`;

const PhoneSpan = styled.span`
    align-self: center;
    margin-left: 20px;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
`;

const IconsWrapper = styled.div`
    margin-top: 15px;

    display: flex;
    flex-direction: row;    
    align-items: flex-start;
`;

const VKIcon = styled.i`
    align-self: center;
    color: #ed143a;
    font-size: 16px;

    margin-right: 10px;
`;

const FacebookIcon = styled.i`
    align-self: center;
    color: #ed143a;
    font-size: 16px;

    margin-right: 10px;
`;

const InstagramIcon = styled.i`
    align-self: center;
    color: #ed143a;
    font-size: 16px;

    margin-right: 10px;
`;

const MiddleColumnWrapper = styled.div`
    display: flex;
    flex-direction: row;    
    justify-content: center;

    margin-top: 13px;
`;

const MiddleLeftColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;  
    align-items: flex-start;

    margin-right: 40px;
`;

const MiddleRightColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-left: 40px;
`;

const LinkSpan = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 10px;
    cursor: pointer;

    &:hover {
        color: #fd1c44;
    }
`;

const RightColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;    
    justify-content: space-between;

    margin-top: 13px;
`;

const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;    
    justify-content: center;
`;

const PlayMarketWrapper = styled.div`
    display: flex;
    flex-direction: row;    
    justify-content: center;
`;

const Button = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    background: #fd1c44;
    color: white;

    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 14px;

    height: 40px;
    margin-top: 15px;

    cursor: pointer;

    &:hover {
        background: #ff3f5f;
    }
`;

const InputWrapper = styled.div`
    width: 100%;
    height: max-content;
    position: relative;
`;

const Input = styled.input`
    width: 100%;
    height: 40px;

    border: 1px solid lightgray;
    padding: 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box; 
    box-sizing: border-box; 

    padding-left: 20px;
    outline: none;

    font-family: 'Montserrat', sans-serif;
    font-size: 14px;

    &::placeholder {
        color: lightgray;
    }
`;

const InputIconWrapper = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    right: 0;

    background: #fd1c44;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    cursor: pointer;

    &:hover {
        background: #ff3f5f;
    }
`;

const InputIcon = styled.i`
    color: white;
    font-size: 20px;
`;

const Footer = () => {
    return (
        <ShadowWrapper>
            <Wrapper>
                <LeftColumnWrapper>
                    <Logo src="/public/img/logo.png" alt="logo" />
                    <ContactsWrapper>
                        <PhoneWrapper>
                            <PhoneIcon className="fa fa-phone" />
                            <PhoneSpan>8-800-900-500-5</PhoneSpan>
                        </PhoneWrapper>
                        <IconsWrapper>
                            <VKIcon className="fa fa-vk" />
                            <FacebookIcon className="fa fa-facebook" />
                            <InstagramIcon className="fa fa-instagram" />                       
                        </IconsWrapper>
                    </ContactsWrapper>
                    <span>&#169; 2019 Ресторан японской кухни «Japanito»</span>
                </LeftColumnWrapper>


                <MiddleColumnWrapper>
                    <MiddleLeftColumnWrapper>
                        <LinkSpan>Рестораны</LinkSpan>
                        <LinkSpan>Акции</LinkSpan>
                        <LinkSpan>Новости</LinkSpan>
                        <LinkSpan>Доставка</LinkSpan>
                        <LinkSpan>Аренда</LinkSpan>                  
                    </MiddleLeftColumnWrapper>
                    <MiddleRightColumnWrapper>
                        <LinkSpan>Франшиза</LinkSpan>   
                        <LinkSpan>Вакансии</LinkSpan>   
                        <LinkSpan>Оферта</LinkSpan>   
                        <LinkSpan>Сотрудничество</LinkSpan>   
                        <LinkSpan>Контакты</LinkSpan>                     
                    </MiddleRightColumnWrapper>
                </MiddleColumnWrapper>

                <RightColumnWrapper>
                    <SearchWrapper>
                        <InputWrapper>
                            <Input type="text" placeholder="Поиск по сайту" />
                            <InputIconWrapper>
                                <InputIcon className="fa fa-search" />
                            </InputIconWrapper>
                        </InputWrapper>
                        
                        <Button>Отправить отзыв</Button>
                    </SearchWrapper>
                    <PlayMarketWrapper>
                        APP STORE AND PLAY MARKET
                    </PlayMarketWrapper>
                </RightColumnWrapper>
            </Wrapper>
        
        </ShadowWrapper>
    );
};

export default Footer;
