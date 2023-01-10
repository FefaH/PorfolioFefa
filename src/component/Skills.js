import { Button, Dialog, DialogContent, DialogContentText, DialogTitle, Grid, Slide } from "@mui/material"
import { forwardRef, useState } from "react";

const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const Skills = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Grid container item xs={12} sm={6} lg={12} direction="column" justify="center" alignItems="center">
                <Button onClick={() => setOpen(!open)}>
                    <h1>SKILLS</h1>
                </Button>
                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={() => { setOpen(false) }}
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle>{"SKILLS"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-slide-description">
                            HTML 5 <br />
                            CSS<br />
                            Javascript<br />
                            Typescript<br />
                            React Native<br />
                            Material UI<br />
                            NodeJs<br />
                            PostgreSQL<br />
                            C/C++<br />
                            Git<br />
                            SCRUM methodology<br />
                            JIRA<br />
                            Figma<br />
                            Bitbucket<br />
                            DataGrip<br />
                            Cypress<br />
                            Selenium<br />
                            Selenium IDE<br />
                            Postman<br />
                        </DialogContentText>
                    </DialogContent>
                </Dialog>

            </Grid>
        </div>
    );
}