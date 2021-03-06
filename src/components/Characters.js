import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import {} from '../store/rootReducer';
import { useParams } from 'react-router';

import fetchData from '../store/actions';

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
    <div className=" p-6 bg-pink-50 font-mono characters-container grid grid-cols-1">
      <div className="flex" key={characters.id}>
        <div className="h-full w-full py-3 shadow-lg ">
          <img
            className="lg:h-full object-cover"
            src={characters.images[0]}
            alt={characters.name}
          />
        </div>
        <div className="flex w-1/2 md:w-3/5 lg:w-4/5 flex-col px-2 lg:px-3 xl:px-4 py-2 ">
          <div className="lg:text-2xl text-sm md:text-base text-white mb-6 align-middle rounded flex w-full">
            <h2 className="font-semibold p-2 lg:p-3 xl:p-4 bg-blue-700">
              Name:
              {' '}
            </h2>
            <h2 className="font-bold p-2 lg:p-3 xl:p-4 bg-red-600 text-yellow-500">
              {' '}
              &nbsp;
              {characters.name}
            </h2>
          </div>
          <div className="lg:text-lg  text-sm md:text-base text-white p-4 mb-6 rounded bg-blue-400">
            <h2 className="font-semibold text-blue-700">Alias:</h2>
            <h2 className="font-bold p-3 bg-blue-400">
              {' '}
              &nbsp;
              {' '}
              {characters.alias}
            </h2>
          </div>
          <div className="lg:text-lg  text-sm md:text-base text-white p-4 mb-6 rounded bg-blue-400">
            <h2 className="font-semibold text-blue-700">Gender:</h2>
            <h2 className="font-bold p-3 bg-blue-400">
              {' '}
              &nbsp;
              {' '}
              {characters.gender}
            </h2>
          </div>
          <div className="lg:text-lg  text-sm md:text-base text-white p-4 mb-6 rounded bg-blue-400">
            <h2 className="font-semibold text-blue-700">Description:</h2>
            <h2 className="font-bold p-3 bg-blue-400">
              {' '}
              &nbsp;
              {' '}
              {characters.description}
            </h2>
          </div>
          <div className="lg:text-lg  text-sm md:text-base text-white p-4 mb-6 rounded bg-blue-400">
            <h2 className="font-semibold text-blue-700">Occupation:</h2>
            <h2 className="font-bold p-3 bg-blue-400">
              {' '}
              &nbsp;
              {characters.occupation}
            </h2>
          </div>
          <div className="lg:text-lg  text-sm md:text-base text-white p-4 mb-6 rounded bg-blue-400">
            <h2 className="font-semibold text-blue-700">Quirk:</h2>
            <h2 className="font-bold p-3 bg-blue-400">
              {' '}
              &nbsp;
              {characters.quirk}
            </h2>
          </div>
          <div className="lg:text-lg text-sm md:text-base text-white p-4 mb-6 rounded  bg-blue-400">
            <h2 className="font-semibold text-blue-700">Status:</h2>
            <h2 className="font-bold p-3 bg-blue-400">
              {' '}
              &nbsp;
              {characters.status}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
// const dispatch = useDispatch();
export default Characters;
