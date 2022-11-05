import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import { purple } from '@mui/material/colors';

export const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#FFE031',
    },
    '& .MuiInput-underline:after': {
        borderBottomColor: '#FFE031',
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: '#FFE031',
        },
        '&:hover fieldset': {
            borderColor: '#FFE031',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#FFE031',
        },
    },
});

export const ColorButton = styled(Button)(({ theme }) => ({
    color: '#414141',
    backgroundColor: '#FFE031',
    '&:hover': {
        backgroundColor: '#FFE031',
    },
}));