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

export default function ItemCardCarte({icon,text,temp,color,cent,deuxcent,cinqcent,mille}) {
    return (
        <Card sx={{ border:"solid 2px",borderColor:blue[600],maxHeight: 150,maxWidth:350,minHeight: 150,minWidth:350, boxShadow:3,backgroundColor:color,borderRadius:3 }} variant="outlined" elevation={3} square>
            <Grid container>
                <Grid item xs={12}>
                        <IconButton aria-label="home" >
                            {icon}
                            <Typography color={"white"} variant='h6'  sx={{fontSize: 23,fontFamily:"bold"}} display='inline' >
                            {text}<br/>
                                <Typography color={"white"} variant='h6'  sx={{fontSize: 20,marginTop:-5}} display='inline' >
                                    {temp}
                                </Typography>
                                </Typography>

                        </IconButton>

                </Grid>
                <Grid item xs={3}>
                    <Grid item xs={6}>
                        <Typography color={"black"} component="h3" sx={{fontSize: 20,fontFamily:"bold"}} variant="h5">
                            100CFA
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography color="white" component="h3" sx={{fontSize: 20,fontFamily:"bold"}} variant="h5">
                            {cent}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Grid item xs={6}>
                        <Typography color={"black"} component="h3" sx={{fontSize: 20,fontFamily:"bold"}} variant="h5">
                            200CFA
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography color={"white"} component="h3" sx={{fontSize: 20,fontFamily:"bold"}} variant="h5">
                            {deuxcent}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Grid item xs={6}>
                        <Typography color={"black"} component="h3" sx={{fontSize: 20,fontFamily:"bold"}} variant="h5">
                            500CFA
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography color={"white"} component="h3" sx={{fontSize: 20,fontFamily:"bold"}} variant="h5">
                            {cinqcent}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Grid item xs={6}>
                        <Typography color={"black"} component="h3" sx={{fontSize: 20,fontFamily:"bold"}} variant="h5">
                            1000CFA
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography color={"white"} component="h3" sx={{fontSize: 20,fontFamily:"bold"}} variant="h5">
                            {mille}
                        </Typography>
                    </Grid>
                </Grid>


            </Grid>
        </Card>
    );
}
