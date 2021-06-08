import styled from 'styled-components';
// ICONS
const ERR_ICON = '/images/icon-error.svg';

const StyledInputWrapper = styled.div`
    position: relative;
    z-index: 2;
    margin-bottom: 1rem;

    > div:first-child {
        background-color: ${({ theme }) => theme.colors.secondry};
        position: absolute;
        top: -1px;
        bottom: -20px;
        left: -1px;
        right: -1px;
        border-radius: 5px;
        z-index: -1;
        display: flex;
        align-items: flex-end;
        font-size: 11px;
        padding-bottom: 3px;
        padding-left: 8px;
        color: white;
        opacity: 0;
        transition: opacity 200ms ease-in-out;
    }

    > div:last-child {
        position: relative;

        > img {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 14px;
            opacity: 0;
            transition: opacity 200ms ease-in-out;
        }
    }

    ${({ hasError }) => hasError && `
        margin-bottom: 2rem;

        > div:first-child {
            opacity: 1;
        }

        > div:last-child {
            > img {
                opacity: 1;
            }
        }
    `}

    @media (min-width: ${({ theme }) => theme.bp.md}) {
        margin-bottom: 0;
    }
`;

function Input({ className, error, ...props }) {
    return (
        <StyledInputWrapper className={className} hasError={!!error}>
            <div> {error || ''} </div>
            <div>
                <input {...props} />
                <img src={ERR_ICON} alt="error" />
            </div>
        </StyledInputWrapper>
    )
}

export default Input;
