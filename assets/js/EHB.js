 var QuantityInput;
 var Product_Inch_value;
 var total;

$(function(){
	Init();
	var imgSrc = GetURLParameter("src");
    if(imgSrc != null  || imgSrc != "")
    {
      $("#Product_img").attr("src",imgSrc);
      setProductDetails(imgSrc);
    }
    var filterValue = GetURLParameter("filterValue");
    if(filterValue != null  || filterValue != "")
    {
      SetFilterValue(filterValue);
    }
    var total = GetURLParameter("total");
    if(total != null  || total != "")
    {
      $("#CheckOuttotal").text(total);
      $("#productPrice").text(total);
    }
    var Name = GetURLParameter("ProductName");
    if(Name != null  || Name != "")
    {
      $("#ProductName").text(getName(Name));
    }
});

function Init(){

$(document).ready(function(){
    $(document).on("blur",".firstName",function(){
        var firstName = $(".firstName").val().trim();
        validateIsNotEmpty(firstName,".firstName");
    });
    $(document).on("blur",".lastName",function(){
        var lastName = $(".lastName").val().trim();
        validateIsNotEmpty(lastName,".lastName");
    });
    $(document).on("blur",".contactNumber",function(){
        var contactNumber = $(".contactNumber").val().trim();
        validateIsNotEmpty(contactNumber,".contactNumber");
    });
    $(document).on("blur",".addressLine1",function(){
        var addressLine1 = $(".addressLine1").val().trim();
        validateIsNotEmpty(addressLine1,".addressLine1");
    });
    $(document).on("blur",".addressLine2",function(){
        var addressLine2 = $(".addressLine2").val().trim();
        validateIsNotEmpty(addressLine2,".addressLine2");
    });
    $(document).on("blur",".city",function(){
        var city = $(".city").val().trim();
        validateIsNotEmpty(city,".city");
    });
    $(document).on("blur",".province",function(){
        var province = $(".province").val().trim();
        validateIsNotEmpty(province,".province");
    });
    $(document).on("blur",".postalCode",function(){
        var postalCode = $(".postalCode").val().trim();
        validateIsNotEmpty(postalCode,".postalCode");
    });
    $(document).on("blur",".email",function(){
        var Email = $(".email").val().trim();
        ValidateEmail(".email",Email);
    });

    $(document).on("keypress", ".validateAlpha", function () {
        try {
            if (window.event) {
                var charCode = window.event.keyCode;
            } else if (e) {
                var charCode = e.which;
            } else {
                return true;
            }
            //45 hypen
            if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || (charCode == 45) ||
                (charCode == 32))
                return true;
            else
                return false;
        } catch (err) {

        }
    });

    $(document).on("keypress", ".numbers-only", function (e) {
        var code;

        if (e.charCode) {
            code = e.charCode;
        } else {
            code = e.keyCode;
        }

        if (!e) {
            e = window.event;
        }

        /*
         * backspace = 8 delete = 46 tab = 9 left = 37 right = 39
         */
        if ((!(code == 8 || code == 9 || code == 37) && (code < 48 || code > 57)) ||
            (String.fromCharCode(code) == '%') ||
            (e.keyCode == 39 && e.charCode == undefined) ||
            (e.keyCode == 0 && e.charCode == 39)) {
            e.cancelBubble = true;
            e.returnValue = false;
            if (e.stopPropagation) {
                e.stopPropagation();
                e.preventDefault();
            }
        }
    });

	$(document).on("keyup",".QuantityInput",function(){
		Calculatetotal(this);
	});

    $(document).on("click",".Product_Inch",function(){
		Calculatetotal(this);
	});

	$(".ViewImgButton").click(function(){
	    var hrefString = "./Product Details.html?src="+$(this).attr("data-img");
	 	location.href=hrefString;
	});

	$(".checkoutbtn").click(function(){
	    var hrefString = "./CheckOut.html?total="+$(".popuptotal").html()+"&ProductName="+$(".ProductName").html();
	 	location.href=hrefString;
	});

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        SetFilterValue(value);
    });

    
    if ($(".filter-button").removeClass("active")) {
		$(this).removeClass("active");
	}
	$(this).addClass("active");
	});
}


function SetFilterValue(value){
    if(value == "all")
    {
        $('.filter').show('1000');
    }
    else
    {
        $(".filter").not('.'+value).hide('3000');
        $('.filter').filter('.'+value).show('3000');
    }
}
function setProductDetails(value){
    if(value != null)
    {
    if(value.indexOf("Lace_frontal") != -1)
    {
        var a = new Option("8 inch", "800");
        var b = new Option("10 inch", "900");
        var c = new Option("12 inch", "1100");
        var d = new Option("14 inch", "1250");
        var e = new Option("16 inch", "1400");
        var f = new Option("18 inch", "2000");
        var g = new Option("20 inch", "2300");
        var h = new Option("22 inch", "2600");
        var i = new Option("24 inch", "2900");
        var j = new Option("26 inch", "3200");
        var k = new Option("28 inch", "3500");
        var l = new Option("30 inch", "2800");

        $("#Product_Inch").append(a);
        $("#Product_Inch").append(b);
        $("#Product_Inch").append(c);
        $("#Product_Inch").append(d);
        $("#Product_Inch").append(e);
        $("#Product_Inch").append(f);
        $("#Product_Inch").append(g);
        $("#Product_Inch").append(h);
        $("#Product_Inch").append(i);
        $("#Product_Inch").append(j);
        $("#Product_Inch").append(k);
        $("#Product_Inch").append(l);

        $("#ProductName").text("LACE FRONTAL");

    }if(value.indexOf("VIRGIN%20BUNDLES") != -1)
    {
        var a = new Option("10 inch", "2000");
        var b = new Option("12 inch", "2400");
        var c = new Option("14 inch", "2800");
        var d = new Option("16 inch", "3000");
        var e = new Option("18 inch", "3200");
        var f = new Option("20 inch", "3400");
        var g = new Option("22 inch", "3600");
        var h = new Option("24 inch", "3800");
        var i = new Option("26 inch", "4400");
        var j = new Option("28 inch", "4600");
        var k = new Option("30 inch", "5000");

        $("#Product_Inch").append(a);
        $("#Product_Inch").append(b);
        $("#Product_Inch").append(c);
        $("#Product_Inch").append(d);
        $("#Product_Inch").append(e);
        $("#Product_Inch").append(f);
        $("#Product_Inch").append(g);
        $("#Product_Inch").append(h);
        $("#Product_Inch").append(i);
        $("#Product_Inch").append(j);
        $("#Product_Inch").append(k);
        $("#ProductName").text("VIRGIN BUNDLES");

    }if(value.indexOf("LACE%20FRONALS") != -1)
    {
        var a = new Option("10 inch", "800");
        var b = new Option("12 inch", "900");
        var c = new Option("14 inch", "1000");
        var d = new Option("16 inch", "1100");
        var e = new Option("18 inch", "1200");
        var f = new Option("20 inch", "1300");

        $("#Product_Inch").append(a);
        $("#Product_Inch").append(b);
        $("#Product_Inch").append(c);
        $("#Product_Inch").append(d);
        $("#Product_Inch").append(e);
        $("#Product_Inch").append(f);

        $("#ProductName").text("LACE FRONALS");

    }if(value.indexOf("CLOSURES") != -1)
    {
        var a = new Option("10 inch", "500");
        var b = new Option("12 inch", "600");
        var c = new Option("14 inch", "700");
        var d = new Option("16 inch", "800");
        var e = new Option("18 inch", "900");
        var f = new Option("20 inch", "1000");

        $("#Product_Inch").append(a);
        $("#Product_Inch").append(b);
        $("#Product_Inch").append(c);
        $("#Product_Inch").append(d);
        $("#Product_Inch").append(e);
        $("#Product_Inch").append(f);

        $("#ProductName").text("CLOSURES");

    }if(value.indexOf("360_Lace_Frontals") != -1)
    {
        var a = new Option("10 inch", "1300");
        var b = new Option("12 inch", "1400");
        var c = new Option("14 inch", "1500");
        var d = new Option("16 inch", "1600");
        var e = new Option("18 inch", "1800");
        var f = new Option("20 inch", "2000");

        $("#Product_Inch").append(a);
        $("#Product_Inch").append(b);
        $("#Product_Inch").append(c);
        $("#Product_Inch").append(d);
        $("#Product_Inch").append(e);
        $("#Product_Inch").append(f);

        $("#ProductName").text("360 LACE FRONTALS");
    }
    }
}

function GetURLParameter(sParam)
{
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL;
    var sParameterName = sURLVariables.split('&');
    for(var i = 0;i < sParameterName.length;i++)
    {
        var tempName = sParameterName[i];
        var sParameterValue = tempName.split('=');
        for(var z = 0 ; z < sParameterValue.length;z++)
        {
            if (sParameterValue[z] == sParam)
            {
                return sParameterValue[z+1];

            }
        }
    }
}

function popup(element){
	var modalImg = document.getElementById("popupimg");
	modalImg.src = element.src;

	var modalCaption = document.getElementById("popupcaption");
	modalCaption.textContent = element.alt;

	var modalOrderNumber = document.getElementById("popupordernumber");
	modalOrderNumber.textContent = $(element).attr('data-modalOrderNumber');

	setProductDetails(modalImg.src);
}

function Calculatetotal(e){
	QuantityInput = $(".QuantityInput").val().trim();
 	Product_Inch_value = $("#Product_Inch option:selected").val();
    total = ((QuantityInput*Product_Inch_value));
	$(".popuptotal").html(total);
}
function getName(value)
{
    if(value == "360_Lace_Frontals")
    {
        return "360 Lace Frontals";
    }else if(value == "CLOSURES")
    {
        return "CLOSURES";
    }else if(value == "LACE%20FRONTAL")
    {
        return "Lace frontal";
    }else if(value == "VIRGIN%20BUNDLES")
    {
        return "Virgin Bundles";
    }else if(value == "LACE%20FRONALS")
    {
        return "Lace Fronals";
    }else{
        return value;
    }
}

function validate()
{
    var isValid = true;
    if(!validateIsNotEmpty($(".firstName").val().trim(),".firstName"))
    {
        isValid = false;
    }if(!validateIsNotEmpty($(".contactNumber").val().trim(),".contactNumber"))
    {
        isValid = false;
    }if(!validateIsNotEmpty($(".lastName").val().trim(),".lastName"))
    {
        isValid = false;
    }if(!validateIsNotEmpty($(".addressLine1").val().trim(),".addressLine1"))
    {
        isValid = false;
    }if(!validateIsNotEmpty($(".addressLine2").val().trim(),".addressLine2"))
    {
        isValid = false;
    }if(!validateIsNotEmpty($(".city").val().trim(),".city"))
    {
        isValid = false;
    }if(!validateIsNotEmpty($(".province").val().trim(),".province"))
    {
        isValid = false;
    }if(!validateIsNotEmpty($(".postalCode").val().trim(),".postalCode"))
    {
        isValid = false;
    }if(!ValidateEmail(".email",$(".email").val().trim()))
    {
        isValid = false;
    }

    if(isValid)
    {
        var hrefString = "./index.html";
        location.href=hrefString;
    }

}

function validateIsNotEmpty(Name,id){
    if (Name == null || Name.length == 0 || Name == "") {
        $(id).addClass("is-invalid");
        return false;
    }else
    {
        $(id).removeClass("is-invalid");
        return true;
    }
}

function ValidateEmail(id,value)
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value))
  {
  $(id).removeClass("is-invalid");
    return (true)
  }
    $(id).addClass("is-invalid");
    return (false)
}