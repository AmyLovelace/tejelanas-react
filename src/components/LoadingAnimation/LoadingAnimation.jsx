import { Box, Grid } from "@mui/material";

const LoadingAnimation = () => {
    // Este componente inserta una imagen y un gif de carga en la parte inferior

    return (
        <Grid height={'100vh'} display={'grid'} sx={{ placeItems: 'center'}}>
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <img src="/assets/Logo-Vivi-1.png" alt="Loading" className="loading-image" height={50}/>
                <img src="/assets/loading-anim.gif" alt="Loading" className="loading-gif" height={80} width={150}/>
            </Box>
            
            
        </Grid>
    )
}

export default LoadingAnimation;