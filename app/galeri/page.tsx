import React from "react";
import GaleriHeader from "./_sections/header";
import GaleriDashboard from "./_sections/content";

export default function page() {
	return (
		<div className="min-h-screen">
			<GaleriHeader title="Galeri Foto" />
			<GaleriDashboard />
		</div>
	);
}
