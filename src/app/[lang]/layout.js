import { i18n } from "../../i18n-config";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default function Root({
  children,
  params,
}) {
  return (
    <html lang={params.lang}>
      <body>{children}</body>
    </html>
  );
}

export const metadata = {
  title: "i18n with next js",
  description: "",
};
