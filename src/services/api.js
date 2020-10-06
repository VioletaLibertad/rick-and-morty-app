// Get All characters

const baseUrl = 'https://rickandmortyapi.com/api/';

export const fetchCharacters = async () => {

  // let response = await fetch(`${baseUrl}character`)
  // return await response.json();

  try {
    const response = await fetch(`${baseUrl}character`)
    if (response.ok) {
      const data = await response.json();
      return data
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}

export const fetchSingleCharacter = async (id) => {

  // let response = await fetch(`${baseUrl}character/${id}`)
  // return await response.json();

  try {
    const response = await fetch(`${baseUrl}character/${id.toString()}`)
    if (response.ok) {
      const data = await response.json();
      return data
    } else {
      return false;
    }
  } catch (error) {
    return false;
  }
}