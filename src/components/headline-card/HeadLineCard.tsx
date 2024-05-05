import Link from "next/link";
import { MdOutlineDateRange } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { format } from "date-fns";

type HeadLineCardProps = {
  title: string,
  title_imageUrl: string,
  publishedDate: string,
  categories: string[]
};


const cmsBaseUrl = process.env.STRAPI_API_URL;

const HeadLineCard = ({ title, title_imageUrl, publishedDate, categories }: HeadLineCardProps) => {
  return (
    <div className={`rounded-lg shadow-lg bg-gray-500 p-3 antialiased text-white h-64 flex flex-col-reverse`} style={{
      backgroundImage: `url('${cmsBaseUrl}${title_imageUrl}')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: `cover`,
      backgroundBlendMode: `multiply`
    }}
    >

      <div className="">
        <Link href="#" className="hover:underline"><strong>{title}</strong></Link>
        <div className="flex gap-4 text-sm mt-1">
          <div className="flex gap-1 items-center"><FaUser /><span>प्रतिनिधी</span></div>
          <div className="flex gap-1 items-center"><MdOutlineDateRange /><span>{format(new Date(publishedDate), "MMM d, yyyy")}</span></div>
        </div>
      </div>

    </div>
  )
}

export default HeadLineCard;