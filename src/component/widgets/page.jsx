import * as React from 'react';

import { styled } from '@mui/material/styles';

const Page = styled((props)=>(<div {...props} />))(
({theme}) =>({
    backgroundColor: theme.palette.primary.light,
    display: 'flex',
    flexDirection: 'column',
    alignItems:'center',
    flex: 1,
    overflowY: 'auto',
}))

const PadPage = styled(Page)(
    ({theme}) =>({
        padding: theme.spacing(2)
    })
)

export {PadPage};

export default Page;