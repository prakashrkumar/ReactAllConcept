import React from 'react'

const Second = () => {
    function getName(enter){
        return enter;
    }
    const getName1=(ok)=>{
        return ok;
    }
    const name="hello Prakash";
    const name1="Realy most beautiful lookin"


    function handleClick(){
        alert("hello bro how are you")
    }

    function solve(e){
        console.clear()
        console.log(e.target.value)
    }
    function solve2(){
        console.log("mouse over")
    }
    function solve3(){
        console.log("Double click hua kay")
    }
  return (
    <div>
      <h1>{getName(name)} Rupam bula rahi hai tmko</h1>
      <h2>{getName1(name1)}</h2>



      <button onClick={handleClick}>click me</button>
      <br/>
      <button onClick={()=>{alert("kay chal raha hai")}}>say hello</button>
<br/>

      <input type="text" placeholder='inter the name' onChange={solve} />
      <p onMouseOver={solve2} onDoubleClick={solve3}>start herehe</p>
    </div>
  )
}

export default Second
