"use client";
import { BriefcaseIcon } from "@heroicons/react/24/outline";
import { Avatar, Divider, Image, Link, Spacer, User } from "@nextui-org/react";
const Page = () => {
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
        <div className="text-4xl text-center">
          <span className="text-primary font-semibold">Aurora</span> - Ánh dương
          bình minh cho mọi đứa trẻ
        </div>
        <Spacer y={36} />
        <div className="px-6 max-w-[1280px] m-auto">
          <div className="text-2xl font-bold">
            Đồng hành cùng trẻ tự kỷ - Thấu hiểu và hỗ trợ
          </div>
          <Spacer y={24} />
          <div className="px-6 grid md:flex gap-12">
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
                <div className="text-sm italic text-foreground-500 max-w-[300px] gap-1 flex-col flex">
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
          <div className="px-6 grid md:flex gap-12">
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
                      <div>
                        Chuyên viên trẻ em tại bệnh viện Nhi đồng 2
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-2">
                      <BriefcaseIcon className="w-4 h-4 mt-0.5 min-w-4" />
                      <div>Trưởng phòng tư vấn tâm lý tại trung tâm ứng dụng tâm lý JobWay</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-foreground-500 italic">
              `Có một số đặc điểm đặc biệt trong cách mà các em thể hiện sự
              thông minh, thường là thông qua những lĩnh vực như tính toán nhanh
              và thiên về sự tập trung vào một lĩnh vực mà họ yêu thích, thường
              không thích tương tác xã hội và việc học từ người khác có thể diễn
              ra chậm hơn. Đối với trẻ tự kỷ, hình ảnh và màu sắc có vai trò
              quan trọng trong việc thu hút và tạo điều kiện cho tương tác hiệu
              quả. Vì vậy, việc tạo ra các hình ảnh và sử dụng màu sắc sáng sẽ
              giúp tránh sự mất tập trung. Đồng thời, cần hạn chế sử dụng những
              hình thức, vật dụng có thể gây thương tích, thay vào đó, ưu tiên
              sử dụng đồ chơi bằng gỗ được mài tròn và không sắc nhọn.`
            </div>
          </div>
        </div>
        <Spacer y={36} />
        <div className="px-6 max-w-[1280px] m-auto">
          <div className="text-2xl font-bold">Sứ mệnh của chúng tôi</div>
          <Spacer y={6} />
          <div className="px-6">
            <div className="text-justify max-w-[1280px] m-auto italic text-foreground-500">
              `Có vẻ trừu tượng, nhưng với con số trẻ tự kỷ ở riêng Việt Nam
              hiện nay và được dự kiến sẽ tiếp tục tăng trong tương lai báo hiệu
              nếu không có sự hỗ trợ và sản phẩm đúng đắn thì tương lai những
              đứa trẻ nhóm này khi lớn lên sẽ là 1 gánh nặng và đồng thời sẽ là
              1 tương lai tăm tối và đầy khó khăn cho chính cuộc sống của chúng
              và người thân, xã hội. Aurora ra đời với sứ mệnh và hy vọng hỗ trợ
              trẻ tự kỷ trên con đường phát triển cho cuộc sống mai sau, 1 tương
              lai tươi sáng và khai thác được tiềm năng và sự sáng tạo của các
              em chứ không rơi vào lối mòn dẫn đến 1 tương lai tối tăm với những
              khó khăn và chông gai`
            </div>
            <Spacer y={4} />
            <div className="flex w-full gap-4">
              <div className="w-1 bg-divider"/>
              <User
                name="Qy Cận"
                description="C.E.O"
                avatarProps={{
                  src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Spacer y={36} />
      <div className="px-6 mx-auto max-w-[1280px]">
        <div className="grid md:grid-cols-2 gap-2">
          <div className="text-4xl font-semibold">Tổng quan về bệnh tự kỉ</div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui at
            odio ipsum ipsam vel, perferendis similique delectus ipsa
            consequuntur nostrum ducimus, obcaecati iusto quaerat quo dolores
            excepturi fugiat saepe aut!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex
            alias dolore, quidem impedit eius. Totam consectetur quia quam
            similique, culpa atque expedita maiores dolorum dolorem error
            incidunt eum. Eveniet?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            nam accusantium magni officiis dolor esse omnis cumque autem porro
            vel sint numquam beatae qui odit, fugit maiores voluptas itaque
            dolorum.
          </div>
        </div>
      </div>
      <Spacer y={12} />
      <div className="px-6 mx-auto max-w-[1280px]">
        <div className="grid md:grid-cols-2 gap-2">
          <div className="text-4xl font-semibold">Lorem ipsum dolor sit</div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui at
            odio ipsum ipsam vel, perferendis similique delectus ipsa
            consequuntur nostrum ducimus, obcaecati iusto quaerat quo dolores
            excepturi fugiat saepe aut!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex
            alias dolore, quidem impedit eius. Totam consectetur quia quam
            similique, culpa atque expedita maiores dolorum dolorem error
            incidunt eum. Eveniet?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            nam accusantium magni officiis dolor esse omnis cumque autem porro
            vel sint numquam beatae qui odit, fugit maiores voluptas itaque
            dolorum.
          </div>
        </div>
      </div>
      <Spacer y={12} />
      <div className="px-6 mx-auto max-w-[1280px]">
        <div className="grid md:grid-cols-2 gap-2">
          <div className="text-4xl font-semibold">Lorem ipsum dolor sit</div>
          <div>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui at
            odio ipsum ipsam vel, perferendis similique delectus ipsa
            consequuntur nostrum ducimus, obcaecati iusto quaerat quo dolores
            excepturi fugiat saepe aut!
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ex
            alias dolore, quidem impedit eius. Totam consectetur quia quam
            similique, culpa atque expedita maiores dolorum dolorem error
            incidunt eum. Eveniet?
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            nam accusantium magni officiis dolor esse omnis cumque autem porro
            vel sint numquam beatae qui odit, fugit maiores voluptas itaque
            dolorum.
          </div>
        </div>
      </div>
      <Spacer y={36} />
      <div className="bg-content2">
        <div className="px-6 py-12">
          <div className="text-4xl font-semibold">Lorem ipsum dolor sit</div>
          <Spacer y={12} />
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <Image removeWrapper src="/base-image-2.webp" />
              <Spacer y={2} />
              <div className="text-justify">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                blanditiis, est eius itaque atque suscipit at iure, magnam
                facere distinctio voluptatem odit consequatur, laboriosam qui
                officiis accusantium exercitationem error! Omnis.
              </div>
            </div>
            <div>
              <Image removeWrapper src="/base-image-2.webp" />
              <Spacer y={2} />
              <div className="text-justify">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                blanditiis, est eius itaque atque suscipit at iure, magnam
                facere distinctio voluptatem odit consequatur, laboriosam qui
                officiis accusantium exercitationem error! Omnis.
              </div>
            </div>
            <div>
              <Image removeWrapper src="/base-image-2.webp" />
              <Spacer y={2} />
              <div className="text-justify">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                blanditiis, est eius itaque atque suscipit at iure, magnam
                facere distinctio voluptatem odit consequatur, laboriosam qui
                officiis accusantium exercitationem error! Omnis.
              </div>
            </div>
            <div>
              <Image removeWrapper src="/base-image-2.webp" />
              <Spacer y={2} />
              <div className="text-justify">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                blanditiis, est eius itaque atque suscipit at iure, magnam
                facere distinctio voluptatem odit consequatur, laboriosam qui
                officiis accusantium exercitationem error! Omnis.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="px-6 py-12">
          <div className="text-4xl font-semibold">Lorem ipsum dolor sit</div>
          <Spacer y={12} />
          <div className="grid md:grid-cols-4 gap-6">
            <div>
              <Image removeWrapper src="/base-image-2.webp" />
              <Spacer y={2} />
              <div className="text-justify">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                blanditiis, est eius itaque atque suscipit at iure, magnam
                facere distinctio voluptatem odit consequatur, laboriosam qui
                officiis accusantium exercitationem error! Omnis.
              </div>
            </div>
            <div>
              <Image removeWrapper src="/base-image-2.webp" />
              <Spacer y={2} />
              <div className="text-justify">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                blanditiis, est eius itaque atque suscipit at iure, magnam
                facere distinctio voluptatem odit consequatur, laboriosam qui
                officiis accusantium exercitationem error! Omnis.
              </div>
            </div>
            <div>
              <Image removeWrapper src="/base-image-2.webp" />
              <Spacer y={2} />
              <div className="text-justify">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                blanditiis, est eius itaque atque suscipit at iure, magnam
                facere distinctio voluptatem odit consequatur, laboriosam qui
                officiis accusantium exercitationem error! Omnis.
              </div>
            </div>
            <div>
              <Image removeWrapper src="/base-image-2.webp" />
              <Spacer y={2} />
              <div className="text-justify">
                {" "}
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab
                blanditiis, est eius itaque atque suscipit at iure, magnam
                facere distinctio voluptatem odit consequatur, laboriosam qui
                officiis accusantium exercitationem error! Omnis.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
