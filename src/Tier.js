import React from 'react'

export const Tier = ({setChecked, amount, checked, setAmount}) => {

  const handleTier = (e) => {
    setChecked(!checked)

    if(e.target.value === "basic") {
      setAmount(amount + 10)
    } else if(e.target.value === "premium") {
      setAmount(amount + 15)
    } else {
      setAmount(amount + 20)
    }
  }

  return (
    <div>
      <p className="tier-text">Membership Tier :</p>
      <div className="tier-cards">
      <div className="tier-card">
        <input type="radio" value={"basic"} onChange={handleTier}/>
        <p>Basic $10 </p>
      </div>
      <div className="tier-card">
        {/* <input type="radio" value={"premium"} onChange={handleTier}/> */}
        <p>Premium $15 </p>
      </div>
      <div className="tier-card">
        {/* <input type="radio" value={"executive"} onChange={handleTier} /> */}
        <p>Executive $20 </p>
      </div>
      </div>
    </div>
  )
}
