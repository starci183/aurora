"use client";

import { Image, Link, Spacer } from "@nextui-org/react";
import { useParams } from "next/navigation";

type Story =
  | "do-choi-co-tac-dong-den-su-phat-trien-cua-tre-tu-ky-nhu-the-nao"
  | "tre-tu-ky-co-thuc-su-so-tieng-on-khong"
  | "hoi-chung-tu-ky-van-co-the-duoc-chua-khoi";
type StoryInfo = {
  title: string;
  html: JSX.Element;
};

const Page = () => {
  const { id } = useParams();
  const _id = id as Story;
  const stories: Record<Story, StoryInfo> = {
    "do-choi-co-tac-dong-den-su-phat-trien-cua-tre-tu-ky-nhu-the-nao": {
      title: "Đồ chơi có tác động đến sự phát triển của trẻ tự kỷ như thế nào?",
      html: (
        <div>
          <div className="text-xl font-semibold text-primary">
            I. Tại sao nên sử dụng đồ chơi cho trẻ tự kỷ?
          </div>
          <Spacer y={4} />
          <div className="text-sm text-justify">
            Thông thường trẻ tự kỷ sẽ thích chơi một mình, các bé sẽ cảm thấy
            khó khăn trong việc giao tiếp, tương tác xã hội và có những hành vi
            rập khuôn. Chính vì vậy, việc sử dụng đồ chơi sẽ là phương tiện giúp
            bậc phụ huynh có thể cùng chơi và giao tiếp với các con nhiều hơn.
            Đồng thời có thể hỗ trợ các bé trong quá trình phát triển kịp lúc,
            để ngăn chặn các bé có thể rơi vào hội chứng tự kỷ.
          </div>
          <Spacer y={4} />
          <Image removeWrapper className="w-full" src="/poster-1.jpg" />
          <Spacer y={6} />
          <div className="text-xl font-semibold text-primary">
            II. Đồ chơi có thể giúp trẻ tự kỷ phát triển kỹ năng gì?
          </div>
          <Spacer y={4} />
          <div className="text-sm text-justify">
            Đặc biệt, tuỳ vào các loại đồ chơi khác nhau như màu sắc, cách thức
            chơi mà phụ huynh có thể cân nhắc lựa chọn phù hợp với nhu cầu để hỗ
            trợ bé. Vì với từng loại đồ chơi sẽ có những tính năng hỗ trợ riêng
            biệt cho các bé phát triển đa dạng mọi kỹ năng, vậy hãy cùng Aurora
            tìm hiểu một số kỹ năng đó nhé!
          </div>
          <Spacer y={4} />
          <div className="font-semibold">
            {" "}
            1. Kích thích điều hòa thị giác, khả năng tập trung{" "}
          </div>
          <Spacer y={2} />
          <div className="text-sm text-justify">
            Ở một số trẻ tự kỷ, điểm mạnh của các bé sẽ là khả năng học hỏi,
            tiếp nhận hay giao tiếp bằng thị giác rất tốt. Chính vì thế, những
            đồ vật hoặc đồ chơi kích thích thị giác mà có âm thanh kết hợp
            chuyển động trẻ sẽ rất thích. Ngoài ra, khi chú ý và theo dõi những
            màu sắc và sự chuyển động của đồ chơi còn giúp trẻ phát triển sự tập
            trung rất tốt. Một số loại đồ chơi có thể giúp kích thích điều hoà
            thị giác và khả năng tập trung của trẻ như: Bộ đồ chơi “Đập chuột
            Hamster phát nhạc”, Bộ đồ chơi “Đàn mộc cầm giáo dục sớm cho bé 8
            tháng tuổi”, “Con quay Spinner”, “Thảm gai nhựa nhiều màu”, “Đồng hồ
            nước màu sắc”...
          </div>
          <Spacer y={4} />
          <Image removeWrapper className="w-full" src="/1.png" />
          <Spacer y={1} />
          <div className="text-foreground-500 text-sm">
            Bộ đồ chơi “Phát Nhạc”
          </div>
          <Spacer y={4} />
          <div className="font-semibold">
            2. Hỗ trợ trẻ chậm nói, phát triển ngôn ngữ và điều hoà cảm giác
          </div>
          <Spacer y={2} />
          <div className="text-sm text-justify">
            Một trong những dấu hiệu của trẻ tự kỷ đó là chậm nói, khá nóng tính
            và không kiểm soát được cảm xúc của mình vì không thể bày tỏ được
            những điều muốn nói. Vì vậy để cải thiện được tình trạng này của các
            bé, bố mẹ có thể sử dụng một số đồ chơi như đóng vai, tranh ảnh xếp
            hình, đồ hàng để cùng chơi và hỗ trợ bé. Vì những loại đồ chơi này
            sẽ khuyến khích bé giao tiếp và nói ra được những điều mình mong
            muốn. Một số món có thể hỗ trợ bé giao tiếp nhiều hơn: búp bê, thú
            nhồi bông, Bộ rối ngón tay gia đình, Bộ tập gắp chia hạt màu
            Montessori, Bộ combo 5 bộ thẻ "Động từ " Ai đang làm gì?, Đèn pin
            chiếu 80 hình,...
          </div>
          <Spacer y={4} />
          <Image removeWrapper className="w-full" src="/2.png" />
          <Spacer y={1} />
          <div className="text-foreground-500 text-sm">
            Bộ Rối Ngón Tay từ Sodial
          </div>
          <Spacer y={4} />
          <div className="font-semibold">
            3. Phát triển trí thông minh, tư duy sáng tạo
          </div>
          <Spacer y={2} />
          <div className="text-sm text-justify">
            Khả năng tư duy sáng tạo ở các bé tự kỷ thường sẽ không tốt và khó
            có thể phát triển bởi vì các bé rất khó tập trung. Do đó, đồ chơi
            chính là một trong những phương pháp hỗ trợ trẻ khá hữu hiệu. Khi
            được tiếp xúc với các loại đồ chơi liên quan đến sự giải đố, phức
            tạp, các bé sẽ có cơ hội phối hợp các giác quan với nhau để học hỏi,
            tư duy logic, sáng tạo để khám phá ra nhiều cách khác nhau giải
            quyết được vấn đề.
            <br />
            <br />
            Bố mẹ có thể tham khảo một số loại đồ chơi như: Đồ chơi xếp hình
            thăng bằng hình người rạp xiếc, What 'Zit Puzzle, Ếch thăng bằng, Bộ
            vẽ tranh in hình bằng gỗ, Bộ xếp hình nam châm 72 chi tiết,...
          </div>
          <Spacer y={4} />
          <Image removeWrapper className="w-full" src="/3.png" />
          <Spacer y={1} />
          <div className="text-foreground-500 text-sm">
            Bộ xếp hình nam châm 72 chi tiết
          </div>
          <Spacer y={4} />
          <div className="font-semibold">
            4. Kích thích phát triển khả năng vận động tinh, tương tác xã hội
          </div>
          <Spacer y={2} />
          <div className="text-sm text-justify">
            Trẻ tự kỷ một số bé sẽ rất thích những trò chơi vận động nhiều màu
            sắc, nhưng một số bé lại phản ứng khá chậm và cảm thấy khó khăn khi
            tham gia những trò chơi vận động này. Vì vậy, bố mẹ sẽ phải sáng
            suốt và chú ý vào những sở thích và biểu hiện của con để có thể chọn
            ra những món đồ chơi phù hợp cho con của mình.
            <br />
            <br />
            Bạn có thể lựa chọn một số loại trò chơi hoặc đồ chơi như: đối với
            trẻ thích sự vận động thì Thảm vận động màu sắc, Xe thổi bong bóng
            hay Bóng bàn treo tường chắc chắn sẽ là sự lựa chọn hợp lý cho bé.
            Còn đối với bé cảm thấy khó khăn trong việc vận động thì bố mẹ hãy
            thử Bóng gai pi65, Take Along Railroad, Lều ô tô,... nhé!
          </div>
          <Spacer y={4} />
          <Image removeWrapper className="w-full" src="/4.png" />
          <Spacer y={1} />
          <div className="text-foreground-500 text-sm">
            Bộ đồ chơi xếp hình gỗ
          </div>
          <Spacer y={6} />
          <div className="text-xl font-semibold text-primary">
            III. Địa điểm mua đồ chơi chính hãng, chất lượng cho trẻ tự kỷ
          </div>
          <Spacer y={4} />
          <div className="text-sm text-justify">
            Đồ chơi chắc chắn sẽ là phương tiện và là công cụ hỗ trợ bố mẹ rất
            nhiều trong quá trình giáo dục và phát triển cùng trẻ, đặc biệt là
            ngăn chặn được tình trạng trẻ có thể bị hội chứng tự kỷ đấy nhé! Để
            giúp các bé phát triển một cách toàn diện và an toàn nhất thì bố mẹ
            nên lựa chọn những món đồ chơi cũng phải thật chất lượng.
            <br />
            <br />
            Đặc biệt, nếu bố mẹ chưa biết mua được các sản phẩm đồ chơi chính
            hãng và chất lượng ở đâu, thì hãy ghé ngay Aurora để tham khảo ngay
            nhé!
          </div>
        </div>
      ),
    },
    "hoi-chung-tu-ky-van-co-the-duoc-chua-khoi": {
      title: "Hội chứng tự kỷ vẫn có thể được chữa khỏi!",
      html: (
        <div>
          <div className="text-sm text-justify">
            Theo VTV.vn, em Trần Võ Bảo Khánh là đứa trẻ đã mắc phải hội chứng
            tự kỷ từ nhỏ nhưng đã vượt qua được nghịch cảnh và trở thành tấm
            gương truyền cảm hứng cho cộng đồng. Câu chuyện của Khánh không chỉ
            là minh chứng cho khả năng vượt qua khó khăn mà còn là lời khẳng
            định: hội chứng tự kỷ có thể cải thiện nếu chúng ta kiên trì hỗ trợ
            họ.
            <br />
            Nguồn: VTV, 2022
          </div>
          <Spacer y={4} />
          <Image removeWrapper className="w-full" src="/xx.jpg" />
          <Spacer y={6} />
          <div className="text-primary font-bold">
            Hành trình gian nan của Bảo Khánh
          </div>
          <Spacer y={4} />
          <div className="text-sm text-justify">
            Trần Võ Bảo Khánh, sinh năm 2003 tại quận 8, TP Hồ Chí Minh, em đã
            bộc lộ những biểu hiện khác thường từ năm 2005. Em thường rất nhạy
            cảm với âm thanh và cảm giác, cầm nắm không chắc và chậm phát triển
            ngôn ngữ.
            <br /> <br />
            Nhận thấy điều này, gia đình đã đưa em đi thăm khám nhiều nơi, nhưng
            do thiếu thông tin về bệnh tự kỷ lúc bấy giờ, không ai dám khẳng
            định tình trạng của Khánh. Mẹ của Khánh, chị Nhung, nhận thấy con
            không phát triển bình thường như các bạn cùng trang lứa và quyết
            định tự mình tìm cách giúp con.
          </div>
          <Spacer y={6} />
          <div className="text-primary font-bold">Sự kiên trì của gia đình</div>
          <Spacer y={4} />
          <div className="text-sm text-justify">
            Chị Nhung đã không ngừng nỗ lực giúp con làm quen với môi trường
            xung quanh. Từ việc học tập ở trường đến tham gia các hoạt động thể
            thao như bóng rổ, bơi lội,... Khánh đã từng bước cải thiện. Khi thấy
            con bị tổn thương vì bị bạn bè trêu chọc, chị Nhung đã quyết định
            cho Khánh nghỉ học và tập trung vào phát triển kỹ năng cá nhân.
            <br /> <br />
            Gần đây, Khánh tham gia vào Cộng đồng thể thao người khuyết tật Việt
            Nam tại Trung tâm Huấn luyện và Thi đấu Thể dục thể thao TP Hồ Chí
            Minh. Tại đây, Khánh đã thể hiện xuất sắc trong môn bơi lội, giành
            nhiều huy chương và truyền cảm hứng cho nhiều người.
          </div>
          <Spacer y={4} />
          <Image removeWrapper className="w-full" src="/4a.png" />
          <Spacer y={1} />
          <div className="text-foreground-500 text-sm">
            Sự nỗ lực và kiên trì của mẹ Bảo Khánh
          </div>
          <Spacer y={6} />
          <div className="text-primary font-bold">
            Nỗ lực không ngừng của Bảo Khánh
          </div>
          <Spacer y={4} />
          <div className="text-sm text-justify">
            Nhờ tình yêu thương và sự kiên trì của gia đình, Khánh đã vượt qua
            nhiều rào cản. Em không chỉ cải thiện khả năng giao tiếp mà còn trở
            thành người truyền cảm hứng qua các bài viết trên Facebook. Khánh có
            năng khiếu đặc biệt trong việc bình luận thể thao và mong muốn trở
            thành huấn luyện viên bơi lội hoặc bình luận viên thể thao.
            <br /> <br />
            Khánh đã đạt được nhiều tiến bộ trong việc cải thiện các kỹ năng
            sống hàng ngày và hòa nhập với cộng đồng. Mẹ của Khánh chia sẻ rằng
            để đạt được kết quả này, gia đình đã trải qua 17 năm đầy mồ hôi,
            công sức và tiền bạc. Nhưng tất cả những nỗ lực ấy đã được đền đáp
            khi Khánh không còn cảm thấy cô độc, có bạn bè và nhận được sự quan
            tâm từ cộng đồng.
          </div>
          <Spacer y={6} />
          <div className="text-primary font-bold">Tương lai đầy hy vọng</div>
          <Spacer y={4} />
          <div className="text-sm text-justify">
            Hiện tại, Khánh đã cải thiện tới 80% tình trạng của mình và hòa nhập
            tốt với cộng đồng. Em có ước mơ trở thành huấn luyện viên bơi lội và
            bình luận viên thể thao, đồng thời mong muốn tự lo cho cuộc sống mà
            không trở thành gánh nặng cho gia đình hay xã hội. Cộng đồng thể
            thao người khuyết tật cũng định hướng và đào tạo Khánh trở thành
            "nhân tố lãnh đạo" trong cộng đồng.
          </div>
          <Spacer y={4} />
          <Image removeWrapper className="w-full" src="/5aa.png" />
          <Spacer y={1} />
          <div className="text-foreground-500 text-sm">
            Trần Võ Bảo Khánh đã đạt được rất nhiều huy chương
          </div>
          <Spacer y={4} />
          <div className="text-sm text-justify">
            Câu chuyện của Trần Võ Bảo Khánh là minh chứng rõ ràng rằng hội
            chứng tự kỷ có thể được cải thiện nếu chúng ta kiên trì hỗ trợ và
            yêu thương họ. Qua nỗ lực không ngừng nghỉ của gia đình và sự hỗ trợ
            từ cộng đồng, Khánh đã chứng minh rằng mọi khó khăn đều có thể vượt
            qua. Điều quan trọng là chúng ta cần kiên trì, đồng hành và tạo điều
            kiện tốt nhất để họ phát triển và hòa nhập với xã hội. Bố mẹ hãy
            cùng theo dõi Aurora để có thêm được nhiều những thông tin bổ ích về
            hội chứng tự kỷ và có thể hỗ trợ các bé phát triển lành mạnh hơn
            nhé!
          </div>
        </div>
      ),
    },
    "tre-tu-ky-co-thuc-su-so-tieng-on-khong": {
      title: "Trẻ tự kỷ có thực sự sợ tiếng ồn không?",
      html: (
        <div>
          <div className="text-xl font-semibold  text-primary">
            I. Trẻ tự kỷ có sợ tiếng ồn không? Tại sao?
          </div>
          <Spacer y={4} />
          <div className="text-sm text-justify">
            Ở trẻ có hội chứng tự kỷ, thông thường các con sẽ rất nhạy cảm hoặc
            có thể là không nhạy cảm hay còn gọi là quá mẫn cảm về thính giác.
            Nguyên nhân là do các giác quan của trẻ nhận được quá nhiều hoặc quá
            ít thông tin từ môi trường bên ngoài nên dẫn đến những biểu hiện sợ
            tiếng ồn ở trẻ tự kỷ được biểu hiện rất rõ rệt. Tuy nhiên, không
            phải trẻ tự kỷ nào cũng sẽ bị nhạy cảm về giác quan.
            <br /> <br />
            Các biểu hiện như bịt tai, chạy trốn hoặc có thể là mất kiểm soát
            hành vi của mình khi nghe thấy những tiếng ồn lớn như sấm chớp, máy
            sấy tóc, tiếng công trình,... Đồng thời cũng được các chuyên gia
            khẳng định rằng những phản xạ này có thể đã được hình thành bởi
            những gì chúng học được hoặc bởi những nỗi sợ mà chúng gặp phải.
          </div>
          <Spacer y={4} />
          <Image removeWrapper className="w-full" src="/11.jpg" />
          <Spacer y={6} />
          <div className="text-xl font-semibold text-primary">
            II. Bố mẹ có thể làm gì để giúp đỡ trẻ tự kỷ khi chúng sợ tiếng ồn
          </div>
          <Spacer y={4} />
          <div className="font-semibold">
            1. Nhận biết những tiếng ồn nhạy cảm
          </div>
          <Spacer y={2} />
          <div className="text-sm text-justify">
            Trẻ tự kỷ thường sợ nhiều loại tiếng ồn như tiếng quạt trần, tiếng
            xả nước từ bồn cầu, hay tiếng chó sủa. Vì vậy, ba mẹ cần chú ý quan
            sát và lắng nghe con để xác định những âm thanh gây sợ hãi cho trẻ,
            từ đó đưa ra biện pháp kiểm soát và hạn chế được trước, trong và sau
            khi trẻ tiếp xúc với những tiếng ồn này, dù trực tiếp hay gián tiếp.
          </div>
          <Spacer y={4} />
          <div className="font-semibold">
            2. Sử dụng thiết bị hỗ trợ kiểm soát tiếng ồn
          </div>
          <Spacer y={2} />
          <div className="text=sm text-justify">
            Các thiết bị hỗ trợ như tai nghe và máy trợ thính có thể giúp trẻ tự
            kỷ kiểm soát tiếng ồn ở mọi lúc, mọi nơi, giảm bớt lo lắng cho cha
            mẹ khi đưa trẻ đến nơi công cộng. Tuy nhiên, hạn chế của việc sử
            dụng các thiết bị này là trẻ sẽ phụ thuộc vào chúng lâu dài, có thể
            kéo dài suốt đời.
          </div>
          <Spacer y={4} />
          <Image removeWrapper className="w-full" src="/1a.png" />
          <Spacer y={4} />
          <div className="font-semibold">
            3. Chọn môi trường vui chơi an toàn cho trẻ
          </div>
          <Spacer y={2} />
          <div className="text-sm text-justify">
            Công viên, nhà hát, và khu vui chơi giải trí có thể tạo ra những
            tiếng ồn gây tổn thương cho trẻ tự kỷ. Do đó, việc xác định môi
            trường an toàn là cần thiết khi đưa con tham gia các hoạt động vui
            chơi, giải trí. Nếu trẻ cảm thấy bất an hoặc phản ứng quá mức với
            tiếng ồn, hãy nhanh chóng đưa con đến nơi có âm thanh nhẹ nhàng hoặc
            yên tĩnh để giảm thiểu rủi ro khi ở môi trường công cộng.
          </div>
          <Spacer y={4} />
          <div className="font-semibold">
            4. Cho trẻ tập làm quen với tiếng ồn
          </div>
          <Spacer y={2} />
          <div className="text-sm text-justify">
            Sợ tiếng ồn là một thách thức lớn ở trẻ tự kỷ. Vì vậy, ba mẹ cần
            giúp con làm quen với những âm thanh gây sợ hãi bằng cách cho trẻ
            nghe hàng ngày vì khi tiếp xúc thường xuyên các con sẽ dần trở nên
            quen thuộc và không còn cảm thấy căng thẳng quá mức như mới nghe lần
            đầu nữa. Tuy nhiên, bố mẹ nên cho trẻ tiếp xúc một cách từ từ và
            chậm rãi để bé có thể thích ứng được dễ dàng hơn. Bằng cách sử dụng
            các kích thích âm thanh qua âm nhạc, đồ chơi phát ra tiếng ồn trong
            các hoạt động vui chơi tích cực, trẻ sẽ tiếp nhận và cảm nhận tiếng
            ồn một cách nhẹ nhàng hơn, từ đó giảm phản ứng tiêu cực.
          </div>
          <Spacer y={4} />
          <Image removeWrapper className="w-full" src="/2a.png" />
          <Spacer y={1} />
          <div className="text-foreground-500 text-sm">
            Cho trẻ tập làm quen với tiếng ồn
          </div>
          <Spacer y={6} />
          <div className="text-xl font-semibold  text-primary">
            III. Giải pháp từ thiên nhiên có giúp cải thiện nỗi sợ tiếng ồn ở
            trẻ tự kỷ không?
          </div>
          <Spacer y={4} />
          <div className="text-justify text-sm">
            Trẻ tự kỷ sợ tiếng ồn do rối loạn giác quan, nên trị liệu điều hòa
            cảm giác bằng những phương pháp trên có thể hỗ trợ trẻ tốt nhất.
            Ngoài ra, bố mẹ cũng có thể kết hợp việc bổ sung các vitamin, khoáng
            chất cần thiết cho não bộ của con từ các sản phẩm thiên nhiên như
            cốm thảo dược chứa đinh lăng. Đinh lăng là một vị thuốc giúp tăng
            biên độ sóng não, hoạt hóa vỏ não, cải thiện khả năng học tập, ngôn
            ngữ và nhận thức, đồng thời có tác dụng an thần tự nhiên. Khi kết
            hợp với thăng ma, ginkgo biloba và các dưỡng chất khác, đinh lăng
            còn tăng cường trí nhớ, cung cấp oxy cho não, và giảm rối loạn hành
            vi.
          </div>
          <Spacer y={4} />
          <Image removeWrapper className="w-full" src="/3a.png" />
          <Spacer y={1} />
          <div className="text-foreground-500 text-sm">
            Sử dụng cây đinh lăng làm giải pháp cải thiện
          </div>
          <Spacer y={4} />
          <div className="text-sm text-justify">
            Khi bố mẹ hiểu rõ lý do tại sao con trẻ của mình lại sợ tiếng ồn
            đồng thời kết hợp sử dụng sản phẩm từ đinh lăng hàng ngày sẽ giúp
            cải thiện hành vi và chất lượng sống của trẻ đó! Nếu bạn thấy bài
            viết này hay và bổ ích thì hãy chia sẻ cho mọi người cùng đọc nhé!
            Đặc biệt, nếu bạn chưa biết mua những sản phẩm đồ chơi chất lượng hỗ
            trợ các con phát triển toàn diện ở đâu thì hãy ghé ngay Aurora để
            tham khảo nè!
          </div>
        </div>
      ),
    },
  };

  return (
    <div className="p-6">
      <div className="text-2xl font-bold"> {stories[_id].title}</div>
      <Spacer y={8} />
      <div> {stories[_id].html} </div>
      <Spacer y={12} />
      <div className="text-sm font-semibold"> Đọc thêm </div>
      <Spacer y={1} />
      <div className="flex flex-col">
        {Object.entries(stories)
          .filter((story) => story[0] != id)
          .map((story) => (
            <Link
              size="sm"
              href={`/cau-chuyen-cong-dong/${story[0]}`}
              showAnchorIcon
            >
              {story[1].title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Page;
