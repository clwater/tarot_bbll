import Image from "next/image";
import {Button, ButtonGroup} from "@nextui-org/react";
import {Header} from "@/app/componets/header";

let TarotManager = require('@/app/utils/TarotManager');

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

Home.getInitialProps = async () => {

    // 在页面加载之前获取数据或执行初始化逻辑
    const data = await TarotManager.init();

    return { data };
};

export default Home;