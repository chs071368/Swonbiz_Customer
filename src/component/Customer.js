import React, { Component } from 'react' ;

class Customer extends Component{
    render(){
        return(
            <div>
                <h2>{this.props.id}</h2>
                 <p>{this.props.company_name}</p>
                 <p>{this.props.company_reg_no}</p>
                 <p>{this.props.company_ceo}</p>
                 <p>{this.props.company_ceo_phone}</p>
                 <p>{this.props.company_ceo_email}</p>
                 <p>{this.props.company_tp}</p>
                 <p>{this.props.contract_tp}</p>
                 <p>{this.props.company_ceo_address}</p>
                 <p>{this.props.contract_start_end_date}</p>
                 <p>{this.props.contract_term}</p>
                 <p>{this.props.imcome_date}</p>
                 <p>{this.props.imcome_fee}</p>
                 <p>{this.props.image}</p>
            </div>
        )
    }

}

export default Customer ;
