import { useState } from 'react';
import styled from 'styled-components';

// COMPONENTS
import SectionWrapper from '../section/index';
import SectionOpening from '../section/opening';
import Accordion from '../accordion/accordion';
import Button from '../button/primary';


const StyledSectionWrapper = styled(SectionWrapper)`
    text-align: center;
`;

const StyledAccordion = styled(Accordion)`
    max-width: 550px;
    margin: auto;
    padding: 0 1rem;
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
                <StyledAccordion
                    list={FAQ}
                    activeAcc={activeAcc}
                    setActiveAcc={setActiveAcc}
                />
                <StyledButton>More Info</StyledButton>
            </StyledSectionWrapper>
        </section>
    )
}

export default FaqSection;
