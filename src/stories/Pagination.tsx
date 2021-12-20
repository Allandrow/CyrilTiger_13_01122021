import { usePagination } from './hooks'

export const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: any) => {
  const paginationRange: any = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null
  }

  const onNext = () => {
    if (currentPage < paginationRange[paginationRange.length - 1])
      onPageChange(currentPage + 1)
  }
  const onPrevious = () => {
    console.log(currentPage)
    if (currentPage > 1) onPageChange(currentPage - 1)
  }

  return (
    <ul className="pagination">
      <li onClick={onPrevious}>
        <span>{`<`}</span>
      </li>
      {paginationRange?.map((pageNumber: string | number, index: number) => {
        if (pageNumber === '...') {
          return (
            <li key={index} className="ellipse">
              <span>...</span>
            </li>
          )
        }
        let activePage = false
        if (pageNumber === currentPage) activePage = !activePage

        return (
          <li
            key={index}
            onClick={() => onPageChange(pageNumber)}
            className={activePage ? 'active' : ''}
          >
            {pageNumber}
          </li>
        )
      })}
      <li onClick={onNext}>
        <span>{`>`}</span>
      </li>
    </ul>
  )
}
