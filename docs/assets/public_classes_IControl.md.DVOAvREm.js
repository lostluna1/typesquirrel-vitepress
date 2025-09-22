import{_ as i,c as a,o as n,ae as l}from"./chunks/framework.C5fWPVDY.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"public/classes/IControl.md","filePath":"public/classes/IControl.md"}'),p={name:"public/classes/IControl.md"};function h(k,s,t,e,r,D){return n(),a("div",null,[...s[0]||(s[0]=[l(`<div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * Squirrel Language</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> *</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@package</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> IControl</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@global</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> 3.0.7</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * 控件管理类</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@global</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@exports</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IControl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * 设置控件是否可用</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {boolean}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> enable</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> - 是否可用</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SetEnable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">enable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * 是否处于高亮状态</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {boolean}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 是否高亮</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsHighlight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * 是否处于右键按下状态</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {boolean}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 是否右键按下</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsRBDown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * 是否处于拖拽状态</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {boolean}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 是否拖拽</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsDrag</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * 是否被双击</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {boolean}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 是否双击</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsDoubleClick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * 是否可拖拽</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {boolean}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 是否可拖拽</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsDragable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * 是否被点击</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {boolean}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 是否点击</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsClick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * 是否左键抬起</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {boolean}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 是否左键抬起</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsLBUp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * 是否处于绝对区域内</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {boolean}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 是否处于绝对区域内</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsOverAbsolutely</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * 是否处于区域内</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {boolean}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 是否处于区域内</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsOver</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * 是否自动重置鼠标检查</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {boolean}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 是否自动重置鼠标检查</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsAutoMouseCheckReset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsDrop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * 是否可见</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {boolean}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 是否可见</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsVisible</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * 是否右键抬起</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {boolean}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 是否右键抬起</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsRBUp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsOverOrClick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * 设置控件是否可见</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@param</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {boolean}</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> visible</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> - 是否可见</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> SetVisible</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">visible</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * 获取控件的X坐标</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {integer}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 控件的X坐标</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GetXPos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsParentDrager</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * 是否右键点击</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {boolean}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 是否右键点击</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsRClick</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * 是否窗口焦点</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {boolean}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 是否窗口焦点</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsWindowFocus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * 获取控件的Y坐标</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {integer}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 控件的Y坐标</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> GetYPos</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * 是否编辑框获得焦点</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {boolean}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 是否编辑框获得焦点</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsEditFocus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * 是否可用</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {boolean}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 是否可用</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsEnable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * 是否存在</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {boolean}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 是否存在</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsExist</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * 是否获得焦点</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {boolean}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 是否获得焦点</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsFocus</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	/**</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * 是否左键按下</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 * </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">@returns</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> {boolean}</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> 是否左键按下</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">	 */</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">	function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> IsLBDown</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,1)])])}const g=i(p,[["render",h]]);export{d as __pageData,g as default};
