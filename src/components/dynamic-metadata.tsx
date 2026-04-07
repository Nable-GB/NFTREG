"use client";

import { useEffect } from "react";
import { useLanguage } from "../context/language-context";

const seo = {
  en: {
    title: "SYS.CORE | Futuristic Developer Dashboard & Topology Monitor",
    description:
      "Visualize your infrastructure with SYS.CORE. A sci-fi inspired, dark-mode dashboard for live node topology, memory allocation, and system diagnostics.",
  },
  ko: {
    title: "SYS.CORE | 미래지향적 개발자 대시보드 및 토폴로지 모니터",
    description:
      "SYS.CORE로 인프라를 시각화하세요. 라이브 노드 토폴로지, 메모리 할당 및 시스템 진단을 위한 SF 스타일의 다크 모드 대시보드입니다.",
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
