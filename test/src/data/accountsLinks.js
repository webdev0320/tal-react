import { accountServiceLinks } from './accountServicePages';

export const accountsLinks = accountServiceLinks.map(({ label, to }) => ({
  title: label,
  link: to,
}));
