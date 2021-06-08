import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    padding: 0.875rem;
    border-radius: ${({ theme }) => theme.radius.s};
    font-size: 0.875rem;
    font-weight: 600;
    border: 2px solid transparent;
    transition: all 200ms ease-in-out;

    background-color: ${({ theme, color }) => theme.colors[color]};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
        background-color: ${({ theme }) => theme.colors.white};
        color: ${({ theme, color }) => theme.colors[color]};
        border-color: ${({ theme, color }) => theme.colors[color]};
    }
`;

function PrimaryButton({ children, className, color = "primary", ...props }) {
    return (
        <StyledButton color={color} className={className} {...props}>
            {children}
        </StyledButton>
    )
}

export default PrimaryButton;
