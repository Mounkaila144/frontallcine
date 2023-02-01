import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {blue, blueGrey} from "@mui/material/colors";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {useRouter} from "next/router";
import {useContext} from "react";
import {UserContext} from "../../Context/GlobalContext";

export default function CarteBtn({text,icon}) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const router = useRouter();
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const {user,setUser}=useContext(UserContext)

    return (
        <div>
            <ListItemButton
                sx={{
                    color: "white",
                    minHeight: 3,
                    borderRadius: 5,
                    background:  open?blue[800]: blueGrey[700],
                    justifyContent: 'initial',
                    px: 2.5,
                    '&:hover': {
                        background: open?blue[800]: blueGrey[500],
                        borderRadius: 5,
                    },
                    margin:1,boxShadow:3
                }}
                onClick={open?null:handleClick}
            >
                <ListItemIcon
                    sx={{
                        color: "white",
                        minWidth: 0,
                        mr: 1,
                        justifyContent: 'center',
                    }}
                >
                    {icon}
                </ListItemIcon>
                <ListItemText sx={{marginLeft:1}} primary={text} />
            </ListItemButton>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem sx={{color: "white", maxHeight: 100, borderRadius: 5, background: router.pathname==="/carte/dashboard"?blue[800]: blueGrey[700], justifyContent: 'initial', px: 2.5, '&:hover': {background: blue[800], borderRadius: 5,}, margin:1,boxShadow:3}}
                          onClick={()=> {
                              router.pathname==="/carte/dashboard"?null:router.push("/carte/dashboard")
                          }}>Dashboard</MenuItem>
                {user===2?<MenuItem sx={{color: "white", maxHeight: 100, borderRadius: 5, background: router.pathname==="/carte/ajouter"?blue[800]: blueGrey[700], justifyContent: 'initial', px: 2.5, '&:hover': {background: blue[800], borderRadius: 5,}, margin:1,boxShadow:3}}
                          onClick={()=> {
                              router.pathname==="/carte/ajouter"?null:router.push("/carte/ajouter")
                          }}>Ajouter des Cartes</MenuItem>:null}
                <MenuItem sx={{color: "white", maxHeight: 100, borderRadius: 5, background: router.pathname==="/carte/carte"?blue[800]: blueGrey[700], justifyContent: 'initial', px: 2.5, '&:hover': {background: blue[800], borderRadius: 5,}, margin:1,boxShadow:3}}
                          onClick={()=> {
                              router.pathname==="/carte/carte"?null:router.push("/carte/carte")
                          }}>Vendre une carte</MenuItem>
            </Menu>
        </div>
    );
}