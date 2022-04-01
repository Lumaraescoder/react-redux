import React, {FC} from 'react'
import {Block as BlockType} from '../types/Node'
import {Box , Typography} from "@mui/material"
import {styled} from '@mui/material/styles';

type Props = {
 block: BlockType
}
const Container = styled(Box)({
 display: 'flex',
 flexDirection: 'column',
 backgroundColor: 'grey',
 borderRadius: '2px',
 padding: 8,
})
const BlockTitle = styled(Typography)({
 fontSize: '10px',
 lineHeight: '16px',
 letterSpacing: '1.5',
 textTransform: 'uppercase',
 fontFamily: 'Roboto',
 color: 'blue'
})

const BlockData = styled(Typography)({
 fontSize: '14px',
 lineHeight: '20px',
 letterSpacing: '0.25px',
 color: '#263238',
 fontFamily: 'Roboto',
 
})
export const zeroPad = (num: number) => String(num).padStart(3,'0')

const Block: FC<Props> = ({block}) => {
 return(
  <Container>
   <BlockTitle>
    {zeroPad(block.index)}
    </BlockTitle>
   <BlockData>{block.data}</BlockData>
   </Container>
 )
}

export default Block