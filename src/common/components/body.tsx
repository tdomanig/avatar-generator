import {AppShell,Button,Group} from '@mantine/core';
import {ShowRandom1} from '../../features/show-random/show-random1'


export const Body=()=>{
    return (
        <AppShell >
          
         
        <Group position='center' >
        <ShowRandom1 ></ShowRandom1>
        
        </Group>
          
        <Group position='center' >
        <Button mt={15} >Download Picture</Button>
        <Button mt={15} >Generate your own Avatar</Button>
        </Group>
        
        </AppShell>
      );
}