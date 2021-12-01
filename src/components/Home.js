import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import {} from '../store/rootReducer';
import { Link } from 'react-router-dom';
import { fetchData } from '../store/actions';

const Characters = () => {
  const characterStore = useSelector((state) => state.characters.characters);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!characterStore.length) {
      dispatch(fetchData());
    }
  }, []);

  return (
    <div className="grid grid-cols-2 grid-gap-2 lg:grid-cols-4 py-4 bg-yellow-50">
      <div className="col-span-2 lg:col-span-4 h-1/ w-1/2 border-2 rounded border-red-500 mx-auto">
        <img
          className="w-full h-full object-cover bg-yellow-500 bg-cover rounded"
          src="https://www.pngmart.com/files/13/My-Hero-Academia-Characters-PNG-Image-Background.png"
          alt="hero-bg"
        />
      </div>
      <h2 className="col-span-2 font-raleway lg:col-span-4 flex items-center justify-center bg-blue-700 my-6 p-4 text-white font-semi-bold text-lg lg:text-3xl">
        Characters
      </h2>
      {characterStore.map((character) => {
        const { id, name, images } = character;
        return (
          <>
            <Link key={id} to={{ pathname: `/id/${id}` }}>
              <div key={id} className="">
                <h2 className="font-mono lg:text-2xl text-white bg-yellow-400 mx-0.5 flex justify-center items-center text-base font-semibold">
                  {' '}
                  {name}
                </h2>
              </div>
              <div className="flex lg:px-6 bg-blue-500 text-white border justify-center px-2 py-3">
                <img className="h-96 object-cover" src={images[0]} alt={name} />
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
};
// const dispatch = useDispatch();
export default Characters;

//
