import React from "react"
import {MenuItem, Select} from "@material-ui/core";
import FormComponent from "./FormComponent";
import FormTextField from "./FormTextField";

const AlumniForm = ({show}) => <div className={`alumniContainer ${!show ? "hide" : ""}`}>
    <h3>Alumni Details</h3>
    <FormComponent label="Relationship to the child">
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
        >
            <MenuItem value="Father">Father</MenuItem>
            <MenuItem value="Mother">Mother</MenuItem>
        </Select>
    </FormComponent>

    <FormTextField label="Year of Passing out"/>
    <FormTextField label="Registration Number (Optional) "/>
</div>;

export default AlumniForm
