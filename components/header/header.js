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
    display: flex;
    justify-content: space-between;
    padding: 1.25rem;
    align-items: center;

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

const LOGO_SVG = "/images/logo-bookmark.svg";
const LOGO_SVG_OPEN = "/images/logo-bookmark-white.svg";

function Header({ isMenuOpen, setIsMenuOpen }) {
    return (
        <StyledHeader isMenuOpen={isMenuOpen}>
            <Link href="/">
                <img src={isMenuOpen ? LOGO_SVG_OPEN : LOGO_SVG} alt="logo" />
            </Link>
            <BurgerMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        </StyledHeader>
    );
};

export default Header;
