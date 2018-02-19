import React,{Component} from 'react'
import {Form,FormGroup,FormControl,ControlLabel,HelpBlock,Col} from 'react-bootstrap'


export default class LocationDetails_Entry extends Component {
  constructor(props){
    super(props);
    console.log(props)
    this.state = {
        village: null,
        panchayath: null,
        block: null,
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
            case 'village' : this.setState({ village: e.target.value }); break;
            case 'panchayath' : this.setState({ panchayath: e.target.value }); break;
            case 'block' : this.setState({ block: e.target.value }); break;
        }
    }

  render() {
    return (
        <Form horizontal>
            <FormGroup
                bsSize="small"
                controlId="village"
                validationState={this.getValidationState()}
            >
                <Col componentClass={ControlLabel} sm={2}>
                    Village Name
                </Col>
                <Col sm={10}>
                    <FormControl
                        type="text"
                        ref = "village"
                        defaultValue={this.props.LocationValues.village}
                        placeholder="Enter Group name"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Validation is based on string length.</HelpBlock>
                </Col>
            </FormGroup>
            <FormGroup
                bsSize="small"
                controlId="panchayath"
                validationState={this.getValidationState()}
            >
                <Col componentClass={ControlLabel} sm={2}>
                    Panchayath Name
                </Col>
                <Col sm={10}>
                    <FormControl
                        type="text"
                        ref = "panchayath"
                        defaultValue={this.props.LocationValues.panchayath}
                        placeholder="Enter Number of members"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Validation is based on string length.</HelpBlock>
                </Col>
            </FormGroup>
            <FormGroup
                bsSize="small"
                controlId="block"
                validationState={this.getValidationState()}
            >
                <Col componentClass={ControlLabel} sm={2}>
                    Block Name
                </Col>
                <Col sm={10}>
                    <FormControl
                        type="text"
                        ref="block"
                        defaultValue={this.props.LocationValues.block}
                        placeholder="Enter Purpose for the loan"
                        onChange={this.handleChange}
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
