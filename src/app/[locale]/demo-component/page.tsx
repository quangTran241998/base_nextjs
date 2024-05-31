"use client";
import { CommonComponent } from "@/components/commonComponent";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo } from "react";
import queryString from "query-string";
import { Formik, Field } from "formik";

const Page = () => {
  const route = useRouter();

  // useEffect(() => {
  //   if (!location.search) {
  //     const pathName = location.pathname;
  //     route.push(pathName + `?tab=common`);
  //   }
  // }, []);

  // const onChangeTab = (path: string) => {
  //   route.push(`${location.pathname}?tab=${path}`);
  // };

  // const pathQuery = location.search;

  // const tab: any = useMemo(() => {
  //   const searchs = queryString.parse(pathQuery);
  //   const searchTab = searchs.tab;
  //   return searchTab;
  // }, [pathQuery]);

  return (
    <div>
      <CommonComponent.Container>
        <p className="text-title mb-2">Button</p>
        <CommonComponent.Button onClick={() => console.log("123")}>
          test
        </CommonComponent.Button>
        <div className="mt-4">
          <Formik initialValues={{ name: "", content: "" }} onSubmit={() => {}}>
            {(props) => {
              return (
                <div className="">
                  <Field
                    component={CommonComponent.InputField}
                    name={"name"}
                    label={"Name"}
                    required
                  />
                  <div className="">
                    <Field
                      component={CommonComponent.TextAreaField}
                      name={"content"}
                      label={"Content"}
                      required
                    />
                  </div>
                </div>
              );
            }}
          </Formik>
          {/* <CommonComponent.Tabs
          listTab={listTab}
          value={tab}
          onChange={onChangeTab}
        /> */}
        </div>
      </CommonComponent.Container>
    </div>
  );
};

export default Page;

const listTab = [
  { label: "common", path: "common" },
  { label: "form", path: "form" },
  { label: "text", path: "text" },
];
