import {AppShell,Button,Group} from '@mantine/core';
import {ShowRandom1} from '../../features/show-random/show-random1'


export const Body=()=>{
    return (
        <AppShell >
          
         
        <Group position='center' >
        <ShowRandom1 ></ShowRandom1>
        <Button mt={15} >Erstelle deinen Avatar</Button>
        </Group>
        
        </AppShell>
      );
}