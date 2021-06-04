import styled from 'styled-components';

const StyledNvgMenu = styled.div`
    padding: 0 1.25rem;
    position: fixed;
    top: 65px;
    bottom: 0;
    left: 0;
    right: 0;
    transition: all ${({ theme }) => theme.animations.transitionTime}ms ease-in-out;
    background-color: ${({ theme }) => theme.colors.veryDarkBlue};
    visibility: ${({ theme, isMenuOpen }) => isMenuOpen ? 'visible' : 'hidden'};
    opacity: ${({ theme, isMenuOpen }) => isMenuOpen ? 0.95 : 0};
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    z-index: 2;

    & li {
        border-bottom: 0.5px solid ${({ theme }) => theme.colors.grayishBlue};
        padding: 0.625rem;
        cursor: pointer;
    }

    & button {
        margin-top: 0.75rem;
        border: 2px solid ${({ theme }) => theme.colors.white};
        background-color: transparent;
        color: ${({ theme }) => theme.colors.white};
        border-radius: 4px;
        width: 100%;
        padding: 0.5rem;
        transition: all ${({ theme }) => theme.animations.transitionTime}ms ease-in-out;
        &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            color: ${({ theme }) => theme.colors.veryDarkBlue};
        }
    }
`;

function NvgMenu({ isMenuOpen }) {
    return (
        <StyledNvgMenu isMenuOpen={isMenuOpen}>
            <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
            <button>Login</button>
        </StyledNvgMenu>
    );
};

export default NvgMenu;
