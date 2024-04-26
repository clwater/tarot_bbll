import {Header} from "@/app/componets/header";
import React from "react";
import {Button, Link} from "@nextui-org/react";
export default function Tarot() {



    return (
        <div>
            <Header routeType={1} />
            <div>
               divine
                <br/>

                <Link href="/divine/0">
                    <Button>type 0</Button>
                </Link>

                <br/>
                <Link href="/divine/1">
                    <Button>type 1</Button>
                </Link>
            </div>
        </div>

  );
}
