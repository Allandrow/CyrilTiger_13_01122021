import { ReactNode } from 'react'
import { Navigation } from '../components/navigation/Navigation'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Navigation />
      <main>{children}</main>
    </>
  )
}
