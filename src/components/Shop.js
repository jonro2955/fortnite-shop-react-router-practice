import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Shop() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const info = await fetch(
      'https://fortnite-api.theapinetwork.com/upcoming/get'
    );
    const obj = await info.json();
    console.log(obj.data);
    setItems(obj.data);
  };

  return (
    <div className='container'>
      <h4 className='center'>Shop</h4>
      {items.map((x) => (
        <h6 key={x.itemId}>
          <Link to={`/${x.itemId}`}>{x.item.name}</Link>
        </h6>
      ))}
    </div>
  );
}
export default Shop;
