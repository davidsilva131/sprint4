import { Avatar, CardActionArea } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import ArrowForward from '@mui/icons-material/ArrowForwardIos';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Switch from '@mui/material/Switch';
import PaymentIcon from '@mui/icons-material/Payment';
import LanguageIcon from '@mui/icons-material/Language';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import './Profile.scss'
import { useDispatch, useSelector } from "react-redux";
import { userLogoutAsync } from "../../redux/actions/userAction";
import { useNavigate } from "react-router-dom";

const Profile = ({ setIsLoggedIn }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const userStorage = useSelector((store) => store.user);

    const onCloseSession = () => {
        dispatch(userLogoutAsync());
        setIsLoggedIn(false)
    };

    const handleAccountEdit = () => {
        navigate('/profileedit')
    }
    const handlePayment = () => {
        navigate('/payment')
    }
    return (
        <Container>
            <div className="profile">
                <aside className="profile__image">
                    <div>
                        <Avatar alt="Remy Sharp" src={userStorage.photoURL}
                            sx={{ width: '64px', height: '64px' }} />
                        <span className="profile__name">{userStorage.name}</span>
                    </div>
                </aside>
                <aside className="profile__options">
                    <CardActionArea onClick={handleAccountEdit} sx={{ width: '100%', heigth: '50px', borderRadius: '10px' }}>
                        <div className="profile__options__card">
                            <div>
                                <PersonIcon />
                                <span>Acount Edit</span>
                            </div>
                            <ArrowForward />
                        </div>
                    </CardActionArea>
                    <CardActionArea sx={{ width: '100%', heigth: '50px', borderRadius: '10px' }}>
                        <div className="profile__options__card">
                            <div>
                                <NotificationsIcon />
                                <span>Notifications</span>
                            </div>
                            <Switch defaultChecked />
                        </div>
                    </CardActionArea>
                    <CardActionArea onClick={handlePayment} sx={{ width: '100%', heigth: '50px', borderRadius: '10px' }}>
                        <div className="profile__options__card">
                            <div>
                                <PaymentIcon />
                                <span>Payment</span>
                            </div>
                            <ArrowForward />
                        </div>
                    </CardActionArea>
                    <CardActionArea sx={{ width: '100%', heigth: '50px', borderRadius: '10px' }}>
                        <div className="profile__options__card">
                            <div>
                                <LanguageIcon />
                                <span>Language</span>
                            </div>
                            <ArrowForward />
                        </div>
                    </CardActionArea>
                    <CardActionArea sx={{ width: '100%', heigth: '50px', borderRadius: '10px' }}>
                        <div className="profile__options__card">
                            <div>
                                <LocationOnIcon />
                                <span>Location</span>
                            </div>
                            <ArrowForward />
                        </div>
                    </CardActionArea>
                    <CardActionArea sx={{ width: '100%', heigth: '50px', borderRadius: '10px' }}>
                        <div className="profile__options__card">
                            <div>
                                <HelpOutlineIcon />
                                <span>FAQ</span>
                            </div>
                            <ArrowForward />
                        </div>
                    </CardActionArea>
                    <CardActionArea sx={{ width: '100%', heigth: '50px', borderRadius: '10px' }}>
                        <div className="profile__options__card">
                            <div>
                                <PhoneIcon />
                                <span>Support</span>
                            </div>
                            <ArrowForward />
                        </div>
                    </CardActionArea>
                    <CardActionArea onClick={onCloseSession} sx={{ width: '100%', heigth: '50px', borderRadius: '10px' }}>
                        <div className="profile__options__card">
                            <div>
                                <span>Logout</span>
                            </div>
                            <ArrowForward />
                        </div>
                    </CardActionArea>
                </aside>
            </div>
        </Container>
    )
};

export default Profile;
