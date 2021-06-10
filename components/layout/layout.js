import { useState } from 'react';
import styled from 'styled-components';
// COMPONENTS
import Header from '../header/header';
import Footer from '../footer/footer';
import NvgMenu from '../nvg-menu/nvg-menu';

const StyledMain = styled.main`
    margin-top: 7.0625rem;
    position: relative;
    display: flex;
    flex-direction: column;
`;

function Layout({ children }) {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <Header setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} />
            <StyledMain>
                <NvgMenu isMenuOpen={isMenuOpen} />
                {children}
            </StyledMain>
            <Footer />
            <p className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
                Coded by <a href="#">Asma Mir</a>.
            </p>
        </div>
    );
};

export default Layout;
