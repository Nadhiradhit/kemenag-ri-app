import React from "react";
import ProfileHeader from "../_sections/header";
import FunctionTaskDashboard from "../_sections/fungsi-tugas/content";

export default function page() {
	return (
		<div className="min-h-screen">
			<ProfileHeader title="Fungsi & Tugas" />
			<FunctionTaskDashboard />
		</div>
	);
}
