import Image from "next/image";
import Link from "next/link";
import { MdOutlineDateRange } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { format } from "date-fns";

type NewsCardProps = {
  title: string,
  title_imageUrl: string,
  publishedDate: string,
};

const cmsBaseUrl = process.env.STRAPI_API_URL;

const NewsCard = ({ title, title_imageUrl, publishedDate }: NewsCardProps) => {
  return (<>
    <Link href="#" className="flex gap-4 bg-white border border-gray-300 rounded-lg shadow hover:bg-gray-100">
      <img className="h-32 w-32 md:h-40 md:w-60 object-cover rounded-t-lg rounded-s-lg" src={`${cmsBaseUrl}${title_imageUrl}`} alt="" />
      <div className="flex flex-col justify-between py-4 leading-normal">
        <span className="mb-2 text-lg font-bold tracking-tight text-gray-900 hover:underline">{title}</span>
        <div className="flex gap-1 items-center text-sm text-gray-700"><MdOutlineDateRange /><span>{format(new Date(publishedDate), "MMM d, yyyy")}</span></div>

      </div>
    </Link>
  </>)
}

export default NewsCard;