import {useShowAll} from '../../common/hooks/use-showRandom'


export const ShowRandom1=()=>{
    const pic1=useShowAll()
  
  console.log(pic1.data)
    return(
        <>
      <img src={pic1.data} alt="Hier könnte ihre Werbung Stehen" height={500}  width={500}/>
     
        </>
    )
    
}