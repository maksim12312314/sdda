import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./lang/en";
import ru from "./lang/ru";

i18n.use(initReactI18next)
    .init({
        resources: {
            en,
            ru,
        },
        lng: "en",
        fallbackLng: "en",

        interpolation: {
            escapeValue: false
        }
    });