import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

const Panel = styled.div`
    width:100%;
`
const Wrap = styled.div`
    width:90%;
    display:flex;
    justify-content:space-between;
    margin:auto;
    @media (min-width: 500px) {
        width:100%;
    }
`

const HintText = styled.span`
    color:#ccc;
    font-size:10px;
    font-weight:400;
    line-height:40px;
`

const SignUp = styled.span`
    color: #41B8EE;
    font-size:10px;
    font-weight:400;
    curosr:pointer;
    line-height:40px;
`
const LoginBtn = styled.button`
    flex:0 0 100px;
    height:40px;
    border:none;
    color:#fff;
    border-radius:5px;
    background:#41B8EE;
    &:active {
        background:#369fcf;
    }
    &:focus {
        outline:none;
    }
`
const AlertMsg = styled.div`
    position:absolute;
    display:${props=>props.showMsg?'flex':'none'};
    bottom:75px;
    left:0;
    right:0;
    margin:auto;
    width:85vw;
    min-height:45px;
    box-sizing:border-box;
    padding:15px 15px 15px 0;
    border-radius:5px;
    background:#3ca6d6;
    color:#fff;
`

class btnPanel extends Component {
    constructor(){
        super()
        this.state={
            showMsg:false,
            altMsg:''
        }
    }
    cleanMsg=()=>{
        let clock = setInterval(()=>{
            this.setState({
                showMsg:false,
                altMsg:''
            })
            clearTimeout(clock);
        },5000);
    }
    LoginCheck=()=>{
        let acc = document.getElementById('input_acc').value;
        let pass = document.getElementById('input_pass').value;
        for(let i = 0;i < pass.length; i++){
            if(pass.length-i >= 6){
                let reg = new RegExp(pass.slice(i,i+6),'g');
                if(reg.test(acc)){
                        this.setState({
                            showMsg:true,
                            altMsg:'密碼的任意連續 6 碼，不可以和帳號的任意連續 6 碼重複！'
                        })
                        this.cleanMsg();
                        break;
                }else{
                    this.setState({
                        showMsg:true,
                        altMsg:'您已通過檢驗！'
                    })
                    this.cleanMsg();
                };
            }else{
                this.setState({
                    showMsg:true,
                    altMsg:'您已通過檢驗！'
                })
                this.cleanMsg();
            }
        }
    }
    render() {
        const {altMsg,showMsg} = this.state;
        return (
            <Panel>
                <Wrap>
                    <div>
                        <HintText>No account? </HintText>
                        <SignUp>Sign Up</SignUp>
                    </div>
                    <LoginBtn onClick={this.LoginCheck}>Login</LoginBtn>
                </Wrap>  
                <AlertMsg showMsg={showMsg}>
                    <FontAwesomeIcon icon={fas.faExclamationCircle}  size="lg" className='alertAweIcon' />
                    <span>{altMsg}</span>
                </AlertMsg>
            </Panel>
        );
    }

}
export default btnPanel;