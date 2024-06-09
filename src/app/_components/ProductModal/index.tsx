import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Image,
  Button,
  useDisclosure,
  Card,
  CardBody,
  Spacer,
  Chip,
  User,
  Link,
} from "@nextui-org/react";
import {
  CheckIcon,
  ShoppingBagIcon,
  ShoppingCartIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import {
  StarIcon as StarSolidIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";
import { Rating } from "react-simple-star-rating";

interface ProductModalProps {
  imageUrl: string;
  className?: string;
  title: string;
  category: string;
  description: string;
  price: number;
}

export const ProductModal = ({
  imageUrl,
  className,
  title,
  category,
  description,
  price,
}: ProductModalProps) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  let timeout: NodeJS.Timeout;

  return (
    <>
      <Card
        isPressable
        onMouseEnter={() => {
          timeout = setTimeout(onOpen, 1000);
        }}
        onMouseLeave={() => clearTimeout(timeout)}
      >
        <CardBody className="p-0 grid place-content-center aspect-square overflow-hidden">
          <Image isZoomed src={imageUrl} />
        </CardBody>
      </Card>
      <Modal
        scrollBehavior="inside"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="4xl"
        className={className}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Chi tiết sản phẩm
              </ModalHeader>
              <ModalBody>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="grid gap-6">
                    <Image isZoomed src={imageUrl} className="col-span-1" />
                    <div>
                      <div>
                        <div className="flex items-center gap-2">
                          <div className="text-2xl font-semibold text-primary">
                            {price} VND*
                          </div>
                          <Chip color="primary" variant="flat">
                            {" "}
                            Giảm 20%{" "}
                          </Chip>
                        </div>
                        <Spacer y={1} />
                        <div className="text-xs text-foreground-500">
                          * Giá niêm yết tại Aurora Toystore, chưa tính thuế
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div>
                      <div className="text-xs text-foreground-500">
                        Tên sản phẩm
                      </div>
                      <Spacer y={1} />
                      <div className="text-sm">{title}</div>
                    </div>
                    <Spacer y={4} />
                    <div>
                      <div className="text-xs text-foreground-500">
                        Thể loại
                      </div>
                      <Spacer y={1} />
                      <div className="text-sm">{category}</div>
                    </div>
                    <Spacer y={4} />
                    <div>
                      <div className="text-xs text-foreground-500">Mô tả</div>
                      <Spacer y={1} />
                      <div className="text-sm">{description}</div>
                    </div>
                    <Spacer y={4} />
                    <div className="text-foreground-500 text-xs">
                      {" "}
                      Đánh giá{" "}
                    </div>
                    <Spacer y={1} />
                    <div className="flex gap-2 items-end">
                      <Rating
                        fillIcon={
                          <StarSolidIcon
                            className="inline text-amber-400"
                            width={20}
                            height={20}
                          />
                        }
                        emptyIcon={
                          <StarIcon className="inline" width={20} height={20} />
                        }
                        initialValue={5}
                        transition
                        readonly={true}
                      />
                      <div className="text-sm text-foreground-500">
                        234 đánh giá (4.93/5)
                      </div>
                    </div>
                    <Spacer y={4} />
                    <div>
                      <div className="text-xs text-foreground-500">
                        Tình trạng
                      </div>
                      <Spacer y={2} />
                      <div className="flex gap-2 items-center">
                        <Chip
                          color="success"
                          variant="flat"
                          startContent={<CheckIcon className="w-5 h-5" />}
                        >
                          Còn hàng
                        </Chip>
                        <div className="text-foreground-500 text-sm">
                          {" "}
                          Còn lại 23 sản phẩm{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Đóng
                </Button>
                <Button
                  startContent={<ShoppingCartIcon className="w-5 h-5" />}
                  color="primary"
                  onPress={onClose}
                >
                  Mua
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
