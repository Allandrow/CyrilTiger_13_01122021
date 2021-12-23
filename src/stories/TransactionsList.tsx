import { Pagination } from './Pagination'
import { useState, useMemo } from 'react'
import { Transaction } from './Transaction'
import { Data } from './data'

interface TransactionsListProps {
  data: Data[]
}

export const TransactionsList = ({ data }: TransactionsListProps) => {
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 8

  const tableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize
    const lastPageIndex = firstPageIndex + pageSize
    return data.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])
  return (
    <>
      <ul className="transactions-list">
        {tableData.map((item: Data, index: number) => (
          <li key={index}>
            <Transaction data={item} />
          </li>
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={pageSize}
        onPageChange={(page: number) => setCurrentPage(page)}
      />
    </>
  )
}
