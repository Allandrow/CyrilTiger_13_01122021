import { useMemo } from 'react'

const range = (start: number, end: number) => {
  const length = end - start + 1
  return Array.from({ length }, (_, idx) => idx + start)
}

interface Pagination {
  totalCount: number
  pageSize: number
  siblingCount?: number
  currentPage: number
}

export const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: Pagination) => {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize)
    const displayedPageNumbers = siblingCount + 5

    // case when total page <= number of pages displayed in pagination
    if (displayedPageNumbers >= totalPageCount) {
      return range(1, totalPageCount)
    }

    // check if siblings displayed are within range
    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    )

    const shouldSuspendLeft = leftSiblingIndex > 2
    const shouldSuspendRight = rightSiblingIndex < totalPageCount - 2
    const firstPageIndex = 1
    const lastPageIndex = totalPageCount

    // don't suspend left, suspend right
    if (!shouldSuspendLeft && shouldSuspendRight) {
      const leftItemCount = 3 + 2 * siblingCount
      const leftRange = range(1, leftItemCount)
      return [...leftRange, '...', totalPageCount]
    }

    // suspend left, don't suspend right
    if (shouldSuspendLeft && !shouldSuspendRight) {
      const rightItemCount = 3 + 2 * siblingCount
      const rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      )

      return [firstPageIndex, '...', ...rightRange]
    }

    // suspend left, suspend right
    if (shouldSuspendLeft && shouldSuspendRight) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [firstPageIndex, '...', ...middleRange, '...', lastPageIndex]
    }
  }, [totalCount, pageSize, currentPage, siblingCount])
  return paginationRange
}
