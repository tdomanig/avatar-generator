import { useQuery } from 'react-query';

const sprite=['male','female','human','identicon','initials',  'avataaars','jdenticon','gridy','micah']
const randomseed=randomSprite()
console.log(randomseed)
const seed=makeid()
export const useShowAll =()=>{
  
  return   useQuery({
      
      queryFn:async ()=>{
        const response = await fetch(`https://avatars.dicebear.com/api/${sprite[randomseed]}/${seed}.svg`,{method:'GET'})
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

function makeid() {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < 7; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * 
charactersLength));
  }
  return result;
}

function randomSprite(){
   return Math.floor(Math.random()*(sprite.length))
}