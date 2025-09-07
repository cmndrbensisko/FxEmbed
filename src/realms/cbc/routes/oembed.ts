import { Context } from 'hono';
import { Constants } from '../../../constants';
import { Strings } from '../../../strings';
import { getBranding } from '../../../helpers/branding';
import { OEmbed } from '../../../types/types';

export const oembed = async (c: Context) => {
  console.log('oembed hit!');
  const { searchParams } = new URL(c.req.url);

  /* Fallbacks */
  const text = searchParams.get('text') ?? '';
  const author = searchParams.get('author') ?? '';
  const status = searchParams.get('status') ?? '';

  const statusUrl = `${Constants.BSKY_ROOT}/profile/${encodeURIComponent(author)}/post/${status}`;
  const branding = getBranding(c);

const fetchArticle = async (): Promise<null> => {
  const url = c.req.url.replace("fxcbc","cbc");
  console.log('requesting', url);
  const res = await fetch(url);
  return await res.text();
};

const article = await fetchArticle()
    const detailHeadline = article.substring(article.indexOf('name="twitter:title" content="') + 30,article.indexOf('">',article.indexOf('name="twitter:title" content="') + 30))
    const detailSummary = article.substring(article.indexOf('name="twitter:description" content="') + 36,article.indexOf('">',article.indexOf('name="twitter:description" content="') + 36))
    const detailImage = article.substring(article.indexOf('name="twitter:image" content="') + 30,article.indexOf('">',article.indexOf('name="twitter:image" content="') + 30))
  const imageHeight = article.substring(article.indexOf('name="twitter:player:width" content="') + 37,article.indexOf('">',article.indexOf('name="twitter:player:width" content="') + 37))
  const imageWidth  = article.substring(article.indexOf('name="twitter:player:height" content="') + 38,article.indexOf('">',article.indexOf('name="twitter:player:height" content="') + 38))
  const data = '<title>CBC News</title><meta content="' + detailHeadline + '" property="og:title" /><meta content="' + detailSummary + '" property="og:description" /><meta content="' + c.req.url.replace("fxcbc","cbc") + '" property="og:url" /><meta content="' + detailImage + '" property="og:image" /><meta property="og:image:width" content="'+ imageWidth + '/><meta property="og:image:height" content="'+ imageHeight + '"/><meta content="#43B581" data-react-helmet="true" name="theme-color" /><script>window.onload = window.location.replace(\'' + c.req.url.replace("fxcbc","cbc") + '\')</script>';
  /* Stringify and send it on its way! */
  return c.html(data, 200);
};
