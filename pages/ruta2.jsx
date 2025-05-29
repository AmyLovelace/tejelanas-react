import React from "react"
import { Typography, Grid, Box } from "@mui/material";

export default function Page2() {
    return(
        <>
        <Grid>
            <Typography mt={5} mb={5} variant="h3"> Esta es otra ruta </Typography>
            <Grid display={"flex"} justifyContent={'center'} >
                <Grid item lg={5}>
                <Typography variant="body2">Inserte un contenido</Typography>
                </Grid>
            
            </Grid>
        </Grid>
        </>
    )
};