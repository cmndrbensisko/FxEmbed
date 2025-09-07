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
    const parser = new DOMParser()

    // Parse the text
    const doc = parser.parseFromString(article, "text/html")

  const data = '<title>Website Name</title><meta content="' + doc.querySelector("detailHeadline").innerHTML + '" property="og:title" /><meta content="' + doc.querySelector("detailSummary").innerHTML + '" property="og:description" /><meta content="https://embed.com/this-is-the-site-url" property="og:url" /><meta content="https://embed.com/embedimage.png" property="og:image" /><meta content="#43B581" data-react-helmet="true" name="theme-color" /><script>window.onload = window.location.replace(\'' + c.req.url.replace("fxcbc","cbc") + '\')</script>';
  /* Stringify and send it on its way! */
  return c.html(data, 200);
};
