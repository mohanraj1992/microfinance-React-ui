import React,{Component} from 'react'
import {Row,Col,Button,ProgressBar} from 'react-bootstrap'
//import style from './GroupCreation.css';

//import Multistep from 'react-multistep'

import LocationDetails_Entry from '../GroupStepper/LocationDetails_Entry'
import GroupDetails_Entry from '../GroupStepper/GroupDetails_Entry'
import LoanDetails_Entry from '../GroupStepper/LoanDetails_Entry'
import CollectionDetails_Entry from '../GroupStepper/CollectionDetails_Entry'
import FileUpload_Entry from '../GroupStepper/FileUpload_Entry'

let GroupValues ={
    GroupName: null,
    No_of_members: null,
    Group_code: null,
    Loan_purpose: null,
    Loan_cycle: null,
    previous_Loan_amount: null,
    previous_Due_Date: null

};

export default class GroupCreation extends Component {
  constructor(props){
    super(props);
    this.state ={
      step :1
    };
  }

  showStep() {
      switch(this.state.step) {
          case 1: return (
                         <GroupDetails_Entry />
                    );
          case 2: return (
                         <LocationDetails_Entry />
                    );
          case 3: return (
                         <LoanDetails_Entry />
                    );
          case 4: return (
                         <CollectionDetails_Entry />
                    );
          case 5: return (
                         <FileUpload_Entry />
                    );
          case 6: return (
                    <SuccessEntry />
                    );
      }
  }
  render(){

    return (
        <Row>
            <Col xs={12}>
                <Col xs={2}></Col>
                <Col xs={8}>
                    <ProgressBar active now={this.state.step * 20 } striped bsStyle="success" />
                    {this.showStep()}
                    <Button className= {'pull-left'} bsStyle="warning">Previous</Button>
                    <Button className= {'pull-right'} bsStyle="info">Next</Button>
                </Col>
                <Col xs={2}></Col>
            </Col>
        </Row>
    );
  }
}
