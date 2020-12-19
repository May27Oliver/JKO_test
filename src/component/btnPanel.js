import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

const Panel = styled.div`
    width:100%;
    margin-bottom:20px;
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
    cursor:pointer;
`
const LoginBtn = styled.button`
    flex:0 0 100px;
    height:40px;
    border:none;
    color:#fff;
    border-radius:5px;
    font-size: 16px;
    background:#41B8EE;
    cursor:pointer;
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
    @media (min-width: 500px) {
        width:425px;
    }
`

const MessageBox = styled.div`
    display:${props=>props.showMsg?'block':'none'};
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background:transparent;
`

class btnPanel extends Component {
    constructor(){
        super()
        this.state={
            showMsg:false,
            altMsg:'',
            type:''
        }
    }
    cleanMsg=()=>{
        this.setState({
            showMsg:false,
            altMsg:'',
            type:''
        })
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
                            altMsg:'密碼的任意連續 6 碼，不可以和帳號的任意連續 6 碼重複！',
                            type:'warn'
                        })
                        break;
                }else{
                    this.setState({
                        showMsg:true,
                        altMsg:'您已通過檢驗！',
                        type:'success'
                    })
                };
            }else{
                this.setState({
                    showMsg:true,
                    altMsg:'您已通過檢驗！',
                    type:'success'
                })
            }
        }
    }
    render() {
        const {altMsg,showMsg,type} = this.state;
        return (
            <Panel>
                <Wrap>
                    <div>
                        <HintText>No account? </HintText>
                        <SignUp>Sign Up</SignUp>
                    </div>
                    <LoginBtn onClick={this.LoginCheck}>Login</LoginBtn>
                </Wrap>
                <MessageBox showMsg={showMsg} onClick={this.cleanMsg}>
                    <AlertMsg showMsg={showMsg}>
                        <FontAwesomeIcon icon={type==='success'?fas.faCheckCircle:fas.faExclamationCircle}  size="lg" className='alertAweIcon' />
                        <span>{altMsg}</span>
                    </AlertMsg>
                </MessageBox>
            </Panel>
        );
    }

}
export default btnPanel;