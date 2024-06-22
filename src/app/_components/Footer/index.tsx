import React from "react";
import { Divider, Image, Link, Spacer } from "@nextui-org/react";
import { Facebook, Instagram } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <>
      <Divider />
      <div className="px-6 py-12">
        <div className="md:flex grid gap-6 items-center justify-between">
          <div className="grid place-items-center">
            <Image
              className="w-48 h-48"
              removeWrapper
              src="/aurora-logo-full.svg"
            />
            <div className="flex gap-6">
              <Image
                removeWrapper
                className="w-24"
                radius="none"
                src="/logo_appstore.png"
              />
              <Image
                removeWrapper
                className="w-24"
                radius="none"
                src="/logo_playstore.png"
              />
            </div>
          </div>
          <div className="grid md:flex gap-24 gap-12">
            <div>
              <div className="font-bold">Bạn cần hỗ trợ</div>
              <Spacer y={2} />
              <div className="flex flex-col gap-1">
                <Spacer y={1} />
                <div> (+84)35 697 0686</div>
                <Spacer y={1} />
                <div className="text-sm"> S902A Vinhome Grandpark Q9</div>
                <div className="text-sm">
                  {" "}
                  Email: auroratoystore68@gmail.com
                </div>
                <Spacer y={2} />
                <div className="flex gap-2">
                  <Link
                    color="foreground"
                    isExternal
                    href="https://www.facebook.com/AuroraToys68"
                  >
                    <Facebook className="w-5 h-5" />
                  </Link>
                  <Link
                    color="foreground"
                    isExternal
                    href="https://www.instagram.com/aurora_toystore_68/"
                  >
                    <Instagram className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="font-bold">Hướng dẫn mua hàng</div>
              <Spacer y={2} />
              <div className="flex flex-col gap-1">
                <Link size="sm" color="foreground" as="button">
                  {" "}
                  Trang chủ
                </Link>
                <Link size="sm" color="foreground" as="button">
                  {" "}
                  Giới thiệu
                </Link>
                <Link size="sm" color="foreground" as="button">
                  {" "}
                  Danh mục
                </Link>
                <Link size="sm" color="foreground" as="button">
                  {" "}
                  Tin tức
                </Link>
                <Link size="sm" color="foreground" as="button">
                  {" "}
                  Liên hệ
                </Link>
                <Link size="sm" color="foreground" as="button">
                  Hướng dẫn sử dụng
                </Link>
              </div>
            </div>
            <div>
              <div className="font-bold">Hướng dẫn khách hàng</div>
              <Spacer y={2} />
              <div className="flex flex-col gap-1">
                <Link size="sm" color="foreground" as="button">
                  {" "}
                  Trang chủ
                </Link>
                <Link size="sm" color="foreground" as="button">
                  {" "}
                  Giới thiệu
                </Link>
                <Link size="sm" color="foreground" as="button">
                  {" "}
                  Danh mục
                </Link>
                <Link size="sm" color="foreground" as="button">
                  {" "}
                  Tin tức
                </Link>
                <Link size="sm" color="foreground" as="button">
                  {" "}
                  Liên hệ
                </Link>
                <Link size="sm" color="foreground" as="button">
                  Hướng dẫn sử dụng
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
