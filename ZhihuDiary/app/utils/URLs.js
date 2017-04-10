

// list
export const NEWS_LISTURL = 'http://news-at.zhihu.com/api/4/news/latest'; //拉取最新日报

// new info
export const NEWS_NEWINFO_CONTENT = 'http://news-at.zhihu.com/api/4/news/'; // 获取某一篇日报详细内容
export const NEWS_NEWINFO_EXTRAINFO = 'http://news-at.zhihu.com/api/4/story-extra/';//获取某一篇日报额外信息 {评论数、点赞数等}
// 查看长评论 最终接口形式: baseUrl + #{id} + path

// long comment
export const NEWS_COMMENT_LONGCOMMENTS_BASEURL = 'http://news-at.zhihu.com/api/4/story/'; //拉取最新日报
export const NEWS_COMMENT_LONGCOMMENTS_PATH = '/long-comments';

// short comment
export const NEWS_COMMENT_SHORTCOMMENTS_BASEURL = 'http://news-at.zhihu.com/api/4/story/';
export const NEWS_COMMENT_SHORTCOMMENTS_PATH = '/short-comments';

// themes
export const THEMES_LISTURL = 'http://news-at.zhihu.com/api/4/themes'; //主题日报列表
export const THEMES_THEMEINFO = 'http://news-at.zhihu.com/api/4/theme/'; //主题日报内容

// hot list
export const HOT_LISTURL = 'http://news-at.zhihu.com/api/3/news/hot'; //热门消息