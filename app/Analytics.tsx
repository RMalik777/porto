"use client";
import { configure } from "onedollarstats";
import { useEffect } from "react";

export function ODSAnalytics() {
	useEffect(() => {
		configure({
			trackLocalhostAs: "local.raflimalik.com",
		});
	}, []);

	return null;
}
