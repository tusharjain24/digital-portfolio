import ActiveSectionContextProvider from "@/context/active-section-context";
import ThemeContextProvider from "@/context/theme-context";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { cookies } from "next/headers";
import { Toaster } from "react-hot-toast";
import { PROJECT_TITLE, USER_DETAILS } from "@/constants/project.constants";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: `${PROJECT_TITLE}`,
  description:
    `${USER_DETAILS.firstName} ${USER_DETAILS.lastName} is a passionate Full-Stack Web Developer specializing in developing responsive, intuitive, and robust web applications from concept to deployment.`,
  keywords: [
    "Personal",
    "Digital",
    "Portfolio",
    `${USER_DETAILS.firstName}`,
    `${USER_DETAILS.lastName}`,
    "Bharuch",
    "Web",
    "Developer",
    "Web Developer",
    "Gujarat",
    "India",
    "Experienced",
    "Entry level",
    "Job",
    "Naukri",
    "Professional",
    "Website",
    "Web app",
    "Web Application",
    "Software",
    "Software Developer",
    "Software Development Engineer",
    "Software Engineer",
    "NextJS",
    "ReactJS",
    "NodeJS",
    "Front",
    "End",
    "Front end",
    "Back end",
    "Back",
    "Full",
    "Stack",
    "Full stack",
    "MERN",
    "MongoDB",
    "ExpressJS",
    "HTML",
    "CSS",
    "JavaScript",
    "Erlang",
    "EJS",
    "SQL",
    "Collaborator",
    "Collaboration",
    "Git",
    "Github",
    "Dynamic",
    "Passionate",
    "Full Stack Web Developer",
    "dedicated",
    "user-centric",
    "innovative",
    "design",
    "robust",
    "robust back-end",
    "functionality",
    "UI/UX",
    "UI",
    "UX",
    "REST",
    "API",
    "REST API",
  ]
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const theme = cookieStore.get("theme")?.value;

  return (
    <html
      lang="en"
      className={`scroll-smooth! ${theme === "dark" ? "dark" : ""}`}>
      <head>
        <meta
          name="google-site-verification"
          content="Ko9LxTYV9-KxCx0Rh82oVtryvBAAfEboWroQyzysoPo"
        />
        <link rel="canonical" href={`${process.env.DEPLOYED_PROJECT_URL}`} />
      </head>
      <body
        className={`${poppins.className} bg-gray-50 text-gray-950 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            {children}
            <Toaster position="bottom-center" />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
