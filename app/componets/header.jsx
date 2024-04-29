'use client'


import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, NavbarMenu} from "@nextui-org/react";
import {CatLogo} from "@/app/componets/CatLogo";
import {useParams} from "next/navigation";

export const Header = ({routeType= 0}) => {



    return (
        <Navbar isBordered>
            <NavbarBrand>
                <CatLogo/>
                <Link color="foreground" href="/">
                    <p className="font-bold text-inherit">包包和蓝蓝</p>
                </Link>

            </NavbarBrand>

            <NavbarContent justify="end">

                <NavbarItem isActive={routeType === 1}>
                    <Link color="foreground" href="/tarot">
                        Tarot
                    </Link>
                </NavbarItem>

                <NavbarItem isActive={routeType === 2}>
                    <Link color="foreground" href="/zy">
                        周易
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
