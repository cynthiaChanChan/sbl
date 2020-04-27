export type ClinetItem = {
    imgUrl: string;
    hasBackground?: boolean;
    title: string;
    content: string;
};

type ClientList = ClinetItem[];

const clientList: ClientList = [
    {
        imgUrl: "/client1.png",
        title: "3号学车",
        content:
            "识伯乐战略合作伙伴，用「识伯乐高精度教学&模拟考试系统」，通过智慧教学、科学练车，让学员快速拿证，通过率高达85%，实现5年零差评。",
    },
    {
        imgUrl: "/client2.png",
        title: "中驾驾校",
        content:
            "中驾驾校，用「识伯乐高精度教学&模拟考试系统」作为招生利器，引领学车新潮流，好评如云、生源不断。",
    },
    {
        imgUrl: "/client3.png",
        title: "骏龙驾校",
        content:
            "骏龙驾校，通过「识伯乐科三项目采集&路考系统」，大大提升教学质量和通过率。",
    },
    {
        imgUrl: "/client4.png",
        hasBackground: true,
        title: "交通驾校",
        content:
            "交通驾校校长，高度评价「识伯乐数据分析&管理系统」，通过系统中各维度数据的分析，实现“移动管理驾校”，2019年运营成本同比下降30%。",
    },
];

export default clientList;
