import { Link, useLoaderData, useParams } from "react-router-dom";

const ViewDetails = () => {
  const Loadedcar = useLoaderData();
  const { id } = useParams();
  const idnt = parseInt(id);
  const viewItem = Loadedcar.find((data) => data.id === idnt);

  return (
    <div className="grid md:grid-cols-2 my-20">
      <div className="p-10">
        <img className="w-[90%] m-auto" src={viewItem.image} alt="" />
      </div>

      <div className="p-10 space-y-6">
        <h1 className="text-3xl font-semibold">{viewItem.carName}</h1>
        <p>{viewItem.description}</p>
        <hr />
        <p className="text-xl font-semibold">Model : {viewItem.model}</p>
        <p className="text-xl font-semibold">Price : $ {viewItem.price}</p>

        <Link to="/contact">
          {" "}
          <button className="bg-blue-600 p-2 px-5 mt-6 rounded-lg">
            Buy Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ViewDetails;
