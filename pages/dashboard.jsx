import React from "react"
import { Typography, Grid } from "@mui/material";

export default function Dashboard() {
    return(
        <>
        <Grid>
            <Typography mt={5} mb={5} variant="h3"> Felicidades, te encuentras logueado. </Typography>
            <Grid display={"flex"} justifyContent={'center'} >
                <Grid item lg={5}>
                <Typography variant="body2">Acá debes llevar a cabo el manejo de roles.</Typography>
                </Grid>
            
            </Grid>
        </Grid>
        </>
    )
};