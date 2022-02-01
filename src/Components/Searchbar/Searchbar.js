import { Notify } from "notiflix/build/notiflix-notify-aio";
import PropTypes from "prop-types";
import { useState } from "react";
import {
  Header,
  SearchForm,
  SearchFormBtn,
  SearchFormBtnLabel,
  SearchFormInput,
} from "./Searchbar.styled";

export default function Searchbar({ onSubmit }) {
  const [inputQuerry, setInputQuerry] = useState("");

  const handleInput = (e) => {
    setInputQuerry(e.currentTarget.value.toLowerCase());
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputQuerry.trim() === "") {
      Notify.failure("Write the correct image name,please", {
        position: "center-center",
        fontSize: "24px",
        timeout: 2500,
        width: "30%",
      });
      return;
    }
    onSubmit(inputQuerry);
    setInputQuerry("");
  };

  return (
    <Header>
      <SearchForm onSubmit={handleFormSubmit}>
        <SearchFormBtn type="submit">
          <SearchFormBtnLabel>Search</SearchFormBtnLabel>
        </SearchFormBtn>

        <SearchFormInput
          name="inputQuerry"
          value={inputQuerry}
          type="text"
          autocomplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={handleInput}
        />
      </SearchForm>
    </Header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
