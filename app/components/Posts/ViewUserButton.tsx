'use client'

const ViewUserButton = () => {
    function handleClick (){
        alert('banjindan')
    }
  return (
    <div>
        <button onClick={handleClick}></button>
    </div>
  )
}

export default ViewUserButton