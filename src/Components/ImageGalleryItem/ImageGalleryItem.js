import PropTypes from "prop-types";
import { GalleryItem, GalleryImage } from "./ImageGalleryItem.styled";

export default function ImageGalleryItem({
  url,
  tag,
  toggleModal,
  onImageClick,
}) {
  return (
    <GalleryItem>
      <GalleryImage
        src={url}
        alt={tag}
        onClick={() => {
          toggleModal();
          onImageClick();
        }}
      />
    </GalleryItem>
  );
}

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  toggleModal: PropTypes.func.isRequired,
  onImageClick: PropTypes.func.isRequired,
};
