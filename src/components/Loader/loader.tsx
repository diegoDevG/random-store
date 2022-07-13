import { CircularProgress, Stack, Grid } from "@mui/material"
import styles from './loader.module.css'


export const Loader: React.FC = () => {
    return (
        <Grid container className={styles.center}>
            <Grid item xs={4}>
                <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                    <CircularProgress color="secondary" />
                </Stack>
            </Grid>
            <Grid item xs={4} >
                <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                    <CircularProgress color="success" />
                </Stack>
            </Grid>
            <Grid item xs={4} >
                <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
                    <CircularProgress color="inherit" />
                </Stack>
            </Grid>
        </Grid>


    )
}