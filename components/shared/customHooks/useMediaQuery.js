import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function useMediaQuery(query, initialState) {
  const [matches, setMatches] = useState(initialState);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

useMediaQuery.propTypes = {
  query: PropTypes.string.isRequired,
  initialState: PropTypes.bool,
};

useMediaQuery.defaultProps = {
  initialState: false,
};

export default useMediaQuery;
