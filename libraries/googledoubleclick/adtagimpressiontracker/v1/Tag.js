//:import CurrentSDK

qubit.opentag.LibraryTag.define("doubleclick.adtagimpressiontracker.v1.Tag", {
	getDefaultConfig: function () {
    return {
      /*config*/
      name: "adtagimpressiontracker",
      async: true,
      description: "Doubleclick pixel impression tracker",
      html: "",
      locationDetail: "",
      isPrivate: false,
      url: "",
      usesDocWrite: false,
      upgradeable: true,
      parameters: [{
          name:"dcm_account_id",
          description:" The DCM account ID : Nxxxx (https://ad.doubleclick.net/ddm/ad/Nxxxx.site-keyname/Byyyyyyy.Pzzzz)",
          token:"dcm_account_id",
          uv:"universal_variable.doubleclick.adtagimpressiontracker.dcm_account_id"
      },{
          name:"site_keyname",
          description:"An identifier for a site, based on the site's web address : site-keyname (https://ad.doubleclick.net/ddm/ad/Nxxxx.site-keyname/Byyyyyyy.Pzzzz)",
          token:"site_keyname",
          uv:"universal_variable.doubleclick.adtagimpressiontracker.site_keyname"
      },{
          name:"dcm_campaign_id",
          description:"The DCM campaign ID : Byyyyyyy (https://ad.doubleclick.net/ddm/ad/Nxxxx.site-keyname/Byyyyyyy.Pzzzz)",
          token:"dcm_campaign_id",
          uv:"universal_variable.doubleclick.adtagimpressiontracker.dcm_campaign_id"
      },{
          name:"dcm_placement_id",
          description:"The DCM placement ID : Pzzzz (https://ad.doubleclick.net/ddm/ad/Nxxxx.site-keyname/Byyyyyyy.Pzzzz)",
          token:"dcm_placement_id",
          uv:"universal_variable.doubleclick.adtagimpressiontracker.dcm_placement_id"
      }]
      /*~config*/
    };
	},
	script: function() {
	/*script*/

	    // @doc https://support.google.com/dcm/partner/answer/2826636#1&1a&2&3&3c&4c&5c&4&5&6&7&8&9&10&11&12&13&14&14a&15

        // https://ad.doubleclick.net/ddm/ad/Nxxxx.site-keyname/Byyyyyyy.Pzzzz;sz=widthxheight;ord=[timestamp];dc_lat=N;dc_rdid=Czzzz;tag_for_child_directed_treatment=I?
        // used as a pixel tracker with 1x1 size

        var t = (new Date()).getTime();

        var src = "//ad.doubleclick.net/ddm/ad/" + this.valueForToken("dcm_account_id") + "." +
                this.valueForToken("site_keyname") + "/" + this.valueForToken("dcm_campaign_id") + "." + this.valueForToken("dcm_placement_id") +
                ";sz=1x1;ord=" + t + ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=?"
                ;

        var img = new Image();
        img.src = src;

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
