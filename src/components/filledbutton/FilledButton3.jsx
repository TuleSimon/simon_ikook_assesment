import React from 'react'

function FilledButton3({children, custom}) {
  return (
    <div  className={`filledButton3 ${custom}`}>
      {children}
    </div>
  )
}

export default FilledButton3
