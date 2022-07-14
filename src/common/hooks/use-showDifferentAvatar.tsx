import { useQuery } from 'react-query';




export const useShowDifferent =()=>{
  
  return   useQuery({
      
      queryFn:async ()=>{
        const response = await fetch(`https://avatars.dicebear.com/api/male/12359.svg`,{method:'GET'})
        const blob= await response.blob()
        const imgUrl=await blobToBase64(blob)
        return imgUrl as unknown as string
      }
     
   });
}

const blobToBase64=(blob:Blob)=>{
   const reader =new FileReader();
   reader.readAsDataURL(blob);
   return new Promise((resolve)=>{
      reader.onloadend=()=>{
         resolve(reader.result)
      }
   })
}

