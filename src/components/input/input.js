import * as React from 'react';
import { Box, TextField } from '@mui/material';
import '../../styles/register.css'

export default function FormPropsTextFields({ label, type, name, value, onChange, className, error, helperText }) {
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                margin: '0.75rem',
                width: '20rem',
                '& > :not(style)': { m: 1 },
            }}
        >
            <TextField
                id={name}
                label={label}
                name={name}
                className={className ? className : "input-standard"}
                type={type}
                value={value}
                onChange={onChange}
                error={error}
                helperText={helperText}
            />
        </Box>
    );
}
