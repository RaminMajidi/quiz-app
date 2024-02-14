import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { names } from '../assets/data/data';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};



export default function MultipleSelectCheckmarks({ lable, inputLabel, values, setValues }) {

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setValues(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    return (
        <div>
            <FormControl sx={{ my: 1, width: "100%" }}>
                <InputLabel id={inputLabel + "-multiple-label"}>
                    {inputLabel}
                </InputLabel>
                <Select
                    labelId={inputLabel + "-multiple-label"}
                    id={inputLabel + "-multiple-checkbox"}
                    multiple
                    value={values}
                    onChange={handleChange}
                    input={<OutlinedInput label={lable} />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                >
                    {names?.map((name) => (
                        <MenuItem key={name} value={name}>
                            <Checkbox checked={values.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}
