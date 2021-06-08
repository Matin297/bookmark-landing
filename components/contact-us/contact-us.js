import { useState } from 'react';
import styled from 'styled-components';
import { isEmail } from '../../utils/helpers';
// COMPONENTS
import SectionWrapper from '../section/index';
import Button from '../button/primary';
import Input from '../input/input';

const StyledSection = styled.div`
    background-color: ${({ theme }) => theme.colors.primary};
    text-align: center;
    padding: 0 1rem;

    > div {
        max-width: 500px;
        margin-right: auto;
        margin-left: auto;

        > span {
            font-size: 12px;
            font-weight: 700;
            color: ${({ theme }) => theme.colors.white};
            margin-top: 5px;
            width: 100%;
            display: inline-block;
            text-align: left;
        }
    }

    h2, h3 {
        font-weight: 400;
        color: ${({ theme }) => theme.colors.white};
    }

    h2 {
        margin-bottom: 32px;
    }

    h3 {
        text-transform: uppercase;
        letter-spacing: 5px;
        font-size: 12px;
        margin-top: 0;
    }

    @media (min-width: ${({ theme }) => theme.bp.md}) {
        h3 {
            margin-bottom: 32px;
        }

        h2 {
            margin-bottom: 42px;
        }

        form {
            display: flex;
            align-items: flex-start;
        }
    }
`;

const StyledInput = styled(Input)`
    @media (min-width: ${({ theme }) => theme.bp.md}) {
        flex: 0 0 75%;
        margin-right: 1rem;
    }
`

const StyledButton = styled(Button)`
        width: 100%;
`;

function ContactUpSection() {

    const [error, setError] = useState('');
    const [message, setMessage] = useState('');

    const onSubmitHandler = e => {
        e.preventDefault();
        const { email } = e.target.elements;
        if (!email.value || !isEmail(email.value))
            return setError("Whoops, make sure it's an email");
        setMessage('Submitted successfully');
    }

    return (
        <StyledSection id="contact-us">
            <SectionWrapper>
                <h3> 35,000+ already joined </h3>
                <h2> Stay up-to-date with what we’re doing </h2>

                <form onSubmit={onSubmitHandler}>
                    <StyledInput
                        type="text"
                        id="email"
                        placeholder="Enter your email address"
                        error={error}
                        onChange={() => {
                            if (error) setError('');
                        }}
                    />
                    <StyledButton color="secondry" type="submit"> Contact Us </StyledButton>
                </form>
                {message && <span> {message} </span>}
            </SectionWrapper>
        </StyledSection>
    )
}

export default ContactUpSection;
