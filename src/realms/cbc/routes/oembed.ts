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

  const data = '<title>Website Name</title><meta content="Embed Title" property="og:title" /><meta content="Site Description" property="og:description" /><meta content="https://embed.com/this-is-the-site-url" property="og:url" /><meta content="https://embed.com/embedimage.png" property="og:image" /><meta content="#43B581" data-react-helmet="true" name="theme-color" /><script>window.onload = window.location.replace(\'' + c.req.url.replace("fxcbc","cbc") + '\')</script>';
  /* Stringify and send it on its way! */
  return c.html(data, 200);
};
