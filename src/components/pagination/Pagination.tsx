import { usePagination } from '../../hooks/usePagination'

interface PaginationProps {
  currentPage: number
  totalCount: number
  pageSize: number
  onPageChange: (page: number) => void
  siblingCount?: number
}

export const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  })

  if (currentPage === 0 || paginationRange.length < 2) {
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
            onClick={() => onPageChange(index + 1)}
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
