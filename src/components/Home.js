/* eslint-disable indent */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import {} from '../store/rootReducer';
import { Link } from 'react-router-dom';
import fetchData from '../store/actions';

const Characters = () => {
  const characterStore = useSelector((state) => state.characters.characters);
  const [filteredChars, setFilterChars] = useState(characterStore);
  const [selectedOption, setSelectedOption] = useState('All');
  const dispatch = useDispatch();
  let occupationsArr = characterStore.map((character) => character.occupation);
  occupationsArr = [...new Set(occupationsArr)];

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  // useEffect(() => {
  //   setFilterChars(characterStore);
  // });

  const update = (e) => {
    setSelectedOption(e.target.value);
    const updated = filteredChars.filter(
      (el) => el.occupation === e.target.value,
    );
    setFilterChars(updated);
  };
  console.log(filteredChars);
  return (
    <div className="grid grid-cols-2 grid-gap-2 lg:grid-cols-4 py-4 bg-yellow-50">
      <div className="col-span-2 lg:col-span-4 h-1/ w-1/2 border rounded border-red-500 mx-auto">
        <img
          className="w-full h-full object-cover bg-yellow-500 bg-cover rounded"
          src="https://www.pngmart.com/files/13/My-Hero-Academia-Characters-PNG-Image-Background.png"
          alt="hero-bg"
        />
      </div>
      <select value={selectedOption} onChange={update}>
        {occupationsArr.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
      <h2 className="col-span-2 font-mono lg:col-span-4 flex items-center justify-center border-2 bg-blue-700 my-6 p-4 text-white font-bold text-lg lg:text-3xl">
        Characters
      </h2>
      {filteredChars.length > 0
        && filteredChars.map((character) => {
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
                <div className="flex lg:px-6 bg-blue-500 text-white shadow justify-center px-2 py-3">
                  <img
                    className="h-96 object-cover"
                    src={images[0]}
                    alt={name}
                  />
                </div>
              </Link>
            </>
          );
        })}
    </div>
  );
};
export default Characters;
