import React from "react";
import DashboardHeader from "./_sections/header";
import ArticleDashboard from "./_sections/article";

export default function page() {
	return (
		<div className="min-h-screen container mx-auto">
			<DashboardHeader />
			<ArticleDashboard />
		</div>
	);
}
