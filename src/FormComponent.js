import React from "react"
import {FormLabel} from "@material-ui/core";

const FormComponent = ({label, children}) =>
    <div className="formComponent">
        <FormLabel component="legend">{label}</FormLabel>
        <div className="formComponentChild">{children}</div>
    </div>;

export default FormComponent
