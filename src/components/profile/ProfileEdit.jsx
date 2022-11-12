import { Container } from "@mui/system";
import React from "react";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import './ProfileEdit.scss'
import { useNavigate } from "react-router-dom";
import { Avatar, InputAdornment } from "@mui/material";
import { ColorButton, StyledEditInput } from "../styledComponents/MaterialComponents";
import EditIcon from '@mui/icons-material/Edit';
const ProfileEdit = () => {

    const navigate = useNavigate()
    const handleGoBack = () => {
        navigate(-1)
    }
    return (
        <Container>
            <div className="profileEdit">
                <aside>
                    <div className="profileEdit__head">
                        <span style={{ cursor: 'pointer' }} onClick={handleGoBack}>
                            <ArrowBackIosIcon />
                        </span>
                        <span>Profile</span>
                    </div>
                    <section className="profileEdit__image">
                        <Avatar sx={{ width: '64px', height: '64px', cursor: 'pointer' }} alt="photo" src="" />
                    </section>
                    <section className="profileEdit__inputs">
                        <StyledEditInput
                            sx={{
                                height: '44px',
                                backgroundColor: '#F2F2F2',
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                            fullWidth
                            placeholder="name"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <EditIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <StyledEditInput
                            sx={{
                                height: '44px',
                                backgroundColor: '#F2F2F2',
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                            fullWidth
                            placeholder="email"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <EditIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </section>
                </aside>
                <aside>
                    <ColorButton fullWidth>
                        Save
                    </ColorButton>
                </aside>
            </div>
        </Container>
    )
};

export default ProfileEdit;
