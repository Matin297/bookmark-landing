import Link from 'next/link';
import styled from 'styled-components';

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    padding: 1.25rem;
`;

const LOGO_SVG = "/images/logo-bookmark.svg";

function Header() {
    return (
        <StyledHeader>
            <Link href="/">
                <img src={LOGO_SVG} alt="logo" />
            </Link>
            <p> Hamburger Menu </p>
        </StyledHeader>
    );
};

export default Header;
