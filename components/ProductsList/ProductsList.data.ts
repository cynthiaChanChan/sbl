export type ProductData = {
    heading: {
        title: string;
        subTitle: string;
    };
    list: string[];
    img: string;
    alt: string;
    background: string;
    subContent?: {
        icon: string;
        title: string;
    }[];
};

type ProductsData = ProductData[];

const software = {
    heading: { title: "软件系统", subTitle: "Software system" },
    list: [
        "科二高精度教学 & 模拟考试",
        "科三项目采集 & 路考",
        "练车数据实时分析与统计",
        "学员、教练、车辆、财务管理",
    ],
    img: "./software.png",
    alt: "Software system",
    background: "./background_software.png",
    subContent: [
        {
            icon: "./i-student.png",
            title: "学 员 端",
        },
        {
            icon: "./i-coach.png",
            title: "教 练 端",
        },
        {
            icon: "./i-principal.png",
            title: "校 长 端",
        },
        {
            icon: "./i-worker.png",
            title: "文 员 端",
        },
    ],
};

const hardware = {
    heading: { title: "硬件设备", subTitle: "Hardware devices" },
    list: [
        "嵌入式高精度车载智能终端",
        "高精度定位分体式GNSS接收机",
        "高精度定位定向GNSS接收机",
        "智能收发一体中继电台",
        "测量型北斗天线",
    ],
    img: "./hardware.png",
    alt: "ardware devices",
    background: "./background_hardware.jpg",
};

const productsData: ProductsData = [software, hardware];

export default productsData;
