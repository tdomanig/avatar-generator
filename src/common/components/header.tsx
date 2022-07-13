import {AppShell,Header,Group,} from '@mantine/core';

  export const Head =()=>{
    return(
        <AppShell
       
        header={
          <Header height={55}  >
            <Group position="center" >
                <h1 color='white'>PixelApp</h1>
                
                </Group>
              
            
          </Header>
        }>
        </AppShell>
    )

  }