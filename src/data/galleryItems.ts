export interface GalleryItem{
    id: string;
    title: string;
    category: "Bouqet" | "Pots" | "Bookmarks" | "Baby";
    image: string;
}

export const BabyItems: GalleryItem[] = [
    {
        id: "baby_1",
        title: "Baby Dress",
        category: "Baby",
        image: "baby/b_1.jpg"
    },
    {
        id: "baby_2",
        title: "Bear Rattle",
        category: "Baby",
        image: "baby/b_2.jpg"
    },
    {
        id: "baby_3",
        title: "Blue Baby Booties",
        category: "Baby",
        image: "baby/b_3.jpg"
    }
]

export const BookmarksItems: GalleryItem[] = [
    {
        id: "bookmarks_1",
        title: "Star Bookmark",
        category: "Bookmarks",
        image: "bookmarks/b_1.jpg"
    },
    {
        id: "bookmarks_2",
        title: "Strawberry Bookmark",
        category: "Bookmarks",
        image: "bookmarks/b_2.jpg"
    },
    {
        id: "bookmarks_3",
        title: "Floral Bookmark",
        category: "Bookmarks",
        image: "bookmarks/b_3.jpg"
    },
]

export const PotItems: GalleryItem[] = [
    {
        id: "pots_1",
        title: "Orchid Pot",
        category: "Pots",
        image: "pots/p_1.jpg"
    },
    {
        id: "pots_2",
        title: "Tulip Pot",
        category: "Pots",
        image: "pots/p_2.jpg"
    },
    {
        id: "pots_3",
        title: "Pink Orchid Pot",
        category: "Pots",
        image: "pots/p_4.jpg"
    },
    {
        id: "pots_4",
        title: "Cactus Pot",
        category: "Pots",
        image: "pots/p_3.jpg"
    },
    {
        id: "pots_5",
        title: "White Orchid Pot",
        category: "Pots",
        image: "pots/p_5.jpg"
    },
        {
        id: "pots_6",
        title: "Tulip Pot",
        category: "Pots",
        image: "pots/p_6.jpg"
    },
]

export const BouqetItems: GalleryItem[] = [
    {
        id: "bouqet_1",
        title: "Tulip Bouquet",
        category: "Bouqet",
        image: "bouqets/b_1.jpg"
    },
    {
        id: "bouqet_2",
        title: "Cute Flower Bouquet",
        category: "Bouqet",
        image: "bouqets/b_2.jpg"
    },
    {
        id: "bouqet_3",
        title: "Rose Bouquet",
        category: "Bouqet",
        image: "bouqets/b_3.jpg"
    },
    {
        id: "bouqet_5",
        title: "Blue Orchid Bouquet",
        category: "Bouqet",
        image: "bouqets/b_5.jpg"
    },
    {
        id: "bouqet_6",
        title: "Pink Flower Bouquet",
        category: "Bouqet",
        image: "bouqets/b_6.jpg"
    },
    {
        id: "bouqet_7",
        title: "Sunflower Bouquet",
        category: "Bouqet",
        image: "bouqets/b_7.jpg"
    },
    {
        id: "bouqet_8",
        title: "Tulip Bouquet",
        category: "Bouqet",
        image: "bouqets/b_8.jpg"
    },
    {
        id: "bouqet_9",
        title: "Custom Flower Bouquet",
        category: "Bouqet",
        image: "bouqets/b_9.jpg"
    },
]