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
import ItemCardCarte from "../../Components/itemCardCarte";


function Dashboard() {
    const [data, setData] = useState(null);
    const router = useRouter();
    const {user, setUser} = useContext(UserContext)


    useEffect(() => {
        async function fetchData() {
            await MyRequest('cartedashboard', 'GET', {}, {'Content-Type': 'application/json'})
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
                            <Grid container spacing={3} justify="center">
                                <Grid item xs={4}>
                                    <ItemCardCarte color={orange[800]}
                                                 icon={<PointOfSaleIcon
                                                     sx={{
                                                         fontSize: 60,
                                                         color: "white",
                                                         backgroundColor: "black",
                                                         borderRadius: 2,
                                                         boxShadow: 3,

                                                     }}/>}
                                                 text={"Stock Carte Orange"}
                                                 cent={data.orange100}
                                                 deuxcent={data.orange200}
                                                 cinqcent={data.orange500}
                                                 mille={data.orange1000}
                                    />


                                </Grid>
                                <Grid item xs={4}>
                                    <ItemCardCarte color={red[700]}
                                                 icon={<PointOfSaleIcon
                                                     sx={{
                                                         fontSize: 60,
                                                         color: "white",
                                                         backgroundColor: "black",
                                                         borderRadius: 2,
                                                         boxShadow: 3,

                                                     }}/>}
                                                 text={"Stock Carte Airtel"}
                                                 cent={data.airtel100}
                                                 deuxcent={data.airtel200}
                                                 cinqcent={data.airtel500}
                                                 mille={data.airtel1000}
                                    />


                                </Grid>
                                <Grid item xs={4}>
                                    <ItemCardCarte color={green[700]}
                                                 icon={<PointOfSaleIcon
                                                     sx={{
                                                         fontSize: 60,
                                                         color: "white",
                                                         backgroundColor: "black",
                                                         borderRadius: 2,
                                                         boxShadow: 3,

                                                     }}/>}
                                                 text={"Stock Carte Moov"}
                                                 cent={data.moov100}
                                                 deuxcent={data.moov200}
                                                 cinqcent={data.moov500}
                                                 mille={data.moov1000}
                                    />


                                </Grid>
                                {/*Vente journaliere*/}
                                <Grid item xs={4}>
                                    <ItemCardCarte color={orange[800]}
                                                 icon={<PointOfSaleIcon
                                                     sx={{
                                                         fontSize: 60,
                                                         color: "white",
                                                         backgroundColor: "black",
                                                         borderRadius: 2,
                                                         boxShadow: 3,

                                                     }}/>}
                                                 text={"Carte Orange Vendue"}
                                                   temp={"Aujourd'hui"}
                                                 cent={data.venteorangeJour100}
                                                 deuxcent={data.venteorangeJour200}
                                                 cinqcent={data.venteorangeJour500}
                                                 mille={data.venteorangeJour1000}
                                    />


                                </Grid>
                                <Grid item xs={4}>
                                    <ItemCardCarte color={red[700]}
                                                 icon={<PointOfSaleIcon
                                                     sx={{
                                                         fontSize: 60,
                                                         color: "white",
                                                         backgroundColor: "black",
                                                         borderRadius: 2,
                                                         boxShadow: 3,

                                                     }}/>}
                                                 text={"Carte Airtel Vendue"}
                                                   temp={"Aujourd'hui"}
                                                 cent={data.venteairtelJour100}
                                                 deuxcent={data.venteairtelJour200}
                                                 cinqcent={data.venteairtelJour500}
                                                 mille={data.venteairtelJour1000}
                                    />


                                </Grid>
                                <Grid item xs={4}>
                                    <ItemCardCarte color={green[700]}
                                                 icon={<PointOfSaleIcon
                                                     sx={{
                                                         fontSize: 60,
                                                         color: "white",
                                                         backgroundColor: "black",
                                                         borderRadius: 2,
                                                         boxShadow: 3,

                                                     }}/>}
                                                 text={"Carte Moov Vendue"}
                                                   temp={"Aujourd'hui"}
                                                 cent={data.ventemoovJour100}
                                                 deuxcent={data.ventemoovJour200}
                                                 cinqcent={data.ventemoovJour500}
                                                 mille={data.ventemoovJour1000}
                                    />


                                </Grid>
                                {/*Vente Mensielle*/}
                                <Grid item xs={4}>
                                    <ItemCardCarte color={orange[800]}
                                                   icon={<PointOfSaleIcon
                                                       sx={{
                                                           fontSize: 60,
                                                           color: "white",
                                                           backgroundColor: "black",
                                                           borderRadius: 2,
                                                           boxShadow: 3,

                                                       }}/>}
                                                   text={"Carte Orange Vendue"}
                                                   temp={"Ce Moi"}
                                                   cent={data.venteorangeMoi100}
                                                   deuxcent={data.venteorangeMoi200}
                                                   cinqcent={data.venteorangeMoi500}
                                                   mille={data.venteorangeMoi1000}
                                    />


                                </Grid>
                                <Grid item xs={4}>
                                    <ItemCardCarte color={red[700]}
                                                   icon={<PointOfSaleIcon
                                                       sx={{
                                                           fontSize: 60,
                                                           color: "white",
                                                           backgroundColor: "black",
                                                           borderRadius: 2,
                                                           boxShadow: 3,

                                                       }}/>}
                                                   text={"Carte Airtel Vendue"}
                                                   temp={"Ce Moi"}
                                                   cent={data.venteairtelMoi100}
                                                   deuxcent={data.venteairtelMoi200}
                                                   cinqcent={data.venteairtelMoi500}
                                                   mille={data.venteairtelMoi1000}
                                    />


                                </Grid>
                                <Grid item xs={4}>
                                    <ItemCardCarte color={green[700]}
                                                   icon={<PointOfSaleIcon
                                                       sx={{
                                                           fontSize: 60,
                                                           color: "white",
                                                           backgroundColor: "black",
                                                           borderRadius: 2,
                                                           boxShadow: 3,

                                                       }}/>}
                                                   text={"Carte Moov Vendue"}
                                                   temp={"Ce Moi"}
                                                   cent={data.ventemoovMoi100}
                                                   deuxcent={data.ventemoovMoi200}
                                                   cinqcent={data.ventemoovMoi500}
                                                   mille={data.ventemoovMoi1000}
                                    />


                                </Grid>
                                {/*Vente Mensielle*/}
                                <Grid item xs={4}>
                                    <ItemCardCarte color={orange[800]}
                                                   icon={<PointOfSaleIcon
                                                       sx={{
                                                           fontSize: 60,
                                                           color: "white",
                                                           backgroundColor: "black",
                                                           borderRadius: 2,
                                                           boxShadow: 3,

                                                       }}/>}
                                                   text={"Carte Orange Vendue"}
                                                   temp={"Cette Année"}
                                                   cent={data.venteorangeAnnee100}
                                                   deuxcent={data.venteorangeAnnee200}
                                                   cinqcent={data.venteorangeAnnee500}
                                                   mille={data.venteorangeAnnee1000}
                                    />


                                </Grid>
                                <Grid item xs={4}>
                                    <ItemCardCarte color={red[700]}
                                                   icon={<PointOfSaleIcon
                                                       sx={{
                                                           fontSize: 60,
                                                           color: "white",
                                                           backgroundColor: "black",
                                                           borderRadius: 2,
                                                           boxShadow: 3,

                                                       }}/>}
                                                   text={"Carte Airtel Vendue"}
                                                   temp={"Cette Année"}
                                                   cent={data.venteairtelAnnee100}
                                                   deuxcent={data.venteairtelAnnee200}
                                                   cinqcent={data.venteairtelAnnee500}
                                                   mille={data.venteairtelAnnee1000}
                                    />


                                </Grid>
                                <Grid item xs={4}>
                                    <ItemCardCarte color={green[700]}
                                                   icon={<PointOfSaleIcon
                                                       sx={{
                                                           fontSize: 60,
                                                           color: "white",
                                                           backgroundColor: "black",
                                                           borderRadius: 2,
                                                           boxShadow: 3,

                                                       }}/>}
                                                   text={"Carte Moov Vendue"}
                                                   temp={"Cette Année"}
                                                   cent={data.ventemoovAnnee100}
                                                   deuxcent={data.ventemoovAnnee200}
                                                   cinqcent={data.ventemoovAnnee500}
                                                   mille={data.ventemoovAnnee1000}
                                    />


                                </Grid>

                            </Grid>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper style={{padding: '16px', textAlign: 'center', color: '#757575', boxShadow: 3}}></Paper>
                    </Grid>
                    <Grid item xs={6}>
                        <Paper style={{padding: '16px', textAlign: 'center', color: '#757575'}}></Paper>
                    </Grid>
                </Grid>
            </div>);
    } else {
        return <Circular/>
    }

}

export default Dashboard;
