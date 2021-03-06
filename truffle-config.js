module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      gas: 5000000
    }
  },
  compilers: {
    solc: {
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200      // Default: 200
        },
      }
    }
  }
};
/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * truffleframework.com/docs/advanced/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like truffle-hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura API
 * keys are available for free at: infura.io/register
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

// const HDWalletProvider = require('truffle-hdwallet-provider');
// const infuraKey = "fj4jll3k.....";
//
// const fs = require('fs');
// const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    ropsten: {
      provider: function () {
        HDWalletProvider = require("truffle-hdwallet-provider");
        mnemonic = "lol wtf no";
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/");
      },
      network_id: '3',
      // gas: 5000000
      gas: 4700000
    },
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*"
    }
  }
};<!DOCTYPE html><html lang="en-US"><head>
	<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<link rel="pingback" href="https://martians.finance/xmlrpc.php">

	<script type="text/javascript">
		document.documentElement.className = 'js';
	</script>

	<script>var et_site_url='https://martians.finance';var et_post_id='8';function et_core_page_resource_fallback(a,b){"undefined"===typeof b&&(b=a.sheet.cssRules&&0===a.sheet.cssRules.length);b&&(a.onerror=null,a.onload=null,a.href?a.href=et_site_url+"/?et_core_page_resource="+a.id+et_post_id:a.src&&(a.src=et_site_url+"/?et_core_page_resource="+a.id+et_post_id))}
</script><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1">

	<!-- This site is optimized with the Yoast SEO plugin v16.4 - https://yoast.com/wordpress/plugins/seo/ -->
	<title>Home - NxtGem Finance</title>
	<link rel="canonical" href="https://martiians.finance/">
	<meta property="og:locale" content="en_US">
	<meta property="og:type" content="website">
	<meta property="og:title" content="Home - Martians Finance">
	<meta property="og:url" content="https://martians.finance/">
	<meta property="og:site_name" content="Martians Finance">
	<meta property="article:modified_time" content="2021-06-08T11:57:24+00:00">
	<meta name="twitter:card" content="summary_large_image">
	<script type="application/ld+json" class="yoast-schema-graph">{"@context":"https://schema.org","@graph":[{"@type":"WebSite","@id":"https://martians.finance/#website","url":"https://martians.finance/","name":"Martians Finance","description":"Mars is Waiting","potentialAction":[{"@type":"SearchAction","target":"https://martians.finance/?s={search_term_string}","query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":"WebPage","@id":"https://martians.finance/#webpage","url":"https://martians.finance/","name":"Home - Martians Finance","isPartOf":{"@id":"https://martians.finance/#website"},"datePublished":"2021-06-05T07:56:18+00:00","dateModified":"2021-06-08T11:57:24+00:00","breadcrumb":{"@id":"https://martians.finance/#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["https://martians.finance/"]}]},{"@type":"BreadcrumbList","@id":"https://martians.finance/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"item":{"@id":"https://martians.finance/#webpage"}}]}]}</script>
	<!-- / Yoast SEO plugin. -->


<link rel="dns-prefetch" href="//martians.finance">
<link rel="dns-prefetch" href="//fonts.googleapis.com">
<link rel="dns-prefetch" href="//s.w.org">
<link rel="alternate" type="application/rss+xml" title="Martians Finance ?? Feed" href="https://martiians.finance/feed/">
<link rel="alternate" type="application/rss+xml" title="Martians Finance ?? Comments Feed" href="https://martians.finance/comments/feed/">
		<script type="text/javascript">
			window._wpemojiSettings = {"baseUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.0.1\/72x72\/","ext":".png","svgUrl":"https:\/\/s.w.org\/images\/core\/emoji\/13.0.1\/svg\/","svgExt":".svg","source":{"concatemoji":"https:\/\/martians.finance\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.7.2"}};
			!function(e,a,t){var n,r,o,i=a.createElement("canvas"),p=i.getContext&&i.getContext("2d");function s(e,t){var a=String.fromCharCode;p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,e),0,0);e=i.toDataURL();return p.clearRect(0,0,i.width,i.height),p.fillText(a.apply(this,t),0,0),e===i.toDataURL()}function c(e){var t=a.createElement("script");t.src=e,t.defer=t.type="text/javascript",a.getElementsByTagName("head")[0].appendChild(t)}for(o=Array("flag","emoji"),t.supports={everything:!0,everythingExceptFlag:!0},r=0;r<o.length;r++)t.supports[o[r]]=function(e){if(!p||!p.fillText)return!1;switch(p.textBaseline="top",p.font="600 32px Arial",e){case"flag":return s([127987,65039,8205,9895,65039],[127987,65039,8203,9895,65039])?!1:!s([55356,56826,55356,56819],[55356,56826,8203,55356,56819])&&!s([55356,57332,56128,56423,56128,56418,56128,56421,56128,56430,56128,56423,56128,56447],[55356,57332,8203,56128,56423,8203,56128,56418,8203,56128,56421,8203,56128,56430,8203,56128,56423,8203,56128,56447]);case"emoji":return!s([55357,56424,8205,55356,57212],[55357,56424,8203,55356,57212])}return!1}(o[r]),t.supports.everything=t.supports.everything&&t.supports[o[r]],"flag"!==o[r]&&(t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&t.supports[o[r]]);t.supports.everythingExceptFlag=t.supports.everythingExceptFlag&&!t.supports.flag,t.DOMReady=!1,t.readyCallback=function(){t.DOMReady=!0},t.supports.everything||(n=function(){t.readyCallback()},a.addEventListener?(a.addEventListener("DOMContentLoaded",n,!1),e.addEventListener("load",n,!1)):(e.attachEvent("onload",n),a.attachEvent("onreadystatechange",function(){"complete"===a.readyState&&t.readyCallback()})),(n=t.source||{}).concatemoji?c(n.concatemoji):n.wpemoji&&n.twemoji&&(c(n.twemoji),c(n.wpemoji)))}(window,document,window._wpemojiSettings);
		</script>
		<meta content="Divi v.4.9.4" name="generator"><style type="text/css">
img.wp-smiley,
img.emoji {
	display: inline !important;
	border: none !important;
	box-shadow: none !important;
	height: 1em !important;
	width: 1em !important;
	margin: 0 .07em !important;
	vertical-align: -0.1em !important;
	background: none !important;
	padding: 0 !important;
}
</style>
	<link rel="stylesheet" id="wp-block-library-css" href="wp-includes/css/dist/block-library/style.min.css" type="text/css" media="all">
<link rel="stylesheet" id="divi-fonts-css" href="../fonts.googleapis.com/css.css" type="text/css" media="all">
<link rel="stylesheet" id="divi-style-css" href="wp-content/themes/Divi/style.css" type="text/css" media="all">
<link rel="stylesheet" id="et-builder-googlefonts-cached-css" href="../fonts.googleapis.com/css.css" type="text/css" media="all">
<link rel="stylesheet" id="dashicons-css" href="wp-includes/css/dashicons.min.css" type="text/css" media="all">
<script type="text/javascript" src="wp-includes/js/jquery/jquery.min.js" id="jquery-core-js"></script>
<script type="text/javascript" src="wp-includes/js/jquery/jquery-migrate.min.js" id="jquery-migrate-js"></script>
<link rel="https://api.w.org/" href="https://martians.finance/wp-json/"><link rel="alternate" type="application/json" href="https://martians.finance/wp-json/wp/v2/pages/8"><link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://martians.finance/xmlrpc.php?rsd">
<link rel="wlwmanifest" type="application/wlwmanifest+xml" href="https://martians.finance/wp-includes/wlwmanifest.xml"> 
<meta name="generator" content="WordPress 5.7.2">
<link rel="shortlink" href="https://martians.finance/">
<link rel="alternate" type="application/json+oembed" href="https://martians.finance/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fmartians.finance%2F">
<link rel="alternate" type="text/xml+oembed" href="https://martians.finance/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fmartians.finance%2F&format=xml">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"><link rel="preload" href="https://martians.finance/wp-content/themes/Divi/core/admin/fonts/modules.ttf" as="font" crossorigin="anonymous"><link rel="icon" href="wp-content/uploads/2021/06/cropped-favicon-2-32x32.png" sizes="32x32">
<link rel="icon" href="wp-content/uploads/2021/06/cropped-favicon-2-192x192.png" sizes="192x192">
<link rel="apple-touch-icon" href="wp-content/uploads/2021/06/cropped-favicon-2-180x180.png">
<meta name="msapplication-TileImage" content="wp-content/uploads/2021/06/cropped-favicon-2-270x270.png">
<link rel="stylesheet" id="et-core-unified-8-cached-inline-styles" href="wp-content/et-cache/8/et-core-unified-8-16231535608484.min.css" onerror="et_core_page_resource_fallback(this, true)" onload="et_core_page_resource_fallback(this)"></head>
<body data-rsssl="1" class="home page-template-default page page-id-8 et_pb_button_helper_class et_fixed_nav et_show_nav et_primary_nav_dropdown_animation_fade et_secondary_nav_dropdown_animation_fade et_header_style_left et_pb_footer_columns4 et_cover_background et_pb_gutter linux et_pb_gutters3 et_pb_pagebuilder_layout et_smooth_scroll et_no_sidebar et_divi_theme et-db et_minified_js et_minified_css">
	<div id="page-container">

	
	
			<header id="main-header" data-height-onload="75">
			<div class="container clearfix et_menu_container">
							<div class="logo_container">
					<span class="logo_helper"></span>
					<a href="./index.html">
						<img src="wp-content/uploads/2021/06/logo.png" alt="NxtGem Finance" id="logo" data-height-percentage="77">
					</a>
				</div>
							<div id="et-top-navigation" data-height="75" data-fixed-height="75">
											<nav id="top-menu-nav">
						<ul id="top-menu" class="nav"><li id="menu-item-67" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-67"><a href="index.html">Features</a></li>
<li id="menu-item-66" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-66"><a href="index.html">Tokenomics</a></li>
<li id="menu-item-68" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-68"><a href="index.html">Roadmap</a></li>
<li id="menu-item-69" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-69"><a href="index.html">Contract</a></li>
<li id="menu-item-70" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-70"><a href="../docs.martians.finance/index.html">Whitepaper</a></li>
</ul>						</nav>
					
					
					
					
					<div id="et_mobile_nav_menu">
				<div class="mobile_nav closed">
					<span class="select_page">Select Page</span>
					<span class="mobile_menu_bar mobile_menu_bar_toggle"></span>
				</div>
			</div>				</div> <!-- #et-top-navigation -->
			</div> <!-- .container -->
			<div class="et_search_outer">
				<div class="container et_search_form_container">
					<form role="search" method="get" class="et-search-form" action="https://martians.finance/">
					<input type="search" class="et-search-field" placeholder="Search &" value name="s" title="Search for:">					</form>
					<span class="et_close_search_field"></span>
				</div>
			</div>
		</header> <!-- #main-header -->
			<div id="et-main-area">
	
<div id="main-content">


			
				<article id="post-8" class="post-8 page type-page status-publish hentry">

				
					<div class="entry-content">
					<div id="et-boc" class="et-boc">
			
		<div class="et-l et-l--post">
			<div class="et_builder_inner_content et_pb_gutters3">
		<div class="et_pb_section et_pb_section_0 et_pb_with_background et_section_regular section_has_divider et_pb_bottom_divider">
				
				
				
				
					<div class="et_pb_row et_pb_row_0">
				<div class="et_pb_column et_pb_column_4_4 et_pb_column_0  et_pb_css_mix_blend_mode_passthrough et-last-child">
				
				
				<div class="et_pb_module et_pb_image et_pb_image_0 et_animated et-waypoint">
				
				
				<span class="et_pb_image_wrap "><img loading="lazy" src="wp-content/uploads/2021/06/TP.png" alt title="TP" height="auto" width="auto" srcset="wp-content/uploads/2021/06/TP.png 404w, wp-content/uploads/2021/06/TP-300x281.png 300w" sizes="(max-width: 404px) 100vw, 404px" class="wp-image-31"></span>
			</div><div class="et_pb_module et_pb_text et_pb_text_0  et_pb_text_align_center et_pb_bg_layout_dark">
				
				
				<div class="et_pb_text_inner"><h1>NxtGem</h1></div>
			</div> <!-- .et_pb_text -->
			</div> <!-- .et_pb_column -->
				
				
			</div> <!-- .et_pb_row --><div class="et_pb_row et_pb_row_1">
				<div class="et_pb_column et_pb_column_4_4 et_pb_column_1  et_pb_css_mix_blend_mode_passthrough et-last-child">
				
				
				<div class="et_pb_module et_pb_text et_pb_text_1  et_pb_text_align_center et_pb_bg_layout_dark">
				
				
				<div class="et_pb_text_inner"><h3>Nxt Crew IS WAITING</h3>
<p>Earn BNB simply by holding NxtGem Finance Token</p></div>
			</div> <!-- .et_pb_text -->
			</div> <!-- .et_pb_column -->
				
				
			</div> <!-- .et_pb_row --><div class="et_pb_row et_pb_row_2">
				<div class="et_pb_column et_pb_column_1_3 et_pb_column_2  et_pb_css_mix_blend_mode_passthrough">
				
				
				<div class="et_pb_button_module_wrapper et_pb_button_0_wrapper et_pb_button_alignment_center et_pb_module ">
				<a class="et_pb_button et_pb_button_0 et_hover_enabled et_pb_bg_layout_light">Chart</a>
			</div><div class="et_pb_button_module_wrapper et_pb_button_1_wrapper et_pb_button_alignment_center et_pb_module ">
				<a class="et_pb_button et_pb_custom_button_icon et_pb_button_1 et_hover_enabled et_pb_bg_layout_light" data-icon="??">POO CHART - SOON</a>
			</div>
			</div> <!-- .et_pb_column --><div class="et_pb_column et_pb_column_1_3 et_pb_column_3  et_pb_css_mix_blend_mode_passthrough">
				
				
				<div class="et_pb_button_module_wrapper et_pb_button_2_wrapper et_pb_button_alignment_center et_pb_module ">
				<a class="et_pb_button et_pb_button_2 et_hover_enabled et_pb_bg_layout_light">BUY</a>
			</div><div class="et_pb_button_module_wrapper et_pb_button_3_wrapper et_pb_button_alignment_center et_pb_module ">
				<a class="et_pb_button et_pb_custom_button_icon et_pb_button_3 et_hover_enabled et_pb_bg_layout_light" data-icon="??">Pancakeswap - SOON</a>
			</div>
			</div> <!-- .et_pb_column --><div class="et_pb_column et_pb_column_1_3 et_pb_column_4  et_pb_css_mix_blend_mode_passthrough et-last-child">
				
				
				<div class="et_pb_button_module_wrapper et_pb_button_4_wrapper et_pb_button_alignment_center et_pb_module ">
				<a class="et_pb_button et_pb_button_4 et_hover_enabled et_pb_bg_layout_light">DAPP</a>
			</div><div class="et_pb_button_module_wrapper et_pb_button_5_wrapper et_pb_button_alignment_center et_pb_module ">
				<a class="et_pb_button et_pb_custom_button_icon et_pb_button_5 et_hover_enabled et_pb_bg_layout_light" data-icon="??">CLAIM BNB - SOON</a>
			</div>
			</div> <!-- .et_pb_column -->
				
				
			</div> <!-- .et_pb_row --><div class="et_pb_row et_pb_row_3">
				<div class="et_pb_column et_pb_column_4_4 et_pb_column_5  et_pb_css_mix_blend_mode_passthrough et-last-child">
				
				
				<div class="et_pb_module et_pb_blurb et_pb_blurb_0 et_hover_enabled et_clickable  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_light">
				
				
				<div class="et_pb_blurb_content">
					<div class="et_pb_main_blurb_image"><span class="et_pb_image_wrap"><span class="et-waypoint et_pb_animation_off et-pb-icon">7</span></span></div>
					<div class="et_pb_blurb_container">
						
						
					</div>
				</div> <!-- .et_pb_blurb_content -->
			</div> <!-- .et_pb_blurb --><div class="et_pb_with_border et_pb_module et_pb_video et_pb_video_0">
				
				
				<div class="et_pb_video_box">
				<video controls>
					<source type="video/mp4" src="wp-content/uploads/2021/06/New-Intro-Martians.mp4">
					
				</video></div>
				
			</div>
			</div> <!-- .et_pb_column -->
				
				
			</div> <!-- .et_pb_row -->
				
				<div class="et_pb_bottom_inside_divider et-no-transition"></div>
			</div> <!-- .et_pb_section --><div class="et_pb_section et_pb_section_1 et_pb_with_background et_section_regular">
				
				
				
				
					<div class="et_pb_row et_pb_row_4">
				<div class="et_pb_column et_pb_column_4_4 et_pb_column_6  et_pb_css_mix_blend_mode_passthrough et-last-child">
				
				
				<div class="et_pb_module et_pb_divider et_pb_divider_0 et_pb_divider_position_ et_pb_space"><div class="et_pb_divider_internal"></div></div><div id="Features" class="et_pb_module et_pb_text et_pb_text_2  et_pb_text_align_center et_pb_bg_layout_dark">
				
				
				<div class="et_pb_text_inner"><h2>TOKEN Features</h2>
<p>We have worked extremely hard to bring you the best experience possible by holding your NxtGem Tokens. View our features below.</p></div>
			</div> <!-- .et_pb_text -->
			</div> <!-- .et_pb_column -->
				
				
			</div> <!-- .et_pb_row --><div class="et_pb_row et_pb_row_5 et_animated">
				<div class="et_pb_column et_pb_column_1_3 et_pb_column_7  et_pb_css_mix_blend_mode_passthrough">
				
				
				<div class="et_pb_module et_pb_blurb et_pb_blurb_1  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_dark">
				
				
				<div class="et_pb_blurb_content">
					<div class="et_pb_main_blurb_image"><span class="et_pb_image_wrap"><img loading="lazy" width="151" height="151" src="wp-content/uploads/2021/06/gaming-icon-05.png" alt class="et-waypoint et_pb_animation_off wp-image-19"></span></div>
					<div class="et_pb_blurb_container">
						<h4 class="et_pb_module_header"><span>Pre-Sale Announcement</span></h4>
						<div class="et_pb_blurb_description"><p>Dx Sale will be announced on June 10th. Ownership will be renounced,???? which makes us 100% rug proof.</p></div>
					</div>
				</div> <!-- .et_pb_blurb_content -->
			</div> <!-- .et_pb_blurb -->
			</div> <!-- .et_pb_column --><div class="et_pb_column et_pb_column_1_3 et_pb_column_8  et_pb_css_mix_blend_mode_passthrough">
				
				
				<div class="et_pb_module et_pb_blurb et_pb_blurb_2  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_dark">
				
				
				<div class="et_pb_blurb_content">
					<div class="et_pb_main_blurb_image"><span class="et_pb_image_wrap"><img loading="lazy" width="150" height="151" src="wp-content/uploads/2021/06/gaming-icon-02.png" alt class="et-waypoint et_pb_animation_off wp-image-20"></span></div>
					<div class="et_pb_blurb_container">
						<h4 class="et_pb_module_header"><span>Anti Pump, Dump and Whale Exits</span></h4>
						<div class="et_pb_blurb_description"><div class="div-block-27">
<div class="div-para">
<p class="paragraph">Transactions over 0.05% of the total supply will be rejected. If a whale makes a transfer between 2 wallets that is larger than 0.05% of the total supply they will be charged 2BNB.</p>
</div>
</div>
<div id="w-node-_1705e3d9-387f-5642-19e6-85f62eb2aa3a-ad05eb59" class="div-block-27"></div></div>
					</div>
				</div> <!-- .et_pb_blurb_content -->
			</div> <!-- .et_pb_blurb -->
			</div> <!-- .et_pb_column --><div class="et_pb_column et_pb_column_1_3 et_pb_column_9  et_pb_css_mix_blend_mode_passthrough et-last-child">
				
				
				<div class="et_pb_module et_pb_blurb et_pb_blurb_3  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_dark">
				
				
				<div class="et_pb_blurb_content">
					<div class="et_pb_main_blurb_image"><span class="et_pb_image_wrap"><img loading="lazy" width="151" height="151" src="wp-content/uploads/2021/06/gaming-icon-11.png" alt class="et-waypoint et_pb_animation_off wp-image-21"></span></div>
					<div class="et_pb_blurb_container">
						<h4 class="et_pb_module_header"><span>Highly Secure</span></h4>
						<div class="et_pb_blurb_description"><div class="section-15 hold">
<div class="w-container">
<div class="w-layout-grid grid-3">
<div class="div-block-27">
<div class="div-para">
<p class="paragraph">????All initial liquidity will be locked by Dx. Ownership will be renounced making it safe for all???? NxtGem</p>
</div>
</div>
</div>
</div>
</div>
<div id="tokenomicssection" class="section-12"></div></div>
					</div>
				</div> <!-- .et_pb_blurb_content -->
			</div> <!-- .et_pb_blurb -->
			</div> <!-- .et_pb_column -->
				
				
			</div> <!-- .et_pb_row --><div class="et_pb_row et_pb_row_6 et_animated">
				<div class="et_pb_column et_pb_column_1_3 et_pb_column_10  et_pb_css_mix_blend_mode_passthrough">
				
				
				<div class="et_pb_module et_pb_blurb et_pb_blurb_4  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_dark">
				
				
				<div class="et_pb_blurb_content">
					<div class="et_pb_main_blurb_image"><span class="et_pb_image_wrap"><img loading="lazy" width="150" height="151" src="wp-content/uploads/2021/06/gaming-icon-17.png" alt class="et-waypoint et_pb_animation_off wp-image-22"></span></div>
					<div class="et_pb_blurb_container">
						<h4 class="et_pb_module_header"><span>Automatic Liquidity Pool</span></h4>
						<div class="et_pb_blurb_description"><div class="div-block-27 water">
<div class="div-para">
<p class="paragraph">4% of every buy/sell will be locked into the Liquidity pool on Pancake Swap. Which in turn, creates a never ending loop that feeds our $NxtGem holders.</p>
</div>
</div>
<div class="div-block-26"></div></div>
					</div>
				</div> <!-- .et_pb_blurb_content -->
			</div> <!-- .et_pb_blurb -->
			</div> <!-- .et_pb_column --><div class="et_pb_column et_pb_column_1_3 et_pb_column_11  et_pb_css_mix_blend_mode_passthrough">
				
				
				<div class="et_pb_module et_pb_blurb et_pb_blurb_5  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_dark">
				
				
				<div class="et_pb_blurb_content">
					<div class="et_pb_main_blurb_image"><span class="et_pb_image_wrap"><img loading="lazy" width="150" height="151" src="wp-content/uploads/2021/06/gaming-icon-13.png" alt class="et-waypoint et_pb_animation_off wp-image-23"></span></div>
					<div class="et_pb_blurb_container">
						<h4 class="et_pb_module_header"><span>Earn BNB while holding $NxtGen</span></h4>
						<div class="et_pb_blurb_description"><div class="div-block-26">
<div class="div-para hold">
<p class="paragraph">During every transaction 10% is stored into the pool and after 24 hours our $NxtGem holders can claim a percentage based on their percentage of the supply. $NxtGem holders can claim their BNB through our custom designed DApp.</p>
</div>
</div>
<div class="div-block-27"></div></div>
					</div>
				</div> <!-- .et_pb_blurb_content -->
			</div> <!-- .et_pb_blurb -->
			</div> <!-- .et_pb_column --><div class="et_pb_column et_pb_column_1_3 et_pb_column_12  et_pb_css_mix_blend_mode_passthrough et-last-child">
				
				
				<div class="et_pb_module et_pb_blurb et_pb_blurb_6  et_pb_text_align_center  et_pb_blurb_position_top et_pb_bg_layout_dark">
				
				
				<div class="et_pb_blurb_content">
					<div class="et_pb_main_blurb_image"><span class="et_pb_image_wrap"><img loading="lazy" width="150" height="151" src="wp-content/uploads/2021/06/gaming-icon-10.png" alt class="et-waypoint et_pb_animation_off wp-image-24"></span></div>
					<div class="et_pb_blurb_container">
						<h4 class="et_pb_module_header"><span>REFLECTION</span></h4>
						<div class="et_pb_blurb_description"><div id="w-node-_1705e3d9-387f-5642-19e6-85f62eb2aa3a-ad05eb59" class="div-block-27">
<div class="div-para">
<p class="paragraph">There will be a 2% re-distribution to all $NxtGem holders. The burn address is a holder, each transaction will help deflate the supply.</p>
</div>
</div>
<div class="div-block-27">
<div></div>
</div></div>
					</div>
				</div> <!-- .et_pb_blurb_content -->
			</div> <!-- .et_pb_blurb -->
			</div> <!-- .et_pb_column -->
				
				
			</div> <!-- .et_pb_row -->
				
				
			</div> <!-- .et_pb_section --><div class="et_pb_section et_pb_section_2 et_pb_section_parallax et_pb_with_background et_section_specialty section_has_divider et_pb_bottom_divider">
				
				<div class="et_parallax_bg_wrap"><div class="et_parallax_bg" style="background-image: url(https://martians.finance/wp-content/uploads/2021/06/gaming-11.jpg);"></div></div>
				
				<div class="et_pb_row">
					<div class="et_pb_column et_pb_column_1_2 et_pb_column_13   et_pb_specialty_column  et_pb_css_mix_blend_mode_passthrough">
				
				
				<div class="et_pb_row_inner et_pb_row_inner_0 et_animated et_pb_gutters3">
				<div class="et_pb_column et_pb_column_4_4 et_pb_column_inner et_pb_column_inner_0 et-last-child">
				
				
				<div class="et_pb_module et_pb_divider et_pb_divider_1 et_pb_divider_position_ et_pb_space"><div class="et_pb_divider_internal"></div></div><div id="Tokenomics" class="et_pb_module et_pb_text et_pb_text_3  et_pb_text_align_left et_pb_bg_layout_dark">
				
				
				<div class="et_pb_text_inner"><h2>TOKENOMICS</h2></div>
			</div> <!-- .et_pb_text --><div class="et_pb_module et_pb_text et_pb_text_4  et_pb_text_align_left et_pb_bg_layout_dark">
				
				
				<div class="et_pb_text_inner"><p>We like to keep things simple.</p></div>
			</div> <!-- .et_pb_text --><div class="et_pb_module et_pb_blurb et_pb_blurb_7  et_pb_text_align_left  et_pb_blurb_position_left et_pb_bg_layout_light">
				
				
				<div class="et_pb_blurb_content">
					<div class="et_pb_main_blurb_image"><span class="et_pb_image_wrap"><span class="et-waypoint et_pb_animation_top et-pb-icon">I</span></span></div>
					<div class="et_pb_blurb_container">
						<h4 class="et_pb_module_header"><span>80% of the supply will be added to the Liquidity pool</span></h4>
						
					</div>
				</div> <!-- .et_pb_blurb_content -->
			</div> <!-- .et_pb_blurb --><div class="et_pb_module et_pb_blurb et_pb_blurb_8  et_pb_text_align_left  et_pb_blurb_position_left et_pb_bg_layout_light">
				
				
				<div class="et_pb_blurb_content">
					<div class="et_pb_main_blurb_image"><span class="et_pb_image_wrap"><span class="et-waypoint et_pb_animation_top et-pb-icon">I</span></span></div>
					<div class="et_pb_blurb_container">
						<h4 class="et_pb_module_header"><span>4% to the NxtGem Finance Team</span></h4>
						
					</div>
				</div> <!-- .et_pb_blurb_content -->
			</div> <!-- .et_pb_blurb --><div class="et_pb_module et_pb_blurb et_pb_blurb_9  et_pb_text_align_left  et_pb_blurb_position_left et_pb_bg_layout_light">
				
				
				<div class="et_pb_blurb_content">
					<div class="et_pb_main_blurb_image"><span class="et_pb_image_wrap"><span class="et-waypoint et_pb_animation_top et-pb-icon">I</span></span></div>
					<div class="et_pb_blurb_container">
						<h4 class="et_pb_module_header"><span>3% to Marketing and App Development</span></h4>
						
					</div>
				</div> <!-- .et_pb_blurb_content -->
			</div> <!-- .et_pb_blurb --><div class="et_pb_module et_pb_blurb et_pb_blurb_10  et_pb_text_align_left  et_pb_blurb_position_left et_pb_bg_layout_light">
				
				
				<div class="et_pb_blurb_content">
					<div class="et_pb_main_blurb_image"><span class="et_pb_image_wrap"><span class="et-waypoint et_pb_animation_top et-pb-icon">I</span></span></div>
					<div class="et_pb_blurb_container">
						<h4 class="et_pb_module_header"><span>13% will be burned</span></h4>
						
					</div>
				</div> <!-- .et_pb_blurb_content -->
			</div> <!-- .et_pb_blurb -->
			</div> <!-- .et_pb_column -->
				
				
			</div> <!-- .et_pb_row_inner -->
			</div> <!-- .et_pb_column --><div class="et_pb_column et_pb_column_1_2 et_pb_column_14    et_pb_css_mix_blend_mode_passthrough et_pb_column_empty">
				
				
				
			</div> <!-- .et_pb_column -->
				</div> <!-- .et_pb_row -->
				<div class="et_pb_bottom_inside_divider et-no-transition"></div>
			</div> <!-- .et_pb_section --><div class="et_pb_section et_pb_section_3 et_pb_with_background et_section_regular">
				
				
				
				
					<div class="et_pb_row et_pb_row_7">
				<div class="et_pb_column et_pb_column_1_2 et_pb_column_15  et_pb_css_mix_blend_mode_passthrough">
				
				
				<div class="et_pb_module et_pb_divider et_pb_divider_2 #roadmap et_pb_divider_position_ et_pb_space"><div class="et_pb_divider_internal"></div></div><div id="roadmap" class="et_pb_module et_pb_text et_pb_text_5  et_pb_text_align_left et_pb_bg_layout_dark">
				
				
				<div class="et_pb_text_inner"><h2>Roadmap</h2></div>
			</div> <!-- .et_pb_text --><div class="et_pb_module et_pb_text et_pb_text_6  et_pb_text_align_left et_pb_bg_layout_dark">
				
				
				<div class="et_pb_text_inner"><p>Our goals, achievements and future endeavours.</p></div>
			</div> <!-- .et_pb_text -->
			</div> <!-- .et_pb_column --><div class="et_pb_column et_pb_column_1_2 et_pb_column_16  et_pb_css_mix_blend_mode_passthrough et-last-child et_pb_column_empty">
				
				
				
			</div> <!-- .et_pb_column -->
				
				
			</div> <!-- .et_pb_row --><div class="et_pb_row et_pb_row_8">
				<div class="et_pb_column et_pb_column_4_4 et_pb_column_17  et_pb_css_mix_blend_mode_passthrough et-last-child">
				
				
				<div class="et_pb_module et_pb_image et_pb_image_1 et_animated et-waypoint">
				
				
				<span class="et_pb_image_wrap has-box-shadow-overlay"><div class="box-shadow-overlay"></div><img loading="lazy" src="wp-content/uploads/2021/06/gaming-13.jpg" alt title height="auto" width="auto" srcset="wp-content/uploads/2021/06/gaming-13.jpg 1280w, wp-content/uploads/2021/06/gaming-13-980x476.jpg 980w, wp-content/uploads/2021/06/gaming-13-480x233.jpg 480w" sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) 1280px, 100vw" class="wp-image-28"></span>
			</div>
			</div> <!-- .et_pb_column -->
				
				
			</div> <!-- .et_pb_row --><div class="et_pb_row et_pb_row_9">
				<div class="et_pb_column et_pb_column_1_3 et_pb_column_18  et_pb_css_mix_blend_mode_passthrough">
				
				
				<div class="et_pb_module et_pb_blurb et_pb_blurb_11  et_pb_text_align_left  et_pb_blurb_position_top et_pb_bg_layout_light">
				
				
				<div class="et_pb_blurb_content">
					<div class="et_pb_main_blurb_image"><span class="et_pb_image_wrap"><img loading="lazy" width="272" height="260" src="wp-content/uploads/2021/06/p2.png" alt class="et-waypoint et_pb_animation_top wp-image-43"></span></div>
					<div class="et_pb_blurb_container">
						<h4 class="et_pb_module_header"><span>Our Website / June 6th</span></h4>
						<div class="et_pb_blurb_description"><p style="text-align: center;"><span>NxtGem Finance will have its own unique website with a professional, modern look!</span></p></div>
					</div>
				</div> <!-- .et_pb_blurb_content -->
			</div> <!-- .et_pb_blurb -->
			</div> <!-- .et_pb_column --><div class="et_pb_column et_pb_column_1_3 et_pb_column_19  et_pb_css_mix_blend_mode_passthrough">
				
				
				<div class="et_pb_module et_pb_blurb et_pb_blurb_12  et_pb_text_align_left  et_pb_blurb_position_top et_pb_bg_layout_light">
				
				
				<div class="et_pb_blurb_content">
					<div class="et_pb_main_blurb_image"><span class="et_pb_image_wrap"><img loading="lazy" width="272" height="260" src="wp-content/uploads/2021/06/p1.png" alt class="et-waypoint et_pb_animation_top wp-image-42"></span></div>
					<div class="et_pb_blurb_container">
						<h4 class="et_pb_module_header"><span>DApp / June 12th</span></h4>
						<div class="et_pb_blurb_description"><p style="text-align: center;"><span>The NxtGem Finance DApp will show the max transaction amount, total liquidity pool, total reward pool, total BNB in the liquidity pool, total BNB in Rewards Pool, and your $NxtGem balance.</span></p></div>
					</div>
				</div> <!-- .et_pb_blurb_content -->
			</div> <!-- .et_pb_blurb -->
			</div> <!-- .et_pb_column --><div class="et_pb_column et_pb_column_1_3 et_pb_column_20  et_pb_css_mix_blend_mode_passthrough et-last-child">
				
				
				<div class="et_pb_module et_pb_blurb et_pb_blurb_13  et_pb_text_align_left  et_pb_blurb_position_top et_pb_bg_layout_light">
				
				
				<div class="et_pb_blurb_content">
					<div class="et_pb_main_blurb_image"><span class="et_pb_image_wrap"><img loading="lazy" width="320" height="304" src="wp-content/uploads/2021/06/p8.png" alt srcset="wp-content/uploads/2021/06/p8.png 320w, wp-content/uploads/2021/06/p8-300x285.png 300w" sizes="(max-width: 320px) 100vw, 320px" class="et-waypoint et_pb_animation_top wp-image-49"></span></div>
					<div class="et_pb_blurb_container">
						<h4 class="et_pb_module_header"><span>Farming Protocol / July</span></h4>
						<div class="et_pb_blurb_description"><p style="text-align: center;"><span>NxtGem Finance will have its own Crypto Farming protocol that burns $NxtGem!</span></p></div>
					</div>
				</div> <!-- .et_pb_blurb_content -->
			</div> <!-- .et_pb_blurb -->
			</div> <!-- .et_pb_column -->
				
				
			</div> <!-- .et_pb_row --><div class="et_pb_row et_pb_row_10">
				<div class="et_pb_column et_pb_column_1_3 et_pb_column_21  et_pb_css_mix_blend_mode_passthrough">
				
				
				<div class="et_pb_module et_pb_blurb et_pb_blurb_14  et_pb_text_align_left  et_pb_blurb_position_top et_pb_bg_layout_light">
				
				
				<div class="et_pb_blurb_content">
					<div class="et_pb_main_blurb_image"><span class="et_pb_image_wrap"><img loading="lazy" width="272" height="260" src="wp-content/uploads/2021/06/p5.png" alt class="et-waypoint et_pb_animation_top wp-image-46"></span></div>
					<div class="et_pb_blurb_container">
						<h4 class="et_pb_module_header"><span>NFT's / Late July</span></h4>
						<div class="et_pb_blurb_description"><p style="text-align: center;"><span>NFTs are a huge part of DEFI and we definitely won????????t miss out on this one! ????NxtGem Finance will have its own unique Space NFTs!</span></p></div>
					</div>
				</div> <!-- .et_pb_blurb_content -->
			</div> <!-- .et_pb_blurb -->
			</div> <!-- .et_pb_column --><div class="et_pb_column et_pb_column_1_3 et_pb_column_22  et_pb_css_mix_blend_mode_passthrough">
				
				
				<div class="et_pb_module et_pb_blurb et_pb_blurb_15  et_pb_text_align_left  et_pb_blurb_position_top et_pb_bg_layout_light">
				
				
				<div class="et_pb_blurb_content">
					<div class="et_pb_main_blurb_image"><span class="et_pb_image_wrap"><img loading="lazy" width="272" height="260" src="wp-content/uploads/2021/06/p3.png" alt class="et-waypoint et_pb_animation_top wp-image-44"></span></div>
					<div class="et_pb_blurb_container">
						<h4 class="et_pb_module_header"><span>NFT Marketplace / Mid August</span></h4>
						<div class="et_pb_blurb_description"><p style="text-align: center;"><span>Later in the year, NxtGem Finance will have its own NFT Marketplace, where users will be able to create, buy and sell NFTs and pay in $NxtGem.</span></p></div>
					</div>
				</div> <!-- .et_pb_blurb_content -->
			</div> <!-- .et_pb_blurb -->
			</div> <!-- .et_pb_column --><div class="et_pb_column et_pb_column_1_3 et_pb_column_23  et_pb_css_mix_blend_mode_passthrough et-last-child">
				
				
				<div class="et_pb_module et_pb_blurb et_pb_blurb_16  et_pb_text_align_left  et_pb_blurb_position_top et_pb_bg_layout_light">
				
				
				<div class="et_pb_blurb_content">
					<div class="et_pb_main_blurb_image"><span class="et_pb_image_wrap"><img loading="lazy" width="272" height="260" src="wp-content/uploads/2021/06/p6.png" alt class="et-waypoint et_pb_animation_top wp-image-47"></span></div>
					<div class="et_pb_blurb_container">
						<h4 class="et_pb_module_header"><span>Online Shop / Late August</span></h4>
						<div class="et_pb_blurb_description"><p style="text-align: center;"><span>An online Crypto payment based shop, where items are bought with $NxtGem. Even if a user doesn????????t hold $NxtGem- no problem, our code will convert their BNB into $NxtGem.</span></p></div>
					</div>
				</div> <!-- .et_pb_blurb_content -->
			</div> <!-- .et_pb_blurb -->
			</div> <!-- .et_pb_column -->
				
				
			</div> <!-- .et_pb_row -->
				
				
			</div> <!-- .et_pb_section --><div class="et_pb_section et_pb_section_4 et_pb_with_background et_section_regular">
				
				
				
				
					<div class="et_pb_row et_pb_row_11">
				<div class="et_pb_column et_pb_column_4_4 et_pb_column_24  et_pb_css_mix_blend_mode_passthrough et-last-child">
				
				
				<div class="et_pb_module et_pb_divider et_pb_divider_3 et_pb_divider_position_ et_pb_space"><div class="et_pb_divider_internal"></div></div><div class="et_pb_module et_pb_text et_pb_text_7  et_pb_text_align_center et_pb_bg_layout_dark">
				
				
				<div class="et_pb_text_inner"><h2>Join & Follow the COmmunity</h2>
<p>Visit our Telegram, we have a very active and engaged community to help our project flourish and turn our followers and community members into family.</p></div>
			</div> <!-- .et_pb_text --><div class="et_pb_button_module_wrapper et_pb_button_6_wrapper et_pb_button_alignment_center et_pb_module ">
				<a class="et_pb_button et_pb_button_6 et_hover_enabled et_pb_bg_layout_light" href="http://t.me/martiansfinance/index.html" target="_blank">Telegram</a>
			</div>
			</div> <!-- .et_pb_column -->
				
				
			</div> <!-- .et_pb_row -->
				
				
			</div> <!-- .et_pb_section --><div class="et_pb_section et_pb_section_5 et_pb_with_background et_section_regular">
				
				
				
				
					<div class="et_pb_row et_pb_row_12 et_pb_row_fullwidth et_animated et_hover_enabled">
				<div class="et_pb_column et_pb_column_3_4 et_pb_column_25  et_pb_css_mix_blend_mode_passthrough">
				
				
				<div class="et_pb_module et_pb_divider et_pb_divider_4 et_pb_divider_position_ et_pb_space"><div class="et_pb_divider_internal"></div></div><div class="et_pb_module et_pb_text et_pb_text_8  et_pb_text_align_left et_pb_bg_layout_dark">
				
				
				<div class="et_pb_text_inner"><h2>Join the Crew. START EARNING BNB WHILE HOLDING $NxtGem</h2></div>
			</div> <!-- .et_pb_text -->
			</div> <!-- .et_pb_column --><div class="et_pb_column et_pb_column_1_4 et_pb_column_26  et_pb_css_mix_blend_mode_passthrough et-last-child">
				
				
				<div class="et_pb_button_module_wrapper et_pb_button_7_wrapper et_pb_button_alignment_right et_pb_module ">
				<a class="et_pb_button et_pb_custom_button_icon et_pb_button_7 et_hover_enabled et_pb_bg_layout_light" data-icon="??">BUY ON PANCAKESWAP - SOON</a>
			</div>
			</div> <!-- .et_pb_column -->
				
				
			</div> <!-- .et_pb_row -->
				
				
			</div> <!-- .et_pb_section -->		</div><!-- .et_builder_inner_content -->
	</div><!-- .et-l -->
	
			
		</div><!-- #et-boc -->
							</div> <!-- .entry-content -->

				
				</article> <!-- .et_pb_post -->

			

</div> <!-- #main-content -->


	<span class="et_pb_scroll_top et-pb-icon"></span>


			<footer id="main-footer">
				

		
				<div id="footer-bottom">
					<div class="container clearfix">
				<div id="footer-info">Powered by NxtGem. Copyright 2021</div>					</div>	<!-- .container -->
				</div>
			</footer> <!-- #main-footer -->
		</div> <!-- #et-main-area -->


	</div> <!-- #page-container -->

		<script type="text/javascript">
				var et_animation_data = [{"class":"et_pb_image_0","style":"roll","repeat":"once","duration":"3000ms","delay":"0ms","intensity":"5%","starting_opacity":"0%","speed_curve":"ease-in"},{"class":"et_pb_row_5","style":"slideBottom","repeat":"once","duration":"1000ms","delay":"0ms","intensity":"10%","starting_opacity":"0%","speed_curve":"ease-in-out"},{"class":"et_pb_row_6","style":"slideBottom","repeat":"once","duration":"1000ms","delay":"0ms","intensity":"10%","starting_opacity":"0%","speed_curve":"ease-in-out"},{"class":"et_pb_row_inner_0","style":"foldLeft","repeat":"once","duration":"1000ms","delay":"0ms","intensity":"20%","starting_opacity":"0%","speed_curve":"ease-in-out"},{"class":"et_pb_image_1","style":"fade","repeat":"once","duration":"1000ms","delay":"0ms","intensity":"50%","starting_opacity":"0%","speed_curve":"ease-in-out"},{"class":"et_pb_row_12","style":"foldLeft","repeat":"once","duration":"1000ms","delay":"0ms","intensity":"20%","starting_opacity":"0%","speed_curve":"ease-in-out"}];
					var et_link_options_data = [{"class":"et_pb_blurb_0","url":"#","target":"_self"}];
			</script>
	<link rel="stylesheet" id="mediaelement-css" href="wp-includes/js/mediaelement/mediaelementplayer-legacy.min.css" type="text/css" media="all">
<link rel="stylesheet" id="wp-mediaelement-css" href="wp-includes/js/mediaelement/wp-mediaelement.min.css" type="text/css" media="all">
<script type="text/javascript" id="divi-custom-script-js-extra">
/* <![CDATA[ */
var DIVI = {"item_count":"%d Item","items_count":"%d Items"};
var et_shortcodes_strings = {"previous":"Previous","next":"Next"};
var et_pb_custom = {"ajaxurl":"https:\/\/martians.finance\/wp-admin\/admin-ajax.php","images_uri":"https:\/\/martians.finance\/wp-content\/themes\/Divi\/images","builder_images_uri":"https:\/\/martians.finance\/wp-content\/themes\/Divi\/includes\/builder\/images","et_frontend_nonce":"d8a97d7914","subscription_failed":"Please, check the fields below to make sure you entered the correct information.","et_ab_log_nonce":"c7ab4620f3","fill_message":"Please, fill in the following fields:","contact_error_message":"Please, fix the following errors:","invalid":"Invalid email","captcha":"Captcha","prev":"Prev","previous":"Previous","next":"Next","wrong_captcha":"You entered the wrong number in captcha.","wrong_checkbox":"Checkbox","ignore_waypoints":"no","is_divi_theme_used":"1","widget_search_selector":".widget_search","ab_tests":[],"is_ab_testing_active":"","page_id":"8","unique_test_id":"","ab_bounce_rate":"5","is_cache_plugin_active":"no","is_shortcode_tracking":"","tinymce_uri":""}; var et_builder_utils_params = {"condition":{"diviTheme":true,"extraTheme":false},"scrollLocations":["app","top"],"builderScrollLocations":{"desktop":"app","tablet":"app","phone":"app"},"onloadScrollLocation":"app","builderType":"fe"}; var et_frontend_scripts = {"builderCssContainerPrefix":"#et-boc","builderCssLayoutPrefix":"#et-boc .et-l"};
var et_pb_box_shadow_elements = [".et_pb_image_1 .et_pb_image_wrap",".et_pb_image_1 .et_pb_image_wrap",".et_pb_image_1 .et_pb_image_wrap"];
var et_pb_motion_elements = {"desktop":[],"tablet":[],"phone":[]};
var et_pb_sticky_elements = [];
/* ]]> */
</script>
<script type="text/javascript" src="wp-content/themes/Divi/js/custom.unified.js" id="divi-custom-script-js"></script>
<script type="text/javascript" src="wp-content/themes/Divi/core/admin/js/common.js" id="et-core-common-js"></script>
<script type="text/javascript" src="wp-includes/js/wp-embed.min.js" id="wp-embed-js"></script>
<script type="text/javascript" id="mediaelement-core-js-before">
var mejsL10n = {"language":"en","strings":{"mejs.download-file":"Download File","mejs.install-flash":"You are using a browser that does not have Flash player enabled or installed. Please turn on your Flash player plugin or download the latest version from https:\/\/get.adobe.com\/flashplayer\/","mejs.fullscreen":"Fullscreen","mejs.play":"Play","mejs.pause":"Pause","mejs.time-slider":"Time Slider","mejs.time-help-text":"Use Left\/Right Arrow keys to advance one second, Up\/Down arrows to advance ten seconds.","mejs.live-broadcast":"Live Broadcast","mejs.volume-help-text":"Use Up\/Down Arrow keys to increase or decrease volume.","mejs.unmute":"Unmute","mejs.mute":"Mute","mejs.volume-slider":"Volume Slider","mejs.video-player":"Video Player","mejs.audio-player":"Audio Player","mejs.captions-subtitles":"Captions\/Subtitles","mejs.captions-chapters":"Chapters","mejs.none":"None","mejs.afrikaans":"Afrikaans","mejs.albanian":"Albanian","mejs.arabic":"Arabic","mejs.belarusian":"Belarusian","mejs.bulgarian":"Bulgarian","mejs.catalan":"Catalan","mejs.chinese":"Chinese","mejs.chinese-simplified":"Chinese (Simplified)","mejs.chinese-traditional":"Chinese (Traditional)","mejs.croatian":"Croatian","mejs.czech":"Czech","mejs.danish":"Danish","mejs.dutch":"Dutch","mejs.english":"English","mejs.estonian":"Estonian","mejs.filipino":"Filipino","mejs.finnish":"Finnish","mejs.french":"French","mejs.galician":"Galician","mejs.german":"German","mejs.greek":"Greek","mejs.haitian-creole":"Haitian Creole","mejs.hebrew":"Hebrew","mejs.hindi":"Hindi","mejs.hungarian":"Hungarian","mejs.icelandic":"Icelandic","mejs.indonesian":"Indonesian","mejs.irish":"Irish","mejs.italian":"Italian","mejs.japanese":"Japanese","mejs.korean":"Korean","mejs.latvian":"Latvian","mejs.lithuanian":"Lithuanian","mejs.macedonian":"Macedonian","mejs.malay":"Malay","mejs.maltese":"Maltese","mejs.norwegian":"Norwegian","mejs.persian":"Persian","mejs.polish":"Polish","mejs.portuguese":"Portuguese","mejs.romanian":"Romanian","mejs.russian":"Russian","mejs.serbian":"Serbian","mejs.slovak":"Slovak","mejs.slovenian":"Slovenian","mejs.spanish":"Spanish","mejs.swahili":"Swahili","mejs.swedish":"Swedish","mejs.tagalog":"Tagalog","mejs.thai":"Thai","mejs.turkish":"Turkish","mejs.ukrainian":"Ukrainian","mejs.vietnamese":"Vietnamese","mejs.welsh":"Welsh","mejs.yiddish":"Yiddish"}};
</script>
<script type="text/javascript" src="wp-includes/js/mediaelement/mediaelement-and-player.min.js" id="mediaelement-core-js"></script>
<script type="text/javascript" src="wp-includes/js/mediaelement/mediaelement-migrate.min.js" id="mediaelement-migrate-js"></script>
<script type="text/javascript" id="mediaelement-js-extra">
/* <![CDATA[ */
var _wpmejsSettings = {"pluginPath":"\/wp-includes\/js\/mediaelement\/","classPrefix":"mejs-","stretching":"responsive"};
/* ]]> */
</script>
<script type="text/javascript" src="wp-includes/js/mediaelement/wp-mediaelement.min.js" id="wp-mediaelement-js"></script>


</body></html>