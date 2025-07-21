import React from "react";
import InfoHeader from "./_sections/header";
import InfoDashboard from "./_sections/content";

export default function page() {
	return (
		<div className="min-h-screen">
			<InfoHeader title="Informasi" />
			<InfoDashboard />
		</div>
	);
}
