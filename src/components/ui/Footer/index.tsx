import { Paragraph } from "../Paragraph";
import { socialLinks } from "../../../utils/socialLinksData";
import React from "react";
export const Footer = React.memo(() => {
	return (
		<footer className="py-6 border-t border-slate-800">
			<div className="flex flex-col items-center gap-2">
				<Paragraph
					content="Designed & built by Mikołaj Doktor"
					textColor="text-slate-500"
				/>
				<div className="flex gap-4">
					{socialLinks.map(({ href, label, icon: Icon }) => (
						<a key={label} href={href} target="_blank" rel="noreferrer">
							<Icon className="text-slate-400 hover:text-white text-xl" />
						</a>
					))}
				</div>
			</div>
		</footer>
	);
});
