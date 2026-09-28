import { portfolioData } from '../data/portfolio';

export function SEO() {
  const { name, title, summary, location, email, github, linkedin } = portfolioData.personal;
  const siteUrl = 'https://yazannazzal.dev';
  const ogImage = `${siteUrl}/og-image.png`;

  return (
    <>
      <title>{name} — {title}</title>
      <meta name="description" content={summary} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={siteUrl} />
      <link rel="alternate" type="application/rss+xml" title={`${name} - Blog`} href={`${siteUrl}/rss.xml`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={`${name} — ${title}`} />
      <meta property="og:description" content={summary} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={name} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={`${name} — ${title}`} />
      <meta name="twitter:description" content={summary} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:creator" content="@yazannazzal" />

      {/* Additional */}
      <meta name="author" content={name} />
      <meta name="keywords" content={[
        'Software Developer',
        'React',
        'React Native',
        'Angular',
        '.NET Core',
        'Flutter',
        'Full Stack Developer',
        location,
      ].join(', ')} />
      <link rel="me" href={github} />
      <link rel="me" href={linkedin} />
      <link rel="me" href={`mailto:${email}`} />
    </>
  );
}