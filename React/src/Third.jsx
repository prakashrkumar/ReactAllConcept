import React from 'react'

const Third = () => {
    const arr=["prakash","Rupam","Ramesh"]

    const user={
        firstName:"Prakash",
        lastName:"Kumar",
        age:25
    }

    const users=[
        {firstName:"prkash", lastName:"kumar",age:25,class:"B.tech"},
        {firstName:"Rupam",lastName:"kumari",age:29,class:"BSC"},
        {firstName:"Ramesh",lastName:"kumar",age:24,class:"B.com"},
    ]
    function fullName(user){
        return user.firstName+ " "+user.lastName
    }
  return (
    <div>
        <h1>List of name</h1>
      <ul>
        {
            arr.map((ele,index)=>{ 
               return  (
                <li>{index}-{ele}</li>
               )
})
        }
      </ul>

      <h2>List of Object</h2>
      <p>{user.firstName}</p>
      <p>{user.lastName}</p>
      <p>{user.age}</p>
      <p>fullName:{fullName(user)}</p>

 <h1>kuch use function and object</h1>

 <ul>
    {
        users.map((user,index)=>(
            <li>{index}-{fullName(user)} is {user.age} year old</li>
        ))
    }
 </ul>



    </div>
  )
}

export default Third
