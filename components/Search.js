import { useRouter } from "next/router";
import { useState } from "react";
import { getProductByTitle } from "../utils/shopify";
import FieldWithIcon from "./FieldWithIcon";

const initialSearchState = "";

const Search = () => {
  const [searchState, setSearchState] = useState(initialSearchState);

  const router = useRouter();

  const handleChange = (e) => {
    setSearchState(e.target.value);
  };

  const handleSubmit = () => {
    router.push(`/search/${searchState}`);
    setSearchState(initialSearchState);
  };

  return (
    <FieldWithIcon
      value={searchState}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Search;
