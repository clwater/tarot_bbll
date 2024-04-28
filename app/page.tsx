import Image from "next/image";
import {Button, ButtonGroup} from "@nextui-org/react";
import {Header} from "@/app/componets/header";


const Home = () => {
  return (
        <div>
            <Header routeType={0} />
            <Button color="primary">
                Button
            </Button>
        </div>

  );
}
export default Home;