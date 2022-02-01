import PropTypes from "prop-types";
import { ButtonMore } from "./Button.styled";

export default function Button({ loadMoreClick }) {
  return <ButtonMore onClick={() => loadMoreClick()}>Load more</ButtonMore>;
}

Button.propTypes = {
  loadMoreClick: PropTypes.func.isRequired,
};
