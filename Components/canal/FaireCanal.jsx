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

export default function FaireCanal() {
    const [nom, createNom] = useState(null)
    const [prenom, createPrenom] = useState(null)
    const [numero, createNumero] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const options = [
        { value: 'Bienvenue', label: 'Bienvenue'},
        { value: 'Access', label: 'Access'},
        { value: 'Evasion', label: 'Evasion'},
        { value: 'Essentiel', label: 'Essentiel'},
        { value: 'Essentiel+', label: 'Essentiel +'},
        { value: 'Evasion+', label: 'Evasion +'},
        { value: 'Tout', label: 'Tout Canal'},

    ];
    const [selectedOption, setSelectedOption] = useState(options[0].value);

    const router = useRouter();
    const refreshData = () => {
        router.push("/canal/dashboard");
    }


    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = {
            "nom": nom,
            "prenom": prenom,
            "numero": numero,
            "user_id": 1,
            "type": selectedOption,
        }
        try {
            setLoading(true)
            MyRequest('ventecanals', 'POST', formData, { 'Content-Type': 'application/json' })
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
                <Grid item xs={12}>
                    <FormControl sx={{m: 1, width: '25ch'}} variant="outlined">
                        <FormHelperText id="achat">
                            <Typography component="h3" sx={{fontSize: 23}} variant="h5">
                                Nom
                            </Typography>
                        </FormHelperText>

                        <OutlinedInput
                            sx={{height: '5ch', boxShadow: 3, borderRadius: 2,background:"white"}}
                            id="achat"
                            onChange={(event) => {
                                createNom(event.target.value)
                            }}
                            aria-describedby="prix"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </FormControl>
                    <FormControl sx={{m: 1, width: '25ch'}} variant="outlined">
                        <FormHelperText id="achat">
                            <Typography component="h3" sx={{fontSize: 23}} variant="h5">
                                Prenom
                            </Typography>
                        </FormHelperText>

                        <OutlinedInput
                            sx={{height: '5ch', boxShadow: 3, borderRadius: 2,background:"white"}}
                            id="achat"
                            onChange={(event) => {
                                createPrenom(event.target.value)
                            }}
                            aria-describedby="prix"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </FormControl>
                </Grid>
                <Grid item xs={12}>
                    <FormControl sx={{m: 1, width: '25ch'}} variant="outlined">
                        <FormHelperText id="achat">
                            <Typography component="h3" sx={{fontSize: 23}} variant="h5">
                                Numero
                            </Typography>
                        </FormHelperText>

                        <OutlinedInput
                            sx={{height: '5ch', boxShadow: 3, borderRadius: 2,background:"white"}}
                            id="achat"
                            onChange={(event) => {
                                createNumero(event.target.value)
                            }}
                            aria-describedby="prix"
                            inputProps={{
                                'aria-label': 'weight',
                            }}
                        />
                    </FormControl>
                    <FormControl sx={{m: 1, width: '25ch'}} variant="outlined">
                        <FormHelperText id="achat">
                            <Typography component="h3" sx={{fontSize: 23}} variant="h5">
                                Type d'abonement
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
                <Grid item xs={12} display="flex"
                      justifyContent="center"
                      alignItems="center">

                    <Button onClick={onSubmit} variant={"contained"} sx={{fontSize: 20}}
                            startIcon={<BeenhereIcon/>}>Enregistrer</Button>
                </Grid>

            </Grid>
    )
        ;
    }
}
