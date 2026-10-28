import { siteConfig } from '../config';

export function GET() {
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${siteConfig.url}/sitemap-index.xml\n`);
}
