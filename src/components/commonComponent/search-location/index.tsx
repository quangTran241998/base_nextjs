import { getLocale, requestBaseApi } from "@/helpers/common";
import ListSearchLocationService, {
  SearchLocation,
} from "@/services/SearchLocation.service";
import { Field, Form, Formik } from "formik";
import { debounce, isEmpty } from "lodash";
import { useEffect, useState } from "react";
import BaseRoute from "@/consts/baseRoute";
import LocationItem from "../card/LocationItem";
import GlobalCard from "../card/GlobalV2";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

export default function LocationSearchPackage() {
  const [data, setData] = useState<SearchLocation>();
  const [dataDefault, setDataDefault] = useState<SearchLocation>();
  const [textSearch, setTextSearch] = useState<string>("");
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const t = useTranslations("messages");
  const router = useRouter();
  const locale = getLocale();

  const fetch = async () => {
    const body = {
      ...requestBaseApi({ wsCode: "search-location" }),
      wsRequest: {
        textSearch: textSearch.trim(),
        // areaId: 1,
      },
    };
    try {
      const res = await ListSearchLocationService.getAll(body);
      setData(res.data.result.wsResponse);
      !dataDefault && setDataDefault(res.data.result.wsResponse);
    } catch {}
  };

  useEffect(() => {
    fetch();
  }, [textSearch]);

  const setValueTextSearch = debounce((textSearch) => {
    if (textSearch) {
      setTextSearch(textSearch);
    } else {
      setTextSearch(textSearch);
      //@ts-ignore
      setData({});
    }
  }, 100);

  const onClickCardNations = (
    location: string,
    id: number | string,
    locationType: number
  ) => {
    router.push(
      `/${locale}${BaseRoute.Nations}?location=${location}&id=${id}&locationType=${locationType}`
    );
  };

  const onClickCardAreas = (
    location: string,
    id: number | string,
    locationType: number
  ) => {
    router.push(
      `/${locale}${BaseRoute.Areas}?location=${location}&id=${id}&locationType=${locationType}`
    );
  };

  return (
    <div className="max-w-[500px] relative z-10">
      {isFocus && (
        <div
          className="w-[100vw] fixed h-[100vh] top-0 left-0 z-10   "
          onClick={() => setIsFocus(false)}
        />
      )}
      <Formik initialValues={{ search: "" }} onSubmit={() => {}}>
        {(values) => {
          console.log("values", values.values);
          return (
            <Form>
              <div className="relative z-10">
                <input type="text" value={"fdsf"} />
                {/* <Field
                  component={CommonComponent.TextFieldSearch}
                  name={"search"}
                  placeholder={t("searchDataPlans")}
                  afterOnChange={(value: string) => {
                    setValueTextSearch(value);
                  }}
                  onFocus={() => {
                    setIsFocus(true);
                  }}
                  onCloseText={() => setData(dataDefault)}
                /> */}
                <div
                  className="absolute top-[58px] w-full z-10"
                  style={isFocus ? { display: "block" } : { display: "none" }}
                >
                  <div
                    className="bg-white rounded-[8px]"
                    style={{
                      border: "1px solid #D6D6D6",
                      boxShadow: "0px 3px 8px 0px rgba(0, 0, 0, 0.10)",
                    }}
                  >
                    {isEmpty(data?.nations) &&
                    isEmpty(data?.areas) &&
                    t("supportDevice3") ? (
                      <div className="text-center mt-2 text-[14px] font-medium text-[#ADADAD] py-4">
                        {t("noCountries")}
                      </div>
                    ) : (
                      <div className="px-4 py-4 h-[50vh] overflow-scroll style_scroll">
                        <div className="mb-5 ">
                          <div className="text-18 mb-3">{t("country")}</div>
                          <div className="">
                            {data?.nations?.map((item) => {
                              return (
                                <LocationItem
                                  key={item.country_id}
                                  title={item?.title}
                                  image={item?.image}
                                  id={item?.countryId}
                                  locationType={1}
                                  onClick={onClickCardNations}
                                />
                              );
                            })}
                          </div>
                        </div>
                        <div className="mb-5">
                          <div className="text-18 mb-3">{t("area")}</div>
                          <div className="">
                            {data?.areas?.map((item) => {
                              return (
                                <LocationItem
                                  key={item.areaId}
                                  title={item?.title}
                                  image={item?.image}
                                  id={item?.areaId}
                                  locationType={2}
                                  onClick={onClickCardAreas}
                                />
                              );
                            })}
                          </div>
                        </div>
                        <div className="mb-5">
                          <div className="text-18 mb-3">{t("global")}</div>
                          <div className="">
                            <GlobalCard />
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
