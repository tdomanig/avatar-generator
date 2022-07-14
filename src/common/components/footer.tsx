import {AppShell,Container,Group,Box,Footer,Text} from '@mantine/core';

export const Foot=()=>{
    return(
        <AppShell
            footer={<Footer height="auto" py="sm">
                <Container>
                    <Group noWrap>
                        <Box sx={{ whiteSpace: 'nowrap' }}>
                            <Text color="white">I bin da Footer</Text>
                        </Box>
                        <Box>

                        </Box>
                    </Group>
                </Container>
            </Footer>} children={undefined} ></AppShell>
    )

}