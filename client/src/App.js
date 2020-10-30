import React, { Component } from 'react';
import Customer from './component/Customer' ;
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles' ;
import CircularProgress from '@material-ui/core/CircularProgress';


const styles = theme => ({
  root:{
    width:'100%',
    marginTop: theme.spacing.unit *3,
    overflowx:"auto"
  },
  table:{
    minWidth:1080
  },
  progress:{
    margin:theme.spacing.unit *2
  }
})



class App extends Component {

  state ={
    customers:"",
    completed:0
  }

  componentDidMount(){
    this.timer = setInterval(this.progress, 20);
    this.callApi()
    .then(res => this.setState({customers:res}))
    .catch(err => console.log(err));
  }

  callApi = async() => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body ;
  }

  progress = () => {
    const {completed} = this.state;
    this.setState({completed:completed>= 100 ? 0 : completed+1});
  }

  render(){
    const {classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>상호</TableCell>
              <TableCell>사업자번호</TableCell>
              <TableCell>대표자</TableCell>
              <TableCell>대표자HP</TableCell>
              <TableCell>대표자 E-mail</TableCell>
              <TableCell>회사구분</TableCell>
              <TableCell>계약구분</TableCell>
              <TableCell>대표자주소</TableCell>
              <TableCell>계약기간</TableCell>
              <TableCell>계약기간</TableCell>
              <TableCell>입금일자</TableCell>
              <TableCell>월회비</TableCell>
              <TableCell>이미지</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
        { this.state.customers ?
          this.state.customers.map(c =>{
            return(
              <Customer key={c.id} id={c.id} company_name={c.company_name}
                company_reg_no={c.company_reg_no} company_ceo={c.company_ceo}
                company_ceo_phone={c.company_ceo_phone} company_ceo_email={c.company_ceo_email}
                company_tp={c.company_tp} contract_tp={c.contract_tp}
                company_ceo_address={c.company_ceo_address} contract_start_end_date={c.contract_start_end_date}
                contract_term={c.contract_term} imcome_date={c.imcome_date}
                imcome_fee={c.imcome_fee} image={c.image}
              />
            );
          }) : 
          <TableRow>
            <TableCell colSpan="14" align="center">
              <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} />
            </TableCell>
          </TableRow>
        }
          </TableBody>
        </Table>
      </Paper>
    );
  }
  
}

export default withStyles(styles)(App);
