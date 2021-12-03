import { Features } from '../components/features/Features'
import { Hero } from '../components/hero/Hero'
import { MainLayout } from '../layout/MainLayout'

export const Home = () => {
  return (
    <MainLayout>
      <main>
        <Hero />
        <Features />
      </main>
    </MainLayout>
  )
}
