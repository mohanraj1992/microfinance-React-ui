import React,{Component} from 'react'
import {Form,Col,FormGroup,FormControl,ControlLabel,HelpBlock} from 'react-bootstrap'

export default class FileUpload_Entry extends Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            value: ''
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
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
                    Pick image Name
                </Col>
                <Col sm={10}>
                    <FormControl
                        type="file"
                        ref = "image"
                        defaultValue={this.props.imageDetails.imageUrl}
                        placeholder=""
                        onChange={this.handleChange}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>Validation is based on string length.</HelpBlock>
                </Col>
            </FormGroup>
            <button className="btn -default pull-left" onClick={this.props.previousStep}>Back</button>
            <button className="btn -primary pull-right" onClick={this.props.submitRegistration}>Submit Registration</button>
        </Form>
        );
    }
}
