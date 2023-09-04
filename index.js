// ==UserScript==
// @name         Bilibili live enhance
// @namespace    https://github.com/lxl66566
// @supportURL   https://github.com/lxl66566/Bilibili-live-enhance
// @homepageURL  https://github.com/lxl66566/Bilibili-live-enhance
// @contributionURL https://github.com/lxl66566/Bilibili-live-enhance/issues
// @version      1.0.0-alpha
// @description  哔哩哔哩直播增强
// @author       lxl66566
// @connect      live.bilibili.com
// @match        /^https:\/\/live.bilibili.com\/\d+.*$/
// @grant        none
// @license 		 MIT
// ==/UserScript==

(function () {
	// rome-ignore lint/suspicious/noRedundantUseStrict: <explanation>
	"use strict";
	console.log("--------- begin Bilibili live enhance ---------");
	const hide_object = (class_) => {
		document.querySelector(`.${class_?.trim().replaceAll(" ", ".")}`)?.remove();
	};
	new Promise((resolve) => {
		setTimeout(() => {
			resolve();
		}, 3000); // 加载后才可清理
	}).then(() => {
		hide_object("awesome-pk-box");
		hide_object("right-ctnr");
		hide_object("gift-item");
		hide_object("flip-view over-hidden");
		hide_object("left-part-ctnr vertical-middle dp-table");
		hide_object("right-section");

		// 隐藏礼物栏
		const giftbar = document.querySelector(
			".gift-control-section.z-gift-control-section.bg-bright-filter",
		);
		const gift_parent = giftbar?.parentNode;
		const packages = document.querySelector(".item.z-gift-package");
		// TODO: make packages available
		packages && gift_parent?.appendChild(packages);
		giftbar.remove();

		console.log("--------- end Bilibili live enhance ---------");
	});
})();
