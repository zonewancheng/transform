import Head from "next/head";
import React from "react";

export const Meta = ({ title, description, url }) => {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/static/favicon.png" type="image/png" />
      <meta content={description} name="description" />
      <meta name="og:url" content={url} />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={"https://transform.tools/cover.png"} />
      <meta name="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={"https://transform.tools/cover.png"}
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="ritz078" />
      <link rel="manifest" href="/static/site.webmanifest" />
      <script async src="https://umami.oospace.com/script.js" data-website-id="bf13ef01-16a9-4316-93b5-3a42b3f3b364"></script>
    </Head>
  );
};
