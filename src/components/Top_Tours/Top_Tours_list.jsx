import {projectFireStore} from '../../firebase/config'
import TopTours from './Top_Tours'
import {useEffect,useState} from 'react'
import '../../index.css'
function TopToursList(){

    const [topTours,setTopTours]=useState([])
    useEffect(()=>{
        const results=[]
        projectFireStore.collection('tour-description').get().then((snapshot)=>{
              snapshot.docs.forEach((doc)=>{
                 results.push({id:doc.id,...doc.data()})
              })
              setTopTours(results)
              
        })

    },[])

       return(
          <section className="u-text-center section-tours">
            <h2 className="secondary-heading">Most Popular Tours</h2>
            <div className=" row">
             
             {topTours.map(tour=>{
             return <TopTours key={tour.id} tour={tour}/>
             })}
         
             </div>
          </section>
           
       )
}
export default TopToursList