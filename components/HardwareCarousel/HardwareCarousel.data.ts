export const heading = {
    title: "硬件设备",
    subTitle: "Hardware devices",
};

export type HardwareData = {
    id: number;
    title: string;
    list: string[];
    image: string;
    imageWide?: boolean;
    imageSmall?: boolean;
};

const hardwaresData: HardwareData[] = [
    {
        id: 1,
        title: "嵌入式高精度车载智能终端",
        list: [
            "车载后视镜和高精度信号接收器芯片高度集成，嵌入为一体",
            "高精度芯片数据、电源和呈现系统共用",
            "减少了安装难度和车内使用空间，降低了成本",
            "1080P高清，4.3英寸防炫屏",
            "精巧时尚、简洁实用、安全稳定",
        ],
        image: "./terminal.png",
        imageSmall: true,
    },
    {
        id: 2,
        title: "测量型北斗天线",
        list: [
            "多星多频外置式测量天线",
            "多馈点设计，降低测量误差",
            "单元增益高搜星信号强",
            "抗多径扼流板，高精度接收信号",
            "防水、防紫外线外罩，为长期的野外工作提供保障",
        ],
        image: "./cable.png",
        imageSmall: true,
    },
    {
        id: 3,
        title: "智能收发一体中继电台",
        list: [
            "自主核心技术",
            "全面兼容市场主流电台数据传输协议",
            "高、中、低档功率全覆盖，满足不同行业的使用环境",
            "全屏蔽设计，精致小巧，散热迅速，工作温度可达+60℃",
            "独特外观设计、防水防尘、抗震抗摔",
            "一键启动，一键调档，智能纠偏，稳定可靠",
        ],
        image: "./radio.png",
        imageWide: true,
    },
    {
        id: 4,
        title: "高精度定位定向GNSS接收机",
        list: [
            "内嵌自主研发的BDS、GPS、GLONASS多模多频GNSS板卡，可单系统定位，也可联合RTK定位",
            "双天线输入，单套设备可实现高精度RTK定位坐标、方位角和俯仰角（或横滚角）测量",
            "支持PJK平面坐标输出，无需第三方软件做投影转换",
            "支持以太网、GSM/GPRS通讯，支持GNSS/INS组合导航",
            "体积小，功耗低于2.5W",
        ],
        image: "./gnss02.png",
    },
    {
        id: 5,
        title: "高精度定位分体式GNSS接收机",
        list: [
            "自主核心技术,可单系统定位，也可多系统联合定位",
            "内嵌自主可控的高精度GNSS板卡，支持定制报文",
            "具有双系统RTK解算引擎，支持短、中、长基线RTK功能",
            "支持以太网、GSM/GPRS通讯、支持GNSS/INS组合导航",
            "高度灵活的分体式接收机、天线设计",
            "体积小，功耗低于2.5W",
        ],
        image: "./gnss01.png",
    },
];

export const thumbnailsData: HardwareData[] = [
    hardwaresData[hardwaresData.length - 1],
    hardwaresData[1],
];

export default hardwaresData;
