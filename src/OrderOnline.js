
// import React, { useState, useEffect } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// import salad from './images/salad.jpg';
// // import bruschetta from './images/bruschetta.jpg';
// import lemonDessert from './images/lemondessert.jpg';
// import './OrderOnline.css';

// const OrderOnline = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   const menuItems = [
//     { id: 1, name: 'Greek Salad', image: salad, description: 'Delicious salad with feta cheese, tomatoes, cucumbers, olives, and olive oil dressing' },
//     { id: 2, name: 'Bruschetta', image: bruschetta, description: 'Italian bruschetta with ham and cheese' },
//     { id: 3, name: 'Lemon Dessert', image: lemonDessert, description: 'Piece of our special lemon dessert' }
//   ];

//   const [quantities, setQuantities] = useState( {
//     1: 0,
//     2: 0,
//     3: 0
//   } );

//   useEffect( () => {
//     const params = new URLSearchParams( location.search );
//     const itemId = parseInt( params.get( 'itemId' ) );
//     if ( itemId ) {
//       setQuantities( prevQuantities => ( {
//         ...prevQuantities,
//         [itemId]: prevQuantities[itemId] + 1
//       } ) );
//     }
//   }, [location.search] );

//   const handleQuantityChange = ( itemId, value ) => {
//     const updatedQuantities = { ...quantities, [itemId]: quantities[itemId] + value };
//     if ( updatedQuantities[itemId] >= 0 ) {
//       setQuantities( updatedQuantities );
//     }
//   };

//   const handleOrderClick = () => {
//     navigate( '/orderonline' );
//   };

//   return (
//     <div className="order-online">
//       <div className="headerOnline">
//         <h1 className='titleOrderOnline'>Order Online</h1>
//       </div>

//       <div className="cards-container">
//         {menuItems.map( item => (
//           <div className="card" key={item.id}>
//             <img src={item.image} alt={item.name} className="card-image" />
//             <div className="card-details">
//               <h3 className="card-title">{item.name}</h3>
//               <p className="card-description">{item.description}</p>
//             </div>
//             <div className="quantity-control">
//               <button className="control-button" onClick={() => handleQuantityChange( item.id, -1 )}>-</button>
//               <span className="quantity">{quantities[item.id]}</span>
//               <button className="control-button" onClick={() => handleQuantityChange( item.id, 1 )}>+</button>
//             </div>
//             <button className="card-button" onClick={handleOrderClick}>Order online</button>
//           </div>
//         ) )}
//       </div>
//     </div>
//   );
// };

// export default OrderOnline;
