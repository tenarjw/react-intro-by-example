import React from 'react';

export const Alist = (props)  => {
  let arr = [
   <h1 key="1">TYTUŁ</h1>,
   <h2 key="2">subtytuł</h2>,
  ];
 return <div>{arr}</div>;
}

export const Amap = (props)  => {
  let names = ['Pierwszy', 'Drugi', 'Trzeci'];
  return <div> {
      names.map(function (name, index) {
          return <div key={index}>Nazwa = {name}</div>
      })
      }
      </div>;
}

