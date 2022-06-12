import React from 'react';
import img from './Image-2.jpg'
import img2 from './Image-1.jpg'
import img3 from './Image-3.jpg'
import img4 from './Image-4.jpg'
import img5 from './Image-5.jpg'

export default function Changer(){
    return (
        <div className="container  " >
        <div className="d-flex justify-content-around flex-row mb-3">
        <div className="p-2">
            <h2 style={{marginBottom: '20px', fontFamily :'Trebuchet MS'}}>
              <strong>
              WHAT IS DEVELOPMENT THROUGH PLAY?
              </strong>
            </h2>
            <p style={{marginBottom: '20px'}}>Play has the ability to build resilience and develop life skills to counteract 
              negative environments that at-risk children may grow up in. This enables them to 
              make better choices that support positive development and grow up to be well-rounded adults.
            </p>
            <h2 style={{marginBottom: '20px', fontFamily :'Trebuchet MS'}}> 
              <strong>
                PLAY DURING THE COVID-19 PANDEMIC
              </strong>
            </h2> 
            <p style={{marginBottom: '50px'}}>No matter what the situation, Play must never stop. Even while social distancing, 
              Toybank is enabling at-risk children to play at home. Through WhatsApp support groups 
              with our partners, parents and teachers, we are delivering digital Toybank PlayAtHome kits 
              to keep the kids engaged, mentally stimulated and resilient so that they emerge from this crisis unscathed.
            </p>
            <h3 className="text-light" style={{marginBottom: '10px', fontFamily :'Courier New', fontWeight: 'bold'}}>
              "TOYBANK’S MINDFUL APPROACH TO PLAY PROMOTES AT-RISK CHILDREN’S 
              MENTAL WELL-BEING AND SOCIO-EMOTIONAL DEVELOPMENT TO ENSURE 
              A BETTER PERSPECTIVE TOWARDS LIFE IN ADULTHOOD"
            </h3>
</div>
    
       
      
   
        <div id="carouselExampleFade" className="carousel slide carousel-fade p-2" data-bs-ride="carousel" style={{width: "200%",height:"70%", marginTop : '55px'}}>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={img} className="d-block " alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={img2} className="d-block  " alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={img3} className="d-block  " alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={img4} className="d-block " alt="..."/>
              </div>
              <div className="carousel-item">
                <img src={img5} className="d-block " alt="..."/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"/>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"/>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          
    </div></div>
  
)
}