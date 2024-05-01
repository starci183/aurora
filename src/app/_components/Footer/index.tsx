import React from "react"
import { Divider, Image, Link, Spacer } from "@nextui-org/react"

export const Footer = () => {
    return (
        <>
            <Divider />
            <div className="px-6 py-12">
                <div className="md:flex grid gap-6 items-center justify-between">
                    <Image className="w-48 h-48" removeWrapper src="aurora-logo-full.svg" />
                    <div className="grid md:flex gap-4 gap-12">
                        <div>
                            <div className="font-bold">
                                Nguyen Van Tu Cuong
                            </div>
                            <Spacer y={2} />
                            <div className="flex flex-col gap-1">
                                <Link as="button"> Nguyen Van Tu Cuong</Link>
                                <Link as="button"> Nguyen Van Tu Cuong</Link>
                                <Link as="button"> Nguyen Van Tu Cuong</Link>
                                <Link as="button"> Nguyen Van Tu Cuong</Link>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">
                                Nguyen Van Tu Cuong
                            </div>
                            <Spacer y={2} />
                            <div className="flex flex-col gap-1">
                                <Link as="button"> Nguyen Van Tu Cuong</Link>
                                <Link as="button"> Nguyen Van Tu Cuong</Link>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">
                                Nguyen Van Tu Cuong
                            </div>
                            <Spacer y={2} />
                            <div className="flex flex-col gap-1">
                                <Link as="button"> Nguyen Van Tu Cuong</Link>
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">
                                Nguyen Van Tu Cuong
                            </div>
                            <Spacer y={2} />
                            <div className="flex flex-col gap-1">
                                <Link as="button"> Nguyen Van Tu Cuong</Link>
                                <Link as="button"> Nguyen Van Tu Cuong</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-2">
                        <Image removeWrapper className="w-36" radius="none" src="/logo_appstore.png" />
                        <Image removeWrapper className="w-36" radius="none" src="/logo_playstore.png" />
                    </div>
                </div>
            </div>
        </>

    )
}