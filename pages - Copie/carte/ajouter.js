import {Grid} from "@mui/material";
import * as React from "react";
import Typography from "@mui/material/Typography";
import AjouterCarteTable from "../../Components/carte/AjouterCarteTable";

export default function Ajouter() {
    return (
        <div style={{flexGrow: 1}}>
            <Grid container spacing={3}>
                <Grid item xs={12} display="flex"
                      justifyContent="center"
                      alignItems="center">
                    <Typography component="h3" sx={{fontSize: 53,fontFamily:"bold"}} variant="h5">
                        Ajouter Des Cartes
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <AjouterCarteTable/>
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

