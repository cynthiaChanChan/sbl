export type ProductData = {
    heading: {
        title: string;
        subTitle: string;
    };
    sectionHeading?: {
        title: string;
        subTitle: string;
    };
    icon?: string;
    img: string;
    background?: string;
    list?: string[];
};

type ProductsData = ProductData[];

const productsData: ProductsData = [
    {
        heading: {
            title: "科二高精度教学 & 模拟考试",
            subTitle: "轨迹实时查看，智能语音播报<br>模拟考训练，个性化指导",
        },
        sectionHeading: { title: "软件系统", subTitle: "Software system" },
        icon: "./i-light.png",
        img: "./app_exam.png",
    },
    {
        heading: {
            title: "科三项目采集 & 路考",
            subTitle: "自主规划，路线采集<br>参数设置，智能评判",
        },
        icon: "./i-map.png",
        img: "./app_test.png",
        background: "./background_test.png",
    },
    {
        heading: {
            title: "学员端",
            subTitle: "学车轨迹高精度定位、数据实时生成，带来全新学车体验",
        },
        img: "./app_student.png",
        list: [
            "微信登录、约练约考便捷，缩短学车周期",
            "教练服务点评、学车过程语音实录，从而杜绝吃拿卡要，责任问题可追溯",
            "学车技巧在线看、全套教学分步讲解，理论与实践相结合",
            "练车轨迹高精度定位，练车数据实时生成",
            "练车记录随时回顾，练车成绩查看统计",
            "通过数据分析获悉自己的不足，对关键点进行强化记忆和针对性练习",
            "每一场练习都是模拟考试，高度还原考场真实场景，减缓考前紧张心理",
        ],
    },
    {
        heading: {
            title: "教练端",
            subTitle: "个性化精准指导，提升教学质量及通过率",
        },
        img: "./app_coach.png",
        list: [
            "约车审核、练车排期、考试安排、学员信息等，手机一键操作，统一进行科学管理",
            "语音交互、图片视频引导、智能评判、实时纠错，让教学变得更标准更规范",
            "练车数据分析、扣分项重点提示，方便对学员进行个性化点位指导，针对性安排训练计划，强化薄弱项目",
            "训练记录及点评、教学记录统计，有效提升服务质量及学员通过率",
        ],
        background: "./background_app.png",
    },
    {
        heading: {
            title: "校长端",
            subTitle: "多维度管理，全方位掌握驾校运营情况",
        },
        img: "./app_principal.png",
        list: [
            "支持财务报表、学员、教练、车辆等管理功能，便于校长实现“移动管理驾校”",
            "账目走势图展示，对收支情况一目了然",
            "学员信息查看统计，直观掌握运营情况",
            "教练教学数据分析，助力提升人效管理",
            "车辆油耗及轨迹，随时进行把控",
            "真正帮助驾校提升运营效率，降低运营成本，解决教学难、管理难、通过率低等问题",
        ],
    },
    {
        heading: {
            title: "文员端",
            subTitle: "管理功能列表全面，驾校运营数据直观呈现",
        },
        img: "./laptop.png",
        list: [
            "财务管理、公告管理、场地管理",
            "车辆管理、学员管理、教练管理",
            "练车时长、次数、增长率",
            "教学合格率、成交量",
            "车辆油耗、行驶公里数、轨迹",
        ],
        background: "./background_system.png",
    },
];

export default productsData;
