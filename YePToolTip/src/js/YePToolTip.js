(function ($) {

   $.fn.YePToolTip = function (options) {

      var ToolTipSetup = $.extend({
            position : "right",
            Dwidth : "200",
            Dbackground : "#ADD8E6",
            Dborder : "blue",
            ToolTip : "Test Information",
            ToolTip_offset : "10"

         }, options);

      return this.each(function () {
         $(this).bind("mouseenter", function () {
            console.log("Enter Working");
            var parent = this;
            $("body").after('<div id="ToolTip-Information-Hover" ><div class="ToolTip-Data"></div> <div id = "ToolTipArrow" class=""></div><div class="ToolTip"></div></div>');
            $(".ToolTip-Data").text(ToolTipSetup.ToolTip);
            ArrowPos(parent);
         });
         $(this).bind("mouseleave", function () {
            console.log("Leave Working");
            $("#ToolTip-Information-Hover").remove();
         });
      });
      function ArrowPos(parent) {

         switch (ToolTipSetup.position.toUpperCase()) {
         case ("RIGHT"): {
               FormatLeftArrow(parent);
            }
            break;
         case ("UP"): {
               FormatDownArrow(parent);
            }
            break;
         case ("DOWN"): {
               FormatUpArrow(parent);
            }
            break;
         default:
            FormatRightArrow(parent);
         }
      }
      function FormatLeftArrow(parent) {
         var Poffset = $(parent).offset();
         var Pwidth = $(parent).css("width");
         Pwidth = Number(Pwidth.substring(Pwidth.length - 2, 0));
         var Pleft = Poffset.left + Pwidth;
         $("#ToolTipArrow").addClass("Arr-Left");
         var Arrow = $(".Arr-Left");
         Arrow.css({
            "position" : "absolute"
         }).css("top", Poffset.top).css("left", Pleft).show();
         var AOffset = Arrow.offset();
         var AWidth = Arrow.css("border-bottom-width");
         AWidth = Number(AWidth.substring(AWidth.length - 2, 0))
            var ALeft = AWidth + AOffset.left;
         $(".ToolTip-Data").css("position", "absolute").css("top", AOffset.top - ToolTipSetup.ToolTip_offset).css("left", ALeft);
         $(".ToolTip").show();
      }
      function FormatUpArrow(parent) {
         var Poffset = $(parent).offset();
         var Pwidth = $(parent).css("width");
         var Pheight = $(parent).css("height");
         Pheight = Number(Pheight.substring(Pheight.length - 2, 0));
         Pwidth = Number(Pwidth.substring(Pwidth.length - 2, 0)) / 2;
         var Pleft = Poffset.left + Pwidth;
         $("#ToolTipArrow").addClass("Arr-Up");
         var Arrow = $(".Arr-Up");
         Arrow.css({
            "position" : "absolute"
         }).css("top", Poffset.top + Pheight).css("left", Pleft).show();
         var AOffset = Arrow.offset();
         var AWidth = Arrow.css("border-bottom-width");
         AWidth = Number(AWidth.substring(AWidth.length - 2, 0))
            var ALeft = AOffset.left;
         $(".ToolTip-Data").css("position", "absolute").css("top", AOffset.top + AWidth).css("left", ALeft - ToolTipSetup.ToolTip_offset);
         $(".ToolTip").show();
      }
      function FormatRightArrow(parent) {
         var Poffset = $(parent).offset();
         var Pleft = Poffset.left;
         $("#ToolTipArrow").addClass("Arr-Right");
         var Arrow = $(".Arr-Right");
         var AWidth = Arrow.css("border-bottom-width");
         AWidth = Number(AWidth.substring(AWidth.length - 2, 0))
            Arrow.css({
               "position" : "absolute"
            }).css("top", Poffset.top).css("left", Pleft - AWidth).show();
         var AOffset = Arrow.offset();
         var dbWidth = $(".ToolTip-Data").css("border-right-width");
         var dpWidth = $(".ToolTip-Data").css("padding-right");
         dbWidth = Number(dbWidth.substring(dbWidth.length - 2, 0));
         dpWidth = Number(dpWidth.substring(dpWidth.length - 2, 0));
         var ALeft = AOffset.left - (AWidth) - ToolTipSetup.Dwidth -dbWidth-dpWidth////;
         $(".ToolTip-Data").css("position", "absolute").css("top", AOffset.top - ToolTipSetup.ToolTip_offset).css("left", ALeft);
         $(".ToolTip").show();
      }
      function FormatDownArrow(parent) {
	  var Poffset = $(parent).offset();
         var Pwidth = $(parent).css("width");
         var Pheight = $(parent).css("height");
         Pheight = Number(Pheight.substring(Pheight.length - 2, 0))/2;
         Pwidth = Number(Pwidth.substring(Pwidth.length - 2, 0)) / 2;
         var Pleft = Poffset.left + Pwidth;
         $("#ToolTipArrow").addClass("Arr-Down");
         var Arrow = $(".Arr-Down");
         Arrow.css({
            "position" : "absolute"
         }).css("top", Poffset.top-Pheight ).css("left", Pleft).show();
         var AOffset = Arrow.offset();
         var AWidth = Arrow.css("border-top-width");
         AWidth = Number(AWidth.substring(AWidth.length - 2, 0));
		 var dbWidth = $(".ToolTip-Data").css("border-bottom-width");
         var dpWidth = $(".ToolTip-Data").css("padding-bottom");
		 var dHeight = $(".ToolTip-Data").height();
         dbWidth = Number(dbWidth.substring(dbWidth.length - 2, 0));
         dpWidth = Number(dpWidth.substring(dpWidth.length - 2, 0));
            var ALeft = AOffset.left;
			var ATop = AOffset.top -AWidth-dbWidth-dpWidth-dHeight;
         $(".ToolTip-Data").css("position", "absolute").css("top", ATop).css("left", ALeft - ToolTipSetup.ToolTip_offset);
         $(".ToolTip").show();
		 //Recalculate Top Position
		 var rTop = $(".ToolTip-Data").height();
		 rTop = AOffset.top -AWidth-dbWidth-dpWidth-rTop;
		 $(".ToolTip-Data").css("top",rTop);
		 }
   }

}
   (jQuery));
