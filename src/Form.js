import React from "react"
import {FormControlLabel, Radio, RadioGroup, TextField} from "@material-ui/core";
import FormComponent from "./FormComponent";
import FormTextField from "./FormTextField";

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

</div>;

export default Form
