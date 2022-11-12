import { Container } from "@mui/system";
import React from "react";
import './ProfileEdit.scss'
import { Avatar, InputAdornment } from "@mui/material";
import { ColorButton, StyledEditInput } from "../styledComponents/MaterialComponents";
import EditIcon from '@mui/icons-material/Edit';
import GoBack from "../styledComponents/GoBack";
const ProfileEdit = () => {

    return (
        <Container>
            <div className="profileEdit">
                <aside>
                    <div className="profileEdit__head">
                        <GoBack />
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
