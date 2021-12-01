import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import {} from '../store/rootReducer';

import { fetchData } from '../store/actions';

const Characters = () => {
  const characterStore = useSelector((state) => state.characters.characters);
  console.log(characterStore);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!characterStore.length) {
      dispatch(fetchData());
    }
  }, []);

  return (
    <div className=" p-6 characters-container grid grid-cols-1">
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
          <div className="flex" key={id}>
            <div className="h-72 w-72 py-3">
              <img className="h-full" src={images[0]} alt={name} />
            </div>
            <div className="flex flex-col px-4 py-2">
              <h2 className="text-lg font-bold">{name}</h2>

              <p className="capitalize py-2.5">{id}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
// const dispatch = useDispatch();
export default Characters;
