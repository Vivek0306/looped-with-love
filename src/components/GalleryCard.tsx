import type { GalleryItem } from "../data/galleryItems";

interface Props {
  item: GalleryItem;
  isSide?: boolean;
}

const GalleryCard = ({ item, isSide }: Props) => {
  return (
    <div className={`${isSide ? "col-6 col-md-4" : "col-12 col-md-4"}`}>
      <div className="gallery-item">
        <h5 className="gallery-title">{item.title}</h5> 
        <a href={item.link} target="_blank" rel="noopener noreferrer" >
          <img
            src={item.image}
            alt={item.title}
            className={`${isSide ? "gallery-image" : "gallery-image-full"}`}
          />
        </a>
      </div>
    </div>
  );
};

export default GalleryCard;