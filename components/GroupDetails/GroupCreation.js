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
    Loan_purpose: null,
    Loan_cycle: null,
    previous_Loan_amount: null,
    previous_Due_Date:null
};

let LocationValues ={
    village: null,
    panchayath: null,
    block: null,
};

let LoanDetails ={
    Bank: null,
    Branch: null,
    Loan_Date: null,
    Loan_amount: null,
    Prescribed_monthly_EMI  : null,
    Savings: null,
    number_of_EMI: null,
    Interest_Rule: null,
    Loan_account_number: null,
    SB_account_number: null
};

let CollectionDetails ={
    collection_center: null,
    collection_code: null,
    collection_date: null,
    collection_time: null
};

let imageDetails ={
    imageUrl: null
};

export default class GroupCreation extends Component {
  constructor(props){
    super(props);
    this.state ={
      step :1
    };
    this.showStep = this.showStep.bind(this);
    this.saveValues = this.saveValues.bind(this);
    this.nextStep = this.nextStep.bind(this);
    this.previousStep = this.previousStep.bind(this);
  }

  showStep() {
      switch(this.state.step) {
          case 1: return (
                         <GroupDetails_Entry
                             GroupValues={GroupValues} nextStep={this.nextStep}
                          previousStep={this.previousStep} saveValues={this.saveValues}
                         />
                    );
          case 2: return (
                         <LocationDetails_Entry
                          LocationValues={LocationValues} nextStep={this.nextStep}
                          previousStep={this.previousStep} saveValues={this.saveValues}
                         />
                    );
          case 3: return (
                         <LoanDetails_Entry
                          LoanDetails={LoanDetails} nextStep={this.nextStep}
                          previousStep={this.previousStep} saveValues={this.saveValues}
                         />
                    );
          case 4: return (
                         <CollectionDetails_Entry
                             CollectionDetails={CollectionDetails} nextStep={this.nextStep}
                          previousStep={this.previousStep} saveValues={this.saveValues}
                         />
                    );
          case 5: return (
                         <FileUpload_Entry
                         imageDetails={imageDetails} nextStep={this.nextStep}
                          previousStep={this.previousStep} saveValues={this.saveValues}
                         />
                    );
          case 6: return (
                    <SuccessEntry />
                    );
      }
  }
  saveValues(field_value) {
      switch(this.state.step) {
          case 1: return function() {
              GroupValues = Object.assign({}, GroupValues, field_value)
                    console.log(GroupValues);

                }.bind(this)();
          case 2: return function() {
              LocationValues = Object.assign({}, LocationValues, field_value)
                    console.log(LocationValues);
                }.bind(this)();
          case 3: return function() {
              LoanDetails = Object.assign({}, LoanDetails, field_value)
                  console.log(LoanDetails);
                }.bind(this)();
          case 4: return function() {
              CollectionDetails = Object.assign({}, CollectionDetails, field_value)
                                console.log(CollectionDetails);
                }.bind(this)();
          case 5: return function() {
              imageDetails = Object.assign({}, imageDetails, field_value)
                  console.log(CollectionDetails);
                }.bind(this)();
      }
  }
  nextStep(){
      this.setState({
          step: this.state.step + 1
      });
  }
  previousStep(){
      this.setState({
          step: this.state.step - 1
      });
  }



  render(){

    return (
        <Row>
            <Col xs={12}>
                <Col xs={2}></Col>
                <Col xs={8}>
                    <ProgressBar active now={this.state.step * 20 } striped bsStyle="success" />
                    {this.showStep()}
                </Col>
                <Col xs={2}></Col>
            </Col>
        </Row>
    );
  }
}
