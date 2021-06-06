import styled from 'styled-components';

const StyledSection = styled.div`
    margin: 5rem 0;

    @media (min-width: ${({ theme }) => theme.bp.md}) {
        margin: 6rem 0;
    }
`;

function SectionWrapper({ className, children }) {
    return (
        <StyledSection className={className}> {children} </StyledSection>
    );
}

export default SectionWrapper;
