import React from "react";

import{StyledContainer, InnerContainer, PageLogo, PageTitle} from '../estilos/styles'

const Login = () =>{
    return (
        <StyledContainer>
            <InnerContainer>
                <PageLogo resizeMode="cover" source={require('./../assets/imag/Save_you_3.png')} />
                <PageTitle>Save You</PageTitle>
            </InnerContainer>
        </StyledContainer>
    );
}

