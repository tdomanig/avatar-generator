import { AppShell, Header, Group, Text } from "@mantine/core";

export const Head = () => {
  return (
    <AppShell
      header={
        <Header height={55}>
          <Group position="center">
            <Text color="white" size="xl">
              PixelApp
            </Text>
          </Group>
        </Header>
      }
    ></AppShell>
  );
};
