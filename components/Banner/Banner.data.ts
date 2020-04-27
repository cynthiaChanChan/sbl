export type ServiceItem = {
    imgUrl: string;
    title: string;
};

type Service = ServiceItem[];

const service: Service = [
    {
        imgUrl: "/i-device.png",
        title: "高精度模拟考设备",
    },
    {
        imgUrl: "/i-driver.png",
        title: "智能驾培教学系统",
    },
    {
        imgUrl: "/i-data.png",
        title: "学车数据分析系统",
    },
    {
        imgUrl: "/i-system.png",
        title: "驾校数据管理系统",
    },
    {
        imgUrl: "/i-development.png",
        title: "软件定制开发服务",
    },
];

export default service;
