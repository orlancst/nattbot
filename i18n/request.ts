import {getRequestConfig} from "next-intl/server";

export default getRequestConfig(async ({requestLocale}) => {
  // Locale que viene de la ruta o del middleware
  const locale = (await requestLocale) || "es";

  return {
    locale,
    // Tus JSON están en app/messages/es.json y app/messages/en.json
    messages: (await import(`../app/messages/${locale}.json`)).default,
  };
});
