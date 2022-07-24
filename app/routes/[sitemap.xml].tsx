export const loader = () => {
  // handle "GET" request
  // separating xml content from Response to keep clean code.
  const content = `
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://olivercederborg.com/</loc>
        <lastmod>2022-07-14T23:13:19+00:00</lastmod>
        <priority>1.00</priority>
      </url>
      <url>
        <loc>https://olivercederborg.com/side-projects</loc>
        <lastmod>2022-07-24T01:46:50+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://olivercederborg.com/project/miinto</loc>
        <lastmod>2022-07-14T23:13:19+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://olivercederborg.com/project/tsks</loc>
        <lastmod>2022-07-14T23:13:19+00:00</lastmod>
        <priority>0.80</priority>
      </url>
      <url>
        <loc>https://olivercederborg.com/project/100-days-of-ui</loc>
        <lastmod>2022-07-14T23:13:19+00:00</lastmod>
        <priority>0.80</priority>
      </url>
    </urlset>
`
  // Return the response with the content, a status 200 message, and the appropriate headers for an XML page
  return new Response(content, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'xml-version': '1.0',
      encoding: 'utf8',
    },
  })
}
