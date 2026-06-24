/**
 * Shared WordPress HTML parsing helpers used by dynamic page views.
 */

export function stripTags(html) {
  return html
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Extracts the page title from the linked <h1><a> pattern used by the WP theme.
 */
export function extractHeading(html) {
  const linkedH1 = html.match(/<h1[^>]*>\s*<a[^>]*>([\s\S]*?)<\/a>\s*<\/h1>/i);
  if (linkedH1) return stripTags(linkedH1[1]);
  return null;
}

/**
 * Returns the first substantive paragraph for use as a hero subtitle.
 */
export function extractSubtitle(html) {
  const paragraphs = [...html.matchAll(/<p[^>]*>([\s\S]*?)<\/p>/gi)];

  for (const match of paragraphs) {
    const raw = match[1];
    if (/\[rank_math_breadcrumb\]/i.test(raw)) continue;

    const text = stripTags(raw);
    if (!text || text.length < 15) continue;
    if (/^contact\s*-?\s*us$/i.test(text)) continue;

    return text;
  }

  return null;
}

export function remapImages(html) {
  return html
    .replace(/https?:\/\/(?:www\.)?taxaccolega\.co\.uk\/wp-content\/uploads\//g, '/images/')
    .replace(/srcset="[^"]*"/gi, '')
    .replace(/\s+sizes="[^"]*"/gi, '');
}

/**
 * Cleans raw WordPress HTML for display in the site layout.
 */
export function cleanContent(html) {
  let content = html;

  content = content.replace(/<!--[\s\S]*?-->/g, '');

  // Linked-anchor h1 is shown in PageHero instead
  content = content.replace(/<h1[^>]*>\s*<a[^>]*>[\s\S]*?<\/a>\s*<\/h1>/gi, '');

  content = content.replace(/<p[^>]*>\s*\[rank_math_breadcrumb\]\s*<\/p>/gi, '');
  content = content.replace(/\[rank_math_breadcrumb\]/g, '');
  content = content.replace(/\[insert phone number\]/gi, '020 8127 0728');
  content = content.replace(/\[[^\]]+\]/g, '');

  content = content.replace(/<p[^>]*>\s*Your path to success\s*<\/p>/gi, '');
  content = content.replace(/^(\s*<p[^>]*>\s*<\/p>\s*)*/i, '');

  content = content.replace(/<h2>FAQs<\/h2>[\s\S]*?<a href="tel:02081270728"/gi, '<a href="tel:02081270728"');

  const endMarkers = [
    /<!DOCTYPE html>/i,
    /<h2[^>]*>\s*Personal Details/i,
    /<h2[^>]*>\s*Checkout/i,
    /<h2[^>]*>\s*Secure Payment/i,
    /<button[^>]*id="openPopupBtn"/i,
  ];

  for (const marker of endMarkers) {
    const idx = content.search(marker);
    if (idx !== -1) content = content.slice(0, idx);
  }

  return remapImages(content).trim();
}

/**
 * @param {string} html
 * @returns {{ q: string, a: string }[]}
 */
export function extractFaqs(html) {
  const faqs = [];
  const section = html.match(
    /<h2[^>]*>\s*FAQs[^<]*<\/h2>([\s\S]*?)(?=<h2[^>]*>\s*(?:Contact|Other Areas|Personal Details|Get in Touch)|$)/i,
  );
  if (!section) return faqs;

  [...section[1].matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>\s*<p>([\s\S]*?)<\/p>/gi)].forEach((pair) => {
    const q = stripTags(pair[1]);
    const a = stripTags(pair[2]);
    if (!q || !a) return;
    if (q.length > 200 || a.length > 1500) return;
    if (/email address|personal details|phone:|checkout|secure payment/i.test(q)) return;
    faqs.push({ q, a });
  });

  return faqs;
}
