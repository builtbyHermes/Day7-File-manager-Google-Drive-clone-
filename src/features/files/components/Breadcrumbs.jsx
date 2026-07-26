import useFileManagerContext from "../context/useFileManagerContext";

function Breadcrumbs() {
  const { breadcrumbs, openFolder } = useFileManagerContext();

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      {breadcrumbs.map((item, index) => {
        const isLast = index === breadcrumbs.length - 1;

        return (
          <div key={item.id} className="breadcrumb-item">
            <button
              type="button"
              className={`breadcrumb-link ${isLast ? "active" : ""}`}
              disabled={isLast}
              onClick={() => openFolder(item.id)}
            >
              {item.name}
            </button>

            {!isLast && <span style={{ color: "var(--text-light)" }}>/</span>}
          </div>
        );
      })}
    </nav>
  );
}

export default Breadcrumbs;