import {useShowAll} from '../../common/hooks/use-showRandom'
import { Loader,Text,Button,Group } from '@mantine/core'

export const ShowRandom1=()=>{
  const {data,isLoading,isError,error}=useShowAll()
    if(isLoading){
      return <Group position='center'><Loader/></Group> 
    }
    if(isError){
      return <h1>{(error as any)?.message}</h1>
    }
    
    return data ?(
      <div style={{display:"flex"}} >
       
              <Group>
                <img src={data} alt="Hier könnte ihre Werbung Stehen" height={500}  width={500}/>
              </Group>
              <Group >
              <a href={data as string} download={data as string}><Button>Download pic</Button></a>
              </Group>
              
      
      </div>
        
   
     
      
        
    ):<Text color="red">No Data!!</Text>
    
    }

 