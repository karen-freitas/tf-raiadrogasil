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
                    label
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


// import React from 'react';
// import './input.css';

// const Input = ({ label, type, name, value, onChange, className, placeholder }) => {
//     return (
//         <div className='input-container'>
//             <label htmlFor={name} className='label'>
//                 {label}
//             </label>
//             <input
//                 id={name}
//                 name={name}
//                 className={className ? className : "input-standard"}
//                 placeholder={placeholder}
//                 type={type}
//                 value={value}
//                 onChange={onChange}
//             />
//         </div>
//     );
// }

// export default Input;

