import React from 'react'

function HeaderComponent({title,currentHeading}) {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <p><a href="/">Home</a></p>
        <p>{currentHeading}</p>
      </div>
    </div>
  )
}

export default HeaderComponent
