import useMediaQuery from "../hooks/mediaQuery.hook";

const useMediaService = () => {

  const isTablet = useMediaQuery("(max-width: 1459px)")
  const isMobile = useMediaQuery("(max-width: 767px)")

  return {isTablet, isMobile}
}

export default useMediaService;
