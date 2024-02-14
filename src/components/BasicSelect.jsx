import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const BasicSelect = ({ inputLabbel, label, value, setValue, items }) => {
    return (
        <FormControl sx={{ my: 1, width: "100%" }}>
            <InputLabel id={inputLabbel + "-label"}>{inputLabbel}</InputLabel>
            <Select
                labelId={inputLabbel + "-label"}
                id={inputLabbel + "-select"}
                value={value}
                label={label}
                onChange={(e) => setValue(e.target.value)}
            >
                {
                    items?.map(item => (
                        <MenuItem key={item.value} value={item.value}>
                            {item.text}
                        </MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}

export default BasicSelect