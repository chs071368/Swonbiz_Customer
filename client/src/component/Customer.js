import React, { Component } from 'react' ;
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends Component{
    render(){
        return(
            <TableRow>
                <TableCell>{this.props.id}</TableCell>
                 <TableCell>{this.props.company_name}</TableCell>
                 <TableCell>{this.props.company_reg_no}</TableCell>
                 <TableCell>{this.props.company_ceo}</TableCell>
                 <TableCell>{this.props.company_ceo_phone}</TableCell>
                 <TableCell>{this.props.company_ceo_email}</TableCell>
                 <TableCell>{this.props.company_tp}</TableCell>
                 <TableCell>{this.props.contract_tp}</TableCell>
                 <TableCell>{this.props.company_ceo_address}</TableCell>
                 <TableCell>{this.props.contract_start_end_date}</TableCell>
                 <TableCell>{this.props.contract_term}</TableCell>
                 <TableCell>{this.props.imcome_date}</TableCell>
                 <TableCell>{this.props.imcome_fee}</TableCell>
                 <TableCell>{this.props.image}</TableCell>
            </TableRow>
        )
    }

}

export default Customer ;
