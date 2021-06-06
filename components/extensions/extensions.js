import styled from 'styled-components';

// COMPONENTS
import SectionWrapper from '../section/index';
import SectionOpening from '../section/opening';
import Button from '../button/primary';

const StyledSectionWrapper = styled(SectionWrapper)`
    > div:last-child {
        max-width: 900px;
        margin: auto;

        > div:nth-child(2) {
            @media (min-width: ${({ theme }) => theme.bp.md}) {
                margin-top: 60px;
            }    
        }

        > div:nth-child(3) {
            @media (min-width: ${({ theme }) => theme.bp.md}) {
                margin-top: 120px;
            }    
        }
    
        
        @media (min-width: ${({ theme }) => theme.bp.md}) {
            display: flex;
            justify-content: space-evenly;
            align-items: flex-start;
        }    
    }
`;

const StyledCard = styled.div`
    width: 100%;
    max-width: 250px;
    margin: auto;
    text-align: center;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 20%), 0px 1px 1px 0px rgba(0, 0, 0, 14%), 0px 1px 3px 0px rgba(0, 0, 0, 12%);
    :not(:last-child) {
        margin-bottom: 1rem;

        @media (min-width: ${({ theme }) => theme.bp.md}) {
            margin-bottom: 0;
        }    
    }

    @media (min-width: ${({ theme }) => theme.bp.md}) {
        margin: unset;
    }

    > div:first-child {
        padding: 50px 14px;

        h3 {
            margin-bottom: 10px;
            margin-top: 20px;
        }

        span {
            font-size: 12px;
        }
    }

    > div:last-child {
        border-top: 5px dotted ${({ theme }) => theme.colors.grayishBlue};
        padding: 25px 20px;
    }

    button {
        width: 100%
    }
`;

const CARDS = [
    {
        name: "Add to Chrome",
        logo: "/images/logo-chrome.svg",
        desc: "Minimum version 62"
    },
    {
        name: "Add to Firefox",
        logo: "/images/logo-firefox.svg",
        desc: "Minimum version 55"
    },
    {
        name: "Add to Opera",
        logo: "/images/logo-opera.svg",
        desc: "Minimum version 46"
    }
]

function ExtensionsSection() {
    return (
        <section id="extension">
            <StyledSectionWrapper>
                <SectionOpening
                    title="Download the extension"
                    desc="We’ve got more browsers in the pipeline. Please do let us know if you’ve got a favourite you’d like us to prioritize."
                />
                <div>
                    {
                        CARDS.map(card => (
                            <StyledCard key={card.name}>
                                <div>
                                    <img src={card.logo} alt={card.name} />
                                    <h3>{card.name}</h3>
                                    <span>{card.desc}</span>
                                </div>
                                <div>
                                    <Button> Add & Install Extension </Button>
                                </div>
                            </StyledCard>
                        ))
                    }
                </div>
            </StyledSectionWrapper>
        </section>
    );
}

export default ExtensionsSection;
