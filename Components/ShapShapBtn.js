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
import {UserContext} from "../Context/GlobalContext";

export default function ShapShapBtn({text,icon}) {
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
                <MenuItem sx={{color: "white", maxHeight: 100, borderRadius: 5, background: router.pathname==="/shapshap/dashboard"?blue[800]: blueGrey[700], justifyContent: 'initial', px: 2.5, '&:hover': {background: blue[800], borderRadius: 5,}, margin:1,boxShadow:3}}
                          onClick={()=> {
                              router.pathname==="/shapshap/dashboard"?null:router.push("/shapshap/dashboard")
                          }}>Dashboard</MenuItem>
                {user===2?<MenuItem sx={{color: "white", maxHeight: 100, borderRadius: 5, background: router.pathname==="/shapshap/ajouter"?blue[800]: blueGrey[700], justifyContent: 'initial', px: 2.5, '&:hover': {background: blue[800], borderRadius: 5,}, margin:1,boxShadow:3}}
                          onClick={()=> {
                              router.pathname==="/shapshap/ajouter"?null:router.push("/shapshap/ajouter")
                          }}>Ajouter de l'argent</MenuItem>:null}
                <MenuItem sx={{color: "white", maxHeight: 100, borderRadius: 5, background: router.pathname==="/shapshap/shapshap"?blue[800]: blueGrey[700], justifyContent: 'initial', px: 2.5, '&:hover': {background: blue[800], borderRadius: 5,}, margin:1,boxShadow:3}}
                          onClick={()=> {
                              router.pathname==="/shapshap/shapshap"?null:router.push("/shapshap/shapshap")
                          }}>Faire un shapshap</MenuItem>
            </Menu>
        </div>
    );
}