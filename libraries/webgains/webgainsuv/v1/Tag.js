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
				token: "program_id",
				uv: ""
			},{
				name: "Version",
				token: "version_id",
				defaultValue: '1.2'
			},{
				name: "Page Type",
				description: "",
				token: "page_type",
				uv: "universal_variable.page.type",
				defaultValue: 'Confirmation'
			},{
				name: 'User language',
				description: "",
				token: "user_language",
				uv: "universal_variable.user.language",
				defaultValue: "en-gb"
			},{
				name: 'Transaction',
				token: 'tx',
				uv: "universal_variable.transaction"
			},{
				name: "Customer ID",
				token: "customer_id",
				uv: 'universal_variable.user.user_id',
				defaultValue: ''
			}
			]
			/*~config*/
		};
	},
	script: function() {
	/*script*/
	var tx 			= this.valueForToken('tx'), 
		wgProgramId = this.valueForToken('program_id'),
        wgVersion   = this.valueForToken('version_id'),
        wgType      = this.valueForToken('page_type'),
        wgChecksum  = (tx.checksum) ? tx.checksum : "",
        wgComment   = (tx.comment) ? tx.comment : "",
        wgProtocol  = (location.protocol.toLowerCase() == "https:") ? "https" : "http",
        wgLang      = this.valueForToken('user_language'),
        wgCurrency  = (tx.currency) ? tx.currency : "GBP",
        wgCustId    = this.valueForToken('customer_id'),
        wgVoucher   = (tx && tx.vouchers && tx.vouchers[0]) ? tx.vouchers[0] : "",
        wgOrderRef  = (tx.order_id) ? tx.order_id : "",
        wgItemList  = [],
        wgTotal     = (tx.total) ? tx.total : 0,
        wgEventId   = (tx.event_id) ? tx.event_id : "",
        wgLineItems = ;

	var itemList = [];

    for (i = 0; i < tx.line_items.length; i++) {
        var itemInfo = [],
            itemPrice = ( (tx.line_items[i].subtotal / tx.line_items[i].quantity));

        //Add the event id for existing / new user
        wgEventItemId = (tx.line_items[i].product.event_id) ? tx.line_items[i].product.event_id : wgEventId;
        itemInfo.push(wgEventItemId);

        //Add the item's price.
        itemInfo.push( parseFloat(itemPrice) );

        //Add the item's name.
        itemInfo.push(tx.line_items[i].product.name);

        //Add the item's ID.
        itemInfo.push(tx.line_items[i].product.id);

        //Add the transaction's voucher code for items if provided
        wgItemVoucher = (tx.line_items[i].product.voucher) ? tx.line_items[i].product.voucher : "";
        itemInfo.push("" + escape(wgItemVoucher));

        //Create the string, with fields separated by "::"
        var itemString = itemInfo.join("::");

        //Add the string, one time for each individual item purchased.
        for (j = 0; j < tx.line_items[i].quantity; j++) {
            wgItemList.push(itemString);
            // wgTotal = wgTotal + parseFloat(itemPrice);
        }
    }

    wgItemList = wgItemList.join("|");

		window.wgUri = "//track.webgains.com/transaction.html?wgrs=1&wgver=" + wgVersion + "&wgprotocol=";
	    wgUri += wgProtocol + "&wgsubdomain=track";
	    wgUri += "&wglang=" + wgLang;
	    wgUri += "&wgprogramid=" + wgProgramId + "&wgeventid=" + wgEventId;
	    wgUri += "&wgvalue=" + wgTotal + "&wgchecksum=" + wgChecksum;
	    wgUri += "&wgorderreference=" + wgOrderRef;
	    wgUri += "&wgcomment=" + escape(wgComment);
	    wgUri += "&wglocation=" + escape(document.referrer);
	    wgUri += "&wgitems=" + escape(wgItemList);
	    wgUri += "&wgcustomerid=" + escape("" + wgCustId);
	    wgUri += "&wgvouchercode=" + escape("" + wgVoucher);
	    wgUri += "&wgCurrency=" + escape("" + wgCurrency);

		// Load the image pixel
		var img = new Image();
		img.src = wgUri;
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
