import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Bounded from "@/components/Bounded";

import { getFooter, getSettings } from "@/app/utils";

type FooterProps = {
  uid: string;
};

export default async function Footer({ uid }: FooterProps) {
  const settings = await getSettings();
  const footer = await getFooter(uid);

  const {
    background_image,
    logo,
    company_name,
    footer_text_color,
    privacy_policy_link,
    terms_and_conditions_link,
    terms_and_conditions_text,
    telegram_link,
    telegram_icon_color,
    telegram_icon_background_color,
    whatsapp_link,
    whatsapp_icon_color,
    whatsapp_icon_background_color,
    website_developer_link,
    website_developer_website_link_text,
  } = footer.data;
  // console.log("whatsapp icon link ", whatsapp_icon_link);

  const { secondary_color } = settings.data;
  return (
    <>
      <footer>
        <div className="w-full text-white relative ">
          <PrismicNextImage
            className="absolute -z-10 w-full h-full object-cover"
            field={background_image}
          />

          {/* <div style={{ color: "black" }}>
            {JSON.stringify(whatsapp_link) + "hi"}
          </div> */}
          <Bounded
            as="div"
            className="relative py-[5rem] sm:py-[6rem] md:py-[6rem] lg:py-[8rem] px-4 md:px-6"
          >
            <div
              style={{ color: footer_text_color || secondary_color || "white" }}
            >
              <div className="opacity-75 text-sm text-center max-w-5xl mx-auto">
                <PrismicRichText field={terms_and_conditions_text} />
              </div>
              <div className="flex justify-center my-4">
                <PrismicNextImage field={logo} />
              </div>
              <div className="opacity-75 text-sm text-center mx-auto my-2">
                Copyright {new Date().getFullYear()} {company_name}
              </div>
              <div className="text-sm opacity-75 text-center mx-auto my-2">
                <PrismicNextLink field={privacy_policy_link}>
                  Privacy Policy
                </PrismicNextLink>
                {" | "}
                <PrismicNextLink field={terms_and_conditions_link}>
                  Terms and Conditions
                </PrismicNextLink>
              </div>
              <div className="absolute bottom-7 mobile:bottom-8 opacity-80 right-5 mobile:right-10">
                <PrismicNextLink field={website_developer_link}>
                  {website_developer_website_link_text}
                </PrismicNextLink>
              </div>
            </div>
          </Bounded>
          {whatsapp_link && whatsapp_link?.link_type != "Any" && (
            <PrismicNextLink
              style={{
                position: "fixed",
                width: "60px",
                height: "60px",
                // bottom: "20px",
                // left: "40px",
                backgroundColor: telegram_icon_background_color || "#9a9aff",
                borderRadius: "50px",
                textAlign: "center",
                fontSize: "30px",
                boxShadow: "2px 2px 3px #999",
                zIndex: "100",
              }}
              className="left-[10px] mobile:left-[40px] bottom-[84px] mobile:[20px]"
              target="_blank"
              field={whatsapp_link}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="48px"
                height="48px"
                className="ml-[7px] mt-[6px]"
              >
                <path
                  fill={telegram_icon_background_color || "#9a9aff"}
                  d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"
                />
                <path
                  fill="#fff"
                  d="M33.95,15l-3.746,19.126c0,0-0.161,0.874-1.245,0.874c-0.576,0-0.873-0.274-0.873-0.274l-8.114-6.733 l-3.97-2.001l-5.095-1.355c0,0-0.907-0.262-0.907-1.012c0-0.625,0.933-0.923,0.933-0.923l21.316-8.468 c-0.001-0.001,0.651-0.235,1.126-0.234C33.667,14,34,14.125,34,14.5C34,14.75,33.95,15,33.95,15z"
                />
                <path
                  fill="#b0bec5"
                  d="M23,30.505l-3.426,3.374c0,0-0.149,0.115-0.348,0.12c-0.069,0.002-0.143-0.009-0.219-0.043 l0.964-5.965L23,30.505z"
                />
                <path
                  fill="#cfd8dc"
                  d="M29.897,18.196c-0.169-0.22-0.481-0.26-0.701-0.093L16,26c0,0,2.106,5.892,2.427,6.912 c0.322,1.021,0.58,1.045,0.58,1.045l0.964-5.965l9.832-9.096C30.023,18.729,30.064,18.416,29.897,18.196z"
                />
              </svg>
            </PrismicNextLink>
          )}
          {whatsapp_link && whatsapp_link?.link_type != "Any" && (
            <PrismicNextLink
              style={{
                position: "fixed",
                width: "60px",
                height: "60px",
                // bottom: "20px",
                // left: "40px",
                backgroundColor: whatsapp_icon_background_color || "#5bc0de",
                borderRadius: "50px",
                textAlign: "center",
                fontSize: "30px",
                boxShadow: "2px 2px 3px #999",
                zIndex: "100",
              }}
              className="left-[10px] mobile:left-[40px] bottom-[10px] mobile:[20px]"
              target="_blank"
              field={whatsapp_link}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height={44}
                width={44}
                viewBox="0 0 448 512"
                className="ml-2 mt-2"
                fill={whatsapp_icon_color || "#fff"}
              >
                {/*!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.*/}
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
            </PrismicNextLink>
          )}
        </div>
      </footer>
    </>
  );
}
