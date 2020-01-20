import React from "react"
import {FormControlLabel, Radio, RadioGroup, Button} from "@material-ui/core";
import FormComponent from "./FormComponent";
import FormTextField from "./FormTextField";
import AlumniForm from "./AlumniForm";
import SiblingForm from "./SiblingForm";

const Form = () => <div className="formContainer">

    <FormTextField label="Name of the Child"/>

    <FormComponent label="Gender">
        <RadioGroup aria-label="gender" name="gender1">
            <FormControlLabel value="female" control={<Radio/>} label="Female"/>
            <FormControlLabel value="male" control={<Radio/>} label="Male"/>
        </RadioGroup>
    </FormComponent>

    <FormTextField label="Father's Name"/>
    <FormTextField label="Mother's Name"/>
    <FormTextField label="Phone Number"/>
    <FormTextField label="Alternate Phone Number"/>
    <FormTextField label="Email Address"/>

    <FormComponent label="Is Parent Alumni?">
        <RadioGroup aria-label="alumni" name="alumni">
            <FormControlLabel value="true" control={<Radio/>} label="Yes"/>
            <FormControlLabel value="false" control={<Radio/>} label="No"/>
        </RadioGroup>
    </FormComponent>

    <AlumniForm show={false}/>

    <FormComponent label="Does a child have a sibling studying in the school?">
        <RadioGroup aria-label="sibling" name="sibling">
            <FormControlLabel value="true" control={<Radio/>} label="Yes"/>
            <FormControlLabel value="false" control={<Radio/>} label="No"/>
        </RadioGroup>
    </FormComponent>

    <SiblingForm show={false}/>

    <div className="buttonContainer">
        <Button variant="contained">Cancel</Button>
        <Button variant="contained" color="primary">
            Submit
        </Button>
    </div>
</div>;

export default Form
