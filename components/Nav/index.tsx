import { Suspense } from 'react'

import SearchField from '@/components/SearchField'
import TagList from '@/components/TagList'

import { Tag } from '@/libs/microcms'

import styles from './index.module.css'

type Props = {
  tags: Tag[]
}

export default function Nav({ tags }: Props) {
  return (
    <nav className={styles.nav}>
      <Suspense>
        <SearchField />
      </Suspense>
      <TagList tags={tags} />
    </nav>
  )
}
