import {PadPage} from "../component/widgets/page";
import {Typography} from "@mui/material";


function AboutMe(){
    return <PadPage>
        <Typography variant="h2"  sx={{textShadow: '2px 2px black'}}>About Me</Typography>
        <Typography variran="body1">This is just a page written by a University Waterloo alumni graduated in CS Major undergrad. Show case some skills, and just some tool that might be useful? Located somewhere in Toronto, ON, CA.</Typography>
    </PadPage>
}

export default AboutMe;