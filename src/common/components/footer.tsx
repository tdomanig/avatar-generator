import {AppShell,Container,Group,Box,Footer} from '@mantine/core';

export const Foot=()=>{
    return(
        <AppShell
            footer={<Footer height="auto" py="sm">
                <Container>
                    <Group noWrap>
                        <Box sx={{ whiteSpace: 'nowrap' }}>
                            <strong>I bin da Footer</strong>
                        </Box>
                        <Box>

                        </Box>
                    </Group>
                </Container>
            </Footer>} children={undefined} ></AppShell>
    )

}