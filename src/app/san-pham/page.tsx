"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image,
  Input,
  Listbox,
  ListboxItem,
  Spacer,
} from "@nextui-org/react";
import { useState } from "react";

type Category = "Httcm-Ptnn" | "Dhgq-Tkntt" | "Ptttm-Tdst" | "Vdt-Ttxh";
const Page = () => {
  const [selected, setSelected] = useState<Category>("Httcm-Ptnn");

  interface Toy {
    idx: number;
    imageUrl: string;
    title: string;
    description: string;
  }

  interface Item {
    label: string;
    toys: Array<Toy>;
  }

  const items: Record<Category, Item> = {
    "Httcm-Ptnn": {
      label: "Hỗ trợ trẻ chậm nói - Phát triển ngôn ngữ",
      toys: [
        {
          idx: 0,
          title: "Rối ngón tay gia đình",
          description:
            "Bộ Rối Ngón Tay Gia Đình từ Sodial nằm trong danh mục những món đồ chơi có thể hỗ trợ trẻ chậm nói và phát triển ngôn ngữ. Với 6 nhân vật gia đình như ông, bà, cha, mẹ, anh, chị đầy đáng yêu giúp khuyến khích bé khám phá thế giới đầy màu sắc. Từ đó các bé có thể phát triển tư duy logic, khả năng ghi nhớ, các giác quan nhạy bén thông qua những câu chuyện đầy sinh động. Đồng thời, ba mẹ cũng có thể tham gia trò chuyện cùng bé để bé có thể cảm nhận được sự quan tâm của ba mẹ.",
          imageUrl: "/boroingontaygiadinh.png",
        },
        {
          idx: 1,
          title: "Bộ tập gắp hạt chia màu",
          description: `Bộ đồ chơi "Bộ tập gắp chia hạt màu Montessori" là lựa chọn lý tưởng giúp cho các bé có dấu hiệu tự kỷ phát triển trí thông minh và rèn luyện vận động tinh. Bộ sản phẩm bao gồm khay gỗ thiết kế các lỗ tròn để thả bi và câu cá, 76 viên bi gỗ nhiều màu sắc, các dụng cụ như muỗng, đũa, kẹp gỗ, và bộ số từ 0-9. Với trò chơi này, các bé có thể rèn luyện sự khéo léo, tập trung, nhận biết màu sắc, đếm số lượng và phát triển kỹ năng cần thiết một cách an toàn và hiệu quả.`,
          imageUrl: "/botapgaphatchiamau.png",
        },
        {
          idx: 2,
          title: `5 bộ thẻ Động từ "Ai đang làm gì"`,
          description: `Bộ combo “5 bộ thẻ Động từ Ai đang làm gì?” là một công cụ hữu ích giúp trẻ tự kỷ phát triển kỹ năng giao tiếp và ngôn ngữ một cách tự tin. Với 100 tình huống thực tế về các hoạt động hàng ngày và cuộc sống của các con vật, bộ thẻ không chỉ giúp trẻ nhận biết và mô tả các hành động mà còn khuyến khích trẻ đặt câu hỏi và xây dựng câu đơn giản. Thiết kế chắc chắn và bền đẹp của mỗi thẻ không chỉ dễ sử dụng mà còn đảm bảo tuổi thọ cao, giúp bố mẹ an tâm sử dụng trong quá trình học tập của con.`,
          imageUrl: "/5botapgaphatchiamau.png",
        },
        {
          idx: 3,
          title: "Đèn pin 3D chiếu 80 hình",
          description: `Đèn pin 3D chiếu 80 hình sinh động là một sản phẩm đồ chơi hỗ trợ trẻ chậm nói, phát triển ngôn ngữ một cách nhanh chóng. Các bé sẽ được học hỏi và khám phá thế giới xung quanh qua màn ảnh 3D được phản chiếu trên tường như một rạp chiếu phim mini. Với đa dạng các chủ đề khác nhau như hoa quả, động vật, côn trùng, phương tiện, siêu nhân,... ba mẹ có thể vừa chơi vừa dạy các con học một cách thú vị.`,
          imageUrl: "/denpin3dchieu80hinh.png",
        },
        {
          idx: 4,
          title: "Tìm hình với bóng",
          description:
            "Bộ đồ chơi “Tìm hình với bóng” được làm bằng gỗ là sản phẩm đồ chơi an toàn, thân thiện dành cho trẻ. Với đa dạng các chủ đề như hoa quả, đồ vật, động vật có thể giúp hỗ trợ trẻ tự kỷ phát triển kỹ năng tư duy, quan sát, đồng thời hỗ trợ các bé chậm nói nhận biết được các tên gọi đồ vật và học từ mới.",
          imageUrl: "/timhinhvoibong.png",
        },
      ],
    },
    "Dhgq-Tkntt": {
      label: "Điều hoà giác quan - Tăng khả năng tập trung",
      toys: [
        {
          idx: 0,
          title: "Đập chuột Hamster phát nhạc",
          description: `Bộ đồ chơi ĐẬP CHUỘT HAMSTER PHÁT NHẠC sẽ là món quà tuyệt vời dành cho bé để tránh xa khỏi “cơn nghiện” smartphone. Chúng có thể giúp bé luyện tập phản xạ nhanh tay nhanh mắt và tập trung phát triển não bộ toàn diện. Được tích hợp nhiều chức năng như 6 bài đồng giao, 5 hiệu ứng âm thanh dễ thương về chủ đề giao thông, động vật, thời tiết và 20 bài hát tiếng anh siêu bổ ích.`,
          imageUrl: "/dapchuothamsterphatnhac.png",
        },
        {
          idx: 1,
          title: "Mô hình trượt xe cao tốc",
          description: `Xe trượt cao tốc gỗ 4 tầng là trò chơi lý tưởng giúp trẻ tự kỷ phát triển kỹ năng vận động và trí tuệ. Với việc thả xe từ đỉnh dốc, bé sẽ được kích thích trí tưởng tượng, rèn luyện khả năng tập trung và kỹ năng giải quyết vấn đề thông qua những chuyển động ngộ nghĩnh và âm thanh vui tai. Sản phẩm an toàn, chất liệu gỗ nhẵn bóng, sơn nước không độc hại, giúp ba mẹ yên tâm khi cho bé chơi.`,
          imageUrl: "/mohinhtruotxecaotoc.png",
        },
        {
          idx: 2,
          title: "Con quay Spinner",
          description: `Con quay Spinner là một lựa chọn hoàn hảo giúp trẻ tự kỷ khám phá và phát triển nhiều kỹ năng quan trọng. Khi chơi, trẻ sẽ tập trung vào sự di chuyển của con quay, giúp rèn luyện khả năng tập trung và điều khiển tay. Đồng thời, đây cũng là một cách thú vị giúp giảm căng thẳng và lo âu cho cả trẻ em và người lớn trong cuộc sống hàng ngày.`,
          imageUrl: "/conquayspinner.png",
        },
        {
            idx: 3,
            title: "Thảm gai nhựa nhiều màu",
            description: `Thảm gai nhựa nhiều màu là giải pháp tuyệt vời giúp trẻ tự kỷ điều hòa giác quan xúc giác và giảm tăng động. Với thiết kế các gai nhọn kích hoạt đầu dây thần kinh dưới chân, thảm giúp lưu thông khí huyết và thư giãn cơ thể. Bộ sản phẩm gồm các miếng nhựa dẻo với bề mặt gai đa dạng, dễ dàng ghép thành nhiều kiểu chơi khác nhau, mang lại hàng giờ vui chơi sáng tạo cho bé.`,
            imageUrl: "/thamgainhuanhieumau.png",
          },
          {
            idx: 4,
            title: "Cắm nấm sáng tạo",
            description: `Cắm nấm sáng tạo là một sản phẩm đồ chơi khá độc đáo và thú vị dành cho trẻ tự kỷ có thể phát triển được các giác quan và khả năng tập trung tốt nhất. Với 240 nấm nhựa, 8 chun, 30 que gỗ, và 5 bánh răng, trẻ sẽ rèn luyện khả năng vận động tinh và phối hợp tay mắt. Thiết kế đặc biệt kết hợp ròng rọc và bánh răng giúp trẻ phát triển IQ, sự sáng tạo và trí tưởng tượng. Trò chơi không chỉ mang lại niềm vui mà còn tăng cường khả năng tương tác giữa cha mẹ và con cái, thúc đẩy sự phát triển trí thông minh một cách hệ thống.`,
            imageUrl: "/camnamsangtao.png",
          },
      ],
    },
    "Ptttm-Tdst": {
        label: "Phát triển trí thông minh - Tư duy sáng tạo",
        toys: [
            {
                idx: 0,
                title: "Xếp hình người thăng bằng",
                description: "Đồ chơi xếp hình thăng bằng hình người rạp xiếc với 32 nhân vật, 32 sticker đôi và 4 quả bóng, bé sẽ rèn luyện được tính kiên nhẫn và tăng cường sự sáng tạo qua nhiều cách chơi như domino, bowling, và nhập vai. Trò chơi không chỉ mang lại những giờ phút vui vẻ mà còn giúp bé phát triển khả năng tư duy và tương tác xã hội.",
                imageUrl: "/xephinhnguoithangbang.png"
            },
            {
                idx: 1,
                title: "What 'Zit Puzzle",
                description: "What 'Zit Puzzle là bộ trò chơi giải đố, trí tuệ giúp các bé có thể phát triển kỹ năng tư duy logic thông qua việc tiếp xúc với các mảnh đa màu sắc có thể đặt lại vào khay gỗ hoặc xếp thành cấu trúc. Với hơn 7 cách giải khác nhau và hình dạng thú vị tạo cho trẻ một không gian giải trí lành mạnh, tránh xa những trò chơi vô bổ trên điện thoại hay hàng giờ ngồi trước màn hình ti vi.",
                imageUrl: "/whatzpuzzle.png"
            },
            {
                idx: 2,
                title: "Ếch thăng bằng",
                description: "Khám phá ngay đồ chơi cây cân ếch thăng bằng thông minh – món quà tuyệt vời mà bố mẹ có thể giúp các bé trong giai đoạn phát triển trí não và tư duy. Với chú ếch đáng yêu và 50 đồ chơi động vật, bé sẽ học toán một cách sinh động, rèn luyện sự khéo léo và khả năng phối hợp tay mắt. Trò chơi không chỉ giúp bé tăng cường trí tuệ, sáng tạo mà còn cải thiện trí nhớ và sự tập trung. Hơn nữa, ba mẹ có thể cùng bé tham gia, tạo nên những khoảnh khắc vui vẻ và gắn kết gia đình.",
                imageUrl: "/echthangbang.png"
            },
            {
                idx: 3,
                title: "Vẽ trang theo hình",
                description: "Bộ vẽ tranh in hình bằng gỗ cho bé là trò chơi giáo dục sáng tạo và bổ ích dành cho các bé tự kỷ! Với các khung hình đa dạng từ con vật đến phương tiện giao thông, bé có thể thỏa sức phát huy khả năng nghệ thuật và khám phá thế giới xung quanh một cách thú vị. Bên cạnh việc học vẽ, trò chơi còn giúp bé phát triển trí thông minh và khả năng tương tác xã hội qua việc chơi cùng bố mẹ. Đây thực sự là món quà ý nghĩa cho sự phát triển toàn diện của bé yêu!",
                imageUrl: "/vetranhtheohinh.png"
            },
            {
                idx: 4,
                title: "Xếp hình nam châm 72 chi tiết",
                description: "Với Bộ xếp hình nam châm 72 chi tiết này, bé sẽ được trải nghiệm những gì? Kích thích sự sáng tạo khi bé tự tạo ra các hình khối đa dạng từ que nam châm đến các hình dạng tròn. Phát triển khả năng quan sát và tưởng tượng không gian thông qua việc xếp hình và xoay chi tiết 360 độ một cách linh hoạt. Nâng cao kỹ năng tương tác xã hội khi bé chơi cùng bạn bè hoặc gia đình. Thiết kế với màu sắc tươi sáng, hấp dẫn giúp bé nhận biết và phân biệt màu sắc một cách dễ dàng.",
                imageUrl: "/xephinhnamcham72chitiet.png"
            }
        ]
    },
    "Vdt-Ttxh": {
        label: "Vận động tinh - Tương tác xã hội",
        toys: [
            {
                idx: 0,
                title: "Thảm vận động màu sắc",
                description: "Thảm vận động màu sắc là trợ thủ đắc lực giúp bé phát triển toàn diện về vận động thô và kỹ năng cảm nhận màu sắc, hình khối. Với thiết kế nhựa mềm, dẻo và không thấm nước, thảm không chỉ an toàn mà còn dễ dàng lau chùi và bảo quản sau khi sử dụng. Đồng thời, những hình vẽ đa dạng trên thảm sẽ kích thích sự tưởng tượng và khả năng phối hợp tay chân của bé một cách hiệu quả.",
                imageUrl: "/thamvandongmausac.png"
            },
            {
                idx: 1,
                title: "Xe thổi bong bóng",
                description: "Đồ chơi xe thú thổi bóng khí động học - giúp trẻ phát triển vận động tinh và tăng cường tương tác xã hội. Sản phẩm này không chỉ giúp bé giải trí sau giờ học căng thẳng mà còn cải thiện khả năng vận động tinh và tư duy. Bộ đồ chơi dễ lắp ráp, làm từ nhựa cao cấp, an toàn, giúp bé hiểu nguyên lý chuyển động và phát triển kỹ năng thực hành. Sản phẩm bao gồm 1 bơm bóng, 1 xe và 6 bóng bay, lý tưởng cho việc học kiến thức khoa học và vật lý. Trò chơi này cũng khuyến khích bé tương tác với bạn bè và gia đình, nâng cao khả năng giao tiếp xã hội.",
                imageUrl: "/xethoibongbong.png"
            },
            {
                idx: 2,
                title: "Bóng bàn tro tường",
                description: "Bộ đồ chơi Bóng Bàn Treo Tường giúp trẻ rèn luyện phản xạ, giúp con vận động tốt hơn và tăng cường các tương tác xã hội. Sản phẩm nhỏ gọn, dễ dàng lắp đặt, giúp bé phối hợp tay-mắt-chân, luyện tập thể chất và tập trung cao độ. Ba mẹ và bé có thể chơi cùng nhau, giúp tăng cường mối quan hệ gia đình và giúp bé tránh xa các thiết bị điện tử có hại.",
                imageUrl: "/bongbantreotuong.png"
            },
            {
                idx: 3,
                title: "Hộp đập ú oà",
                description: "Hộp Ú Òa Montessori giúp bé phát triển kỹ năng vận động tinh và kích thích sự sáng tạo từ sớm. Với chất liệu nhựa ABS an toàn, màu sắc tươi sáng và thiết kế phù hợp, đồ chơi này rèn luyện kỹ năng bàn tay và khả năng phối hợp mắt-tay. Đồng thời, sản phẩm còn thúc đẩy tương tác xã hội khi bé cùng chơi và khám phá với bạn bè và gia đình.",
                imageUrl: "/hopdapuoa.png"
            },
            {
                idx: 4,
                title: "Take Along Railroad",
                description: "Bộ đồ chơi Take Along Railroad với 17 mảnh ghép để nối lại thành một đường sắt đẹp mắt này là lựa chọn hoàn hảo cho trẻ tự kỷ, giúp phát triển kỹ năng vận động và tính tự lập. Với các tòa nhà, tàu hỏa, xe kiểm lâm và gondola, trẻ có thể dễ dàng sắp xếp và di chuyển chúng trên đường ray theo từng câu chuyện và trí tưởng tượng phong phú của trẻ.",
                imageUrl: "/takealongrailroad.png"
            },
            {
                idx: 5,
                title: "Lều ô tô",
                description: "Cha mẹ lo môi trường bên ngoài có nhiều mối nguy hiểm dành cho con, nhưng vẫn muốn cho các bé có thể vận động, khám phá một cách thoải mái. Chính vì vậy “Lều ô tô” với thiết kế dễ thương, có thể cung cấp không gian chơi đầy sáng tạo và riêng tư cho bé, giúp bé vui chơi cả ngày. Đặc biệt, lều còn dễ dàng gấp gọn, tiện lợi mang theo, biến mọi buổi dã ngoại, tiệc sinh nhật thành những khoảnh khắc vui chơi ý nghĩa.",
                imageUrl: "/leooto.png"
            }
        ]
    }
  };

  return (
    <div className="p-6">
      <Image
        src="/bg.jpg"
        classNames={{
          img: "w-[4000px]",
          wrapper:
            "w-full max-h-[300px] overflow-hidden grid place-content-center !max-w-none relative",
        }}
      />
      <Spacer y={12} />
      <div className="grid sm:grid-cols-4 gap-6">
        <div className="col-span-1 w-full">
          <Listbox
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={[selected]}
            color="primary"
            onSelectionChange={(selected) => {
              if (selected === "all") return;
              const key = Array.from(selected.keys()).at(0);
              setSelected(key as Category);
            }}
            classNames={
                {
                    base: "w-full",
                }
            }
            itemClasses={{
                base: "data-[selected=true]:text-primary"
            }}
          >
            <ListboxItem key="Httcm-Ptnn">
              Hỗ trợ trẻ chậm nói - Phát triển ngôn ngữ
            </ListboxItem>
            <ListboxItem key="Dhgq-Tkntt">
              Điều hoà giác quan - Tăng khả năng tập trung
            </ListboxItem>
            <ListboxItem key="Ptttm-Tdst">Phát triển trí thông minh - Tư duy sáng tạo</ListboxItem>
            <ListboxItem key="Vdt-Ttxh">Vận động tinh - Tương tác xã hội</ListboxItem>
          </Listbox>
        </div>
        <div className="col-span-3">
          <div className="sm:flex justify-between items-center">
            <div className="text-2xl font-bold"> {items[selected].label} </div>
            <Spacer className="sm:hidden" y={4} />
            <Input
              className="sm:max-w-[200px]"
              endContent={<MagnifyingGlassIcon className="w-3.5 h-3.5" />}
            />
          </div>
          <Spacer y={6} />
          <div className="grid sm:grid-cols-3 gap-4">
            {items[selected].toys.map((toy) => {
              return (
                <Card isPressable>
                  <CardHeader className="p-0">
                    <Image src={toy.imageUrl} className="rounded-b-none" />
                  </CardHeader>
                  <CardBody className="p-4 pb-0 inline w-full text-start">
                    <div className="font-semibold w-full">{toy.title}</div>
                  </CardBody>
                  <CardFooter className="text-start p-4 pt-4">
                    <div className="flex gap-2 text-sm w-full">
                      <div className="text-primary font-semibold ">
                        69000 VND
                      </div>
                      <div className="line-through"> 100000 VND </div>
                    </div>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
