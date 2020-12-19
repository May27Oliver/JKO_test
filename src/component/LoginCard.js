import React, { Component } from 'react';
// import AccountBox from './AccountBox';
import styled from 'styled-components';
import EmailInput from './emailInput';
import AccType from './AccType';
import PassInput from './passInput';
import BtnPanel from './btnPanel';

const LoginBox = styled.div`
    padding-top:1px;
    width:95%;
    margin:auto;
`

const TitleChoose = styled.h1`
  font-family: "Roboto Condensed", sans-serif;
  text-align:center;
  font-weight:400;
  font-size:18px;
  color:#41B8EE;
  margin:20px 0;
`
const Greeting = styled.h3`
    font-family: "Roboto Condensed", sans-serif;
    color:#d0d1d9;
    font-size:16px;
    font-weight:300;
    text-align:center;
    margin-bottom:40px;
`

const AccountBox = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    flex-wrap:wrap;
    margin:0 auto 50px;
    @media (min-width: 400px) {
        justify-content:space-between;
    }
`

class LoginCard extends Component {
    constructor(){
        super();
        this.state={
            acc_type:'user'
        }
    }
    changeAccName=(name)=>{
        this.setState({
            acc_type:name
        })
    }
    render() {
        const {acc_type} = this.state;
        return (
            <LoginBox>
                <TitleChoose>Choose Account Type</TitleChoose>
                <AccountBox>
                    <AccType changeTypeName={(info)=>this.changeAccName(info)}></AccType>
                </AccountBox>
                <Greeting>Hello {acc_type}!<br/>Please fill out the form below to getStarted</Greeting>
                {/* <Greeting></Greeting> */}
                <EmailInput></EmailInput>
                <PassInput></PassInput>
                <BtnPanel></BtnPanel>
            </LoginBox>
        );
    }
}

export default LoginCard;