"use client";

import { useParams } from "next/navigation";

type Story =
  | "do-choi-co-tac-đong-den-su-phat-trien-cua-tre-tu-ky-nhu-the-nao"
  | "tre-tu-ky-co-thuc-su-so-tieng-on-khong"
  | "hoi-chung-tu-ky-van-co-the-duoc-chua-khoi";
type StoryInfo = {
  title: string;
  html: JSX.Element;
};

const Page = () => {
  const { id } = useParams();

  // const stories: Record<Story, StoryInfo> = {
  //   "do-choi-co-tac-đong-den-su-phat-trien-cua-tre-tu-ky-nhu-the-nao": {
  //     title: "Đồ chơi có tác động đến sự phát triển của trẻ tự kỷ như thế nào?",
  //     html: (
  //       <div>
  //         <div className="text-xl font-semibold">
  //           I. Tại sao nên sử dụng đồ chơi cho trẻ tự kỷ?
  //         </div>
  //       </div>
  //     ),
  //   },
  // };

  return <div />;
};

export default Page;
