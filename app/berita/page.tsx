import React from "react";
import NewsHeader from "./_sections/header";
import NewsDashboard from "./_sections/content";

export default function page() {
	return (
		<div className="min-h-screen">
			<NewsHeader title="Berita" />
			<NewsDashboard />
		</div>
	);
}
