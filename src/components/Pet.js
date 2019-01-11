import React from 'react'

class Pet extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="content">
          <a className="header">
            {name} {gender === 'male' ? '♂' : '♀' }
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
  	        <p>Age: {age}</p>
	        <p>Weight: {weight}</p>
      </div>
    </div>
    <div className="extra content">
      {(isAdopted) ? (
        <button className="ui disabled button">Already adopted</button>
      ) : (
        <button onClick={() => onAdoptPet(id)} className="ui primary button">Adopt pet</button>
      )}
      </div>
     </div>
)
  }
}



export default Pet
