import { Button, Card, CardActions, CardContent, CardMedia, Grid, Modal, Typography } from "@mui/material"
import { makeStyles } from "@mui/styles"
import { useState } from "react"
import CertificadoEANTMaquetacion from "./../assets/img/CertificadoEANTMaquetacion.png"
import CertificadoUTNReact from "./../assets/img/CertificadoUTNReact.png"
import CertificadoEANTFullStack from "./../assets/img/CertificadoEANTFullStack.png"
import CertificadoKeepCodingCypress from "./../assets/img/CertificadoKeepCodingCypress.png"

const useStyles = makeStyles({
    heading: {
        paddingBottom: 40
    },
    containerPrincipal: {
        paddingBottom: 20
    },
    cuadro: {
        marginTop: 10,
        justifyContent: 'center',
    },
    roots: {
        padding: 20,
        marginRight: 20,
        width: '80%',
        margin: 20
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
    chip: {
        marginTop: 15,
        marginLeft: 0,
        paddingLeft: 0,
        marginRight: 10,
    },
    cardButton: {
        justifyContent: 'center',
    },
    modalImg: {

    }
})

export const Desarrollo = () => {
    const classes = useStyles()
    const [openModal1, setOpenModal1] = useState(false)
    const [openModal2, setOpenModal2] = useState(false)
    const [openModal3, setOpenModal3] = useState(false)
    const [openModal4, setOpenModal4] = useState(false)
    const [openModal5, setOpenModal5] = useState(false)
    const [openModal6, setOpenModal6] = useState(false)


    return (
        <div>
            <Grid container item xs={12} sm={6} lg={12} direction="column" justify="center" alignItems="center">
                <h1 className={classes.heading}>ESTUDIOS</h1>
            </Grid>
            <Grid container item xs={12} sm={6} lg={12} className={classes.containerPrincipal}>
                <Grid container item xs={12} sm={12} lg={6} className={classes.cuadro}>
                    <Card className={classes.roots} elevation={1}>
                        <CardContent>
                            <Typography variant="h5" component="h5" className={classes.lugar}>
                                EANT
                            </Typography>
                            <Typography component="h3" className={classes.puesto}>
                                Maquetación Digital con HTML5 y CSS3
                            </Typography>
                            <CardActions className={classes.cardButton}>
                                <Button onClick={() => setOpenModal1(!openModal1)} size="small" color="primary">
                                    Ver
                                </Button>
                                <Modal
                                    open={openModal1}
                                    onClose={() => setOpenModal1(false)}
                                >
                                    <Grid
                                        style={{
                                            justifyContent: 'space-evenly',
                                            display: 'flex', marginTop: '5%',
                                            marginLeft: '10%',
                                            marginRight: '10%'
                                        }}>
                                        <CardMedia
                                            image={CertificadoEANTMaquetacion}
                                            style={{ height: 500, width: 720, }}
                                        />
                                    </Grid>

                                </Modal>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid container item xs={12} sm={12} lg={6} className={classes.cuadro}>
                    <Card className={classes.roots} elevation={1}>
                        <CardContent>
                            <Typography variant="h5" component="h5" className={classes.lugar}>
                                EANT
                            </Typography>
                            <Typography component="h3" className={classes.puesto}>
                                Programación Fullstack con JavaScript
                            </Typography>
                            <CardActions className={classes.cardButton}>
                                <Button onClick={() => setOpenModal4(!openModal4)} size="small" color="primary">
                                    Ver
                                </Button>
                                <Modal
                                    open={openModal4}
                                    onClose={() => setOpenModal4(false)}
                                >
                                    <Grid
                                        style={{
                                            justifyContent: 'space-evenly',
                                            display: 'flex', marginTop: '5%',
                                            marginLeft: '10%',
                                            marginRight: '10%'
                                        }}>
                                        <CardMedia
                                            image={CertificadoEANTFullStack}
                                            style={{ height: 500, width: 720, }}
                                        />
                                    </Grid>

                                </Modal>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid container item xs={12} sm={12} lg={6} className={classes.cuadro}>
                    <Card className={classes.roots} elevation={1}>
                        <CardContent>
                            <Typography variant="h5" component="h5" className={classes.lugar}>
                                UTN
                            </Typography>
                            <Typography component="h3" className={classes.puesto}>
                                Desarrollo en React JS
                            </Typography>
                            <CardActions className={classes.cardButton}>
                                <Button onClick={() => setOpenModal2(!openModal2)} size="small" color="primary">
                                    Ver
                                </Button>
                                <Modal
                                    open={openModal2}
                                    onClose={() => setOpenModal2(false)}
                                >
                                    <Grid
                                        style={{
                                            justifyContent: 'space-evenly',
                                            display: 'flex', marginTop: '5%',
                                            marginLeft: '10%',
                                            marginRight: '10%'
                                        }}>
                                        <CardMedia
                                            image={CertificadoUTNReact}
                                            style={{ height: 500, width: 720, }}
                                        />
                                    </Grid>

                                </Modal>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid container item xs={12} sm={12} lg={6} className={classes.cuadro}>
                    <Card className={classes.roots} elevation={1}>
                        <CardContent>
                            <Typography variant="h5" component="h5" className={classes.lugar}>
                                KeepCoding
                            </Typography>
                            <Typography component="h3" className={classes.puesto}>
                                Testing automation con Cypress
                            </Typography>
                            <CardActions className={classes.cardButton}>
                                <Button onClick={() => setOpenModal3(!openModal3)} size="small" color="primary">
                                    Ver
                                </Button>
                                <Modal
                                    open={openModal3}
                                    onClose={() => setOpenModal3(false)}
                                >
                                    <Grid
                                        style={{
                                            justifyContent: 'space-evenly',
                                            display: 'flex', marginTop: '5%',
                                            marginLeft: '10%',
                                            marginRight: '10%'
                                        }}>
                                        <CardMedia
                                            image={CertificadoKeepCodingCypress}
                                            style={{ height: 500, width: 720, }}
                                        />
                                    </Grid>

                                </Modal>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid container item xs={12} sm={12} lg={6} className={classes.cuadro}>
                    <Card className={classes.roots} elevation={1}>
                        <CardContent>
                            <Typography variant="h5" component="h5" className={classes.lugar}>
                                EducacionIT
                            </Typography>
                            <Typography component="h3" className={classes.puesto}>
                                Testing Automation con Selenium - <small className={classes.small}>En curso</small>
                            </Typography>
                            <CardActions className={classes.cardButton}>
                                <Button size="small" color="primary">
                                    -
                                </Button>
                                <Modal
                                    open={openModal5}
                                    onClose={() => setOpenModal5(false)}
                                >
                                    <Grid
                                        style={{
                                            justifyContent: 'space-evenly',
                                            display: 'flex', marginTop: '5%',
                                            marginLeft: '10%',
                                            marginRight: '10%'
                                        }}>
                                        <CardMedia
                                            image={CertificadoEANTFullStack}
                                            style={{ height: 500, width: 720, }}
                                        />
                                    </Grid>

                                </Modal>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid container item xs={12} sm={12} lg={6} className={classes.cuadro}>
                    <Card className={classes.roots} elevation={1}>
                        <CardContent>
                            <Typography variant="h5" component="h5" className={classes.lugar}>
                                Udemy
                            </Typography>
                            <Typography component="h3" className={classes.puesto}>
                                API Testing con Postman - <small className={classes.small}>En curso</small>
                            </Typography>
                            <CardActions className={classes.cardButton}>
                                <Button size="small" color="primary">
                                    -
                                </Button>
                                <Modal
                                    open={openModal6}
                                    onClose={() => setOpenModal6(false)}
                                >
                                    <Grid
                                        style={{
                                            justifyContent: 'space-evenly',
                                            display: 'flex', marginTop: '5%',
                                            marginLeft: '10%',
                                            marginRight: '10%'
                                        }}>
                                        <CardMedia
                                            image={CertificadoEANTFullStack}
                                            style={{ height: 500, width: 720, }}
                                        />
                                    </Grid>

                                </Modal>
                            </CardActions>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div >
    )
}