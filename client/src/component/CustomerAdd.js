import React, { Component } from 'react';
import {post} from 'axios';
// import { response } from 'express';

class CustomerAdd extends Component {
    constructor(props){
        super(props);
        this.state={
            company_name:'',
            company_reg_no:'',
            company_ceo:'',
            company_ceo_phone:'',
            company_ceo_email:'',
            company_tp:'',
            contract_tp:'',
            company_ceo_address:'',
            contract_start_end_date:'',
            contract_term:0,
            imcome_date:0,
            imcome_fee:0,
            file:null,
            fileName:''
        }
    }

    handleFormSubmit = (e) => {
        e.preventDefault()
        this.addCustomer()
            .then((response) => {
                console.log(response.data);
                this.props.stateRefresh();
            })
        this.setState({
            company_name:'',
            company_reg_no:'',
            company_ceo:'',
            company_ceo_phone:'',
            company_ceo_email:'',
            company_tp:'',
            contract_tp:'',
            company_ceo_address:'',
            contract_start_end_date:'',
            contract_term:0,
            imcome_date:0,
            imcome_fee:0,
            file:null,
            fileName:''
        })
    }

    handleFileChange = (e) =>{
        this.setState({
            file:e.target.files[0],
            fileName:e.target.value
        })
    }

    handleValueChange = (e) =>{
        let nextState ={};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    addCustomer =() => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('company_name', this.state.company_name);
        formData.append('company_reg_no', this.state.company_reg_no);
        formData.append('company_ceo', this.state.company_ceo);
        formData.append('company_ceo_phone', this.state.company_ceo_phone);
        formData.append('company_ceo_email', this.state.company_ceo_email);
        formData.append('company_tp', this.state.company_tp);
        formData.append('contract_tp',this.state.contract_tp);
        formData.append('company_ceo_address', this.state.company_ceo_address);
        formData.append('contract_start_end_date', this.state.contract_start_end_date);
        formData.append('contract_term', this.state.contract_term);
        formData.append('imcome_date', this.state.imcome_date);
        formData.append('imcome_fee', this.state.imcome_fee);
        const config = {
            headers :{'content-type':'multipart/form-data' }
        }
        return post (url, formData, config);
    }

    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
            <h1>고객추가하기</h1>
                 상호:<input type="text" name="company_name" value={this.state.company_name} onChange={this.handleValueChange} /><br/>
                사업자번호 : <input name="company_reg_no" type="text" value={this.state.company_reg_no} onChange={this.handleValueChange} /><br/>
                대표자 : <input type="text" name="company_ceo" value={this.state.company_ceo} onChange={this.handleValueChange} /><br/>
                대표자HP : <input type="text" name="company_ceo_phone" value={this.state.company_ceo_phone} onChange={this.handleValueChange} /><br/>
                대표자 E-mail : <input type="text" name="company_ceo_email" value={this.state.company_ceo_email} onChange={this.handleValueChange} /><br/>

                회사구분 : <input type="text" name="company_tp" value={this.state.company_tp} onChange={this.handleValueChange} /><br/>
                계약구분 : <input type="text" name="contract_tp" value={this.state.contract_tp} onChange={this.handleValueChange} /><br/>
                대표자주소 : <input type="text" name="company_ceo_address" value={this.state.company_ceo_address} onChange={this.handleValueChange} /><br/>
                계약시작종료일자 : <input type="text" name="contract_start_end_date" value={this.state.contract_start_end_date} onChange={this.handleValueChange} /><br/>
                계약기간 : <input type="number" name="contract_term" value={this.state.contract_term} onChange={this.handleValueChange} /><br/>
                입금일자 : <input type="number" name="imcome_date" value={this.state.imcome_date} onChange={this.handleValueChange} /><br/>
                월회비 : <input type="number" name="imcome_fee" value={this.state.imcome_fee} onChange={this.handleValueChange} /><br/>

                대표자 주민등록증: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br />
                <button type="submit">추가하기</button>
            </form>
        );
    }
   
}
export default CustomerAdd ;