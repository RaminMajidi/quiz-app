import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const BasicSelect = ({ inputLabel, label, value, setValue, items }) => {
    return (
        <FormControl sx={{ my: 1, width: "100%" }}>
            <InputLabel id={inputLabel + "-label"}>{inputLabel}</InputLabel>
            <Select
                labelId={inputLabel + "-label"}
                id={inputLabel + "-select"}
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