import ArticleList from '@/components/ArticleList'
import Pagination from '@/components/Pagination'

import { LIMIT } from '@/constants'
import { getList } from '@/libs/microcms'


type Props = {
  params: {
    current: string
  }
  searchParams: {
    q?: string
  }
}

export const revalidate = 60

export default async function Page({ params, searchParams }: Props) {
  const current = parseInt(params.current, 10)
  const data = await getList({
    limit: LIMIT,
    offset: LIMIT * (current - 1),
    q: searchParams.q,
  })
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination
        totalCount={data.totalCount}
        current={current}
        basePath="/search"
        q={searchParams.q}
      />
    </>
  )
}
