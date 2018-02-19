import React,{Component} from 'react'
import {Form,FormGroup,FormControl,ControlLabel,HelpBlock,Col} from 'react-bootstrap'


export default class LoanDetails_Entry extends Component {
  constructor(props){
    super(props);
    this.state ={
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
    }
    this.nextStep = this.nextStep.bind(this)
  }

  getValidationState() {
        const length = 19;
            //this.state.groupName.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        switch(e.target.id){
            case 'BankName' : this.setState({ Bank: e.target.value }); break;
            case 'BranchName' : this.setState({ Branch: e.target.value }); break;
            case 'LoanDate' : this.setState({ Loan_Date: e.target.value }); break;
            case 'LoanAmount' : this.setState({ Loan_amount: e.target.value }); break;
            case 'PEMI' : this.setState({ Prescribed_monthly_EMI: e.target.value }); break;
            case 'savings' : this.setState({ Savings: e.target.value }); break;
            case 'noEMI' : this.setState({ number_of_EMI: e.target.value }); break;
            case 'Interest_Rule' : this.setState({ Interest_Rule: e.target.value }); break;
            case 'Loan_account_number' : this.setState({ Loan_account_number: e.target.value }); break;
            case 'SB_account_number' : this.setState({ SB_account_number: e.target.value }); break;

        }
    }

  render() {
    return (
        <Form horizontal>
            <FormGroup
                bsSize="small" controlId="BankName"
              validationState={this.getValidationState()}
            >
              <Col componentClass={ControlLabel} sm={2}> Bank Name </Col>
              <Col sm={10}>
                  <FormControl
                    type="text" ref = "BankName"
                    defaultValue={this.props.LoanDetails.Bank}
                    placeholder="Enter Bank name" onChange={this.handleChange}
                  />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </Col>
            </FormGroup>
            <FormGroup
                bsSize="small" controlId="BranchName"
              validationState={this.getValidationState()}
            >
              <Col componentClass={ControlLabel} sm={2}> Branch Name </Col>
              <Col sm={10}>
                  <FormControl
                    type="text" ref = "BranchName"
                    defaultValue={this.props.LoanDetails.Branch}
                    placeholder="Enter Branch name" onChange={this.handleChange}
                  />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </Col>
            </FormGroup>
            <FormGroup
                bsSize="small" controlId="LoanDate"
              validationState={this.getValidationState()}
            >
              <Col componentClass={ControlLabel} sm={2}> Loan Date </Col>
              <Col sm={10}>
                  <FormControl
                    type="text" ref = "LoanDate"
                    defaultValue={this.props.LoanDetails.Loan_Date}
                    placeholder="Enter Loan Date" onChange={this.handleChange}
                  />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </Col>
            </FormGroup>
            <FormGroup
                bsSize="small" controlId="LoanAmount"
              validationState={this.getValidationState()}
            >
              <Col componentClass={ControlLabel} sm={2}> Loan Amount </Col>
              <Col sm={10}>
                  <FormControl
                    type="text" ref = "LoanAmount"
                    defaultValue={this.props.LoanDetails.Loan_amount}
                    placeholder="Enter Loan Amount" onChange={this.handleChange}
                  />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </Col>
            </FormGroup>
            <FormGroup
                bsSize="small" controlId="PEMI"
              validationState={this.getValidationState()}
            >
              <Col componentClass={ControlLabel} sm={2}> Prescribed monthly EMI </Col>
              <Col sm={10}>
                  <FormControl
                    type="text" ref = "PEMI"
                    defaultValue={this.props.LoanDetails.Prescribed_monthly_EMI}
                    placeholder="Enter Prescribed monthly EMI" onChange={this.handleChange}
                  />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </Col>
            </FormGroup>
            <FormGroup
                bsSize="small" controlId="Savings"
              validationState={this.getValidationState()}
            >
              <Col componentClass={ControlLabel} sm={2}>  Savings </Col>
              <Col sm={10}>
                  <FormControl
                    type="text" ref = "Savings"
                    defaultValue={this.props.LoanDetails.Savings}
                    placeholder="Enter Savings" onChange={this.handleChange}
                  />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </Col>
            </FormGroup>
            <FormGroup
                bsSize="small" controlId="noEMI"
              validationState={this.getValidationState()}
            >
              <Col componentClass={ControlLabel} sm={2}> Number of EMI </Col>
              <Col sm={10}>
                  <FormControl
                    type="text" ref = "noEMI"
                    defaultValue={this.props.LoanDetails.number_of_EMI}
                    placeholder="Enter number of EMI" onChange={this.handleChange}
                  />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </Col>
            </FormGroup>
            <FormGroup
                bsSize="small" controlId="Interest_Rule"
              validationState={this.getValidationState()}
            >
              <Col componentClass={ControlLabel} sm={2}> Interest Rule </Col>
              <Col sm={10}>
                  <FormControl
                    type="text" ref = "Interest_Rule"
                    defaultValue={this.props.LoanDetails.Interest_Rule}
                    placeholder="Enter Interest Rule" onChange={this.handleChange}
                  />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </Col>
            </FormGroup>
            <FormGroup
                bsSize="small" controlId="Loan_account_number"
              validationState={this.getValidationState()}
            >
              <Col componentClass={ControlLabel} sm={2}> Loan account number </Col>
              <Col sm={10}>
                  <FormControl
                    type="text" ref = "Loan_account_number"
                    defaultValue={this.props.LoanDetails.Loan_account_number}
                    placeholder="Enter Loan account number" onChange={this.handleChange}
                  />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </Col>
            </FormGroup>
            <FormGroup
                bsSize="small" controlId="SB_account_number"
              validationState={this.getValidationState()}
            >
              <Col componentClass={ControlLabel} sm={2}> SB account number </Col>
              <Col sm={10}>
                  <FormControl
                    type="text" ref = "SB_account_number"
                    defaultValue={this.props.LoanDetails.SB_account_number}
                    placeholder="Enter SB account number" onChange={this.handleChange}
                  />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
              </Col>
            </FormGroup>
            <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
            <button className="btn -primary pull-right" onClick={this.nextStep}>Save &amp; Continue</button>
        </Form>
    );
  }

  nextStep(e){
        e.preventDefault()
        this.props.saveValues(this.state)
        this.props.nextStep()
  }
}
