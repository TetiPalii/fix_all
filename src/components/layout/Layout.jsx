import { Header } from "components/header/Header"
import { MainWrapper, SharedDiv } from "./Layout.styled"
import { Hero } from "components/heroSection/Hero"
// import { css } from '@emotion/styled';
// import background from '../../assests/images/heroMobile.jpg';

// const commonStyles = css`
//   width: 100%;
//   height: 413px;
//   background-color: #c4c4c4;
//   background-image: url(${background});
//   background-repeat: no-repeat;
//   background-size: cover;  
// `;
export const Layout=()=>{
    return <MainWrapper>
       
       <Header/>
       <SharedDiv>
        <Hero/>
       </SharedDiv>
    </MainWrapper>
}