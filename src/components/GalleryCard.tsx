import type { GalleryItem } from "../data/galleryItems";

interface Props {
  item: GalleryItem;
}

const GalleryCard = ({ item }: Props) => {
  return (
    <div className="col-12 col-md-4">
      <div className="gallery-item">
        <h5 className="gallery-title">{item.title}</h5> 
        <img
          src={item.image}
          alt={item.title}
          className="gallery-image"
        />
      </div>
    </div>
  );
};

export default GalleryCard;