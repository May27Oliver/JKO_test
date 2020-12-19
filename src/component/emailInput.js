import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components';

const Email = styled.input`
    margin:auto;
    height:40px;
    width:85vw;
    border:1px solid #d0d1d9;
    border-radius:5px;
    position:relative;
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
        content: 'E-mail';
        position: absolute;
        display: ${props=>props.selected?'block':'none'};
        font-size: 10px;
        top: -13px;
        left: 40px;
        width: 50px;
        color: #fff;
        border-radius: 3px;
        height: 18px;
        line-height: 18px;
        text-align: center;
        background: #41B8EE;
        z-index: 100;
    }
` 


class emailInput extends Component {
    constructor(){
        super();
        this.state={
            inputSelected:false
        }
    }
    componentDidMount=()=>{
        document.getElementById('input_acc').addEventListener('focus',this.showHint)
        document.getElementById('input_acc').addEventListener('blur',this.hideHint)
    }
    componentWillUnmount=()=>{
        document.getElementById('input_acc').removeEventListener('focus',this.showHint)
        document.getElementById('input_acc').removeEventListener('blur',this.hideHint)
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
                <Email id="input_acc" type="email" placeholder='Email'/>
                <FontAwesomeIcon icon={faEnvelope}  size="lg" className='AweIcon' />
            </StdInput>
        );
    }
}

export default emailInput;