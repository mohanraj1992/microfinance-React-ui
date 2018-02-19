import React,{Component} from 'react'
import {Form,FormGroup,FormControl,ControlLabel,HelpBlock,Col} from 'react-bootstrap'


export default class CollectionDetails_Entry extends Component {
  constructor(props){
    super(props);
    this.state = {
        collection_center: null,
        collection_code: null,
        collection_date: null,
        collection_time: null,
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
            case 'collection_center' : this.setState({ collection_center: e.target.value }); break;
            case 'collection_code' : this.setState({ collection_code: e.target.value }); break;
            case 'collection_date' : this.setState({ collection_date: e.target.value }); break;
            case 'collection_time' : this.setState({ collection_time: e.target.value }); break;
        }
    }

  render() {
    return (
        <Form horizontal>
            <FormGroup
                bsSize="small"
                controlId="collection_center"
                validationState={this.getValidationState()}
            >
                <Col componentClass={ControlLabel} sm={2}>
                    Village Name
                </Col>
                <Col sm={10}>
                    <FormControl
                        type="text"
                        ref = "collection_center"
                        defaultValue={this.props.CollectionDetails.collection_center}
                        placeholder="Enter Collection center"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Validation is based on string length.</HelpBlock>
                </Col>
            </FormGroup>
            <FormGroup
                bsSize="small"
                controlId="collection_code"
                validationState={this.getValidationState()}
            >
                <Col componentClass={ControlLabel} sm={2}>
                    Panchayath Name
                </Col>
                <Col sm={10}>
                    <FormControl
                        type="text"
                        ref = "collection_code"
                        defaultValue={this.props.CollectionDetails.collection_code}
                        placeholder="Enter Collection Code"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Validation is based on string length.</HelpBlock>
                </Col>
            </FormGroup>
            <FormGroup
                bsSize="small"
                controlId="collection_date"
                validationState={this.getValidationState()}
            >
                <Col componentClass={ControlLabel} sm={2}>
                    Block Name
                </Col>
                <Col sm={10}>
                    <FormControl
                        type="text"
                        ref="collection_date"
                        defaultValue={this.props.CollectionDetails.collection_date}
                        placeholder="Enter Collection Time"
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Validation is based on string length.</HelpBlock>
                </Col>
            </FormGroup>
            <FormGroup
                bsSize="small"
                controlId="collection_time"
                validationState={this.getValidationState()}
            >
                <Col componentClass={ControlLabel} sm={2}>
                    Block Name
                </Col>
                <Col sm={10}>
                    <FormControl
                        type="text"
                        ref="collection_time"
                        defaultValue={this.props.CollectionDetails.collection_time}
                        placeholder="Enter Collection Time"
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
