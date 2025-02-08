import React from 'react'

function Button (props) {
  return (
    <div>  
        <a href={props.btnlink} className={ props.ishollow ? 'outline-2 shadow-xl bg-black hover:outline-white outline outline-primary px-6 py-3 text-xl text-white rounded-md hover:bg-primary transition ease-in-out' : 'bg-primary px-6 py-3 text-xl text-white shadow-xl rounded-full hover:bg-black hover:outline hover:outline-white transition ease-in-out'}>{props.btntitle}</a>
    </div>
  )
}

export default  Button;