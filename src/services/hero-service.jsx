import { useHttp } from "../hooks/http.hook";

const useHeroService = () => {

  const {loading, request, error, clearError} = useHttp();

  const _apiBase = 'https://superheroapi.com/api.php/8c5c7cad236740defc0bb7b95c4e81e6/';

  const getCharacter = async (id) => {
    const res = await request(`${_apiBase}${id}`);
    return res
  }

  return {loading, error, clearError, getCharacter}
}

export default useHeroService;
