import GalleryItems from "../data/galleryItems";

import DataRow from "../components/DataRow";
console.log(Object.keys(GalleryItems[0]));
export default function Manage() {
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <h1 className="fw-bold mb-3">
                        Manage Page
                    </h1>
                </div>

                <div className="container">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                {Object.keys(GalleryItems[0]).map((key) => (
                                    <th scope="col">{key}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {GalleryItems.map((item) => (
                                <DataRow item={item} />
                            ))}
                            
                        </tbody>
                    </table>
                    {/* <DataTable item={GalleryItems[0]} /> */}
                </div>
            </section>
        </>
    );
}