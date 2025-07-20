import React from "react";
import ProfileHeader from "./_sections/header";
import ProfileContent from "./_sections/content";

export default function page() {
	return (
		<div className="min-h-screen">
			<ProfileHeader title="Profil" />
			<ProfileContent />
		</div>
	);
}
