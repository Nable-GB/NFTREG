"use client";

import { useEffect } from "react";
import { useLanguage } from "../context/language-context";

const seo = {
  en: {
    title: "NFT Registration USA | Legal NFT Consulting | USDGA.US",
    description:
      "Register your NFT legally in the USA. We guide creators, companies, and investors through US Copyright Office, USPTO, and SEC compliance from start to finish.",
  },
  ko: {
    title: "미국 NFT 등록 | NFT 법률 컨설팅 | USDGA.US",
    description:
      "미국에서 NFT를 합법적으로 등록하세요. 미국 저작권청, USPTO, SEC 규제 준수까지 창작자, 기업, 투자자를 끝까지 안내해 드립니다.",
  },
};

export const DynamicMetadata = () => {
  const { language } = useLanguage();

  useEffect(() => {
    const { title, description } = seo[language];
    document.title = title;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute("content", description);
    }
  }, [language]);

  return null;
};
