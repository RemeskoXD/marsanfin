import { Shield, TrendingUp, Building2, Car, Heart, FileText, Briefcase, Calculator } from "lucide-react";
import { ServiceItem, Testimonial, DocumentItem } from "./types";

export const COMPANY_INFO = {
  name: "Marsan Fin s.r.o.",
  phone: "608 060 303",
  email: "info@marsanfin.cz",
  address: "Korunní 2569/108, 101 00 Praha 10 - Vinohrady",
  ico: "236 13 505",
  logoUrl: "https://web2.itnahodinu.cz/pojistovna1/logo.png"
};

export const SERVICES: ServiceItem[] = [
  {
    id: "insurance-life",
    title: "Životní pojištění",
    description: "Komplexní ochrana pro Vás a Vaši rodinu. Zajistíme finanční stabilitu v nečekaných životních situacích.",
    icon: Heart
  },
  {
    id: "insurance-property",
    title: "Pojištění majetku",
    description: "Ochrana Vašeho domova, nemovitostí i vybavení domácnosti proti živelným pohromám a krádeži.",
    icon: Building2
  },
  {
    id: "insurance-auto",
    title: "Pojištění vozidel",
    description: "Povinné ručení a havarijní pojištění na míru. Asistenční služby, na které se můžete spolehnout.",
    icon: Car
  },
  {
    id: "investments",
    title: "Investice a zhodnocení",
    description: "Strategické plánování bohatství. Podílové fondy, dluhopisy a investiční strategie pro konzervativní i dynamické klienty.",
    icon: TrendingUp
  },
  {
    id: "mortgages",
    title: "Hypotéky a úvěry",
    description: "Financování bydlení s nejvýhodnějšími úrokovými sazbami na trhu. Refinancování stávajících závazků.",
    icon: Calculator
  },
  {
    id: "business",
    title: "Podnikatelské pojištění",
    description: "Speciální produkty pro firmy a podnikatele. Pojištění odpovědnosti, přerušení provozu a flotilové pojištění.",
    icon: Briefcase
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    author: "Ing. Petr Novák",
    role: "Majitel stavební firmy",
    text: "S Marsan Fin spolupracujeme již 5 let. Oceňuji především rychlost a profesionalitu při řešení pojistných událostí naší firemní flotily."
  },
  {
    id: "t2",
    author: "Jana Dvořáková",
    role: "Lékařka",
    text: "Díky skvěle nastavenému investičnímu portfoliu mám jistotu, že mé úspory neztrácejí na hodnotě. Lidský přístup a odbornost."
  },
  {
    id: "t3",
    author: "Martin Svoboda",
    role: "IT Specialista",
    text: "Řešili jsme komplikovanou hypotéku. Tým Marsan Fin dokázal vyjednat podmínky, které nám v bance na přepážce nikdo nenabídl."
  }
];

export const DOCUMENTS: DocumentItem[] = [
  { title: "Osvědčení o registraci ČNB", type: "PDF", date: "2024" },
  { title: "Reklamační řád", type: "PDF", date: "2023" },
  { title: "Informace pro klienta", type: "PDF", date: "2024" },
  { title: "Seznam spolupracujících pojišťoven", type: "PDF", date: "2024" }
];