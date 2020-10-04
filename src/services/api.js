// Get All characters

const baseUrl = 'https://rickandmortyapi.com/api/';

export const fetchCharacters = async () => {

  // let response = await fetch(`${baseUrl}character`)
  // return await response.json();

  try {
    let response = await fetch(`${baseUrl}character`)
    if (response.ok) {
      let data = await response.json();
      return data
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}