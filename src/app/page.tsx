"use client";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { Avatar, Divider, Image, Link, Spacer, User } from "@nextui-org/react";
import { ProductModal } from "./_components";
const Page = () => {
  interface ProductItem {
    key: number;
    title: string;
    imageUrl: string;
    description: string;
    category: string;
    price: number;
  }
  const products: Array<ProductItem> = [
    {
      key: 0,
      title: "Đập chuột phát nhạc",
      imageUrl:
        "dapchuothamsterphatnhac.png",
      category: "Đồ chơi giúp trẻ tập trung chú ý, có âm thanh",
      description: `Bộ đồ chơi ĐẬP CHUỘT HAMSTER PHÁT NHẠC sẽ là món quà tuyệt vời dành cho bé để tránh xa khỏi “cơn nghiện” smartphone. Chúng có thể giúp bé luyện tập phản xạ nhanh tay nhanh mắt và tập trung phát triển não bộ toàn diện. Được tích hợp nhiều chức năng như 6 bài đồng giao, 5 hiệu ứng âm thanh dễ thương về chủ đề giao thông, động vật, thời tiết và 20 bài hát tiếng anh siêu bổ ích.`,
      price: 200_000,
    },
    {
      key: 1,
      title: "Rối ngón tay gia đình 6 con",
      imageUrl:
        "/boroingontaygiadinh.png",
      category: "Hỗ trợ trẻ chậm nói, phát triển ngôn ngữ",
      description: `Bộ Rối Ngón Tay Gia Đình từ Sodial nằm trong danh mục những món đồ chơi có thể hỗ trợ trẻ chậm nói và phát triển ngôn ngữ. Với 6 nhân vật gia đình như ông, bà, cha, mẹ, anh, chị đầy đáng yêu giúp khuyến khích bé khám phá thế giới đầy màu sắc. Từ đó các bé có thể phát triển tư duy logic, khả năng ghi nhớ, các giác quan nhạy bén thông qua những câu chuyện đầy sinh động. Đồng thời, ba mẹ cũng có thể tham gia trò chuyện cùng bé để bé có thể cảm nhận được sự quan tâm của ba mẹ.`,
      price: 169_000,
    },
    {
      key: 2,
      title: "Bộ tập gắp chia màu montessori",
      imageUrl:
        "/botapgaphatchiamau.png",
      category: "Hỗ trợ trẻ chậm nói, phát triển trí thông minh",
      description: `Bộ đồ chơi "Bộ tập gắp chia hạt màu Montessori" là lựa chọn lý tưởng giúp cho các bé có dấu hiệu tự kỷ phát triển trí thông minh và rèn luyện vận động tinh. Bộ sản phẩm bao gồm khay gỗ thiết kế các lỗ tròn để thả bi và câu cá, 76 viên bi gỗ nhiều màu sắc, các dụng cụ như muỗng, đũa, kẹp gỗ, và bộ số từ 0-9. Với trò chơi này, các bé có thể rèn luyện sự khéo léo, tập trung, nhận biết màu sắc, đếm số lượng và phát triển kỹ năng cần thiết một cách an toàn và hiệu quả.`,
      price: 123_000,
    },
    {
      key: 3,
      title: "Bộ xếp hình người thăng bằng",
      imageUrl:
        "/xephinhnguoithangbang.png",
      category: "Đồ chơi trí tuệ, vận động",
      description: `Đồ chơi xếp hình thăng bằng hình người rạp xiếc vui nhộn cũng là một sản phẩm nằm trong danh mục đồ chơi vận động tinh, giúp trẻ tự kỷ rèn luyện tính kiên nhẫn và tăng cường sự sáng tạo. Bộ sản phẩm bao gồm 32 nhân vật, 32 sticker đôi và 4 quả bóng, mang lại những giờ phút vui vẻ cho bé và gia đình. Các bé có thể sáng tạo nhiều cách chơi khác nhau như domino, bowling, và nhập vai, tạo ra những trải nghiệm mới lạ và thú vị.`,
      price: 123_000,
    },
    {
      key: 4,
      title: `What 'Zit Puzzle`,
      imageUrl:
        "/whatzpuzzle.png",
      category: "Đồ chơi trí tuệ, giải đố",
      description: `What 'Zit Puzzle là bộ trò chơi giải đố, trí tuệ giúp các bé có thể phát triển kỹ năng tư duy logic thông qua việc tiếp xúc với các mảnh đa màu sắc có thể đặt lại vào khay gỗ hoặc xếp thành cấu trúc. Với hơn 7 cách giải khác nhau và hình dạng thú vị tạo cho trẻ một không gian giải trí lành mạnh, tránh xa những trò chơi vô bổ trên điện thoại hay hàng giờ ngồi trước màn hình ti vi.`,
      price: 123_000,
    },
    {
      key: 5,
      title: `Take Along Railroad`,
      imageUrl:
        "/takealongrailroad.png",
      category: "Phát triển kỹ năng vận động và tính độc lập",
      description: `Bộ đồ chơi Take Along Railroad với 17 mảnh ghép để nối lại thành một đường sắt đẹp mắt này là lựa chọn hoàn hảo cho trẻ tự kỷ, giúp phát triển kỹ năng vận động và tính tự lập. Với các tòa nhà, tàu hỏa, xe kiểm lâm và gondola, trẻ có thể dễ dàng sắp xếp và di chuyển chúng trên đường ray theo từng câu chuyện và trí tưởng tượng phong phú của trẻ.`,
      price: 123_000,
    },
  ];

  return (
    <>
      <div>
        <Image
          alt="title"
          src="base-image-2.webp"
          radius="none"
          classNames={{
            wrapper:
              "!max-w-full w-full max-h-[500px] overflow-hidden flex items-center",
            img: "w-full",
          }}
        />
        <Spacer y={12} />
        <div className="text-4xl text-center px-6">
          <span className="text-primary font-semibold">Aurora</span> - Ánh dương
          bình minh cho mọi đứa trẻ
        </div>
        <Spacer y={36} />
        <div>
          <div className="text-2xl font-bold max-w-[1280px] m-auto px-6">
            Đồng hành cùng trẻ tự kỷ - Thấu hiểu và hỗ trợ
          </div>
          <Spacer y={24} />
          <div className="px-6 grid md:flex gap-12 max-w-[1280px] m-auto">
            <div className="min-w-[300px]">
              <Avatar
                isBordered
                className="w-40 h-40"
                src="https://askany.com/_next/image?url=https%3A%2F%2Fd2czqxs5dso3qv.cloudfront.net%2Fexperts%2Fb16adc5b-7f4c-4536-94f7-ff992b35f935.jpeg%3Fformat%3Dwebp&w=3840&q=75"
              />
              <Spacer y={4} />
              <div>
                <div className="text-xl">
                  Chị{" "}
                  <Link
                    className="font-semibold text-xl text-foreground"
                    href="https://askany.com/tam-ly-hoc-duong/1670819114694112"
                  >
                    Kim Nguyễn
                  </Link>
                </div>
                <Spacer y={4} />
                <div className="text-sm italic text-foreground-500 max-w-[300px] gap-1 flex-col flex ">
                  <div>
                    <div className="flex gap-2">
                      <BriefcaseIcon className="w-4 h-4 min-w-4 mt-0.5" />
                      <div>
                        Chuyên viên đào tạo hướng nghiệp Công ty TNHH Công nghệ
                        và Đào tạo YOOT
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-2">
                      <BriefcaseIcon className="w-4 h-4 mt-0.5 min-w-4" />
                      <div>Chuyên viên tham vấn tâm lý học đường</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-foreground-500 italic">
              `Khó khăn lớn nhất khi tư vấn cho các bậc phụ huynh có con em bị
              tự kỷ là “nhiều gia đình họ khó đón nhận được điều này hoàn toàn,
              họ không tiếp nhận được hai chữ tự kỷ, nhiều thế hệ trong gia đình
              xung đột, có thế hệ chấp nhận nhưng cũng có thế hệ chưa chấp nhận,
              phụ huynh không có nhiều thời gian cùng con thực hiện các tương
              tác xã hội.`
            </div>
          </div>
          <Spacer y={24} />
          <div className="bg-content2 py-12">
            <div className="px-6 grid md:flex gap-12 max-w-[1280px] m-auto">
              <div className="min-w-[300px]">
                <Avatar
                  isBordered
                  className="w-40 h-40"
                  src="https://askany.com/_next/image?url=https%3A%2F%2Fd2czqxs5dso3qv.cloudfront.net%2Fexperts%2F1310b339-3c76-4e15-acd5-ce1437cc1841.jpeg%3Fformat%3Dwebp&w=3840&q=75"
                />
                <Spacer y={4} />
                <div>
                  <div className="text-xl">
                    Chị{" "}
                    <Link
                      className="font-semibold text-xl text-foreground"
                      href="https://askany.com/tam-ly-tre-em/1692609864640149"
                    >
                      Nguyễn Hải Uyên
                    </Link>
                  </div>
                  <Spacer y={4} />
                  <div className="text-sm italic text-foreground-500 max-w-[300px] gap-1 flex-col flex">
                    <div>
                      <div className="flex gap-2">
                        <BriefcaseIcon className="w-4 h-4 min-w-4 mt-0.5" />
                        <div>Chuyên viên trẻ em tại bệnh viện Nhi đồng 2</div>
                      </div>
                    </div>
                    <div>
                      <div className="flex gap-2">
                        <BriefcaseIcon className="w-4 h-4 mt-0.5 min-w-4" />
                        <div>
                          Trưởng phòng tư vấn tâm lý tại trung tâm ứng dụng tâm
                          lý JobWay
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-foreground-500 italic">
                `Có một số đặc điểm đặc biệt trong cách mà các em thể hiện sự
                thông minh, thường là thông qua những lĩnh vực như tính toán
                nhanh và thiên về sự tập trung vào một lĩnh vực mà họ yêu thích,
                thường không thích tương tác xã hội và việc học từ người khác có
                thể diễn ra chậm hơn. Đối với trẻ tự kỷ, hình ảnh và màu sắc có
                vai trò quan trọng trong việc thu hút và tạo điều kiện cho tương
                tác hiệu quả. Vì vậy, việc tạo ra các hình ảnh và sử dụng màu
                sắc sáng sẽ giúp tránh sự mất tập trung. Đồng thời, cần hạn chế
                sử dụng những hình thức, vật dụng có thể gây thương tích, thay
                vào đó, ưu tiên sử dụng đồ chơi bằng gỗ được mài tròn và không
                sắc nhọn.`
              </div>
            </div>
          </div>
        </div>
      </div>
      <Spacer y={36} />
      <div className="px-6 max-w-[1280px] m-auto">
        <div className="text-2xl font-bold">Sản phẩm nổi bật</div>
        <Spacer y={12} />
        <div className="grid sm:grid-cols-3 gap-4">
          {products.map(({ category, description, imageUrl, title, key, price }) => (
            <ProductModal
              key={key}
              category={category}
              description={description}
              title={title}
              className="col-span-1"
              imageUrl={imageUrl}
              price={price}
            />
          ))}
        </div>
      </div>
      <Spacer y={36} />
      <div className="px-6 max-w-[1280px] m-auto">
        <div className="text-2xl font-bold">Sứ mệnh</div>
        <Spacer y={12} />
        <div className="text-justify max-w-[1280px] m-auto italic text-foreground-500">
          `Có vẻ trừu tượng, nhưng với con số trẻ tự kỷ ở riêng Việt Nam hiện
          nay và được dự kiến sẽ tiếp tục tăng trong tương lai báo hiệu nếu
          không có sự hỗ trợ và sản phẩm đúng đắn thì tương lai những đứa trẻ
          nhóm này khi lớn lên sẽ là 1 gánh nặng và đồng thời sẽ là 1 tương lai
          tăm tối và đầy khó khăn cho chính cuộc sống của chúng và người thân,
          xã hội. Aurora ra đời với sứ mệnh và hy vọng hỗ trợ trẻ tự kỷ trên con
          đường phát triển cho cuộc sống mai sau, 1 tương lai tươi sáng và khai
          thác được tiềm năng và sự sáng tạo của các em chứ không rơi vào lối
          mòn dẫn đến 1 tương lai tối tăm với những khó khăn và chông gai`
        </div>
        <Spacer y={4} />
        <div className="w-full gap-4">
          <div className="text-sm font-bold italic text-end"> Qy Cận - CEO</div>
        </div>
      </div>
    </>
  );
};

export default Page;
