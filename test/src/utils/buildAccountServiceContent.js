const img = (src, alt) =>
  `<figure><img src="${src}" alt="${alt}" loading="lazy" /></figure>`;

export function buildAccountServiceHtml(page) {
  const parts = [];

  parts.push(`<h2>${page.introTitle}</h2>`);
  page.intro.forEach((paragraph) => parts.push(`<p>${paragraph}</p>`));

  if (page.images?.hero) {
    parts.push(img(page.images.hero.src, page.images.hero.alt));
  }

  if (page.highlights?.length) {
    parts.push('<h3>What we cover</h3><ul>');
    page.highlights.forEach((item) => parts.push(`<li>${item}</li>`));
    parts.push('</ul>');
  }

  page.sections?.forEach((section, index) => {
    parts.push(`<h2>${section.title}</h2>`);
    section.body?.forEach((paragraph) => parts.push(`<p>${paragraph}</p>`));
    if (section.bullets?.length) {
      parts.push('<ul>');
      section.bullets.forEach((item) => parts.push(`<li>${item}</li>`));
      parts.push('</ul>');
    }

    const sectionImage = page.images?.sections?.[index];
    if (sectionImage) {
      parts.push(img(sectionImage.src, sectionImage.alt));
    }
  });

  if (page.table) {
    parts.push(`<h2>${page.tableTitle}</h2>`);
    parts.push('<table><thead><tr>');
    page.table.headers.forEach((header) => parts.push(`<th>${header}</th>`));
    parts.push('</tr></thead><tbody>');
    page.table.rows.forEach((row) => {
      parts.push('<tr>');
      row.forEach((cell) => parts.push(`<td>${cell}</td>`));
      parts.push('</tr>');
    });
    parts.push('</tbody></table>');
  }

  if (page.insight) {
    parts.push(`<blockquote><p><strong>Insight:</strong> ${page.insight}</p></blockquote>`);
  }

  if (page.images?.insight) {
    parts.push(img(page.images.insight.src, page.images.insight.alt));
  }

  if (page.ctaTitle) {
    parts.push(`<h2>${page.ctaTitle}</h2>`);
    parts.push(`<p>${page.ctaText}</p>`);
    parts.push('<p><a href="/contact-us">Contact Us</a></p>');
  }

  if (page.faqs?.length) {
    parts.push('<h2>Frequently asked questions</h2>');
    page.faqs.forEach(([question, answer]) => {
      parts.push(`<h3>${question}</h3><p>${answer}</p>`);
    });
  }

  return parts.join('\n');
}
