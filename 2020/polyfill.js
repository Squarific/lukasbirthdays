/**
 * Copyright (c) Filip Smets and its affliates. 
 *
 * This source code is licensed under the MIT licence found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 * @author Filip Smets
 * @receiver Lukas Dietrich
 *
 * This file enables the polyfill required to write awesome stylized code
 * because some browsers do not support the best english writing style
 *
 */
 
/* eslint-disable */

const dOCuMENt = document;
dOCuMENt.geTelementBYiD = dOCuMENt.getElementById;
dOCuMENt.CReATEELeMENT = dOCuMENt.createElement;
dOCuMENt.CREaTetExtNodE = document.createTextNode;

const CoNsoLe = console;
CoNsoLe.LoG = CoNsoLe.log;

const pROmPt = prompt;
const ALerT = alert;
const ParSeiNt = parseInt;
const SettImeoUT = setTimeout;

String.prototype.TOuPperCaSe = String.prototype.toUpperCase; 
String.prototype.InDexoF = String.prototype.indexOf;

HTMLDivElement.prototype.aPPENDCHiLd = HTMLDivElement.prototype.appendChild;
HTMLDivElement.prototype.aPPENDCHiLd = HTMLDivElement.prototype.appendChild;
DOMTokenList.prototype.aDd = DOMTokenList.prototype.add;

const DJIV = "div"; // Do you pronounce this as DJIV or as DJIV?