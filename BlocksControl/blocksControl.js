"use strict";function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var o=0;o<t.length;o++){var i=t[o];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function _createClass(e,t,o){return t&&_defineProperties(e.prototype,t),o&&_defineProperties(e,o),e}var WidthControl=function(){function WidthControl(e,t){_classCallCheck(this,WidthControl),this.container=e,this.options=t,this.blocks={},this.findsBlocks_In_Container(),this.sequenceNumbersBlocks=Object.keys(this.blocks),this.calculatesPositionBlocks_Window(),this.complementsOptions_Blocks(),this.addPercentScrolledPartOfPage(),this.calculatesFinalBlockWidth(),this.calculatesFinalBlockHeight(),this.calculatesNumber_For_ScrollingWindow_Block_OutOfSight()}return _createClass(WidthControl,[{key:"complementsOptions_Blocks",value:function complementsOptions_Blocks(){var o=this;this.sequenceNumbersBlocks.forEach(function(e){for(var t in o.options[e])o.blocks[e][t]=o.options[e][t]})}},{key:"addEventScrollForWindow",value:function addEventScrollForWindow(){var e=this;window.addEventListener("scroll",function(){e.checks_If_BlcokVisible({top:window.pageYOffset,bottom:window.pageYOffset+document.documentElement.clientHeight})})}},{key:"checks_If_BlcokVisible",value:function checks_If_BlcokVisible(t){var o=this;this.sequenceNumbersBlocks.forEach(function(e){if(t.top-o.blocks[e].block.clientHeight<=o.blocks[e].position.top&&o.blocks[e].position.top<t.bottom){if(o.calculatesWindowScrolling(e),o.blocks[e].isVisible)return;o.blocks[e].isVisible=!0}else o.blocks[e].isVisible&&(o.blocks[e].isVisible=!1)})}},{key:"calculatesWindowScrolling",value:function calculatesWindowScrolling(e){var t=(window.innerHeight-this.blocks[e].block.getBoundingClientRect().top)/this.blocks[1].percentScrollWindow;this.blocks[e].delayedLaunch&&this.blocks[e].delayedLaunch[0]&&t<this.blocks[e].delayedLaunch[1]||(this.setsPercentScrolledPartOfPage(e,t,[!1]),this.changeBlock(e,t))}},{key:"setsPercentScrolledPartOfPage",value:function setsPercentScrolledPartOfPage(e,t,o){if(!(100<=t))return o[0]?(this.blocks[e].scrolledPartOfPage+=o[1],void(this.blocks[e].scrolledPartOfPage_For_DelayedLaunch=t)):void(this.blocks[e].delayedLaunch||o[0]||(this.blocks[e].scrolledPartOfPage=t))}},{key:"checks_If_PercentageNeedsChanged",value:function checks_If_PercentageNeedsChanged(e,t,o){return this.blocks[e].aaa=t-o,this.blocks[e].delayedLaunchNumber!==Math.floor(t/(100/o))?(this.blocks[e].delayedLaunchNumber=Math.floor(t/(100/o)),1):0}},{key:"findsBlocks_In_Container",value:function findsBlocks_In_Container(){var i=this,e=this.container.children;Array.prototype.forEach.call(e,function(e){for(var t,o=0;o<e.classList.length;o++)e.classList[o].includes("blocks-control-block")&&(t=(t=e.classList[o].split("-"))[t.length-1],i.blocks[t]={block:e},i.addProperty_IsVisible_Block(t))})}},{key:"addPercentScrolledPartOfPage",value:function addPercentScrolledPartOfPage(){var t=this;this.sequenceNumbersBlocks.forEach(function(e){t.blocks[e].scrolledPartOfPage=0})}},{key:"addProperty_IsVisible_Block",value:function addProperty_IsVisible_Block(e){this.blocks[e].isVisible=!1}},{key:"calculatesPositionBlocks_Window",value:function calculatesPositionBlocks_Window(){var o=this;this.sequenceNumbersBlocks.forEach(function(e){var t={top:Math.round(window.pageYOffset+o.blocks[e].block.getBoundingClientRect().top),bottom:Math.round(window.pageXOffset+o.blocks[e].block.getBoundingClientRect().bottom)};o.blocks[e].position=t})}},{key:"calculatesFinalBlockWidth",value:function calculatesFinalBlockWidth(){for(var e=0;e<this.sequenceNumbersBlocks.length;e++){var t,o,i=this.sequenceNumbersBlocks[e];"width"===this.blocks[i].actionProperty&&(t=0,o=this.blocks[i].block.clientWidth/100*this.blocks[i].percent,"enlarge"===this.blocks[i].action?t=this.blocks[i].block.clientWidth+o:"reduce"===this.blocks[i].action&&(t=this.blocks[i].block.clientWidth-o),this.blocks[i].finalWidth=t,this.blocks[i].initialWidth=this.blocks[i].block.clientWidth)}}},{key:"calculatesFinalBlockHeight",value:function calculatesFinalBlockHeight(){for(var e=0;e<this.sequenceNumbersBlocks.length;e++){var t,o,i=this.sequenceNumbersBlocks[e];"height"===this.blocks[i].actionProperty&&(t=0,o=this.blocks[i].block.clientHeight/100*this.blocks[i].percent,"enlarge"===this.blocks[i].action?t=this.blocks[i].block.clientHeight+o:"reduce"===this.blocks[i].action&&(t=this.blocks[i].block.clientHeight-o),this.blocks[i].finalHeight=t,this.blocks[i].initialHeight=this.blocks[i].block.clientHeight)}}},{key:"calculatesNumber_For_ScrollingWindow_Block_OutOfSight",value:function calculatesNumber_For_ScrollingWindow_Block_OutOfSight(){var o=this;this.sequenceNumbersBlocks.forEach(function(e){var t=window.innerHeight+o.blocks[e].block.getBoundingClientRect().height;o.blocks[e].percentScrollWindow=t/100})}},{key:"changeBlock",value:function changeBlock(e,t){var o,i=this.blocks[e].scrolledPartOfPage;this.blocks[e].delayedLaunch&&this.blocks[e].delayedLaunch[0]&&(i=this.blocks[e].scrolledPartOfPage_For_DelayedLaunch-this.blocks[e].delayedLaunch[1],i+=this.checks_If_PercentageNeedsChanged(e,i,this.blocks[e].delayedLaunch[1]),this.setsPercentScrolledPartOfPage(e,t,[!0,i])),"width"===this.blocks[e].actionProperty?(t=Math.abs(i*((this.blocks[e].finalWidth-this.blocks[e].initialWidth)/100)),o=this.blocks[e].initialWidth,"enlarge"===this.blocks[e].action?o+=t:"reduce"===this.blocks[e].action&&(o-=t),this.setsNewWidthForBlock(e,o)):"height"===this.blocks[e].actionProperty&&(o=Math.abs(i*((this.blocks[e].finalHeight-this.blocks[e].initialHeight)/100)),i=this.blocks[e].initialHeight,"enlarge"===this.blocks[e].action?i+=o:"reduce"===this.blocks[e].action&&(i-=o),this.setsNewHeightForBlock(e,i))}},{key:"setsNewWidthForBlock",value:function setsNewWidthForBlock(e,t){this.blocks[e].block.style.width="".concat(t,"px")}},{key:"setsNewHeightForBlock",value:function setsNewHeightForBlock(e,t){this.blocks[e].block.style.height="".concat(t,"px")}},{key:"run",value:function run(){this.addEventScrollForWindow()}}]),WidthControl}();