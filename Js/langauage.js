const traduction = {
  en: {
    home: "Home",
    serv: "Services",
    skills: "Our Skills",
    portfolio: "Portfolio",
    about: "About",
    contact: "Contact",
    english: "English",
    arabic: "Arabic",
  },
  ar: {
    home: "الرئيسة",
    serv: "الخدمات",
    skills: "المهارات",
    portfolio: "البورتفوليو",
    about: "عنا",
    contact: "تواصل",
    english: "الانجليزية",
    arabic: "العربية",
  },
};
const languageSelect = document.querySelector("select");

languageSelect.addEventListener("change", (eo) => {
  setlangauage(eo.target.value);
  console.log(setlangauage);
});
