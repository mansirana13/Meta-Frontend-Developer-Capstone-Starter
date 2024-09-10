// import React from "react";
// import recipes from "../recipes";
// import Swal from "sweetalert2";

// const Menu = () => {

// const handleOrder = (id) =>{
// console.log(id, "id is clicked");
// Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, order it!"
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire({
//         title: "Ordered",
//         text: "Your order  has been processing.",
//         icon: "success"
//       });
//     }
//   });
// }

//     return(
//         <div className="menu-container">
//            <div className="menu-header">
//             <h2>This weeks specials!</h2>
//             <button>Order Menu</button>
//            </div>
// <div className="cards">
// {
// recipes.map(recipe => <div key={recipe.id} className="menu-item">
//     <img src={recipe.image} />
//     <div className="menu-conent">
//         <div className="heading">
//             <h5>{recipe.title}</h5>
//             <p>{recipe.price}</p>
// </div>
// <p>{recipe.description}</p>
// <button className="orderBtn" onClick={() =>handleOrder(recipe.id)}>Order Now</button>
//         </div>
//         </div>)
// }
// </div>
// </div>
//     );
// }
// export default Menu;








import React from "react";
import recipes from "../recipes";
import Swal from "sweetalert2";

const Menu = () => {
//   console.log(recipes[0]);
const handleOrder = (id) => {
    console.log(id);

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Do you want to confirm order?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: false,
        confirmButtonText: 'Yes, order it!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Orderd!',
            'Your order has been confirmed.',
            'success'
          )
        } 
      })

}
  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipes.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>${recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <button className="orderbtn" onClick={() => handleOrder(recipe.id)}>Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;







