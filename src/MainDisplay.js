import React from 'react'
import './MainDisplay.css'
import MainNoData from './MainNoData'
import InfoCard from './InfoCard'


function MainDisplay(props) {
    // const clean = (data) => { }

    const countryData = props.data
    // const { advise: { UA }} = countryData
    
    
    if (countryData === null){
      return(
        <MainNoData />
      )
    } else {

      const languages = {
        label: 'Languages Spoken',
        icon: 'fas fa-comments',
        data: countryData.language.length > 0 ? 
                countryData.language.map(language => 
                  (<p className="language"key={language.language}>{language.language}</p>)
                ) 
                : <p>No Data Available</p>
      }

      const currency = {
        label: 'Currency',
        icon: 'fas fa-money-bill',
        data: countryData.currency.name !== null ? 
                <div> <p>{countryData.currency.name} ({countryData.currency.code})</p>
                      <p>1.00 USD  = {Number(countryData.currency.rate).toFixed(2)} {countryData.currency.code}</p>
                </div>
                : <p>No Data Available</p>
      }

      const travelAdvise = {
        label: 'Travel Advisories',
        icon: 'fas fa-exclamation-triangle',
        data: <p>{countryData.advise.UA ? countryData.advise.UA.advise : 'None'}</p>
      }

      const callingCode = {
        label: 'Calling Code',
        icon: 'fas fa-phone',
        data: <p>{countryData.telephone.calling_code ? countryData.telephone.calling_code : 'No Data Available'}</p>
      }

      const police = {
        label: 'Police',
        icon: 'fas fa-exclamation-circle',
        data: <p>{countryData.telephone.police === ''? 'No Data Available' : countryData.telephone.police}</p>
      }

      const waterSafety = {
        label: 'Tap Water Safety',
        icon: 'fas fa-tint',
        data: <p>{countryData.water.short ? countryData.water.short : 'No Data Available'}</p>
      }

      const requiredVacs = countryData.vaccinations.filter(vac => vac.message === "Vaccination is recommended for all travelers to this country")

      const vaccinations = {
        label: 'Vaccinations Recommended for All Travelers',
        icon: 'fas fa-syringe',
        data: requiredVacs.length > 0 ? requiredVacs.map(vac => <p key={vac.name}>{vac.name}</p>) : <p>None</p>
      }

      const neighbors = {
        label: 'Neighbouring Countries',
        icon: 'fas fa-globe-americas',
        data: countryData.neighbors.length > 0 ? countryData.neighbors.map(n => <p>{n.name}</p>) : <p>None</p>
      }


      return (
        <section className="main-data grid-container">
          {/* full country name */}
          <h1 className="country-name">{countryData.names.full}</h1>

          <InfoCard className="languages" card={languages}/>
          <InfoCard className="currency" card={currency}/>
          <InfoCard className="travel-advise" card={travelAdvise}/>
          <InfoCard className="calling-code" card={callingCode}/>
          <InfoCard className="police" card={police}/>
          <InfoCard className="water-safety" card={waterSafety}/>
          <InfoCard className="vaccinations" card={vaccinations}/>
          <InfoCard className="neighbors" card={neighbors}/>

        </section>
      )
    }
}

export default MainDisplay