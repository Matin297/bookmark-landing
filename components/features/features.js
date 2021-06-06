import { useState, useMemo } from 'react';
import styled from 'styled-components';
// COMPONENTS
import PrimaryButton from '../button/primary';

const StyledSection = styled.div`
    text-align: center;
    margin: 5rem 0;

    > div:first-child {
        max-width: 500px;
        margin: auto;
    }

    > div:not(:last-child) {
        padding: 0 1rem;
        margin-bottom: 4rem;
    }

    @media (min-width: ${({ theme }) => theme.bp.md}) {
        margin: 6rem 0;
    }
`;

const StyledTabsWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media (min-width: ${({ theme }) => theme.bp.md}) {
        flex-direction: row;
        justify-content: center;
        max-width: 900px;
        margin-left: auto;
        margin-right: auto;
    }
`;

const StyledTabButton = styled.button`
    position: relative;
    padding: 1rem;
    border-bottom: 1px solid ${({ theme }) => theme.colors.grayishBlue};
    transition: all 200ms ease-in-out;
    color: ${({ theme, isActive }) => isActive ? theme.colors.veryDarkBlue : 'inherit'};

    ::before {
        content: '';
        width: 50%;
        height: 3px;
        background-color: ${({ theme, isActive }) => isActive ? theme.colors.secondry : 'transparent'};
        position: absolute;
        bottom: -1px;
        left: 50%;
        transform: translateX(-50%);
        transition: all 200ms ease-in-out;
        @media (min-width: ${({ theme }) => theme.bp.md}) {
            width: 80%;
        }
    }

    :hover {
        color: ${({ theme }) => theme.colors.veryDarkBlue};
    }

    :hover ::before {
        background-color: ${({ theme }) => theme.colors.secondry};
    }

    :first-child {
        border-top: 1px solid ${({ theme }) => theme.colors.grayishBlue};

        @media (min-width: ${({ theme }) => theme.bp.md}) {
            border-top: none;
        }
    }

    @media (min-width: ${({ theme }) => theme.bp.md}) {
        flex: 0 0 33.3333%;
        max-width: 33.3333%;
    }
`;


// TAB DETAILS
const StyledTabDetailsWrapper = styled.div`
    @media (min-width: ${({ theme }) => theme.bp.md}) {
        width: 100%;
        display: flex;
        align-items: center;
        align-self: flex-end;
        padding-right: 10%;
    }
`;

const StyledImgWrapper = styled.div`
    position: relative;
    margin-bottom: 80px;
    width: 100%;
    display: flex;
    justify-content: flex-end;

    > img {
        width: 80%;
        max-height: 300px;
        object-fit: contain;
        margin-right: 1rem;
        @media (min-width: ${({ theme }) => theme.bp.md}) {
            margin-right: 0;
        }
    }

    > div {
        width: 80%;
        height: 100%;
        z-index: -1;
        background-color: ${({ theme }) => theme.colors.primary};
        border-bottom-right-radius: 80px;
        position: absolute;
        left: 0;
        top: 40px;

        @media (min-width: ${({ theme }) => theme.bp.md}) {
            top: 50px;
            width: 70%;
        }
    }

    @media (min-width: ${({ theme }) => theme.bp.md}) {
        flex: 0 0 50%;
        margin: 0;
        max-width: 900px;
    }
`;

const StyledTabDetails = styled.div`
    padding: 0 1rem;

    > p {
        margin-bottom: 1rem;
    }

    @media (min-width: ${({ theme }) => theme.bp.md}) {
        flex: 0 0 50%;
        text-align: left;
        padding-right: 0;
        padding-left: 5rem;
    }
`;

const TABS_MAP = {
    1: {
        img: '/images/illustration-features-tab-1.svg',
        title: 'Bookmark in one click',
        desc: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    },
    2: {
        img: '/images/illustration-features-tab-2.svg',
        title: 'Intelligent search',
        desc: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.'
    },
    3: {
        img: '/images/illustration-features-tab-3.svg',
        title: 'Share your bookmarks',
        desc: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.'
    }
};

const TABS = ["Simple Bookmarking", "Speedy Searching", "Easy Sharing"];

function FeaturesSection() {

    const [activeTab, setActiveTab] = useState(1);

    const activeTabDetails = useMemo(() => TABS_MAP[activeTab], [activeTab]);

    return (
        <section id="features">
            <StyledSection>
                <div>
                    <h2>Features</h2>
                    <p>
                        Our aim is to make it quick and easy for you to access your favourite websites.
                        Your bookmarks sync between your devices so you can access them on the go.
                </p>
                </div>

                <StyledTabsWrapper>
                    {
                        TABS.map((tab, inx) => (
                            <StyledTabButton
                                key={inx}
                                onClick={() => setActiveTab(inx + 1)}
                                isActive={inx + 1 === activeTab}
                            >
                                {tab}
                            </StyledTabButton>
                        ))
                    }
                </StyledTabsWrapper>

                <StyledTabDetailsWrapper>
                    <StyledImgWrapper>
                        <div></div>
                        <img src={activeTabDetails.img} alt={activeTabDetails.title} />
                    </StyledImgWrapper>
                    <StyledTabDetails>
                        <h2> {activeTabDetails.title} </h2>
                        <p> {activeTabDetails.desc} </p>
                        <PrimaryButton> Get it on Firefox </PrimaryButton>
                    </StyledTabDetails>
                </StyledTabDetailsWrapper>
            </StyledSection>
        </section>
    )
}

export default FeaturesSection;
