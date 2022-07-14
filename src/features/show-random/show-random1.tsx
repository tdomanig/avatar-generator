import { useShowAll } from "../../common/hooks/use-showRandom";
import { Loader, Text, Button, Group, Stack } from "@mantine/core";

export const ShowRandom1 = () => {
  const { data, isLoading, isError, error } = useShowAll();
  if (isLoading) {
    return (
      <Group position="center">
        <Loader />
      </Group>
    );
  }
  if (isError) {
    return <h1>{(error as any)?.message}</h1>;
  }

  return data ? (
    <Group position="center">
      <Stack>
        <Group position="center">
          <img
            src={data}
            alt="Hier könnte ihre Werbung Stehen"
            height={500}
            width={500}
          />
        </Group>
        <Group position="center">
          <a href={data as string} download={data as string}>
            <Button>Download pic</Button>
          </a>
        </Group>
      </Stack>
    </Group>
  ) : (
    <Text color="red">No Data!!</Text>
  );
};
