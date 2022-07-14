import { Group,Text,Checkbox,ColorPicker,Space,Box,Stack,Button,Image,Loader} from "@mantine/core";
import { useState } from "react";
import { useShowDifferent } from "../../common/hooks/use-showDifferentAvatar";

export const ShowDifferentAvatar=()=>{
    const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');
    
    return(
        <Group position="center">
        <Stack>
        <Space  h={25}></Space>
        <Group position="center"  >
        <Stack>
            <Checkbox label="male"></Checkbox>
            <Checkbox label="female"></Checkbox>
            <Checkbox label="human"></Checkbox>
        </Stack>
           
        <Stack>
            <Checkbox label="identicon"></Checkbox>
            <Checkbox label="initials"></Checkbox>
            <Checkbox label="avataaars"></Checkbox>
        </Stack>
            
        <Stack>
            <Checkbox label="jdenticon"></Checkbox>
            <Checkbox label="gridy"></Checkbox>
            <Checkbox label="micah"></Checkbox>
        </Stack>
            
        </Group>
        <Space h={25}></Space>
        <Group position="center">
            <Checkbox label="Sad"></Checkbox>
            <Checkbox label="Happy"></Checkbox>
          
        </Group>
        <Space h={25}></Space>
        <Group position="center">
            <Stack>
                <ColorPicker format="rgba" value={value} onChange={onChange}></ColorPicker>
                <Box sx={(theme)=>({backgroundColor:"white",height:35,width:200})}>
                <Text pt={5} pl={17} size="lg" color="black">{value}</Text>
                </Box>
                
            </Stack>
           
        </Group>
        <Group position="center">
        <Button><Text>Generate</Text></Button>
        
        </Group>
        <Space h={25}></Space>
       

        </Stack>
        

        </Group>
    )
   
}
export const GeneratedImage=()=>{
    const {data,isLoading,error,isError}=useShowDifferent()
    if(isLoading){return <Loader></Loader>}
    if(isError){return  <Text color="red" size="lg">{(error as any)?.message}</Text>}
    return data ?(
       
        <Group position="center" >
        <Box  sx={(theme)=>({backgroundColor:"white",height:500,width:500})}>
        
            <Image src={data}></Image>
        </Box>
            
        </Group>

    ):<Text color="red">No Data</Text>
}