import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [list,setList]=useState(data);
  return (
    <main>
      <section className='container'>
   <h3>{list.length} birthdays today</h3>
<List brithdayList={list}/>
   <button onClick={()=>setList([])}>clear All</button>
      </section>
    </main>
  );
}

export default App;
