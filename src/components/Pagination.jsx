const Pagination = ({
  lastPage,
  pagesInCurrenBlock,
  setCurrentPage,
  currentPage,
}) => {
  const handleLastPage = () => {
    setCurrentPage(lastPage);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    if (nextPage <= lastPage) {
      setCurrentPage(nextPage);
    }
  };

  const handlePreviusPage = () => {
    const previusPage = currentPage - 1;
    if (previusPage > 0) {
      setCurrentPage(previusPage);
    }
  };
  return (
    <ul className="pb-4 px-4 text-lg flex gap-2 justify-center font-bold flex-wrap">
      <li>
        <button
          onClick={handleFirstPage}
          className="p-2 rounded-md bg-red-200 hover:bg-red-500 hover:text-white transition-colors"
        >
          {"<<"}
        </button>
      </li>
      <li>
        <button
          onClick={handlePreviusPage}
          className="p-2 rounded-md bg-red-200 hover:bg-red-500 hover:text-white transition-colors"
        >
          {"<"}
        </button>
      </li>
      {pagesInCurrenBlock.map((page) => (
        <li key={page}>
          <button
            onClick={() => setCurrentPage(page)}
            className={`p-2 rounded-md hover:bg-red-500 hover:text-white transition-colors ${
              page === currentPage ? "bg-red-500 text-white" : "bg-red-200"
            }`}
          >
            {page}
          </button>
        </li>
      ))}
      <li>
        <button
          onClick={handleNextPage}
          className="p-2 rounded-md bg-red-200 hover:bg-red-500 hover:text-white transition-colors"
        >
          {">"}
        </button>
      </li>
      <li>
        <button
          onClick={handleLastPage}
          className="p-2 rounded-md bg-red-200 hover:bg-red-500 hover:text-white transition-colors"
        >
          {">>"}
        </button>
      </li>
    </ul>
  );
};
export default Pagination;
