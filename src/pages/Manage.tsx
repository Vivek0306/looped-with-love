import GalleryItems from "../data/galleryItems";
import DataRow from "../components/DataRow";


console.log(GalleryItems[0]);
export default function Manage() {
    return (
        <>
            <section className="py-5">
                <div className="container">
                    <h1 className="fw-bold mb-3">
                        Manage Page
                    </h1>
                </div>

                <div className="container table-responsive">
                    <table className="table table-light  table-striped table-bordered">
                        <thead>
                            <tr>
                                {Object.keys(GalleryItems[0]).map((key) => (
                                    <th scope="col" key={key}><span>{key}</span> {key === 'category' ?
                                        (<div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                Filter
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>) : ""
                                    }</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {GalleryItems.map((item) => (
                                <DataRow item={item} key={item.id} />
                            ))}

                        </tbody>
                    </table>
                    {/* <DataTable item={GalleryItems[0]} /> */}
                </div>
            </section>
        </>
    );
}