import { ReactNode } from 'react'
import { Footer } from '../components/footer/Footer'
import { Navigation } from '../components/navigation/Navigation'

interface MainLayoutProps {
  children: ReactNode
  classNames?: string[]
}

export const MainLayout = ({ children, classNames }: MainLayoutProps) => {
  let classes
  if (classNames) {
    classes = classNames
      .reduce((string, currentName) => (string += `${currentName} `), '')
      .trim()
  }
  return (
    <>
      <Navigation />
      <main className={classes}>{children}</main>
      <Footer />
    </>
  )
}
