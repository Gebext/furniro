const PaginationBackup = ({ page, onClickNext, onClickPrevious }) => {
  const totalPages = 2;

  return (
    <div className="my-16">
      <div className="flex items-center justify-center space-x-2">
        <button
          className={`px-4 py-2 ${
            page === 1 ? "bg-gray-300" : " bg-primary5"
          } text-black rounded-lg`}
          onClick={onClickPrevious}
          disabled={page === 1}
        >
          Previous
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <div
            key={index}
            className={` ${
              index + 1 === page ? "bg-primary2" : "bg-primary5"
            } px-4 py-2 text-white rounded-lg`}
          >
            {index + 1}
          </div>
        ))}
        <button
          className={`px-4 py-2 ${
            page === totalPages ? "bg-gray-300 " : "bg-primary5"
          } text-black rounded-lg`}
          onClick={onClickNext}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationBackup;
