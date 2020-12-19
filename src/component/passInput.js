import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

const PassWord = styled.input`
    margin:auto;
    height:40px;
    width:85vw;
    border:1px solid #d0d1d9;
    border-radius:5px;
    &:focus {
        outline: none;
        border:2px solid #41B8EE;
    }
`

const StdInput = styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    margin-bottom:30px;
    position:relative;
    &:before {
        content: 'Password';
        position: absolute;
        display: ${props=>props.selected?'block':'none'};
        font-size: 10px;
        top: -13px;
        left: 40px;
        width: 60px;
        color: #fff;
        border-radius: 3px;
        height: auto;
        line-height: 18px;
        text-align: center;
        background: #41B8EE;
        z-index: 100;
    }
    
` 
const Forgot =styled.button`
    border:none;
    padding:0 0 0 20px;
    border-left:1px solid #ccc;
    color:#41B8EE;
    line-height:25px;
    background:transparent;
    position:absolute;
    font-size:16px;
    top:8px;
    right:40px;
    cursor:pointer;
    &:focus{
        outline:none;
    }
    @media (min-width: 500px) {
        right:20px;
    }
` 

class passInput extends Component {
    constructor(){
        super();
        this.state={
            inputSelected:false
        }
    }
    componentDidMount=()=>{
        document.getElementById('input_pass').addEventListener('focus',this.showHint)
        document.getElementById('input_pass').addEventListener('blur',this.hideHint)
    }
    componentWillUnmount=()=>{
        document.getElementById('input_pass').removeEventListener('focus',this.showHint)
        document.getElementById('input_pass').removeEventListener('blur',this.hideHint)
    }
    showHint=()=>{
        this.setState({
            inputSelected:true
        })
    }
    hideHint=()=>{
        this.setState({
            inputSelected:false
        })
    }
    render() {
        const {inputSelected} = this.state
        return (
            <StdInput selected={inputSelected}>
                <PassWord id="input_pass" type="password" placeholder='Password'></PassWord>
                <FontAwesomeIcon icon={faLock}  size="lg" className='AweIcon' />
                <Forgot>Forget ?</Forgot>
            </StdInput>
        );
    }
}

export default passInput;