
import * as React from 'react'
import {PadPage} from '../component/widgets/page'
import {Paper, Typography} from "@mui/material";
import icon from '../images/icons/icon128.png'


function Landing(){
    return(
        <PadPage>
            <Typography variant="h1" sx={{textShadow: '2px 2px black'}}>Welcome to The Lab No. 8</Typography>
            <Paper elevation={8} sx={{height:200, width:200, backgroundImage:`url(${icon})`, backgroundSize:'cover', margin: '40px 0'}}/>
            <Typography variant="h3" sx={{textShadow: '2px 2px black'}}>A playground UwU</Typography>
            <Typography variant="body1" >W.I.P.</Typography>
        </PadPage>
    )
}

export default Landing