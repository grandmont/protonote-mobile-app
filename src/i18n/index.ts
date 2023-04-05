import * as Localization from "expo-localization";
import { I18n } from "i18n-js";

import en from "./en";
import ptBR from "./pt-BR";

const i18n = new I18n({
  en,
  "pt-BR": ptBR,
  pt: ptBR,
});

const [{ languageCode }] = Localization.getLocales();

i18n.enableFallback = true;
i18n.defaultLocale = "en";
i18n.locale = languageCode;

export default i18n;
