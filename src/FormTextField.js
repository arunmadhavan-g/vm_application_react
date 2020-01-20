import React from "react"
import FormComponent from "./FormComponent";
import {TextField} from "@material-ui/core";

const FormTextField = ({label}) =>
    <FormComponent label={label}>
        <TextField id="child-name" label={label}/>
    </FormComponent>;

export default FormTextField
