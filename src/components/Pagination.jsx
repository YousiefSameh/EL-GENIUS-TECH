// eslint-disable-next-line react/prop-types
const Pagination = ({totalProjects, projectsPerPage, setCurrentPage}) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalProjects/projectsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex items-center gap-4 justify-center my-5">
      {
        pages.map((page, index) => {
          return (
            <button key={index} className="btn-style w-fit block" onClick={() => setCurrentPage(page)}>{page}</button>
          )
        })
      }
    </div>
  )
}

export default Pagination