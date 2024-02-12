import ArticleList from '@/components/ArticleList';
import Pagination from '@/components/Pagination';

import { LIMIT } from '@/constants';
import { getList } from '@/libs/microcms';

export const revalidate = 60;

export default async function Page() {
  const data = await getList({
    limit: LIMIT,
  });
  return (
    <>
      <ArticleList articles={data.contents} />
      <Pagination totalCount={data.totalCount} />
    </>
  );
}
