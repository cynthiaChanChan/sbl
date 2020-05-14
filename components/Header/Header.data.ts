type NavItem = {
    content: string;
    url: string;
    title?: string;
};

const navList: NavItem[] = [
    {
        content: "产品服务",
        title: "识伯乐-产品服务-高精度模拟考设备",
        url: "/products",
    },
    {
        content: "客户案例",
        title: "识伯乐-客户案例-驾校数据管理系统",
        url: "/clients",
    },
    {
        content: "关于我们",
        title: "识伯乐-关于我们-行业领先的驾校服务商",
        url: "/about",
    },
    {
        content: "联系我们",
        title: "识伯乐-联系我们-软件定制开发服务",
        url: "?section=contact#contact",
    },
];

export default navList;
