import styled from 'styled-components';

const StyledMenu = styled.div`
    cursor: pointer;

    > span {
        background-color: ${({ theme, isMenuOpen }) => isMenuOpen ? theme.colors.white : theme.colors.veryDarkBlue};
        height: 3px;
        width: 1.35rem;
        display: block;
        opacity: 1;
        transition: all ${({ theme }) => theme.animations.transitionTime}ms ease-in-out;
        transform-origin: 1px 1px;

        &:not(:last-of-type) {
            margin-bottom: 4px;
        }
    }

    ${({ isMenuOpen }) => isMenuOpen && `
        > span:first-child {
            transform: rotate(45deg);
        }

        > span:nth-child(2) {
            opacity: 0;
        }

        > span:last-of-type {
            transform: rotate(-45deg);
        }
    `}
`


function BurgerMenu({ isMenuOpen, setIsMenuOpen }) {
    return (
        <StyledMenu isMenuOpen={isMenuOpen} onClick={() => setIsMenuOpen(state => !state)}>
            <span></span>
            <span></span>
            <span></span>
        </StyledMenu>
    );
};

export default BurgerMenu;
