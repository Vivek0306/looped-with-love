export interface GalleryItem{
    id: string;
    title: string;
    category: "Bouqet" | "Pots" | "Bookmarks" | "Baby" | "Plushies" | "Others";
    image: string;
    link: string;  
}

export var BabyItems: GalleryItem[] = [
    {
        id: "baby_1",
        title: "Baby Dress",
        category: "Baby",
        image: "baby/b_1.jpg",
        link: "https://www.instagram.com/_looped_with_love_/reel/DSmzA4CEwgN/"
    },
    {
        id: "baby_2",
        title: "Bear Rattle",
        category: "Baby",
        image: "baby/b_2.jpg",
        link: "https://www.instagram.com/_looped_with_love_/p/DIbV1bhzcND/"
    },
    {
        id: "baby_3",
        title: "Blue Baby Booties",
        category: "Baby",
        image: "baby/b_3.jpg",
        link: "https://www.instagram.com/_looped_with_love_/p/DIbVK47z5MN/"
    }
]

export var BookmarksItems: GalleryItem[] = [
    {
        id: "bookmarks_1",
        title: "Star Bookmark",
        category: "Bookmarks",
        image: "bookmarks/b_1.jpg",
        link: "https://www.instagram.com/_looped_with_love_/p/DNx9DB3XB1o/"
    },
    {
        id: "bookmarks_2",
        title: "Strawberry Bookmark",
        category: "Bookmarks",
        image: "bookmarks/b_2.jpg",
        link: "https://www.instagram.com/_looped_with_love_/p/DO5_hI2D-Ac/"
    },
    {
        id: "bookmarks_3",
        title: "Floral Bookmark",
        category: "Bookmarks",
        image: "bookmarks/b_3.jpg",
        link: "https://www.instagram.com/_looped_with_love_/p/DJ_ta76TIJD/"
    },
]

export var PotItems: GalleryItem[] = [
    {
        id: "pots_1",
        title: "Orchid Pot",
        category: "Pots",
        image: "pots/p_1.jpg",
        link: "https://www.instagram.com/_looped_with_love_/p/DMM1yDwzFzJ/"
    },
    {
        id: "pots_2",
        title: "Tulip Pot",
        category: "Pots",
        image: "pots/p_2.jpg",
        link: "https://www.instagram.com/_looped_with_love_/p/DITkJ-RT6I1/"
    },
    {
        id: "pots_3",
        title: "Pink Orchid Pot",
        category: "Pots",
        image: "pots/p_4.jpg",
        link: "https://www.instagram.com/_looped_with_love_/p/DMM1nynzcuV/"
    },
    {
        id: "pots_4",
        title: "Cactus Pot",
        category: "Pots",
        image: "pots/p_3.jpg",
        link: "https://www.instagram.com/_looped_with_love_/p/DITnjxNTTZy/"
    },
    {
        id: "pots_5",
        title: "White Orchid Pot",
        category: "Pots",
        image: "pots/p_5.jpg",
        link: "https://www.instagram.com/_looped_with_love_/p/DMM19f1zXz5/"
    },
        {
        id: "pots_6",
        title: "Tulip Pot",
        category: "Pots",
        image: "pots/p_6.jpg",
        link: "https://www.instagram.com/_looped_with_love_/p/DRRveSXk3HW/"
    },
]

export var BouqetItems: GalleryItem[] = [
    {
        id: "bouqet_1",
        title: "Tulip Bouquet",
        category: "Bouqet",
        image: "bouqets/b_1.jpg",
        link: "https://www.instagram.com/_looped_with_love_/p/DQBmVERjzra/"
    },
    {
        id: "bouqet_2",
        title: "Cute Flower Bouquet",
        category: "Bouqet",
        image: "bouqets/b_2.jpg",
        link: "https://www.instagram.com/_looped_with_love_/p/DQHVjwdk23x/"
    },
    {
        id: "bouqet_3",
        title: "Rose Bouquet",
        category: "Bouqet",
        image: "bouqets/b_3.jpg",
        link: "https://www.instagram.com/_looped_with_love_/p/DPjHMNbDmP8/"
    },
    {
        id: "bouqet_5",
        title: "Blue Orchid Bouquet",
        category: "Bouqet",
        image: "bouqets/b_5.jpg",
        link: "https://www.instagram.com/_looped_with_love_/p/DLhDABDT94z/"
    },
    {
        id: "bouqet_6",
        title: "Pink Flower Bouquet",
        category: "Bouqet",
        image: "bouqets/b_6.jpg",
        link: "https://www.instagram.com/_looped_with_love_/p/DLT_5YZTozy/"
    },
    {
        id: "bouqet_7",
        title: "Sunflower Bouquet",
        category: "Bouqet",
        image: "bouqets/b_7.jpg",
        link: "https://www.instagram.com/_looped_with_love_/p/DLjR6gfTI_O/"
    },
    {
        id: "bouqet_8",
        title: "Tulip Bouquet",
        category: "Bouqet",
        image: "bouqets/b_8.jpg",
        link: "https://www.instagram.com/_looped_with_love_/reel/DRRvDb5EwCG/"
    },
    {
        id: "bouqet_9",
        title: "Custom Bouquet",
        category: "Bouqet",
        image: "bouqets/b_9.jpg",
        link: "https://www.instagram.com/_looped_with_love_/p/DTQG0m8k0pQ/"
    },
]

export var PlushiesItems: GalleryItem[] = [
    {
        id: "plushies_1",
        title: "Teddy Bear",
        category: "Plushies",
        image: "plushies/p_1.jpg",
        link: "https://www.instagram.com/_looped_with_love_/p/DIWOkn9zOrm/"
    },   
    {
        id: "plushies_2",
        title: "Rabbit Plushie",
        category: "Plushies",
        image: "plushies/p_2.jpg",
        link: "https://www.instagram.com/_looped_with_love_/p/DIiMrd1zQrM/"
    },          
    {
        id: "plushies_3",
        title: "Heart Doll",
        category: "Plushies",
        image: "plushies/p_3.jpg",
        link: "https://www.instagram.com/_looped_with_love_/reel/DQeVOfuk4-x/"
    },   
    {
        id: "plushies_4",
        title: "Halloween Plushie",
        category: "Plushies",
        image: "plushies/p_4.jpg",
        link: "https://www.instagram.com/_looped_with_love_/p/DQeZdPrk-3w/"
    },   
    {
        id: "plushies_5",
        title: "Hermoine Plushie",
        category: "Plushies",
        image: "plushies/p_5.jpg",
        link: "https://www.instagram.com/_looped_with_love_/reel/DR9dAPoDlQH/"
    },   

]

export var OtherItems: GalleryItem[] = [
    {
        id: "other_1",
        title: "Car Decor",
        category: "Others",
        image: "accessories/a_1.webp",
        link: "https://www.instagram.com/_looped_with_love_/p/DJHZ-07zmJ5/"
    },{
        id: "other_2",
        title: "Teddy Keychain",
        category: "Others",
        image: "accessories/a_2.jpg",
        link: "https://www.instagram.com/_looped_with_love_/p/DRL5VmTE_sj/"
    },
    {
        id: "other_3",
        title: "Curtain Tie",
        category: "Others",
        image: "accessories/a_3.jpg",
        link: "https://www.instagram.com/_looped_with_love_/p/DIqCWYyTwrz/" 
    }
]


var GalleryItems: GalleryItem[] = [
    ...BouqetItems,
    ...PotItems,
    ...BookmarksItems,
    ...BabyItems,
    ...PlushiesItems,
    ...OtherItems
];

export default GalleryItems;