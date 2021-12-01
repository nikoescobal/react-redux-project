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
          <h2 className="text-lg font-bold text-white p-4 mb-6 rounded flex justify-center bg-blue-400">
            {' '}
            Name:
            {' '}
            {characters.name}
          </h2>
          <h2 className="text-lg font-bold">
            {' '}
            Alias:
            {' '}
            {characters.alias}
          </h2>
          <h2 className="text-lg font-bold">
            {' '}
            Gender:
            {' '}
            {characters.gender}
          </h2>
          <h2 className="text-lg font-bold">
            {' '}
            Description:
            {' '}
            {characters.description}
          </h2>
          <h2 className="text-lg font-bold">
            {' '}
            Occupation:
            {' '}
            {characters.occupation}
          </h2>
          <h2 className="text-lg font-bold">
            {' '}
            Quirk:
            {' '}
            {characters.quirk}
          </h2>
          <h2 className="text-lg font-bold">
            {' '}
            Status:
            {' '}
            {characters.status}
          </h2>
        </div>
      </div>
    </div>
  );
};
// const dispatch = useDispatch();
export default Characters;
