import {AppShell,Header,Group,} from '@mantine/core';

  export const Head =()=>{
    return(
        <AppShell
        padding="md"
        header={
          <Header height={55} p="xs" >
            <Group position="center" pb={20}>
                <h1>PixelApp</h1>
                
                </Group>
              
            
          </Header>
        }>
        </AppShell>
    )

  }