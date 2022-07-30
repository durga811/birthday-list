import React from 'react';

const List = ({brithdayList}) => {
  return (<>
    { brithdayList.map((person)=>
      {const {id,name,image,age}=person;
   return (<article className='person' key={id}>
      <img src={image}alt={name}/>
      <div>
        <h4>{name}</h4>
        <p>{age} years </p>
      </div>
     </article>);})
      }
    </>
  );
};

export default List;
