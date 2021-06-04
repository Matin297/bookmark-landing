import React from 'react';
import styled from 'styled-components';

const HERO_IMG = '/images/illustration-hero.svg';

const StyledSection = styled.section`
    margin-bottom: 5rem;

    @media (min-width: ${({ theme }) => theme.bp.md}) {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-self: flex-end;
        padding-left: 10%;
        margin-bottom: 4rem;
    }
`;

const StyledImgWrapper = styled.div`
    position: relative;
    margin-bottom: 30px;

    > img {
        width: 100%;
    }

    > div {
        width: 80%;
        height: calc(100% - 50px);
        z-index: -1;
        background-color: ${({ theme }) => theme.colors.primary};
        border-bottom-left-radius: 80px;
        position: absolute;
        right: 0;
        top: 50px;   

        @media (min-width: ${({ theme }) => theme.bp.md}) {
            top: 70px;
        }
    }

    @media (min-width: ${({ theme }) => theme.bp.md}) {
        order: 1;
        flex-grow: 1;
        margin: 0;
        max-width: 600px;
    }
`;

const StyledHeroDetails = styled.div`
    text-align: center;
    padding: 0 1rem;

    @media (min-width: ${({ theme }) => theme.bp.md}) {
        text-align: left;
        padding-left: 0;
    }
`;

const ButtonsWrapper = styled.div`
    margin-top: 1rem;
    display: flex;
    justify-content: center;

    @media (min-width: ${({ theme }) => theme.bp.md}) {
        justify-content: flex-start;
    }
    
    > button {
        border: none;
        padding: 0.875rem;
        border-radius: ${({ theme }) => theme.radius.s};
        font-size: 0.875rem;
        font-weight: 600;
        border: 2px solid transparent;
        transition: all 200ms ease-in-out;
    }

    > button:first-child {
        margin-right: 1rem;
        background-color: ${({ theme }) => theme.colors.primary};
        color: ${({ theme }) => theme.colors.white};

        &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            color: ${({ theme }) => theme.colors.primary};
            border-color: ${({ theme }) => theme.colors.primary};
        }
    }

    > button:last-child {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.veryDarkBlue};
        box-shadow: ${({ theme }) => theme.shadow[1]};

        &:hover {
            border-color: ${({ theme }) => theme.colors.veryDarkBlue};
        }
    }
`;

function Hero() {
    return (
        <StyledSection>
            <StyledImgWrapper>
                <div></div>
                <img src={HERO_IMG} alt="hero" />
            </StyledImgWrapper>
            <StyledHeroDetails>
                <h1> A Simple Bookmark Manager </h1>
                <p>
                    A clean and simple interface to organize your favourite websites. Open a new
                    browser tab and see your sites load instantly. Try it for free.
                </p>
                <ButtonsWrapper>
                    <button> Get it on Chrome </button>
                    <button> Get it on Firefox </button>
                </ButtonsWrapper>
            </StyledHeroDetails>
        </StyledSection>
    );
}

export default Hero;
