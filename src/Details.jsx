import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import { getdata } from './Api';
import Loading from './Loading';
import { TiArrowBack } from 'react-icons/ti';
import Pagenotfound from './Pagenotfound';

function Details({ onAddToCart }) {
  const [loading, setLoading] = useState(true);
  const [count, setCount] = useState(1);
  const id = +useParams().id;
 const [product, setproduct] = useState();

 
  useEffect(
    function() {
      const p = getdata(id);
      p.then(function(product) {
        setproduct(product);
        setLoading(false);
      }).catch(function() {
        setLoading(false);

      });
    },
    [id]
  );

  if (loading) {
    return <Loading />;
  }

  if (!product) {
    return <Pagenotfound />
  }

  function handleCountChange(event) {
    setCount(+event.target.value);
  }

  function handleButtonClick() {
    onAddToCart(id, count);
  }

  function setone() {
    setCount(1);
  }

  return (

    <>
      <div>
        <div className="flex justify-between">
          <Link to="/" className="text-5xl hover:text-red-500   ">
            <TiArrowBack />
          </Link>
          <span></span>
        </div>
        <div className="max-w-6xl  mx-auto bg-white md:flex py-10 px-8 sm:py-20 sm:px-24 shadow-xl">

          <div className=" aspect-square">
            <img src={product.thumbnail} className="h-full w-full object-cover" alt="image" />
          </div>
          <div className="mt-4 md:pl-10  md:mt-0 md:w-2/3 ">
            <h1 className="text-3xl  font-normal text-zinc-500">
              {product.title}
            </h1>
            <p className=" text-2xl  font-bold text-zinc-700 md:py-6 py-4">
              ${product.price}
            </p>
            <p className="text-base text-zinc-500">
              lorem Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown
              printer took a
									</p>
            <div className="mt-6 flex justify-between sm:justify-start">
              <input
                type="number" value={count} onChange={handleCountChange}
                className="border-2 border-zinc-300 bg-neutral-200  w-16 h-11 rounded"
              />
              <button onClick={handleButtonClick} className="rounded-md bg-red-500 hover:bg-red-700 text-slate-100  sm:ml-2 sm:mt-0 py-2.5 px-10">
                ADD TO CART
										</button>
            </div>
          </div>


        </div>

      </div>
      <div className="flex justify-between">
        <div>
          {id > 1 && (
            <Link to={'/product/' + (id - 1)} className="text-5xl hover:text-red-500 ">
              <FaChevronCircleLeft onClick={setone} />
            </Link>
          )}
        </div>
        <div>
          {id < 100 && (
            <Link to={'/product/' + (id + 1)} className="text-5xl hover:text-red-500 hover:bg-black">
              <FaChevronCircleRight onClick={setone} />
            </Link>
          )}
        </div>
      </div>
    </>

  );
}

export default Details;
