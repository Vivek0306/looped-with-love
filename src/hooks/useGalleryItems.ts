import { useEffect, useState} from 'react';
import type { GalleryItem } from '../data/galleryItems';

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const useGalleryItems = () => {
    const [items, setItems] = useState<GalleryItem[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchItems = async () => {
            const snapshot = await getDocs(collection(db, "galleryItems"));
            const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...(doc.data() as Omit<GalleryItem, "id">),
            }));
            setItems(data);
            setLoading(false);
        }
        fetchItems();
    }, []);

    return { items, loading };
}