import React,{Component} from 'react'
import {Form,FormGroup,FormControl,ControlLabel,HelpBlock,Col} from 'react-bootstrap'

export default class GroupDetails_Entry extends Component {
    constructor(props){
        super(props);
        this.state ={
            GroupName: null,
            No_of_members: null,
            Loan_purpose: null,
            Loan_cycle: null,
            previous_Loan_amount: null,
            previous_Due_Date:null
        };
        this.handleChange = this.handleChange.bind(this);
        this.nextStep = this.nextStep.bind(this);
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
            case 'GroupName' : this.setState({ GroupName: e.target.value }); break;
            case 'groupMember' : this.setState({ No_of_members: e.target.value }); break;
            case 'loanPurpose' : this.setState({ Loan_purpose: e.target.value }); break;
            case 'loanCycle' : this.setState({ Loan_cycle: e.target.value }); break;
            case 'previous_Loan_amount' : this.setState({ previous_Loan_amount: e.target.value }); break;
            case 'previous_Due_Date' : this.setState({ previous_Due_Date: e.target.value }); break;

        }
    }


    render() {
        return (
          <Form horizontal>
            <FormGroup
                bsSize="small"
              controlId="groupName"
              validationState={this.getValidationState()}
            >
              <Col componentClass={ControlLabel} sm={2}>
                  Group Name
              </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    ref = "groupName"
                    defaultValue={this.props.GroupValues.GroupName}
                    placeholder="Enter Group name"
                    onChange={this.handleChange}
                  />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
                </Col>
            </FormGroup>
              <FormGroup
                  bsSize="small"
              controlId="groupMember"
              validationState={this.getValidationState()}
            >
              <Col componentClass={ControlLabel} sm={2}>
                  Number of Members
              </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    ref = "groupMember"
                    defaultValue={this.props.GroupValues.No_of_members}
                    placeholder="Enter Number of members"
                    onChange={this.handleChange}
                  />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
                </Col>
            </FormGroup>
              <FormGroup
                  bsSize="small"
              controlId="loanPurpose"
              validationState={this.getValidationState()}
            >
              <Col componentClass={ControlLabel} sm={2}>
                  Loan purpose
              </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    ref="loanPurpose"
                    defaultValue={this.props.GroupValues.Loan_purpose}
                    placeholder="Enter Purpose for the loan"
                    onChange={this.handleChange}
                  />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
                </Col>
            </FormGroup>
              <FormGroup
                  bsSize="small"
              controlId="loanCycle"
              validationState={this.getValidationState()}
            >
              <Col componentClass={ControlLabel} sm={2}>
                  Loan Cycle
              </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    ref="loanCycle"
                    defaultValue={this.props.GroupValues.Loan_cycle}
                    placeholder="Enter Loan Cycle"
                    onChange={this.handleChange}
                  />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
                </Col>
            </FormGroup>
              <FormGroup
                  bsSize="small"
              controlId="previous_Loan_amount"
              validationState={this.getValidationState()}
            >
              <Col componentClass={ControlLabel} sm={2}>
                  Previous Loan Amount
              </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    ref="previous_Loan_amount"
                    defaultValue={this.props.GroupValues.previous_Loan_amount}
                    placeholder="Enter Loan Cycle"
                    onChange={this.handleChange}
                  />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
                </Col>
            </FormGroup>
              <FormGroup
                  bsSize="small"
              controlId="previous_Due_Date"
              validationState={this.getValidationState()}
            >
              <Col componentClass={ControlLabel} sm={2}>
                  Previous Due Date
              </Col>
                <Col sm={10}>
                  <FormControl
                    type="text"
                    ref="previous_Due_Date"
                    defaultValue={this.props.GroupValues.previous_Due_Date}
                    placeholder="Enter Loan Cycle"
                    onChange={this.handleChange}
                  />
                <FormControl.Feedback />
                <HelpBlock>Validation is based on string length.</HelpBlock>
                </Col>
            </FormGroup>
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
