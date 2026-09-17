/**
 * 站点个人配置。
 * 改名字、QQ、微信、邮箱、地址，只需要动这一个文件。
 */
export const siteConfig = {
  /** 中文名 */
  nameZh: "汤勇",
  /** 英文名 */
  nameEn: "Kael Odin",

  /** 浏览器标签页标题 */
  title: "汤勇 Kael Odin | 个人作品集",
  description:
    "汤勇（Kael Odin）的个人作品集 —— 软件开发者，专注 Web 应用与效率工具。",

  /** 邮箱，默认用 QQ 邮箱；换成你常用的即可 */
  email: "445481611@qq.com",
  /** QQ 号 */
  qq: "445481611",
  /** 微信号 */
  wechat: "kael_odin",

  /** GitHub 主页 */
  github: "https://github.com/kael-odin",

  /** 地图定位：江苏省徐州市泉山区矿大科技园（紧邻中国矿业大学文昌校区） */
  location: {
    /** 角落角标上的短标签 */
    short: "中国 · 江苏 · 徐州",
    /** 完整地址 */
    full: "江苏省徐州市泉山区矿大科技园",
    /** 中国矿业大学文昌校区坐标，矿大科技园与之紧邻 */
    lat: 34.219376,
    lng: 117.200615,
    /** 缩放级别，数字越大越近（15 约覆盖 1 公里范围） */
    zoom: 15,
    /** 点角标跳转到高德地图时用的搜索关键词 */
    amapKeyword: "矿大科技园",
    amapCity: "徐州",
  },
} as const;

/** QQ 加好友（网页拉起 QQ 会话） */
export const qqChatUrl = `https://wpa.qq.com/msgrd?v=3&uin=${siteConfig.qq}&site=qq&menu=yes`;

/** 地图 iframe：Google 地图，无需 API Key */
export const mapEmbedUrl = `https://maps.google.com/maps?q=${siteConfig.location.lat},${siteConfig.location.lng}&z=${siteConfig.location.zoom}&output=embed`;

/** 高德地图链接：按名称搜索，比丢坐标更准 */
export const amapUrl = `https://uri.amap.com/search?keyword=${encodeURIComponent(
  siteConfig.location.amapKeyword
)}&city=${encodeURIComponent(siteConfig.location.amapCity)}&view=map&src=web`;
