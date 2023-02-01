import * as React from 'react';
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormHelperText from "@mui/material/FormHelperText";
import Typography from "@mui/material/Typography";
import {useContext, useState} from "react";
import Button from "@mui/material/Button";
import {useRouter} from "next/router";
import {Grid} from "@mui/material";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import MyRequest from "../request";
import Circular from "../Circular";
import ErrorPage from "../ErrorPage";
import {green, orange, red} from "@mui/material/colors";

export default function FaireCarte({type}) {
    const [prix, createPrix] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const router = useRouter();
    const refreshData = () => {
        router.push("/shapshap/dashboard");
    }


    const onSubmit = async (e) => {
        e.preventDefault()
        const formData = {
            "prix": prix,
            "type": type,
        }
        try {
            setLoading(true)
            MyRequest('venteshapshaps', 'POST', formData, { 'Content-Type': 'application/json' })
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
                <Grid item xs={12} display="flex"
                      justifyContent="center"
                      alignItems="center">
                    <FormControl sx={{m: 1, width: '25ch'}} variant="outlined">
                        <FormHelperText id="achat">
                            <Typography component="h3" sx={{fontSize: 23}} variant="h5">
                                Shapshap {type}
                            </Typography>
                        </FormHelperText>

                        <OutlinedInput
                            sx={{height: '5ch', boxShadow: 3, borderRadius: 2,background:"white"}}
                            id="achat"
                            onChange={(event) => {
                                createPrix(parseInt(event.target.value))
                            }}
                            endAdornment={<InputAdornment position="end">CFA</InputAdornment>}
                            aria-describedby="prix"
                            inputProps={{
                                'type': "number",
                                'aria-label': 'weight',
                            }}
                        />
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
