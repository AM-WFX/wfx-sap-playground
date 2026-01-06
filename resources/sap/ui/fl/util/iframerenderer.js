/*!
 * OpenUI5
 * (c) Copyright 2025 SAP SE or an SAP affiliate company.
 * Licensed under the Apache License, Version 2.0 - see LICENSE.txt.
 */
sap.ui.define(["sap/base/util/uid"],function(t){"use strict";function e(t,e,i){if(i!==""||i.toLowerCase()==="auto"){t.style(e,i)}}function i(t){return Object.keys(t).filter(e=>t[e]).map(t=>t.replace(/[A-Z]/g,"-$&").toLowerCase()).join(" ")}var n={apiVersion:2};n.render=function(n,o){n.openStart("div",o);e(n,"width",o.getWidth());e(n,"height",o.getHeight());n.openEnd();n.openStart("iframe",`${o.getId()}-${t()}`);e(n,"width",o.getWidth());e(n,"height",o.getHeight());n.style("display","block");n.style("border","none");const r=o.getTitle();const a=o.getAdvancedSettings();const{additionalSandboxParameters:s,...d}=a;const c=s?.join(" ");const g=i(d);const l=c?`${g} ${c}`:g;n.attr("src",o.getUrl());if(r){n.attr("title",r)}n.attr("sandbox",l);n.openEnd();n.close("iframe");n.close("div")};return n},true);
//# sourceMappingURL=IFrameRenderer.js.map