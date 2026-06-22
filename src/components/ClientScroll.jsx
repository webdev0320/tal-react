"use client";
import { useEffect } from 'react';

export default function ClientScroll({ top = 0 }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.scrollTo) {
      window.scrollTo(0, top);
    }
  }, [top]);

  return null;
}
