import React from "react";
import LayananHeader from "./_sections/header";
import LayananDashboard from "./_sections/content";

export default function page() {
	return (
		<div className="min-h-screen">
			<LayananHeader title="Layanan Publik" />
			<LayananDashboard />
		</div>
	);
}
