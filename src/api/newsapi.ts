import { NewsResponseModel } from "@/models/response-models/NewsResponseModel";
import { axiosInstance } from "./axios";
import qs from "qs";

export const getBreakingNews = async () => {
  try {
    let endpointQueryParms = {
      fields: ["published_date", "title"],
      sort: ["published_date:desc"],
      filters: {
        news_categories: {
          name: {
            $contains: "Breaking",
          }
        }
      },
      populate: {
        title_media: {
          fields: ["formats"]
        }
      },
      pagination: {
        pageSize: 4,
        page: 1,
      },
      publicationState: 'live',
    };

    let query = qs.stringify(endpointQueryParms);

    const response = await axiosInstance.get<NewsResponseModel>(`api/news?${query}`);

    return response.data;
  } catch (err) {
    console.error(err);
  }

}

export const getPaginatedLatestNews = async (pageNumber: number, pageSize: number = 25) => {
  try {
    let endpointQueryParms = {
      fields: ["published_date", "title"],
      sort: ["published_date:desc"],
      populate: {
        title_media: {
          fields: ["formats"]
        }
      },
      pagination: {
        pageSize: pageSize,
        page: pageNumber,
      },
      publicationState: 'live',
    };

    let query = qs.stringify(endpointQueryParms);

    const response = await axiosInstance.get<NewsResponseModel>(`api/news?${query}`);

    return response.data;
  } catch (err) {
    console.error(err);
  }

}