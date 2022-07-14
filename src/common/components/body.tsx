import {AppShell,Button,Group} from '@mantine/core';
import {ShowRandom1} from '../../features/show-random/show-random1'
import { Link } from 'react-router-dom';



export const Body=()=>{
    return (
        <AppShell >
          
         
        
        <ShowRandom1 ></ShowRandom1>
        
       
          
        <Group position='center' >
        <Button mt={15} to="/differentAvatar" component={Link} >Generate your own Avatar</Button>
        <Button mt={15} onClick={()=>{window.location.reload()}}>Generate new Random</Button>
        </Group>
        
        </AppShell>
      );
}

