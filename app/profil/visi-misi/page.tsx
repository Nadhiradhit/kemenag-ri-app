import React from "react";
import ProfileHeader from "../_sections/header";
import VisionMisionDashboard from "../_sections/visi-misi/content";

export default function page() {
	return (
		<div className="min-h-screen">
			<ProfileHeader title="Visi & Misi" />
			<VisionMisionDashboard />
		</div>
	);
}
