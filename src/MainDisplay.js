import React from 'react'
import './MainDisplay.css'
import MainNoData from './MainNoData'


function MainDisplay(props) {
    // const clean = (data) => { }

    const countryData = props.data
    // const { advise: { UA }} = countryData
    
    
    if (countryData === null){
      return(
        <MainNoData />
      )
    } else {

      const requiredVacs = countryData.vaccinations.filter(vac => vac.message === "Vaccination is recommended for all travelers to this country")
      
      return (
        <section className="main-data">
          {/* full country name */}
          <h1 className="country-name">{countryData.names.full}</h1>


          {/* filter and display official languages */}
          <div className="section-wrapper">
            <section className="label">
              <p>Languages Spoken</p>
            </section>
            <section className="icon">
              <i className="fas fa-comments"></i>
            </section>
            <section className="data">

              {countryData.language.map(language =>
                <p className="language"key={language.language}>{language.language}</p>
              )}


            </section> 
          </div>




              {/* currency info */}
          <div className="section-wrapper">
            <section className="label">
              <p>Currency</p>

            </section>

            <section className="icon">
              <i className="fas fa-money-bill"></i>
            </section>


            <section className="data">
              <p>{countryData.currency.name} ({countryData.currency.code})</p>
              <p>1.00 USD  = {Number(countryData.currency.rate).toFixed(2)} {countryData.currency.code}</p> 
            </section> 
          </div>

              {/* travel advisory */}
          <div className="section-wrapper">
            <section className="label">
              <p>Travel Advisories</p>
            </section>

            <section className="icon">
              <i className="fas fa-exclamation-triangle"></i>            
            </section>

            <section className="data">
              <p>{countryData.advise.UA ? countryData.advise.UA.advise : 'None'}</p>
            </section> 
          </div>


              {/* telephone call code */}
          <div className="section-wrapper">
            <section className="label">
              <p>Phone Calling Code</p>
            </section>

            <section className="icon">
              <i className="fas fa-phone"></i>          
            </section>

            <section className="data">
              <p>{countryData.telephone.calling_code}</p>
            </section> 
          </div>

            {/* telephone police */}
          <div className="section-wrapper">
            <section className="label">
              <p>Police</p>
            </section>

            <section className="icon">
                <i className="fas fa-exclamation-circle"></i>       
            </section>

            <section className="data">
              <p>{countryData.telephone.police}</p>
            </section> 
          </div>

          {/* water safety */}
          <div className="section-wrapper">
            <section className="label">
              <p>Drinking Water</p>

            </section>

            <section className="icon">
              <i className="fas fa-tint"></i>    
            </section>

            <section className="data">
              {countryData.water.short ? <p>{countryData.water.short}</p> : <p>No data available</p>}
            </section> 
          </div>


          {/* vaccinations */}
          <div className="section-wrapper">
            <section className="label">
              <p>Vaccinations Recommended for All Travelers</p>
            </section>

            <section className="icon">
              <i className="fas fa-syringe"></i>   
            </section>

            <section className="data">
              {requiredVacs.length > 0 ? requiredVacs.map(vac => <p key={vac.name}>{vac.name}</p>) : <p>none</p>}
            </section> 
          </div>


          {/* neighbouring countries */}
          <div className="section-wrapper">
            <section className="label">
              <p>Neighbouring Countries</p>
            </section>

            <section className="icon">
              <i className="fas fa-globe-americas"></i>   
            </section>
            
            <section className="data">
              {countryData.neighbors.length > 0 ? countryData.neighbors.map(n => <p>{n.name}</p>) : <p>none</p>}
            </section> 
          </div>

        </section>
      )
    }
  
}

export default MainDisplay