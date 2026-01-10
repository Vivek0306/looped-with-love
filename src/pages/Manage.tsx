import { useState, useEffect } from "react";
import { useGalleryItems } from "../hooks/useGalleryItems";
import DataRow from "../components/DataRow";

export default function Manage() {
  const { items, loading } = useGalleryItems();

  const [filteredItems, setFilteredItems] = useState(items);
  const [activeFilter, setActiveFilter] = useState("All");

  // Sync filteredItems when items load
  useEffect(() => {
    setFilteredItems(items);
  }, [items]);

  const handleCategoryFilter = (category: string) => {
    setActiveFilter(category);

    if (category === "All") {
      setFilteredItems(items);
    } else {
      setFilteredItems(items.filter(item => item.category === category));
    }
  };

  // ✅ SAFE: conditional render AFTER hooks
  if (loading) {
    return (
      <section className="py-5" style={{ backgroundColor: "var(--lwl-white)" }}>
        <div className="container text-center">
          <h1
            className="fw-bold mb-3"
            style={{
              fontFamily: "Pacifico, cursive",
              fontSize: "64px",
              color: "var(--lwl-rose)",
            }}
          >
            Loading...
          </h1>
          <p className="text-muted mx-auto" style={{ maxWidth: "600px" }}>
            Please wait while we load our collection of handcrafted crochet creations
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Header */}
      <section className="py-5" style={{ backgroundColor: "var(--lwl-white)" }}>
        <div className="container">
          <h1
            className="fw-bold mb-2"
            style={{
              fontFamily: "Pacifico, cursive",
              fontSize: "48px",
              color: "var(--lwl-rose)",
            }}
          >
            Manage Gallery
          </h1>
          <p className="text-muted">
            Add, edit, or remove items from your collection
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-3" style={{ backgroundColor: "var(--lwl-peach)" }}>
        <div className="container">
          <div className="d-flex align-items-center gap-3 flex-wrap">
            <span className="fw-semibold" style={{ color: "var(--lwl-dark)" }}>
              Filter by Category:
            </span>

            <div className="btn-group flex-wrap">
              {["All", "Bouqet", "Pots", "Bookmarks", "Baby", "Plushies", "Others"].map(
                (category) => (
                  <button
                    key={category}
                    type="button"
                    className={`btn ${
                      activeFilter === category
                        ? "btn-primary"
                        : "btn-outline-secondary"
                    }`}
                    onClick={() => handleCategoryFilter(category)}
                  >
                    {category === "Bouqet" ? "Bouquet" : category}
                  </button>
                )
              )}
            </div>

            <span className="ms-auto text-muted">
              Showing {filteredItems.length} of {items.length} items
            </span>
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="py-4">
        <div className="container-fluid px-4">
          <div className="table-responsive manage-table-wrapper">
            <table className="table manage-table">
              <thead>
                <tr>
                    <th>Title</th>
                  <th>Category</th>
                  <th>Image</th>
                  <th>Link</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.length ? (
                  filteredItems.map((item) => (
                    <DataRow item={item} key={item.id} />
                  ))
                ) : (
                  <tr>
                    <td colSpan={6} className="text-center text-muted py-5">
                      No items found in this category
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
