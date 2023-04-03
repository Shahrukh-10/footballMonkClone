import React from "react";

const addProduct = () => {
  //     "productName":"qq",
  //   "productImageUrl":"qq://footballmonk.in/wp-content/uploads/2023/01/Argentina-World-Champions-Graphic-Hoodie-Black.jpg.webp",
  //   "price":"1000",
  //   "quantity":10,
  //   "customerId":"641eb7e1aaeda046c678b2e2"
  const [name, setname] = useState(second)
const handleSubmit = async(e) => {
e.preventDefault();
}

  return (
    <div className="my-10">
      <form className="flex flex-col justify-center items-center ">
        <label>Name</label>
        <input type="text" placeholder="product name" val />
        <label>Descreption</label>
        <input type="textarea" placeholder="product desc" />
        <label>URL</label>
        <input type="text" placeholder="product url" />
        <label>quantity</label>
        <input type="text" placeholder="Quantity" />
        <button type="submit" className="px-10 rounded-sm py-2 text-center  bg-green-500">Add product</button>
      </form>
    </div>
  );
};

export default addProduct;
