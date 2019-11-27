import React,{useState} from 'react';
import styled from "styled-components";
import { withRouter,Link } from "react-router-dom";
import Swal from 'sweetalert2'

import tvImg from "../assets/images/tv.png"
import barsImg from "../assets/images/nosignal2.jpg"






//=================Vlads Code=========================//
const S = {}


const SettingsBtn =styled(Link)`
&:focus {
    outline-color:none;
}
    color:black;
    width: 245px;
    height: 100%;
    border-radius: 12px;
    font-family: 'Rokkitt', serif;
    font-size: 48px;
    border: none;
    font-weight: 600;
    box-shadow: 10px 10px 20px #debcab;
    cursor: pointer;
    text-decoration:none;
:visited{
    color:black;
    text-decoration:none;


}
`

S.Container = styled.div`
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;
    background-color: #F5E9E3;
    display: flex;
    flex-direction: column;
    align-items: center;
    :focus {outline:0;}

    h1 {
        font-family: 'Rokkitt', serif;
        font-size: 141px;
        color: #2E281F;
        margin: 0px;
        margin-top: 40px;
        :focus {outline:0;}
    }
`

S.Nav = styled.div`
    position: absolute;
    // border: solid black 1px;
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    :focus {outline:0;}

    span {
        font-size: 42px;
        color: #7E705B;
        font-family: 'Rokkitt', serif;
        margin-right: 30px;
        margin-top: 10px;
        cursor: pointer;
        :focus {outline:0;}

    }
`

S.Descript = styled.div`
    text-align:center;
    font-size: 43px;
    font-family: 'Rokkitt', serif;
    color: #2E281F;
    :focus {outline:0;}
`

S.TvGrid = styled.div`
    width: 549px;
    height: 360px;
    margin-top: 20px;
    // border: solid green 5px;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(10, 1fr);
    :focus {outline:0;}
`

    S.Img = styled.img`
        z-index: 3;
        grid-row: 1/5;
        grid-column: 1/11;
        width: 549px;
        height: 360px;
        :focus {outline:0;}
    `

    S.Img2 = styled.img`
        z-index: 2;
        grid-row: 1/5;
        grid-column: 1/11;

        width: 494px;
        height: 324px;
        justify-self: center;
        margin-top: 10px;
        :focus {outline:0;}
    `

S.ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    // border: solid black 1px;
    width: 549px;
    height: 71px;
    margin-top: 30px;
    :focus {outline:0;}
`

S.Button = styled.button`
    width: 245px;
    height: 100%;
    border-radius: 12px;
    font-family: 'Rokkitt', serif;
    font-size: 48px;
    border: none;
    font-weight: 600;
    box-shadow: 10px 10px 20px #debcab;
    cursor: pointer;
    :focus {outline:0;}
`

    S.PlayBtn = styled(S.Button)`
        background-color: #77EE19;
        font-size: 48px;
        :focus {outline:0;}
    `

    S.SignUpBtn = styled(S.Button)`
        background-color: #BFC096;
        font-size: 42px;
        :focus {outline:0;}
    `
//========Bryces Styled Components====================//
const MobileDiv = styled.div`
background:#AAF7FF;
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;

`
const H1 = styled.h1`


`


function Main(props){
    const [counter,setCounter] = useState(0)



    const goToGame = () => {
        props.history.push("/Game")
    }


    const goToSignUp = () => {
        props.history.push("Signup")
    }
    if(document.documentElement.clientWidth <= 500 ){
        
              return(
                  <MobileDiv>
                      <H1>Head to your nearest desktop computer!</H1>
                      <p>Sorry CMT's interface isn't quite ready for mobile devices like yours.This Game was developed for Desktop users. </p>
                      
                  </MobileDiv>
              )


    }else if(document.documentElement.clientWidth >= 500){
        return(
            <S.Container>
                <S.Nav>
                    <span onClick={() => {localStorage.removeItem("token")}}>
                        Logout
                    </span>
                </S.Nav>
    
                <h1>CMT-9442V</h1>
    
                <S.Descript>
                    A game for those<br/>who hear voices<br/>in the static
                </S.Descript>
    
                <S.TvGrid>
                    <S.Img src = {tvImg} />
                    <S.Img2 src = {barsImg}/>
                </S.TvGrid>
    
                <S.ButtonContainer>
                    <S.PlayBtn onClick = {() => goToGame()}>PLAY</S.PlayBtn>
                    <S.SignUpBtn onClick = {() => goToSignUp()}>Sign up</S.SignUpBtn>
                    <SettingsBtn to ="/settings">Settings</SettingsBtn>
                </S.ButtonContainer>
    
            </S.Container>
        )
    }


}

export default withRouter(Main);