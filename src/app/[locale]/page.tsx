"use client";

import BaseRoute from "@/consts/baseRoute";
import { LANGUAGE } from "@/interfaces/enum";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = ({ params: { locale } }: { params: { locale: LANGUAGE } }) => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/${locale}/${BaseRoute.Homepage}`);
  }, []);

  return <div></div>;
};

export default Page;
