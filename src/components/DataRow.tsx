import { useState } from "react";
import type { GalleryItem } from "../data/galleryItems";
import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

interface Props {
  item: GalleryItem;
}



export default function DataRow({ item }: Props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedItem, setEditedItem] = useState<GalleryItem>(item);

  const handleChange = (field: keyof GalleryItem, value: string) => {
    setEditedItem({ ...editedItem, [field]: value });
  };

  const handleCancel = () => {
    setEditedItem(item);
    setIsEditing(false);
  };

  const handleSave = async () => {
    try{
        await updateDoc(doc(db, "galleryItems", editedItem.id), {
            title: editedItem.title,
            category: editedItem.category,
            image: editedItem.image,
            link: editedItem.link
        });
        setIsEditing(false);
    } catch (error) {
        console.error("Error updating document: ", error);
        };
    }

  return (
    <tr>
       <td>
        {isEditing ? (
          <input
            type="text"
            className="form-control form-control-sm"
            value={editedItem.title}
            onChange={(e) => handleChange("title", e.target.value)}
          />
        ) : (
          item.title
        )}
      </td>
      <td>
        {isEditing ? (
          <select
            className="form-select form-select-sm"
            value={editedItem.category}
            onChange={(e) => handleChange("category", e.target.value)}
          >
            {["Bouqet", "Pots", "Bookmarks", "Baby", "Plushies", "Others"].map(
              (cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              )
            )}
          </select>
        ) : (
          item.category
        )}
      </td>

      <td>
        {isEditing ? (
          <input
            type="text"
            className="form-control form-control-sm"
            value={editedItem.image}
            onChange={(e) => handleChange("image", e.target.value)}
          />
        ) : (
          <img
            src={item.image}
            alt={item.title}
            style={{
              width: "60px",
              height: "60px",
              objectFit: "cover",
              borderRadius: "8px",
            }}
          />
        )}
      </td>

      <td>
        {isEditing ? (
          <input
            type="text"
            className="form-control form-control-sm"
            value={editedItem.link}
            onChange={(e) => handleChange("link", e.target.value)}
          />
        ) : (
          <a href={item.link} target="_blank" rel="noreferrer">
            View
          </a>
        )}
      </td>

      <td>
        {isEditing ? (
          <div className="d-flex gap-2">
            <button
              className="btn btn-sm btn-primary"
              onClick={handleSave}
            >
              Save
            </button>
            <button
              className="btn btn-sm btn-outline-secondary"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="d-flex gap-2">
            <button
              className="btn btn-sm btn-outline-primary"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button className="btn btn-sm btn-outline-danger">
              Delete
            </button>
          </div>
        )}
      </td>
    </tr>
  );
}
