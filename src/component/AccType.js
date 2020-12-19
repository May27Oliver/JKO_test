import React, { Component, Fragment} from 'react';
import AccTypeFile from './AccTypeFile';
import patient from '../images/img_patient_90@3x.svg';
import doctor from '../images/img_doctor_90@3x.svg';

class AccType extends Component {
    constructor(){
        super();
        this.state={
            acc_key:'',//你選擇的Account的key值
            pic_list:[
                { 
                    path:doctor,
                    type:'doctor',
                    key:'pic_1',
                    selected:false
                },
                {
                    path:patient,
                    type:'patient',
                    key:'pic_2',
                    selected:false
                }  
            ]
        }
    }
    selectAcc = (key,callback) => {
        let temp_list = this.state.pic_list.slice();//先做一個資料變更用的list
        if(typeof(this.state.acc_key) === 'number'){//將上次點選的selected改回false
            temp_list[this.state.acc_key].selected = false;
        }
        temp_list[key].selected = true;
        this.setState(
            {
                acc_key:key,
                pic_list:temp_list
            }
        )
        if(callback)callback(temp_list[key].type)
    }
    render() {
        const {changeTypeName}=this.props;
        const {pic_list} =this.state;
        return (
            <Fragment>
                {pic_list.map((item,index)=>(<AccTypeFile path={item.path} key={item.key} selected={item.selected} selectAcc= {() => this.selectAcc(index,changeTypeName)}></AccTypeFile>))}
            </Fragment>
        );
    }
}

export default AccType;