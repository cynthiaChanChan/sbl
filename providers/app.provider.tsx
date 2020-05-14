import { createContext, useState, useEffect } from "react";
import { useRouter } from "next/router";
import navList from "../components/Header/Header.data";

type AppProviderProps = {
    children: React.ReactChild;
};
type AppContext = {
    title: string;
    setTitle: (title: string) => void;
};

const options: AppContext = {
    title: "",
    setTitle: (title) => {},
};
export const AppContext = createContext(options);

const AppProvider = ({ children }: AppProviderProps) => {
    const defaultTitle = "识伯乐-智能驾培教学管理系统";
    const [title, setTitle] = useState(defaultTitle);
    const router = useRouter();

    useEffect(() => {
        const title = document.querySelector("title");
        if (title && title.textContent) {
            let pageTitle: string | undefined = "";
            if (router.query.section === "contact") {
                pageTitle = navList[navList.length - 1].title;
            } else {
                const section = navList.find((elem) =>
                    router.route.includes(elem.url)
                );
                pageTitle = section ? section.title : defaultTitle;
            }
            setTitle(pageTitle || "");
        }
    }, [router.query.section, router.route]);
    return (
        <AppContext.Provider
            value={{
                title,
                setTitle,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
