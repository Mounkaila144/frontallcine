
import {Alert, Grid} from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";
import FaireCanalTable from "../../Components/canal/FaireCanalTable";
import {useContext, useEffect, useState} from "react";
import MyRequest from "../../Components/request";
import {UserContext} from "../../Context/GlobalContext";

export default function Ajouter() {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            await MyRequest('canaldashboard', 'GET', {}, {'Content-Type': 'application/json'})
                .then(async (response) => {
                    if (response.status === 200) {
                        setData(response.data)
                    }
                })

        }
        fetchData()
    }, []);

    return (
        <div style={{flexGrow: 1}}>
            <Grid container >
                <Grid item xs={12} display="flex"
                      justifyContent="center"
                      alignItems="center">
                    <Typography component="h3" sx={{fontSize: 53,fontFamily:"bold"}} variant="h5">

                        Faire un Abonements
                    </Typography>
                </Grid>
                {data?parseInt(data["canal"])<=100000?
                    <Grid item xs={12} display="flex"
                      justifyContent="center"
                      alignItems="center">
                        <Alert sx={{fontSize:20}} variant="filled" severity="error">Credit Canal inferieur a 100 000 CFA</Alert>
                      </Grid>:null:null}

                <Grid item xs={12}>
                    <FaireCanalTable/>
                </Grid>
            </Grid>
        </div>
    );

}

// export async function getStaticProps() {
//     const res = await fetch('https://mouhtada.allcine227.com/api/entresorties');
//     const entresorties=await res.json();
//
//     return {
//         props: {entresorties},
//         revalidate: 10,// will be passed to the page component as props
//     }
//
// }

