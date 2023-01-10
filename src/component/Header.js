import { Avatar, Grid } from "@mui/material"
import { makeStyles } from '@mui/styles'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import ImageAvatar from './../assets/img/ImageAvatar.jpg';

const useStyles = makeStyles({
    typography: {
        color: '#43234',
        fontWeight: 'normal',
        verticalAlign: 'center',
    },
    divGeneral: {
        background: '#005EE7',
        color: "#fff",
        textShadow: '0px 0px 5px #000',
        paddingTop: 30,
        paddingBottom: 70,
        maxHeight: '100%'
    },
    sizeAvatar: {
        width: '10%',
        height: '10%',
    },
    bigAvatar: {
        marginTop: 0,
        width: 150,
        height: 150,
    },
    heading: {
        marginTop: 20,
        marginBottom: 10
    },
    textoObjetivo: {
        marginTop: 20,
        marginBottom: 20,
        paddingLeft: '20%',
        paddingRight: '20%'
    },
    iconos: {
        marginTop: 20,
        marginRight: 10,
        color: '#fff',
        fontSize: 30
    },
});

export const Header = () => {

    const classes = useStyles()

    return (
        <div className={classes.divGeneral}>
            <Grid container item xs={12} sm={12} lg={12} direction="column" justify="center" alignItems="center">
                <Avatar sx={{ width: 100, height: 100 }} alt="Federico Horita" src={ImageAvatar} className={classes.bigAvatar} />
            </Grid>
            <Grid container item xs={12} sm={12} lg={12} direction="column" justify="center" alignItems="center">
                <h1 className={classes.heading}>Federico Horita</h1>
                <h3 className={classes.heading}>QA Tester & Developer front-end</h3>
                <p className={classes.textoObjetivo}>"Soy desarrollador y QA tester con dos años de experiencia en el mundo del software. Mis inicios en el desarrollo estuvieron orientados a la programación de videojuegos, pero continué por el camino de Full Stack Developer y ahora me estoy especializando en automatización con mucho entusiasmo.</p>

                <p className={classes.textoObjetivo}>Tengo experiencia coordinando y trabajando en equipo, también realizando informes de análisis y seguimiento de tareas para optimizar tiempos y procesos.  Trabajé con React (Javascript/Typescript), React native, NodeJs, PostgresSQL, GIT, bajo la metodología Scrum.</p>

                <p className={classes.textoObjetivo}> Mi objetivo en esta nueva etapa es poder aportar mis conocimientos trabajando en equipo para construir nuevos proyectos y vivir experiencias enriquecedoras."</p>
            </Grid>
            <Grid container item xs={12} sm={12} lg={12} direction="column" justify="center" alignItems="center">
                <h3>Contacto</h3>
                
            </Grid>
            <Grid container item xs={12} sm={12} lg={12} direction="row" justifyContent="space-evenly" alignItems="center">
                <a href="https://www.linkedin.com/in/federico-horita-2ab4b8218/">
                    <LinkedInIcon className={classes.iconos} />
                </a>
                <a href="https://wa.me/541140666266">
                    <WhatsAppIcon className={classes.iconos} />
                </a>
                <a href="mailto:horitafederico@gmail.com">
                    <EmailIcon className={classes.iconos} />
                </a>
            </Grid>
        </div>
    )
}