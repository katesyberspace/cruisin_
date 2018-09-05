import React from 'react'
import './MainDisplay.css'

function MainDisplay(props) {
    const countryData = props.data

    if (countryData === null){
      return(
        <section className="main-no-data">
          <h1>search for a country to get amazing travel info...</h1>
        </section>
      )
    } else {
      return (
        <section className="main-data">
          {/* full country name */}
          <h1 className="country-name">{countryData.names.full}</h1>

          {/* filter and display official languages */}
          <div className="section-wrapper">
            <section className="label">
              <p>official languages</p>
            </section>
            <section className="icon">
              <i className="fas fa-prescription-bottle-alt"></i>
            </section>
            <section className="data">
              {countryData.language.filter(language => 
                language.official === "Yes"
              ).map(language =>
                <p className="language"key={language.language}>{language.language}</p>
              )}
            </section> 
          </div>

          <div className="section-wrapper">
            <section className="label">
              <p>currency</p>
            </section>
            <section className="icon">
              <i className="fas fa-prescription-bottle-alt"></i>
            </section>
            <section className="data">
              <p>{countryData.currency.name} ({countryData.currency.code})</p>
              <p>1.00 USD  = {Number(countryData.currency.rate).toFixed(2)} {countryData.currency.code}  </p> 

            </section> 
          </div>

          

          {/* currency */}
          <div className = 'section-wrapper'>
            <p><b>currency:</b> {countryData.currency.name} ({countryData.currency.code})</p>
            <p>1.00 USD  = {Number(countryData.currency.rate).toFixed(2)} {countryData.currency.code}  </p> 
          </div>

          {/* emergency */}
          <h2>calling code: {countryData.telephone.calling_code}</h2>
          <h2>police: {countryData.telephone.police}</h2>
          <h2>ambulance: {countryData.telephone.ambulance}</h2>
          

          {/* drinking water */}
          <h2>water safety: {countryData.water.short}</h2>


          {/* vaccinations */}
          <i className="fas fa-prescription-bottle-alt"></i>


          {countryData.vaccinations.filter(vac => vac.message === "Vaccination is recommended for all travelers to this country")
            .map(vac => <p key={vac.name}> {vac.name} </p>)}


        </section>
      )
    }
  
}

export default MainDisplay