import * as React from 'react';
import { TextField, Box } from '@mui/material';

export default function FormPropsTextFields({ label, type, name, value, onChange, className }) {
    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: 300, maxWidth: '100%',
                    '& > :not(style)': { m: 1 },
                }}
            >
                <TextField
                    required
                    fullWidth
                    id={name}
                    label={label}
                    name={name}
                    className={className ? className : "input-standard"}
                    type={type}
                    value={value}
                    onChange={onChange}
                />
            </Box>
        </>
    );
}
