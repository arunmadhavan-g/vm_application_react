import React from "react"
import {MenuItem, Select} from "@material-ui/core";
import FormComponent from "./FormComponent";
import FormTextField from "./FormTextField";

const SiblingForm = ({show}) => <div className={`alumniContainer ${!show ? "hide" : ""}`}>
    <h3>Sibling Details</h3>
    <FormComponent label="Relationship to the child">
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
        >
            <MenuItem value="Father">Sister</MenuItem>
            <MenuItem value="Mother">Brother</MenuItem>
        </Select>
    </FormComponent>

    <FormTextField label="Year of Admission"/>
    <FormTextField label="Registration Number"/>
</div>;

export default SiblingForm
