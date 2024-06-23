"use client"

import { LayoutContext } from "@/app/_hooks"
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid"
import { Button, Link, NavbarBrand, NavbarContent, NavbarItem, Navbar as NextUINavbar, Image, Switch, Input } from "@nextui-org/react"
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
                    <Link color="foreground" href="/Aurora.apk">
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
                <NavbarItem>
                    <Input placeholder="Bạn muốn tìm gì" startContent={<MagnifyingGlassIcon className="w-5 h-5" />}/>
                </NavbarItem>
            </NavbarContent>
        </NextUINavbar>
    )

}