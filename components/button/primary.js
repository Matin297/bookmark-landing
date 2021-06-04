import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    padding: 0.875rem;
    border-radius: ${({ theme }) => theme.radius.s};
    font-size: 0.875rem;
    font-weight: 600;
    border: 2px solid transparent;
    transition: all 200ms ease-in-out;

    margin-right: 1rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme }) => theme.colors.primary};
        border-color: ${({ theme }) => theme.colors.primary};
    }
`;

function PrimaryButton({ children }) {
    return (
        <StyledButton>
            {children}
        </StyledButton>
    )
}

export default PrimaryButton;
