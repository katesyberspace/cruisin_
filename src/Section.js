import React from 'react'

function Section(props){

  return (
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

  )
}

export default Section