import styled from 'styled-components';
// COMPONENTS
import Link from 'next/link';
import BurgerMenu from './burger-menu';

const StyledHeader = styled.header`
    transition: all ${({ theme }) => theme.animations.transitionTime}ms ease-in-out;
    background-color: ${({ theme, isMenuOpen }) => isMenuOpen ? theme.colors.veryDarkBlue : theme.colors.white};
    opacity: ${({ isMenuOpen }) => isMenuOpen ? 0.95 : 1};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1;
    & > div {
        display: flex;
        justify-content: space-between;
        padding: 1.25rem;
        align-items: center;
        max-width: calc(80% + 40px);
        margin: auto;
    }

    ${({ isMenuOpen, theme }) => isMenuOpen && `
        &:after {
            content: '';
            position: absolute;
            left: 20px;
            right: 20px;
            top: 100%;
            background-color: ${theme.colors.grayishBlue};
            height: 0.5px
        }
    `}
`;

const StyledNav = styled.nav`
    display: none;
    a {
        margin-right: 1.5rem;
        color: ${({ theme }) => theme.colors.veryDarkBlue};
        &:hover {
            color: ${({ theme }) => theme.colors.secondry}
        }
    }
    @media (min-width: ${({ theme }) => theme.bp.md}) {
        display: block;
        text-transform: uppercase;
        font-size: 10px;
    }
`;

const StyledButton = styled.button`
    color: ${({ theme }) => theme.colors.secondry};
    padding: 5px 1rem;
    border: 1.5px solid ${({ theme }) => theme.colors.secondry};
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.radius.s};
    font-weight: 500;
    text-transform: uppercase;
    &:hover {
        background-color: ${({ theme }) => theme.colors.secondry};
        color: ${({ theme }) => theme.colors.white};
    }
`;

const LOGO_SVG = "/images/logo-bookmark.svg";
const LOGO_SVG_OPEN = "/images/logo-bookmark-white.svg";

function Header({ isMenuOpen, setIsMenuOpen }) {
    return (
        <StyledHeader isMenuOpen={isMenuOpen}>
            <div>
                <Link href="/">
                    <img src={isMenuOpen ? LOGO_SVG_OPEN : LOGO_SVG} alt="logo" />
                </Link>

                <StyledNav>
                    <a href="#">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Contact</a>
                    <StyledButton>Login</StyledButton>
                </StyledNav>

                <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            </div>
        </StyledHeader>
    );
};

export default Header;
