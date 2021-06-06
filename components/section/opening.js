import styled from 'styled-components';

const StyledWrapper = styled.div`
    max-width: 500px;
    margin: auto;
    padding: 0 1rem;
    margin-bottom: 4rem;
    text-align: center;
`;

function SectionOpening({ title, desc }) {
    return (
        <StyledWrapper>
            <h2>{title}</h2>
            <p>{desc}</p>
        </StyledWrapper>
    );
}

export default SectionOpening;
