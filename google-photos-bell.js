// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function() {
	var uploader = document.getElementsByClassName('gsckL');

	if (uploader.length > 0) {
 		alert('Showing uploader');
	} else {
 		alert('Not showing uploader');
	}

	//Logic to determine if uploader had been active and it finished
	var bell = new Audio(chrome.runtime.getURL("sounds/small-bell.mp3"));
	bell.play();
});
