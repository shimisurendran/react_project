import React from 'react'
const employee = {
    emp_id: 10,
    name: "Nakul Agate",
    email: "nakul.agate@email.com"
  };
function Constant() {
   
      
  return (
    <div>Employee Details :{JSON.stringify(employee)}</div>

  )
}

export default Constant