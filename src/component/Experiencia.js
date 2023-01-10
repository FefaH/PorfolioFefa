import { Chip, Grid, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    root: {
        padding: 40
    },
    heading: {
        paddingBottom: 40
    },
    containerPrincipal: {
        paddingBottom: 20
    },
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
    chip: {
        marginTop: 15,
        marginLeft: 0,
        paddingLeft: 0,
        marginRight: 10
    },
})

export const Experiencia = () => {
    const classes = useStyles()

    return (
        <div className={classes.root}>
            <Grid container item xs={12} sm={6} lg={12} direction="column" justify="center" alignItems="center">
                <h1 className={classes.heading}>EXPERIENCIA LABORAL</h1>
            </Grid>
            <Grid container item xs={12} sm={6} lg={12} className={classes.containerPrincipal}>
                <Grid container item xs={12} sm={12} lg={6} className={classes.cuadro}>
                    <Paper className={classes.roots} elevation={1}>
                        <Typography component="h3" className={classes.puesto}>
                            DESARROLLADOR Front-end
                        </Typography>
                        <Typography variant="h5" component="h5" className={classes.lugar}>
                            Phinx - <small className={classes.small}>Desde Agosto 2020 - Octubre 2022 </small>
                        </Typography>
                        <Typography component="p">
                            Desarrollo front-end con Javascript, Typescript, CSS en React. Resolución de bugs front-end. Base de datos
                            DataGrip. Sistema Operativos Windows.
                        </Typography>
                        <Chip className={classes.chip} label="Javascript" />
                        <Chip className={classes.chip} label="CSS" />
                        <Chip className={classes.chip} label="Typescript" />
                        <Chip className={classes.chip} label="React" />
                        <Chip className={classes.chip} label="Material UI" />
                        <Chip className={classes.chip} label="PostgreSQL" />
                        <Chip className={classes.chip} label="Bitbucket" />
                        <Chip className={classes.chip} label="DataGrip" />
                    </Paper>
                </Grid>
                <Grid container item xs={12} sm={12} lg={6} className={classes.cuadro}>
                    <Paper className={classes.roots} elevation={1}>
                        <Typography component="h3" className={classes.puesto}>
                            QA tester
                        </Typography>
                        <Typography variant="h5" component="h5" className={classes.lugar}>
                            Phinx - <small className={classes.small}>Desde Agosto 2020 - Octubre 2022</small>
                        </Typography>
                        <Typography component="p">
                            Construcción y ejecución de test suites
                            manuales, Smoke test, funcionales y de
                            regresión.
                            Seguimiento, control y respuesta a las
                            incidencias en JIRA.
                            Optimización de los procesos de trabajo y
                            coordinación del equipo de QA.
                            Creación de informes mediante Excel y QASE.
                            Presentación de módulos al cliente.

                        </Typography>
                        <Chip className={classes.chip} label="Smoke test" />
                        <Chip className={classes.chip} label="Test suites manuales" />
                        <Chip className={classes.chip} label="JIRA" />
                        <Chip className={classes.chip} label="Excel" />
                        <Chip className={classes.chip} label="QASE" />
                    </Paper>
                </Grid>
                
            </Grid>
        </div>
    )
}