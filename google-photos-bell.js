// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

var observer = new MutationObserver(function(mutations) {
	console.log("Mutation done");

	for(let mutation of mutations) {
		if (mutation.target.className.indexOf("TUXL9e") > -1) {
			var bell = new Audio(chrome.runtime.getURL("sounds/small-bell.mp3"));
			bell.play();
		}

		/*for (const node of addedNodes) {
			if (!node.tagName) continue; // not an element

			if (node.classList.contains('xfz7pe')) {
				//Logic to determine if uploader had been active and it finished
				var bell = new Audio(chrome.runtime.getURL("sounds/small-bell.mp3"));
				bell.play();
			}
		}*/
	}
});

var container = document.documentElement || document.body;
var config = { subtree: true, attributes: true };

observer.observe(container, config);