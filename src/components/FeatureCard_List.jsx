
import FeatureCard from "./FeatureCard"
import {useEffect, useState} from 'react'
import {projectFireStore} from '../firebase/config'
import '../index.css'
function FeatureCardList(){
  const [featureCardData,setFeatureCardData]=useState([])
  useEffect(()=>{
     projectFireStore.collection('feature-card').get().then(snapshot=>{
       let results=[]
       snapshot.docs.forEach((doc)=>{
          results.push({id:doc.id,...doc.data()})

       })
       setFeatureCardData(results)
     })
  },[])
   return(
       <div className="features-section">
       <div className="row">
         {featureCardData.map(cardData=>{
             return <FeatureCard key={cardData.id} 
                                title={cardData.title} 
                                paragraph={cardData.paragraph}/>
         })}
       </div>
       
       </div>
   )
}
export default FeatureCardList