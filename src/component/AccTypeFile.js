import React, { Component } from 'react';
import styled from 'styled-components';

const File = styled.div`
    background:url('${props=>props.path}') no-repeat;
    border:${props=>props.selected?'2px':'1px'} solid ${props=>props.selected?'#41B8EE':'#ccc'};
    max-width: 100%;
    width:auto;
    height:167px;
    background-size:cover;
    flex:0 0 167px;
    border-radius:10px;
    margin:10px;
    position:relative;
`
const SelectIcon = styled.div`
    display:${props=>props.selected?'block':'none'};
    position:absolute;
    right:-15px;
    bottom:-15px;
    width:35px;
    height:35px;
    box-shadow:0 5px 5px #B1E1F7;
    border-radius:50%;
    background:#38B5ED;
    &:before {
        content:'';
        position:absolute;
        background:#fff;
        top:19px;
        left:6px;
        width:10px;
        height:3px;
        border-radius:1.5px;
        transform:rotate(45deg);
    }
    &:after {
        content:'';
        position:absolute;
        background:#fff;
        top:16px;
        left:10px;
        width:20px;
        height:3px;
        border-radius:1.5px;
        transform:rotate(-45deg);
    }

`

class AccTypeFile extends Component {
    render() {
        const {path,selected,selectAcc} = this.props;
        return (
            <File path={path} selected={selected} onClick={selectAcc}>
                <SelectIcon selected={selected}></SelectIcon>
            </File>
        );
    }
}

export default AccTypeFile;