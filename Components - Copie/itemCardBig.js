import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {CardHeader, Grid, Icon} from "@mui/material";
import {blue, blueGrey, red, yellow} from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function ItemCardBig({icon,text,color,jour,moi,annee}) {
    const Cfa = (price) => {
        return price.toLocaleString('fr-FR', {style: 'currency', currency: 'CFA'}).replace(',00', '');
    }
    return (
        <Card sx={{ border:"solid 2px",borderColor:blue[600],maxHeight: 150,maxWidth:350,minHeight: 150,minWidth:350, boxShadow:3,backgroundColor:color,borderRadius:3 }} variant="outlined" elevation={3} square>
            <Grid container>
                <Grid item xs={12}>
                    <Typography color={"white"} variant='h6'  sx={{fontSize: 30,fontFamily:"bold"}} display='inline' >
                        <IconButton aria-label="home" >
                            {icon}
                        </IconButton>
                        {text}
                    </Typography>

                </Grid>
                <Grid item xs={4}>
                    <Grid item xs={6}>
                        <Typography color={"yellow"} component="h3" sx={{fontSize: 25,fontFamily:"bold"}} variant="h5">
                            Jour
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography color={"yellow"} component="h3" sx={{fontSize: 18,fontFamily:"bold"}} variant="h5">
                            {Cfa(parseInt(jour))}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid item xs={6}>
                        <Typography color={red[900]} component="h3" sx={{fontSize: 25,fontFamily:"bold"}} variant="h5">
                            Mensielle
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography color={red[900]} component="h3" sx={{fontSize: 18,fontFamily:"bold"}} variant="h5">
                            {Cfa(parseInt(moi))}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={4}>
                    <Grid item xs={6}>
                        <Typography component="h3" sx={{fontSize: 25,fontFamily:"bold"}} variant="h5">
                            Annuelle
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography component="h3" sx={{fontSize: 18,fontFamily:"bold"}} variant="h5">
                            {Cfa(parseInt(annee))}
                        </Typography>
                    </Grid>
                </Grid>


            </Grid>
        </Card>
    );
}
