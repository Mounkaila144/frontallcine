import * as React from 'react';
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import {useContext, useState} from "react";
import Button from "@mui/material/Button";
import {useRouter} from "next/router";
import {Grid, Select} from "@mui/material";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import MyRequest from "../request";
import Circular from "../Circular";
import ErrorPage from "../ErrorPage";
import {green, orange, red} from "@mui/material/colors";
import MenuItem from "@mui/material/MenuItem";

export default function AjouterUnCarte({type}) {
    const [prix, createPrix] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const router = useRouter();
    const refreshData = () => {
        router.push("/carte/dashboard")
    }
    const options2 = [
        { value: '100', label: '100 CFA'},
        { value: '200', label: '200 CFA'},
        { value: '500', label: '500 CFA'},
        { value: '1000', label: '1000 CFA'}

    ];
    const options = [
        { value: 'orange', label: 'Orange '},
        { value: 'airtel', label: 'Airtel '},
        { value: 'moov', label: 'Moov '},

    ];

    const [selectedOption, setSelectedOption] = useState(options[0].value);
    const [selectedOption2, setSelectedOption2] = useState(options2[0].value);

    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = {
            "prix": selectedOption,
            "type": selectedOption2,
        }
        try {
            setLoading(true)
            MyRequest('carte', 'POST', formData, { 'Content-Type': 'application/json' })
                .then(async (response) => {
                    if (response.status === 200) {
                        await refreshData()
                    }
                }).finally(() => setLoading(false));
        } catch (e) {
            setError(true)
        }

    }
    if (loading) {
        return (
            <Circular/>
        )
    } else if (error) {
        return (<ErrorPage/>)
    } else {
        return (
            <Grid container rowSpacing={1} sx={{margin: 1, boxShadow: 3, borderRadius: 3}} columnSpacing={{xs: 1, sm: 2, md: 3}}>
                <Grid item xs={6}>
                    <FormControl sx={{m: 1, width: '25ch'}} variant="outlined">
                        <FormHelperText id="achat">
                            <Typography component="h3" sx={{fontSize: 23}} variant="h5">
                                Type de carte
                            </Typography>
                        </FormHelperText>
                        <Select
                            value={selectedOption}
                            onChange={(event) => setSelectedOption(event.target.value)}
                        >
                            {options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                 <Grid item xs={6}>
                    <FormControl sx={{m: 1, width: '25ch'}} variant="outlined">
                        <FormHelperText id="achat">
                            <Typography component="h3" sx={{fontSize: 23}} variant="h5">
                                Prix
                            </Typography>
                        </FormHelperText>
                        <Select
                            value={selectedOption2}
                            onChange={(event) => setSelectedOption2(event.target.value)}
                        >
                            {options2.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} display="flex"
                      justifyContent="center"
                      alignItems="center">

                    <Button onClick={onSubmit} variant={"contained"} sx={{fontSize: 20}}
                            startIcon={<BeenhereIcon/>}>Ajouter</Button>
                </Grid>

            </Grid>
    )
        ;
    }
}
