import { Popover } from "@headlessui/react";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import Button from "../Button";
// Local Data
import data from "../../data/portfolio.json";

const Header = ({ handleWorkScroll, handleAboutScroll, isBlog }) => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const { name, showBlog, showResume } = data;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <Popover className="block tablet:hidden mt-5">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between p-2 laptop:p-0">
              <h1
                onClick={() => router.push("/")}
                className="font-medium p-2 laptop:p-0 link"
              >
                {name}.
              </h1>

              <div className="flex items-center">
                {data.darkMode && (
                  <Button
                    onClick={() =>
                      setTheme(theme === "dark" ? "light" : "dark")
                    }
                  >
                    <Image
                      className="h-6"
                      src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"
                        }`}
                      width={20}
                      height={20}
                      alt="theme-toggler"
                    />
                  </Button>
                )}

                <Popover.Button>
                  <Image
                    className="h-5"
                    src={`/images/${!open
                      ? theme === "dark"
                        ? "menu-white.svg"
                        : "menu.svg"
                      : theme === "light"
                        ? "cancel.svg"
                        : "cancel-white.svg"
                      }`}
                    alt="menu-toggler"
                    width={30}
                    height={30}
                  />
                </Popover.Button>
              </div>
            </div>
            <Popover.Panel
              className={`absolute right-0 z-10 w-11/12 p-4 ${theme === "dark" ? "bg-slate-800" : "bg-white"
                } shadow-md rounded-md`}
            >
              {!isBlog ? (
                <div className="grid grid-cols-1">
                  <Button onClick={handleWorkScroll}>Work</Button>
                  <Button onClick={handleAboutScroll}>About</Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() =>
                        window.open("mailto:michael@helixdynamics.onmicrosoft.com")
                      }
                    >
                      Resume
                    </Button>
                  )}

                  <Button
<<<<<<< HEAD
                    onClick={() => window.open("https://outlook.office.com/bookwithme/user/2e08b4c9ecd64d8cb374de35010ec9fd%40mbaaga.onmicrosoft.com/meetingtype/4H2RMggwpUab86nuLMBxcA2?anonymous&isanonymous=true")}
=======
                    onClick={() => window.open("mailto:michael@helixdynamics.onmicrosoft.com")}
>>>>>>> 30ee8b082c71e9fa5abaccfaeadc0dfc5c54c419
                  >
                    Contact
                  </Button>
                </div>
              ) : (
                <div className="grid grid-cols-1">
                  <Button onClick={() => router.push("/")} classes="first:ml-1">
                    Home
                  </Button>
                  {showBlog && (
                    <Button onClick={() => router.push("/blog")}>Blog</Button>
                  )}
                  {showResume && (
                    <Button
                      onClick={() => router.push("/resume")}
                      classes="first:ml-1"
                    >
                      Resume
                    </Button>
                  )}

                  <Button
<<<<<<< HEAD
                    onClick={() => window.open("https://outlook.office.com/bookwithme/user/2e08b4c9ecd64d8cb374de35010ec9fd%40mbaaga.onmicrosoft.com/meetingtype/4H2RMggwpUab86nuLMBxcA2?anonymous&isanonymous=true")}
=======
                    onClick={() => window.open("mailto:michael@helixdynamics.onmicrosoft.com")}
>>>>>>> 30ee8b082c71e9fa5abaccfaeadc0dfc5c54c419
                  >
                    Contact
                  </Button>
                </div>
              )}
            </Popover.Panel>
          </>
        )}
      </Popover>
      <div
        className={`mt-10 hidden flex-row items-center justify-between sticky ${theme === "light" && "bg-white"
          } dark:text-white top-0 z-10 tablet:flex`}
      >
        <h1
          onClick={() => router.push("/")}
          className="font-medium cursor-pointer mob:p-2 laptop:p-0"
        >
          {name}.
        </h1>
        {!isBlog ? (
          <div className="flex">
            <Button onClick={handleWorkScroll}>Work</Button>
            <Button onClick={handleAboutScroll}>About</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

<<<<<<< HEAD
            <Button onClick={() => window.open("https://outlook.office.com/bookwithme/user/2e08b4c9ecd64d8cb374de35010ec9fd%40mbaaga.onmicrosoft.com/meetingtype/4H2RMggwpUab86nuLMBxcA2?anonymous&isanonymous=true")}>
=======
            <Button onClick={() => window.open("mailto:michael@helixdynamics.onmicrosoft.com")}>
>>>>>>> 30ee8b082c71e9fa5abaccfaeadc0dfc5c54c419
              Contact
            </Button>
            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Image
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt="theme-toggler"
                  width={20}
                  height={20}
                />
              </Button>
            )}
          </div>
        ) : (
          <div className="flex">
            <Button onClick={() => router.push("/")}>Home</Button>
            {showBlog && (
              <Button onClick={() => router.push("/blog")}>Blog</Button>
            )}
            {showResume && (
              <Button
                onClick={() => router.push("/resume")}
                classes="first:ml-1"
              >
                Resume
              </Button>
            )}

<<<<<<< HEAD
            <Button onClick={() => window.open("https://outlook.office.com/bookwithme/user/2e08b4c9ecd64d8cb374de35010ec9fd%40mbaaga.onmicrosoft.com/meetingtype/4H2RMggwpUab86nuLMBxcA2?anonymous&isanonymous=true")}>
=======
            <Button onClick={() => window.open("mailto:michael@helixdynamics.onmicrosoft.com")}>
>>>>>>> 30ee8b082c71e9fa5abaccfaeadc0dfc5c54c419
              Contact
            </Button>

            {mounted && theme && data.darkMode && (
              <Button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <Image
                  className="h-6"
                  src={`/images/${theme === "dark" ? "moon.svg" : "sun.svg"}`}
                  alt="theme-toggler"
                  width={20}
                  height={20}
                />
              </Button>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
