import {Paper, Tab, Tabs, Typography} from "@mui/material";
import {forwardRef, useLayoutEffect, useState} from "react";
import icon128 from "../images/icons/icon128.png"
import { styled } from '@mui/material/styles';
import {WEB_PAGE} from "../constants";
import {useNavigate, useNavigation} from "react-router";


const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 60,
        width: '100%',
        backgroundColor: '#FFFFFF',
    },
});

const StyledTab = styled((props) => (
    <Tab {...props} />
))(({ theme }) => ({
    textTransform: 'none',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    color: 'rgba(255, 255, 255, 0.9)',
    '&.Mui-selected': {
        color: '#fff',
    },
    '&.Mui-focusVisible': {
        backgroundColor: 'rgba(100, 95, 228, 0.32)',
    },
}));


const NavigationBar =  forwardRef((props,ref) =>{
    const [page, setPage] = useState(false)
    const navigate = useNavigate();

    const handlePageChange = (e, page) => {
        setPage(page)
        navigate(page || WEB_PAGE.home);
    }

    return(
    <Paper ref={ref} elevation={8} square sx={{bgcolor: 'background.main', display:'flex', flexDirection:'row', alignItems:'center', position: 'fixed', left: 0, right: 0}}>
        <Paper elevation={4} sx={{m: 1,width:32, height:32, cursor:'pointer'}} style={{backgroundImage : `url(${icon128})`, backgroundSize:'contain'}}
               onClick={(e)=>handlePageChange(e, false)}/>
        <div style={{flex:1}}/>

        <StyledTabs value={page} onChange={handlePageChange}>
            <StyledTab  label="About Me" value={WEB_PAGE.aboutMe}/>
            <StyledTab  label="Contact" value={WEB_PAGE.contact}/>
        </StyledTabs>
    </Paper>
    )
})

export default NavigationBar