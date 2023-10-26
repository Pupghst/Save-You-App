import React from "react";

import { StyledContainer, InnerContainer, PageLogo, PageTitle } from '../estilos/styles'

import logo from './../assets/imag/Save_you_3.png';

function Login() {
    return (
        <StyledContainer>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={logo} />
                <PageTitle>Save You</PageTitle>
            </InnerContainer>
        </StyledContainer>
    );
}

export default Login();