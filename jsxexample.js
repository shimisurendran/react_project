import React from 'react'

const animals=[
    {id:1,animal:"dog"},
    {id:2,animal:"cat"}
];
function Jsxexample() {
  return (
    <div >jsxexample
        {/* jsx loop example */}
        <ul>
            {animals.map((item)=>
            <li key={item.id}>{item.animal}</li>
            )}
        </ul>

        {/*label*/}
        <label htmlFor={'user'}>{'User'}</label>
<input type={'text'} id={'user'} />



    </div>
  )
}

export default Jsxexample