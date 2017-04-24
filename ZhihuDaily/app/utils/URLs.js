

export const NEWS_HEADER = 'http://news-at.zhihu.com/api/4/';

// list
export const NEWS_LATEST = 'news/latest'; //拉取最新日报
export const NEWS_BEFOR = 'news/before/'; // before 

// new info
export const NEWS_NEWINFO_CONTENT = 'news/'; // 获取某一篇日报详细内容
export const NEWS_NEWINFO_EXTRAINFO = 'story-extra/';//获取某一篇日报额外信息 {评论数、点赞数等}
// 查看长评论 最终接口形式: baseUrl + #{id} + path

// long comment
export const NEWS_COMMENT_LONGCOMMENTS_BASEURL = 'story/'; //拉取最新日报
export const NEWS_COMMENT_LONGCOMMENTS_PATH = '/long-comments';

// short comment
export const NEWS_COMMENT_SHORTCOMMENTS_BASEURL = 'story/';
export const NEWS_COMMENT_SHORTCOMMENTS_PATH = '/short-comments';

// themes
export const THEMES_LISTURL = 'themes'; //主题日报列表
export const THEMES_THEMEINFO = 'theme/'; //主题日报内容

// hot list
export const HOT_LISTURL = 'http://news-at.zhihu.com/api/3/news/hot'; //热门消息