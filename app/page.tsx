import Image from "next/image";
import {Button, ButtonGroup} from "@nextui-org/react";
import {Header} from "@/app/componets/header";
export default function Home() {
  return (
        <div>
            <Header routeType={0} />
            <Button color="primary">
                Button
            </Button>
        </div>

  );
}
