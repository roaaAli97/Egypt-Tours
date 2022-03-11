import '../index.css'
function FeatureCard(props){
   return(
       <div className="col-1-of-4">
         <div className="feature-box">
           <h3 className="u-text-center tertiary-heading">{props.title}</h3>
           <p className="paragraph">{props.paragraph}</p>
         </div>
       
       </div>
   )
}
export default FeatureCard