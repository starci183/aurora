"use client"

import { LayoutContext } from "@/app/_hooks"
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline"
import { Button, Link, NavbarBrand, NavbarContent, NavbarItem, Navbar as NextUINavbar, Image, Switch } from "@nextui-org/react"
import { useContext } from "react"

export const Navbar = () => {
    const { states } = useContext(LayoutContext)!
    const { darkModeState } = states
    const [darkMode, setDarkMode] = darkModeState

    return (
        <NextUINavbar shouldHideOnScroll isBordered classNames={{
            wrapper: "max-w-full"
        }}>
            <NavbarBrand>
                <Image removeWrapper src="/aurora-logo.svg" className="h-10" />
                <p className="font-bold text-primary">Aurora</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem isActive>
                    <Link href="/">
                        Trang chủ
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/san-pham" aria-current="page">
                        Sản phẩm
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="/cau-chuyen-cong-dong/do-choi-co-tac-dong-den-su-phat-trien-cua-tre-tu-ky-nhu-the-nao">
                        Câu chuyện cộng đồng
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#">
                        Tải xuống
                    </Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Switch
                        isSelected={darkMode}
                        size="lg"
                        color="primary"
                        classNames={{
                            thumbIcon: "w-5 h-5"
                        }}
                        onValueChange={(isSelected) => setDarkMode(isSelected)}

                        thumbIcon={({ isSelected, className }) =>
                            isSelected ? (
                                <MoonIcon className={className} />
                            ) : (
                                <SunIcon className={className} />
                            )
                        }
                    />
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Đăng nhập</Link>
                </NavbarItem>
                <NavbarItem>
                    <Button as={Link} color="primary" href="#" variant="flat">
                        Đăng ký
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </NextUINavbar>
    )

}