import React, {useContext, useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import Paper from "@mui/material/Paper";
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import {blue, blueGrey, green, orange, red, yellow} from "@mui/material/colors";
import PaidIcon from '@mui/icons-material/Paid';
import CategoryIcon from '@mui/icons-material/Category';
import {useRouter} from "next/router";
import {UserContext} from "../../Context/GlobalContext";
import MyRequest from "../../Components/request";
import Circular from "../../Components/Circular";
import ItemCardColor from "../../Components/itemCardColor";
import ItemCardBig from "../../Components/itemCardBig";
import ItemCard from "../../Components/itemCard";


function Dashboard() {
    const [data, setData] = useState(null);
    const router = useRouter();
    const {user, setUser} = useContext(UserContext)


    const Cfa = (price) => {
        return price.toLocaleString('fr-FR', {style: 'currency', currency: 'CFA'}).replace(',00', '');
    }

    useEffect(() => {
        async function fetchData() {
            await MyRequest('canaldashboard', 'GET', {}, {'Content-Type': 'application/json'})
                .then(async (response) => {
                    if (response.status === 200) {
                        setData(response.data)
                    }
                })

        }

        // Fetch data every 5 seconds
        fetchData()
        const interval = setInterval(() => {
            fetchData();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    if (data) {
        return (
            <div style={{flexGrow: 1}}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper style={{padding: '16px', textAlign: 'center', color: '#757575', boxShadow: 3}}>
                            <Grid container spacing={3} justify="center">

                                <Grid item xs={4}>
                                    <ItemCardBig color={blue[500]}
                                                 icon={<PointOfSaleIcon
                                                     sx={{
                                        fontSize: 60,
                                        color: "white",
                                                     marginLeft:-10,
                                        backgroundColor: red[900],
                                        borderRadius: 2,
                                        boxShadow: 3,

                                    }}/>}
                                    text={"Bienvenue"}
                                    jour={data.venteBienvenueJour}
                                    moi={data.venteBienvenueMoi}
                                    annee={data.venteBienvenueAnnee}
                                    />


                                </Grid>
                                <Grid item xs={4}>
                                    <ItemCardBig color={blue[500]}
                                                 icon={<PointOfSaleIcon
                                                     sx={{
                                                         fontSize: 60,
                                                         color: "white",
                                                         marginLeft:-10,
                                                         backgroundColor: red[900],
                                                         borderRadius: 2,
                                                         boxShadow: 3,

                                                     }}/>}
                                                 text={"Access"}
                                                 jour={data.venteAccessJour}
                                                 moi={data.venteAccessMoi}
                                                 annee={data.venteAccessAnnee}
                                    />


                                </Grid>
                                <Grid item xs={4}>
                                    <ItemCardBig color={blue[500]}
                                                 icon={<PointOfSaleIcon
                                                     sx={{
                                                         fontSize: 60,
                                                         color: "white",
                                                         marginLeft:-10,
                                                         backgroundColor: red[900],
                                                         borderRadius: 2,
                                                         boxShadow: 3,

                                                     }}/>}
                                                 text={"Evasion"}
                                                 jour={data.venteEvasionJour}
                                                 moi={data.venteEvasionMoi}
                                                 annee={data.venteEvasionAnnee}
                                    />


                                </Grid>
                                <Grid item xs={4}>
                                    <ItemCardBig color={blue[500]}
                                                 icon={<PointOfSaleIcon
                                                     sx={{
                                                         fontSize: 60,
                                                         color: "white",
                                                         marginLeft:-10,
                                                         backgroundColor: red[900],
                                                         borderRadius: 2,
                                                         boxShadow: 3,

                                                     }}/>}
                                                 text={"Essentiel"}
                                                 jour={data.venteEssentielJour}
                                                 moi={data.venteEssentielMoi}
                                                 annee={data.venteEssentielAnnee}
                                    />


                                </Grid>
                                <Grid item xs={4}>
                                    <ItemCardBig color={blue[500]}
                                                 icon={<PointOfSaleIcon
                                                     sx={{
                                                         fontSize: 60,
                                                         color: "white",
                                                         marginLeft:-10,
                                                         backgroundColor: red[900],
                                                         borderRadius: 2,
                                                         boxShadow: 3,

                                                     }}/>}
                                                 text={"Essentiel+"}
                                                 jour={data["venteEssentiel+Jour"]}
                                                 moi={data["venteEssentiel+Moi"]}
                                                 annee={data["venteEssentiel+Annee"]}
                                    />


                                </Grid>
                                <Grid item xs={4}>
                                    <ItemCardBig color={blue[500]}
                                                 icon={<PointOfSaleIcon
                                                     sx={{
                                                         fontSize: 60,
                                                         color: "white",
                                                         marginLeft:-10,
                                                         backgroundColor: red[900],
                                                         borderRadius: 2,
                                                         boxShadow: 3,

                                                     }}/>}
                                                 text={"Evasion+"}
                                                 jour={data["venteEvasion+Jour"]}
                                                 moi={data["venteEvasion+Moi"]}
                                                 annee={data["venteEvasion+Annee"]}
                                    />


                                </Grid>
                                <Grid item xs={4}>
                                    <ItemCardBig color={blue[500]}
                                                 icon={<PointOfSaleIcon
                                                     sx={{
                                                         fontSize: 60,
                                                         color: "white",
                                                         marginLeft:-10,
                                                         backgroundColor: red[900],
                                                         borderRadius: 2,
                                                         boxShadow: 3,

                                                     }}/>}
                                                 text={"Tout Canal"}
                                                 jour={data["venteToutJour"]}
                                                 moi={data["venteToutMoi"]}
                                                 annee={data["venteToutAnnee"]}
                                    />


                                </Grid>
                                <Grid item xs={4}>
                                    <ItemCardBig color={orange[700]}
                                                 icon={<PointOfSaleIcon
                                                     sx={{
                                                         fontSize: 60,
                                                         color: "white",
                                                         marginLeft:-10,
                                                         backgroundColor: red[900],
                                                         borderRadius: 2,
                                                         boxShadow: 3,

                                                     }}/>}
                                                 text={"vente Total"}
                                                 jour={data["venteToutJour"]}
                                                 moi={data["venteToutMoi"]}
                                                 annee={data["venteToutAnnee"]}
                                    />


                                </Grid>
                                <Grid item xs={4}>
                                    <ItemCardColor color={orange[700]}
                                                   icon={<PaidIcon sx={{
                                                       fontSize: 60,
                                                       color: "white",
                                                       backgroundColor: red[900],
                                                       borderRadius: 2,
                                                       boxShadow: 3,
                                                       marginTop: -5
                                                   }}
                                    />}
                                                 text={"Credit Restant"}
                                                 number={Cfa(parseInt(data["canal"]))}
                                               
                                               
                                    />


                                </Grid>


                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>);
    } else {
        return <Circular/>
    }

}

export default Dashboard;
