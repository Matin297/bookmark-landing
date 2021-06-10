import styled from 'styled-components';
// ICONS
import FacebookSvg from '../svg-icons/facebook';
import TwitterSvg from '../svg-icons/twitter';
const LOGO = '/images/logo-bookmark-white-2.svg';

const StyledFooterWrapper = styled.footer`
    background-color: ${({ theme }) => theme.colors.veryDarkBlue};
`;

const StyledFooter = styled.div`
    padding: 20px 0;
    text-align: center;
    max-width: calc(80% + 40px);
    margin: auto;

    a {
        display: inline-block;
        text-transform: uppercase;
        font-size: 16px;
    }

    > * {
        padding: 10px;
    }

    > div:nth-child(2) {
        display: flex;
        flex-direction: column;

        > a {
            padding: 10px;

            :hover {
                color: ${({ theme }) => theme.colors.secondry};
            }
        }
    }

    > div:last-child {
        > a:not(:last-child) {
            margin-right: 30px;
        }

        > a {
            :hover svg path {
                fill: ${({ theme }) => theme.colors.secondry};
            }
        }
    }

    @media (min-width: ${({ theme }) => theme.bp.md}) {
        display: flex;
        align-items: center;

        a {
            font-size: 12px;
        }

        > div:nth-child(2) {
            flex-direction: row;

            > a {
                padding: 0 20px;
            }
        }

        > div:first-child {
            padding-right: 40px;
        }

        > div:last-child {
            margin-left: auto;
        }

        > * {
            padding-top: 0;
            padding-bottom: 0;
        }
    }
`;

function Footer() {
    return (
        <StyledFooterWrapper>
            <StyledFooter>
                <div>
                    <a href="#"><img src={LOGO} alt="logo" /></a>
                </div>
                <div>
                    <a href="#features">Features</a>
                    <a href="#">Pricing</a>
                    <a href="#">Contact</a>
                </div>
                <div>
                    <a href="#"><FacebookSvg /></a>
                    <a href="#"><TwitterSvg /></a>
                </div>
            </StyledFooter>
        </StyledFooterWrapper>
    );
};

export default Footer;
