import { Button, Card, CardActions, CardContent, CardMedia, Grid, makeStyles, Modal, Typography } from "@mui/material"
import { useState } from "react"
import Certificado1 from './../../assets/img/Certificado1.png'

const useStyles = makeStyles({
    cuadro: {
        marginLeft: 0,
        marginTop: 10,
        paddingRight: 0
    },
    roots: {
        padding: 20,
        marginRight: 20,
        width: '100%'
    },
    puesto: {
        fontSize: 21,
        marginBottom: 15
    },
    lugar: {
        fontSize: 16,
        marginBottom: 15,
        fontWeight: 400
    },
    small: {
        fontSize: 14,
        fontWeight: 600
    },
    cardButton: {
        justifyContent: 'center',
    },
})

export const UTNReact = () => {
    const classes = useStyles()

    const [openModal, setOpenModal] = useState(false)
    const handleOpen = () => {
        setOpenModal(true)
    }
    
    const handleClose = () => {
        setOpenModal(false)
    }

    return (
        <Grid container item xs={12} sm={12} lg={6} className={classes.cuadro}>
            <Card className={classes.roots} elevation={1}>
                <CardContent>
                    <Typography component="h3" className={classes.puesto}>
                        Maquetación Digital con HTML5 y CSS3
                    </Typography>
                    <Typography variant="h5" component="h5" className={classes.lugar}>
                        EANT - <small className={classes.small}>Desde Julio 2020 - Agosto 2020 </small>
                    </Typography>
                    <CardActions className={classes.cardButton}>
                        <Button onClick={handleOpen} size="small" color="primary">
                            Ver
                        </Button>
                        <Modal
                            open={openModal}
                            onClose={handleClose}
                        >
                            <Grid
                                style={{
                                    justifyContent: 'space-evenly',
                                    display: 'flex', marginTop: '5%',
                                    marginLeft: '10%',
                                    marginRight: '10%'
                                }}>
                                <CardMedia
                                    image={Certificado1}
                                    style={{ height: 500, width: 720, }}
                                />
                            </Grid>

                        </Modal>
                    </CardActions>
                </CardContent>



            </Card>
        </Grid>
    )
}