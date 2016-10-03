//:import CurrentSDK

qubit.opentag.LibraryTag.define("facebook.pixelevent.v1.Tag", {
	getDefaultConfig: function () {
    return {
      /*config*/
      name: "Facebook pixel event",
      async: true,
      description: "",
      html: "",
      locationDetail: "",
      isPrivate: false,
      url: "",
      usesDocWrite: false,
      upgradeable: true,
      parameters: [{
        name: "FB Country Code",
        description: "e.g. en_UK ( if not sure, use : en_US )",
        token: "url_locale",
        uv: "universal_variable.facebook.url_locale"
      }, {
        name: "Pixel ID",
        description: "Client Specific (e.g. 6007143437659)",
        token: "pixel_id",
        uv: "universal_variable.facebook.pixel_id"
      }, {
        name: "Event name",
        description: "Event to track",
        token: "event_name",
        uv: "universal_variable.facebook.event_name"
      }, {
        name: "Event data",
        description: "Event data javascript object key value",
        token: "event_data",
        uv: "universal_variable.facebook.event_data"
      }]
      /*~config*/
    };
	},
	script: function() {
		/*script*/
		!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
		n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
		n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
		t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
		document,'script','//connect.facebook.net/' + this.valueForToken("url_locale") + '/fbevents.js');
		// Insert Your Custom Audience Pixel ID below.
		fbq('init', this.valueForToken('pixel_id'));

		var product_ids = [];
		for (var i = 0; i < universal_variable.basket.line_items.length; i++) {
			product_ids.push(universal_variable.basket.line_items[i].product.sku_code)
		}

		fbq('track', this.valueForToken('event_name'), this.valueForToken('event_data'));
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
