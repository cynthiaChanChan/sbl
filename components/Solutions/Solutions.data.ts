export type SolutionItem = {
    icon: string;
    title: string;
    subTitle?: string;
    content: string;
    subContent?: string;
    textCenter: boolean;
};

type Pages = {
    [key: string]: {
        heading: { title: string; subTitle: string };
        solutions: SolutionItem[];
    };
};

const index = {
    heading: { title: "解决方案", subTitle: "Our solution" },
    solutions: [
        {
            icon: "/i-advantage.png",
            title: "提高招生优势",
            content: "全新智能教学，",
            subContent: "引领学车潮流",
            textCenter: true,
        },
        {
            icon: "/i-success.png",
            title: "提高通过率",
            content: "高精度模拟练车，",
            subContent: "通过率高达85%",
            textCenter: true,
        },
        {
            icon: "/i-cost.png",
            title: "降低运营成本",
            content: "节约教练，",
            subContent: "只需原有人数的50%",
            textCenter: true,
        },
        {
            icon: "/i-message.png",
            title: "解决内部沟通",
            content: "人员管理系统（学员端、教练端、校长端、文员端）",
            textCenter: false,
        },
        {
            icon: "/i-chart.png",
            title: "数据分析",
            content:
                "学员练车记录与成绩分析、车辆使用合理性分析、教练教学合格率分析",
            textCenter: false,
        },
        {
            icon: "/i-car.png",
            title: "车辆管理",
            content:
                "车辆实时定位与监控、车辆使用时长与轨迹跟踪、油耗监控、车内视频音频记录",
            textCenter: false,
        },
    ],
};

const product = {
    heading: { title: "产品优势", subTitle: "Product advantage" },
    solutions: [
        {
            icon: "/i-weight.png",
            title: "性价比高",
            subTitle: "功能更全面",
            content: "一套设备，含四套系统",
            textCenter: true,
        },
        {
            icon: "/i-space.png",
            title: "设备不占空间",
            subTitle: "无需改装车辆",
            content: "体积仅为同行的1/5，重量为1/10",
            textCenter: true,
        },
        {
            icon: "/i-umbrella.png",
            title: "专业完善的",
            subTitle: "售后服务",
            content: "免费安装、免费测绘建模、",
            subContent: "免费培训、送一年售后维护",
            textCenter: false,
        },
    ],
};

const SolutionsData: Pages = {
    index,
    product,
};

export default SolutionsData;
