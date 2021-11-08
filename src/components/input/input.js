import * as React from 'react';
import { Box, TextField } from '@mui/material';

export default function FormPropsTextFields({ label, type, name, value, onChange, className }) {
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField
                    required
                    id={name}
                    label={label}
                    name={name}
                    className={className ? className : "input-standard"}
                    type={type}
                    value={value}
                    onChange={onChange}
                />
            </div>

        </Box>
    );
}