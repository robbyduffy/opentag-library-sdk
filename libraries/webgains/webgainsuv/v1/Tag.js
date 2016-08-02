//:include tagsdk-current.js

qubit.opentag.LibraryTag.define("webgains.webgainsuv.v1.Tag", {
	getDefaultConfig: function () {
		return {
			/*config*/
			name: "Webgains UV",
			async: true,
			description: "",
			html: "",
			locationDetail: "",
			isPrivate: false,
			url: "",
			usesDocWrite: false,
			upgradeable: true,
			parameters: [
			{
				name: "Program ID",
				description: "unique identifier for merchant (e.g. 1234) [COMPULSORY]",
				token: "program_id"
			}
			]
			/*~config*/
		};
	},
	script: function() {
	/*script*/
	var wgProgramId = this.valueForToken('program_id'),
        wgVersion   = (universal_variable.version) ? universal_variable.version : "1.2",
        wgType      = (universal_variable.page.type) ? universal_variable.page.type : "Confirmation",
        wgChecksum  = (universal_variable.transaction.checksum) ? universal_variable.transaction.checksum : "",
        wgComment   = (universal_variable.transaction.comment) ? universal_variable.transaction.comment : "",
        wgProtocol  = (location.protocol.toLowerCase() == "https:") ? "https" : "http",
        wgLang      = (universal_variable.user && universal_variable.user.language) ? universal_variable.user.language : "en-gb",
        wgCurrency  = (universal_variable.transaction.currency) ? universal_variable.transaction.currency : "GBP",
        wgCustId    = (universal_variable.user && universal_variable.user.user_id) ? universal_variable.user.user_id : "",
        wgVoucher   = (universal_variable.transaction && universal_variable.transaction.vouchers && universal_variable.transaction.vouchers[0]) ? universal_variable.transaction.vouchers[0] : "",
        wgOrderRef  = (universal_variable.transaction.order_id) ? universal_variable.transaction.order_id : "",
        wgItemList  = [],
        wgTotal     = (universal_variable.transaction.total) ? universal_variable.transaction.total : 0,
        wgEventId   = (universal_variable.transaction.event_id) ? universal_variable.transaction.event_id : "",
        wgScriptSrc;

	var itemList = [];

    for (i = 0; i < universal_variable.transaction.line_items.length; i++) {
        var itemInfo = [],
            itemPrice = ( (universal_variable.transaction.line_items[i].subtotal / universal_variable.transaction.line_items[i].quantity));

        //Add the event id for existing / new user
        wgEventItemId = (universal_variable.transaction.line_items[i].product.event_id) ? universal_variable.transaction.line_items[i].product.event_id : wgEventId;
        itemInfo.push(wgEventItemId);

        //Add the item's price.
        itemInfo.push( parseFloat(itemPrice) );

        //Add the item's name.
        itemInfo.push(universal_variable.transaction.line_items[i].product.name);

        //Add the item's ID.
        itemInfo.push(universal_variable.transaction.line_items[i].product.id);

        //Add the transaction's voucher code for items if provided
        wgItemVoucher = (universal_variable.transaction.line_items[i].product.voucher) ? universal_variable.transaction.line_items[i].product.voucher : "";
        itemInfo.push("" + escape(wgItemVoucher));

        //Create the string, with fields separated by "::"
        var itemString = itemInfo.join("::");

        //Add the string, one time for each individual item purchased.
        for (j = 0; j < universal_variable.transaction.line_items[i].quantity; j++) {
            wgItemList.push(itemString);
            // wgTotal = wgTotal + parseFloat(itemPrice);
        }
    }

    wgItemList = wgItemList.join("|");

	wgScriptSrc = "//track.webgains.com/transaction.html?wgsubdomain=track&wgver=" + wgVersion;
    wgScriptSrc += "&wgprotocol=" + wgProtocol;
    wgScriptSrc += "&wglang=" + wgLang;
    wgScriptSrc += "&wgprogramid=" + wgProgramId + "&wgeventid=" + wgEventId;
    wgScriptSrc += "&wgvalue=" + wgTotal + "&wgchecksum=" + wgChecksum;
    wgScriptSrc += "&wgorderreference=" + wgOrderRef;
    wgScriptSrc += "&wgcomment=" + escape(wgComment);
    wgScriptSrc += "&wglocation=" + escape(document.referrer);
    wgScriptSrc += "&wgitems=" + escape(wgItemList);
    wgScriptSrc += "&wgcustomerid=" + escape("" + wgCustId);
    wgScriptSrc += "&wgvouchercode=" + escape("" + wgVoucher);
    wgScriptSrc += "&wgCurrency=" + escape("" + wgCurrency);

	// Load the script
	(function(d, t) {
	    var g = d.createElement(t),
	        s = d.getElementsByTagName(t)[0];
	    g.src = wgScriptSrc;
	    s.parentNode.insertBefore(g, s);
	}(document, 'script'));

	/*~script*/
	},
	pre: function() {
	/*pre*/
	/*~pre*/
	},
	post: function() {
	/*post*/
	/*~post*/
	}
});
