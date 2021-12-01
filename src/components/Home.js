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
    <div className="grid grid-cols-2 lg:grid-cols-3 py-4">
      <div className="col-span-2 lg:col-span-3 h-1/ w-1/2 mx-auto py-3">
        <img
          className="w-full h-full object-cover bg-cover"
          src="https://www.pngmart.com/files/13/My-Hero-Academia-Characters-PNG-Image-Background.png"
          alt=""
        />
      </div>
      <h2 className="col-span-2 lg:col-span-3 flex items-center justify-center bg-blue-500 my-6 p-4 text-white font-semi-bold text-lg lg:text-3xl">
        Characters
      </h2>
      {characterStore.map((character) => {
        const {
          id,
          name,
          // alias,
          // description,
          // occupation,
          // quirk,
          // status,
          images,
        } = character;
        return (
          <>
            <Link key={id} to={{ pathname: `/id/${id}` }}>
              <div
                key={id}
                className="flex justify-center px-3 align-middle items-center h-full"
              >
                <h2 className="font-mono lg:text-2xl text-base font-semibold">
                  {name}
                </h2>
              </div>
              <div className="flex lg:px-6 justify-center px-2 py-3">
                <img className="h-full" src={images[0]} alt={name} />
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
