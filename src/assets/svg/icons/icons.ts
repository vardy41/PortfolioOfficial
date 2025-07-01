import React from "react";

export const iconsObj = {
	iconGit: React.lazy(() =>
		import("react-icons/fa").then((m) => ({ default: m.FaGithub }))
	),
	iconLinkedin: React.lazy(() =>
		import("react-icons/fa").then((m) => ({ default: m.FaLinkedin }))
	),
	iconEnvelope: React.lazy(() =>
		import("react-icons/fa").then((m) => ({ default: m.FaEnvelope }))
	),
	iconCode: React.lazy(() =>
		import("react-icons/fa").then((m) => ({ default: m.FaCode }))
	),
	iconMobile: React.lazy(() =>
		import("react-icons/fa").then((m) => ({ default: m.FaMobileAlt }))
	),
	iconPerformance: React.lazy(() =>
		import("react-icons/fa").then((m) => ({ default: m.FaTachometerAlt }))
	),
	iconUsers: React.lazy(() =>
		import("react-icons/fa").then((m) => ({ default: m.FaUsers }))
	),
	iconServer: React.lazy(() =>
		import("react-icons/fa").then((m) => ({ default: m.FaServer }))
	),
	iconTools: React.lazy(() =>
		import("react-icons/fa").then((m) => ({ default: m.FaTools }))
	),
	iconCheck: React.lazy(() =>
		import("react-icons/fa").then((m) => ({ default: m.FaCheckCircle }))
	),
	iconDemo: React.lazy(() =>
		import("react-icons/fa").then((m) => ({ default: m.FaExternalLinkAlt }))
	),
};
