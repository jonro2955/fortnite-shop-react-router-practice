import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function ItemDetail() {
  /*The parameter passed into useParams() from App.js when 
    <ItemDetail/> was called is :itemID. In Shop.js, this 
    is set to be the id value of the color object corresponding 
    to the clicked link*/
  let params = useParams();

  const [item, setItem] = useState({
    images: {},
  });

  useEffect(() => {
    fetchItem();
  }, []);

  const fetchItem = async () => {
    const info = await fetch(
      'https://fortnite-api.theapinetwork.com/upcoming/get'
    );
    const obj = await info.json();
    const targetItem = obj.data.find((it) => {
      return it.itemId === params.itemID;
    });
    console.log(targetItem.item.images);
    setItem(targetItem.item);
  };

  return (
    <div className='container'>
      <h4 className='center'>Item</h4>
      <h6>Name: {item.name}</h6>
      <h6>Cost: {item.cost}</h6>
      <h6>Rarity: {item.rarity}</h6>
      <img src={item.images.icon} alt={item.name} />
    </div>
  );
}
export default ItemDetail;
