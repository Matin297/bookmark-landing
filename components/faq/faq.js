import { useState } from 'react';
import styled from 'styled-components';

// COMPONENTS
import SectionWrapper from '../section/index';
import SectionOpening from '../section/opening';
import Button from '../button/primary';
// ICONS
const DOWN_ARROW = '/images/icon-arrow.svg';
const DOWN_ARROW_Active = '/images/icon-arrow-secondry.svg';

const StyledSectionWrapper = styled(SectionWrapper)`
    text-align: center;
`;

const AccordionWrapper = styled.div`
    max-width: 550px;
    margin: auto;
`;

const AccordionItem = styled.div`
    color: ${({ theme }) => theme.colors.veryDarkBlue};
    font-size: 1rem;
    text-align: left;
    border-top: 1px solid ${({ theme }) => theme.colors.grayishBlue};
    :last-child {
        border-bottom: 1px solid ${({ theme }) => theme.colors.grayishBlue};
    }

    img {
        transition: all 200ms ease-in-out;
        transform: ${({ isActive }) => isActive ? 'rotate(180deg)' : 'rotate(0deg)'};
    }

    > div:first-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem 1rem 1rem 0;
        font-weight: 500;

        :hover {
            color: ${({ theme }) => theme.colors.secondry};
            cursor: pointer;
        }
    }
`;

const AccordionAnswer = styled.div`
    padding: 1rem 0;
`;

const StyledButton = styled(Button)`
    margin-top: 4rem;
`;

const FAQ = [
    {
        id: 1,
        q: "What is Bookmark?",
        a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis."
    },
    {
        id: 2,
        q: "How can I request a new browser?",
        a: "Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet."
    },
    {
        id: 3,
        q: "Is there a mobile app?",
        a: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
    },
    {
        id: 4,
        q: "Is there a mobile app?",
        a: "Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum."
    },
    {
        id: 5,
        q: "What about other Chromium browsers?",
        a: "Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit."
    }
]

function FaqSection() {

    const [activeAcc, setActiveAcc] = useState('');

    return (
        <section id="faq">
            <StyledSectionWrapper>
                <SectionOpening
                    title="Frequently Asked Questions"
                    desc="Here are some of our FAQs. If you have any other questions you’d like answered please feel free to email us."
                />
                <AccordionWrapper>
                    {
                        FAQ.map(item => (
                            <AccordionItem isActive={item.id === activeAcc} key={item.id}>
                                <div onClick={() => setActiveAcc(activeAcc => activeAcc === item.id ? '' : item.id)}>
                                    <span>{item.q}</span>
                                    <img src={item.id === activeAcc ? DOWN_ARROW_Active : DOWN_ARROW} alt="down-arrow" />
                                </div>
                                { item.id === activeAcc && <AccordionAnswer>{item.a}</AccordionAnswer>}
                            </AccordionItem>
                        ))
                    }
                </AccordionWrapper>
                <StyledButton>More Info</StyledButton>
            </StyledSectionWrapper>
        </section>
    )
}

export default FaqSection;
