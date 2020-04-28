type NavItem = {
    content: string;
    url: string;
};

const navList: NavItem[] = [
    {
        content: "产品服务",
        url: "/products",
    },
    {
        content: "客户案例",
        url: "/clients",
    },
    {
        content: "关于我们",
        url: "/about",
    },
    {
        content: "联系我们",
        url: "/#contact",
    },
];

export default navList;
