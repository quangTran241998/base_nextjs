"use client";

import React from "react";
import { useTranslations } from "next-intl";

const Page = () => {
  const t = useTranslations("Index");

  return (
    <h1 className="text-red-500" onClick={() => console.log("123")}>
      {t("title")}
    </h1>
  );
};

export default Page;