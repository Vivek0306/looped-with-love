import type { GalleryItem } from "../data/galleryItems";

interface Props {
    item: GalleryItem;
}


export default function DataRow({ item }: Props) {
    return (
        <tr>
            <th scope="row">{item.id}</th>
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td>{item.image}</td>
            <td>{item.link}</td>
        </tr>
    )
}

