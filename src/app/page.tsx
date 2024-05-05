import { getBreakingNews, getPaginatedLatestNews } from "@/api/newsapi";
import HeadLineCard from "@/components/headline-card/HeadLineCard";
import NewsCard from "@/components/news-card/NewsCard";
import Pagination from "@/components/pagination/Pagination";
import { Daum } from "@/models/response-models/NewsResponseModel";

export default async function Home({
  searchParams,
}: {
  searchParams?: {
    query?: string,
    page?: string,
  },
}) {

  const currentPage = Number(searchParams?.page) || 1;

  const breakingNews = await getBreakingNews();

  const latestNewsResponse = await getPaginatedLatestNews(currentPage);

  const latestNewsTotalPages = latestNewsResponse?.meta.pagination.pageCount ?? 1;

  return (
    <main className="px-4 pb-4 mt-2 w-full">
      <div>
        <h2 className="text-lg font-bold">Breaking News</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2 mx-auto">
          {breakingNews && breakingNews.data.map(bn_item =>
          (
            <HeadLineCard key={bn_item.id} title={bn_item.attributes.title}
              title_imageUrl={extractImageUrl(bn_item)}
              publishedDate={bn_item.attributes.published_date}
              categories={[]} />
          ))
          }
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-bold">Latest News</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
            {latestNewsResponse && latestNewsResponse.data.map(ln_item =>
            (
              <NewsCard key={ln_item.id} title={ln_item.attributes.title}
                title_imageUrl={extractImageUrl(ln_item)}
                publishedDate={ln_item.attributes.published_date}
              />
            ))
            }
          </div>
          <div className="flex justify-center mt-4">
            <Pagination totalPages={latestNewsTotalPages} />
          </div>
        </div>

      </div>

    </main>
  );

  function extractImageUrl(bn_item: Daum): string {

    if (bn_item.attributes.title_media.data.attributes.formats?.medium?.url) {
      return bn_item.attributes.title_media.data.attributes.formats?.medium?.url;
    }

    return bn_item.attributes.title_media.data.attributes.formats.small.url;
  }
}
