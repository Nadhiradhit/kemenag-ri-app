import React from "react";
import ProfileHeader from "../_sections/header";
import HistoryDashboard from "../_sections/sejarah/content";

export default function page() {
	return (
		<div className="min-h-screen">
			<ProfileHeader title="Sejarah Kementrian Agama" />
			<HistoryDashboard />
		</div>
	);
}
