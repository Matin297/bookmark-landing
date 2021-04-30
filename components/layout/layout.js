import { useState } from 'react';
import styled from 'styled-components';
// COMPONENTS
import Header from '../header/header';
import Footer from '../footer/footer';
import NvgMenu from '../nvg-menu/nvg-menu';

const StyledMain = styled.main`
    margin-top: 4.0625rem;
    position: relative
`;

function Layout({ children }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
            <StyledMain>
                <NvgMenu isMenuOpen={isMenuOpen} />
                {children}
            </StyledMain>
            <Footer />
        </>
    );
};

export default Layout;
