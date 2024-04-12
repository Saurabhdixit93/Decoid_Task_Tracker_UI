import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SocialLink from "./SocialLink";

export default function AuthLayout({
  children,
  heading,
  footerTitle,
  socialType,
  toLink,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    const isUserLoggedIn = document.cookie.includes("token");
    if (isUserLoggedIn) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="w-full min-h-screen p-2 flex flex-col gap-10">
      <div className="w-full flex justify-start">
        <h2 className="text-3xl font-bold capitalize text-black">{heading}</h2>
      </div>

      <div className="w-full">{children}</div>

      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center">
          <div className="w-full border-t border-gray-300"></div>
          <div className="px-2 text-black font-semibold text-lg">Or</div>
          <div className="w-full border-t border-gray-300"></div>
        </div>

        <SocialLink title={footerTitle} type={socialType} toLink={toLink} />
      </div>
    </div>
  );
}
