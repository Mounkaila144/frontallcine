import React, {useContext, useEffect, useState} from 'react';
import {Grid} from "@mui/material";
import Paper from "@mui/material/Paper";
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import {blueGrey, green, orange, red, yellow} from "@mui/material/colors";
import PaidIcon from '@mui/icons-material/Paid';
import CategoryIcon from '@mui/icons-material/Category';
import {useRouter} from "next/router";
import {UserContext} from "../../Context/GlobalContext";
import MyRequest from "../../Components/request";
import Circular from "../../Components/Circular";
import ItemCardColor from "../../Components/itemCardColor";


function Dashboard() {
    const [data, setData] = useState(null);
    const router = useRouter();
    const {user, setUser} = useContext(UserContext)


    const Cfa = (price) => {
        return price.toLocaleString('fr-FR', {style: 'currency', currency: 'CFA'}).replace(',00', '');
    }

    useEffect(() => {
        async function fetchData() {
            await MyRequest('shapdashboard', 'GET', {}, {'Content-Type': 'application/json'})
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
                                <ItemCardColor color={orange[700]} icon={<PointOfSaleIcon sx={{
                                    fontSize: 60,
                                    color: "white",
                                    backgroundColor: blueGrey[900],
                                    borderRadius: 2,
                                    boxShadow: 3,
                                    marginTop: -5
                                }}/>} text={"Credit Orange"} number={Cfa(data.orange)}/>
                            </Grid>

                            <Grid item xs={4}>
                                <ItemCardColor color={red[700]} icon={<PointOfSaleIcon sx={{
                                    fontSize: 60,
                                    color: "white",
                                    backgroundColor: blueGrey[900],
                                    borderRadius: 2,
                                    boxShadow: 3,
                                    marginTop: -5
                                }}/>} text={"Credit Airtel"} number={Cfa(data.airtel)}/>
                            </Grid>

                            <Grid item xs={4}>
                                <ItemCardColor color={green[700]} icon={<PointOfSaleIcon sx={{
                                    fontSize: 60,
                                    color: "white",
                                    backgroundColor: blueGrey[900],
                                    borderRadius: 2,
                                    boxShadow: 3,
                                    marginTop: -5
                                }}/>} text={"Credit Moov"} number={Cfa(data.moov)}/>
                            </Grid>


                            <Grid item xs={4}><ItemCardColor color={orange[700]} icon={<PaidIcon sx={{
                                fontSize: 60,
                                color: "white",
                                backgroundColor: blueGrey[900],
                                borderRadius: 2,
                                boxShadow: 3,
                                marginTop: -5
                            }}/>} text={"Vente Journalière"} number={Cfa(parseInt(data.venteorangeJour))}/></Grid>

                            <Grid item xs={4}><ItemCardColor color={red[700]} icon={<PaidIcon sx={{
                                fontSize: 60,
                                color: "white",
                                backgroundColor: blueGrey[900],
                                borderRadius: 2,
                                boxShadow: 3,
                                marginTop: -5
                            }}/>} text={"Vente Journalière"} number={Cfa(parseInt(data.venteairtelJour))}/></Grid>

                            <Grid item xs={4}><ItemCardColor color={green[700]} icon={<PaidIcon sx={{
                                fontSize: 60,
                                color: "white",
                                backgroundColor: blueGrey[900],
                                borderRadius: 2,
                                boxShadow: 3,
                                marginTop: -5
                            }}/>} text={"Vente Journalière"} number={Cfa(parseInt(data.ventemoovJour))}/></Grid>

                            <Grid item xs={4}><ItemCardColor color={orange[700]} icon={<PaidIcon sx={{
                                fontSize: 60,
                                color: "white",
                                backgroundColor: blueGrey[900],
                                borderRadius: 2,
                                boxShadow: 3,
                                marginTop: -5
                            }}/>} text={"Vente Mensuelle"}
                                                        number={Cfa(parseInt(data.venteorangeMoi))}/></Grid>
                            <Grid item xs={4}><ItemCardColor color={red[700]} icon={<PaidIcon sx={{
                                fontSize: 60,
                                color: "white",
                                backgroundColor: blueGrey[900],
                                borderRadius: 2,
                                boxShadow: 3,
                                marginTop: -5
                            }}/>} text={"Vente Mensuelle"}
                                                        number={Cfa(parseInt(data.venteairtelMoi))}/></Grid>
                            <Grid item xs={4}><ItemCardColor color={green[700]} icon={<PaidIcon sx={{
                                fontSize: 60,
                                color: "white",
                                backgroundColor: blueGrey[900],
                                borderRadius: 2,
                                boxShadow: 3,
                                marginTop: -5
                            }}/>} text={"Vente Mensuelle"}
                                                        number={Cfa(parseInt(data.ventemoovMoi))}/></Grid>
                            <Grid item xs={4}><ItemCardColor color={orange[700]} icon={<PaidIcon sx={{
                                fontSize: 60,
                                color: "white",
                                backgroundColor: blueGrey[900],
                                borderRadius: 2,
                                boxShadow: 3,
                                marginTop: -5
                            }}/>} text={"Vente Annuelle"}
                                                        number={Cfa(parseInt(data.venteorangeAnnee))}/></Grid>
                            <Grid item xs={4}><ItemCardColor color={red[700]} icon={<PaidIcon sx={{
                                fontSize: 60,
                                color: "white",
                                backgroundColor: blueGrey[900],
                                borderRadius: 2,
                                boxShadow: 3,
                                marginTop: -5
                            }}/>} text={"Vente Annuelle"}
                                                        number={Cfa(parseInt(data.venteairtelAnnee))}/></Grid>
                            <Grid item xs={4}><ItemCardColor color={green[700]} icon={<PaidIcon sx={{
                                fontSize: 60,
                                color: "white",
                                backgroundColor: blueGrey[900],
                                borderRadius: 2,
                                boxShadow: 3,
                                marginTop: -5
                            }}/>} text={"Vente Annuelle"}
                                                        number={Cfa(parseInt(data.ventemoovAnnee))}/></Grid>

                        </Grid>
                    </Paper>
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
