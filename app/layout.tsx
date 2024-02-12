import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Nav from '@/components/Nav'

import { LIMIT } from '@/constants'
import { getTagList } from '@/libs/microcms'

import './globals.css'
import styles from './layout.module.css'

export const metadata = {
  metadataBase: new URL(process.env.BASE_URL || 'http://localhost:3000'),
  title: 'Simple Blog',
  description: 'A simple blog presented by microCMS',
  openGraph: {
    title: 'Simple Blog',
    description: 'A simple blog presented by microCMS',
    images: '/ogp.png',
  },
  alternates: {
    canonical: '/',
  },
}

type Props = {
  children: React.ReactNode
}

export default async function RootLayout({ children }: Props) {
  const tags = await getTagList({
    limit: LIMIT,
  })
  return (
    <html lang="ja">
      <body>
        <Header />
        <Nav tags={tags.contents} />
        <main className={styles.main}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
