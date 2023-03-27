import {PadPage} from "../component/widgets/page";
import {Button, Input, TextField, Typography} from "@mui/material";
import {useState} from "react";
import styled from "@emotion/styled";

const MAXIMUM_NUM = 300;

const WhiteTextField = styled(TextField)({
    '& .MuiFormLabel-root':{
        color: 'white',
        '&.Mui-focused':{
            color: 'white',
        }
    },
    '& .MuiOutlinedInput-notchedOutline':{
        borderColor: 'white',
    },
    '& .MuiOutlinedInput-root':{
        '&:hover' :{
            '& .MuiOutlinedInput-notchedOutline':{
                borderColor: 'white',
                borderWidth: 2,
            },
        },
        '&.Mui-focused':{
            '& .MuiOutlinedInput-notchedOutline':{
                borderColor: 'white',
                borderWidth: 3,
            },
        }
    },
    '& .MuiOutlinedInput-input':{
        color: 'white',
    },
    '& .MuiFormHelperText-root':{
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'right',
        '&.Mui-error':{
            color: '#ff1744'
        }
    }
})

const SendButton = styled(Button)({
    boxSizing:'border-box',
    border: '2px solid white',
    '&:hover':{
        borderWidth: 2,
        boxShadow: '0 0 1px 1px white'
    },
})


function useValidation(userInfo){


}

function ContactMe(){

    const [info, setInfo] = useState({name:"", email:"", content:""});

    const onChangeInput = (field) => (e) =>{
        let val = e.target.value;
        if(field==="content"){
            if(val.length > MAXIMUM_NUM){
                val = info.content;
            }
        }
        setInfo({...info, [field]: val})
    }

    const onSend = () => {
        setInfo({name:"", email:"", content:""})
    }

    return <PadPage>
        <Typography variant="h2"  sx={{textShadow: '2px 2px black'}}>Contact Me</Typography>
        <Typography variant="body1"  sx={{textShadow: '2px 2px black'}}>Please contact through email. Short and precise message works better.</Typography>
        <div style={{color: 'white', width: '50%', maxWidth: 400, textAlign: 'right'}}>
            <WhiteTextField id="name" label="Name" value={info.name} onChange={onChangeInput("name")} fullWidth margin="normal"/>
            <WhiteTextField id="email" label="Email" value={info.email} onChange={onChangeInput("email")} fullWidth type="email" margin="normal"/>
            <WhiteTextField error={info.content.length >= MAXIMUM_NUM} id="content" label="What do you want to say?"
                       multiline value={info.content} onChange={onChangeInput("content")} fullWidth
                       helperText={`${info.content.length}/${MAXIMUM_NUM}`} margin="normal"/>
            <SendButton onClick={onSend} variant="outlined" color="secondary">Send</SendButton>
        </div>
    </PadPage>
}

export default ContactMe;