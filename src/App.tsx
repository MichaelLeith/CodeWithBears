import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { Avatar, Box, Container, createTheme, Grid, Paper, Stack, styled, ThemeProvider, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const titleTheme = createTheme({
    typography: {
        fontFamily: ["Skranji"].join(','),
    },
});

const Hero = styled('section')(({ theme }) => ({
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.75)), url("hero.png")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",

    paddingTop: theme.spacing(12),
    paddingBottom: theme.spacing(12),
    [theme.breakpoints.up('md')]: {
      paddingTop: theme.spacing(30),
      paddingBottom: theme.spacing(30),
    },
    height: "100vh",
}));

const Bounce = styled(ExpandMoreIcon)(({ theme }) => ({
    fontSize: "xx-large",
    animation: `bounce 3000ms infinite`,
    "@keyframes bounce": {
        "0%, 20%, 50%, 80%, 100%": {transform: "translateY(0)"}, 
        "40%": {transform: "translateY(-20px)"},
        "60%": {transform: "translateY(-10px)"}, 
    },
    position: "absolute",
    bottom: "2vh",
    marginLeft: "auto",
    marginRight: "auto",
    left: "0",
    right: "0",
    textAlign: "center",
     color: "white",
}));

const ResponsiveFlex = styled('div')(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    "@media (max-width: 800px)": {
        flexDirection: "column",
        "> *": {
            paddingTop: "10px"
        }
    },
}));

const Img = styled('img')(({ theme }) => ({
    borderRadius: "5%",
    maxHeight: "75vh",
    "@media (max-width: 800px)": {
        width: "100%"
    },
}));

function signUp() {
    alert("Due to unforseen demand we don't currently have spaces available. Please reach out to our customer support & we will notify you when spaces are available");
}

export default function App() {
  return (
    <div>
        <CssBaseline />
        <Hero>
            <Container maxWidth="md">
                <MenuIcon fontSize="large" style={{
                    position: "absolute",
                    top: "2vh",
                    right: "2vh",
                    color: "white",
                }}></MenuIcon>
                <img style={{borderRadius: "5%",
                    position: "fixed",
                    top: "2vh",
                    left: "2vh",
                }} src="webdesign-logo.png"></img>
                <Box textAlign="center" color="common.white">
                    <Typography variant="h2" component="h2" gutterBottom={true}>
                        <ThemeProvider theme={titleTheme}>
                            <Typography variant="h2" component="span" style={{ fontWeight: 600, letterSpacing: "4px" }}>
                                Polar Bear Programming
                            </Typography>
                            <Typography variant="h3" style={{ fontWeight: 100, fontSize: '20px' }}>
                                Break the Ice on your new Career!
                            </Typography>
                        </ThemeProvider>
                    </Typography>
                </Box>
                <Bounce/>
            </Container>
        </Hero>
        <section style={{paddingTop: "15vh"}}>
            <Container maxWidth="lg">
                    <ResponsiveFlex>
                        <img style={{borderRadius: "5%", width: "100%"}} src="cute2.png"></img>
                        <div style={{paddingLeft: "10vh"}}>
                            <Typography variant="h2" component="h2" gutterBottom={true}>A New Way To Learn</Typography>
                            <Typography variant="caption" display="block" gutterBottom={true}>
                            Polar Bear Programming is the cool way to stay warm in the tech industry! 
                            If you're tired of feeling like a fish out of water in the job market, 
                            it's time to dive into the icy-cool world of software development with Polar Bear Programming. 
                            You'll learn everything from the basics of coding to advanced techniques, and the best part is, 
                            you don't even have to leave the comfort of your own igloo! With our team of experienced, tech-savvy instructors, 
                            you'll be building websites, creating apps, and generating revenue in no time. 
                            So whether you're an IT pro looking for a change of pace or a beginner who just wants to be the polar opposite 
                            of a tech novice, Polar Bear Programming is the perfect fit for you. Join us on the ice-cold path to success today!
                        </Typography>
                        </div>
                    </ResponsiveFlex>
            </Container>
        </section>
        <section style={{paddingTop: "15vh"}}>
            <Container maxWidth="lg">
                <Box textAlign="center">
                    <Typography variant="h2" component="h2" gutterBottom={true}>Why Code With Bears?</Typography>
                </Box>
                <Stack direction={{xs: "column", sm: "row"}} spacing={2} style={{textAlign: "center"}}>
                    <Grid item xs={4}>
                        <Stack spacing={2} justifyContent="center" alignItems="center" style={{padding: '20px'}}>
                            <Avatar src="dapper.png" sx={{ width: 84, height: 84 }}>H</Avatar>
                            <Typography variant="h5" display="block" gutterBottom={true}>Unlimited Paw-sibilities</Typography>
                            <Typography variant="caption" display="block" gutterBottom={true}>
                                Unleash your inner potential. 9/10 past customers have described our training as a roaring success. 
                                "Polar Bear Programming was the tip of the iceberg for my career. My bad luck thawed out. I went from nothing to earning cold hard cash in a matter of weeks!"
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack spacing={2} justifyContent="center" alignItems="center" style={{padding: '20px'}}>
                            <Avatar src="hipster.png" sx={{ width: 84, height: 84 }}>H</Avatar>
                            <Typography variant="h5" display="block" gutterBottom={true}>Bear Programming</Typography>
                            <Typography variant="caption" display="block" gutterBottom={true}>
                                Pair programming is a tried and true learning method, but we take it to the next level! Our bears are primed to
                                help you skate through Java, Python and Rust in only 6 weeks.
                            </Typography>
                        </Stack>
                    </Grid>
                    <Grid item xs={4}>
                        <Stack spacing={2} justifyContent="center" alignItems="center" style={{padding: '20px'}}>
                            <Avatar src="cutie.png" sx={{ width: 84, height: 84 }}>H</Avatar>
                            <Typography variant="h5" display="block" gutterBottom={true}>The Tip of the Iceberg</Typography>
                            <Typography variant="caption" display="block" gutterBottom={true}>
                                Don't be left out in the cold. Our group classes are a melting pot of new contacts for your software journey. 
                                We guarantee that there's snow opportunities better than this!
                            </Typography>
                        </Stack>
                    </Grid>
                </Stack>
            </Container>
        </section>
        <section style={{paddingTop: "15vh"}}>
            <Container maxWidth="lg">
                <div onClick={signUp} style={{display: "flex", 
                    cursor: "pointer",
                    paddingBottom: "15vh",
                    position: "relative", flexDirection: "row", alignItems: "center", justifyContent: "center"}}>
                    <Img src="webdesign.png"/>
                    <Typography variant="h2" component="h2" gutterBottom={true} style={{
                        position: "absolute",
                        left: "50%",
                        bottom: "17vh",
                        transform: "translate(-50%, -50%)",
                        margin: "0 auto",
                        textAlign: "center",
                        color: "white",
                    }}>Sign Up Now!</Typography>
                </div> 
            </Container>
        </section>
    </div>
  );
}
