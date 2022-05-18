import { useState } from 'react'

const fetchMovies = async () => {
	try {
  	let URL = 'https://www.omdbapi.com/?i=tt3896198&apikey=37e1535c';
    let response = await fetch(URL);
    let data = await response.json();
    console.log(data);
  } catch(err) {
  	console.log(err)
  }
}