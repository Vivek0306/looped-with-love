import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import GalleryItems from "./galleryItems"; // your combined array

const seedGalleryItems = async () => {
    console.log("🚀 Seeding gallery items...");

    const collectionRef = collection(db, "galleryItems");

  for (const item of GalleryItems) {
    const { id, ...data } = item; // remove local id
    await addDoc(collectionRef, {
      ...data,
      createdAt: new Date(),
    });
    console.log(`Added: ${item.title}`);
  }

  console.log(GalleryItems.length,"✅ All gallery items uploaded!");
};

seedGalleryItems().catch(console.error);
