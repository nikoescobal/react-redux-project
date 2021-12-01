/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import {} from '../store/rootReducer';
import { useParams } from 'react-router';

import { fetchData } from '../store/actions';

const Characters = () => {
  const characterStore = useSelector((state) => state.characters.characters);
  const dispatch = useDispatch();
  const { name } = useParams();
  const characters = characterStore.find((id) => id.id === name);
  useEffect(() => {
    if (!characterStore.length) {
      dispatch(fetchData());
    }
  }, []);
  console.log(characters);
  // characters.map((character) => {
  //   const {
  //     id, name, alias, description, occupation, quirk, status, images,
  //   } = character;
  //   return {
  //     id,
  //     name,
  //     alias,
  //     description,
  //     occupation,
  //     quirk,
  //     status,
  //     images,
  //   };
  // });

  return (
    <div className=" p-6 characters-container grid grid-cols-1">
      <div className="flex" key={characters.id}>
        <div className="h-full w-full py-3">
          <img
            className="h-full"
            src={characters.images[0]}
            alt={characters.name}
          />
        </div>
        <div className="flex flex-col px-4 py-2">
          <h2 className="text-lg font-bold">{characters.name}</h2>
          <h2 className="text-lg font-bold">{characters.alias}</h2>
          <h2 className="text-lg font-bold">{characters.description}</h2>
          <h2 className="text-lg font-bold">{characters.occupation}</h2>
          <h2 className="text-lg font-bold">{characters.quirk}</h2>
          <h2 className="text-lg font-bold">{characters.status}</h2>
          <p className="capitalize py-2.5">{characters.id}</p>
        </div>
      </div>
    </div>
  );
};
// const dispatch = useDispatch();
export default Characters;
