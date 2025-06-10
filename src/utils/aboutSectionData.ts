import { iconsObj } from "../assets/svg/icons/icons";
import type { aboutIconsDataProps } from "../types/types";
export const aboutIcons: aboutIconsDataProps[] = [
	{
		icon: iconsObj.iconCode,
		title: "Czysty kod",
		text: "Tworzę czytelny, modularny i łatwy w utrzymaniu kod.",
		color: "text-blue-400",
		bgColor: "bg-blue-900/30",
	},
	{
		icon: iconsObj.iconMobile,
		title: "Responsywność",
		text: "Wszystkie moje projekty działają perfekcyjnie na każdym urządzeniu.",
		color: "text-purple-400",
		bgColor: "bg-purple-900/30",
	},
	{
		icon: iconsObj.iconPerformance,
		title: "Wydajność",
		text: "Dbam o optymalizację i szybkość działania aplikacji.",
		color: "text-indigo-400",
		bgColor: "bg-indigo-900/30",
	},
	{
		icon: iconsObj.iconUsers,
		title: "User Experience",
		text: "Tworzę interfejsy z myślą o wygodzie użytkownika.",
		color: "text-pink-400",
		bgColor: "bg-pink-900/30",
	},
];
