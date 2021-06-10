import styled from 'styled-components';
// ICONS
const DOWN_ARROW = '/images/icon-arrow.svg';
const DOWN_ARROW_Active = '/images/icon-arrow-secondry.svg';

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

function Accordion({ list, activeAcc, setActiveAcc, className }) {
    return (
        <div className={className}>
            {
                list.map(item => (
                    <AccordionItem isActive={item.id === activeAcc} key={item.id}>
                        <div onClick={() => setActiveAcc(activeAcc => activeAcc === item.id ? '' : item.id)}>
                            <span>{item.q}</span>
                            <img
                                src={item.id === activeAcc ? DOWN_ARROW_Active : DOWN_ARROW}
                                alt="down-arrow"
                            />
                        </div>
                        { item.id === activeAcc && <AccordionAnswer>{item.a}</AccordionAnswer>}
                    </AccordionItem>
                ))
            }
        </div>
    );
}

export default Accordion;
