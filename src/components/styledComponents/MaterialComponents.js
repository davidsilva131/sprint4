import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ArrowBack from '@mui/icons-material/ArrowBackIos';
import ArrowForward from '@mui/icons-material/ArrowForwardIos';

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

export const ColorButton = styled(Button)(({
    color: '#414141',
    backgroundColor: '#FFE031',
    '&:hover': {
        backgroundColor: '#FFE031',
    },
}));

export const PersonalLocation = styled(LocationOnIcon)(({
    color: '#FFE031',
    fontSize: '32px'
}));

export const StyledHomeIcon = styled(HomeOutlinedIcon)(({
    fontSize: '32px',
    cursor: 'pointer',
    '&:hover': {
        color: '#FFE031'
    }
}))
export const StyledSearchIcon = styled(SearchOutlinedIcon)(({
    fontSize: '32px',
    cursor: 'pointer',
    '&:hover': {
        color: '#FFE031'
    }
}))

export const StyledHistoryIcon = styled(HistoryOutlinedIcon)(({
    fontSize: '32px',
    cursor: 'pointer',
    '&:hover': {
        color: '#FFE031'
    }
}))

export const StyledAccountIcon = styled(PersonOutlinedIcon)(({
    fontSize: '32px',
    cursor: 'pointer',
    '&:hover': {
        color: '#FFE031'
    }
}))

export const StyledBackIcon = styled(ArrowBack)(({
    fontSize: '32px',
    cursor: 'pointer',
    '&:hover': {
        color: '#FFE031'
    }
}))

export const StyledNextIcon = styled(ArrowForward)(({
    fontSize: '32px',
    cursor: 'pointer',
    '&:hover': {
        color: '#FFE031'
    }
}))
