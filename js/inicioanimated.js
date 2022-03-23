lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  disableScrolling: true,
  alwaysShowNavOnTouchDevices: true,
});

var menu_mobile = $("#dropdown-menu-button");
var links_menu_mobile = $("#menu-desplage-mobile>li>a");
var links_menu_desktop = $("#menu-desplage-desktop>li>a");
$(menu_mobile).click(() => {
  $("#menu-desplage-mobile").css("top", "100%");
  $("#menu-desplage-mobile").toggleClass("view-menu");
});
for (let index = 0; index < links_menu_mobile.length; index++) {
  console.log($(links_menu_mobile[index]));
  $(links_menu_mobile[index]).click(() => {
    $("#menu-desplage-mobile>li>.link-active").removeClass("link-active");
    $(links_menu_mobile[index]).addClass("link-active");
  });
}
for (let index = 0; index < links_menu_desktop.length; index++) {
  console.log($(links_menu_desktop[index]));
  $(links_menu_desktop[index]).click(() => {
    $("#menu-desplage-desktop>li>.link-active").removeClass("link-active");
    $(links_menu_desktop[index]).addClass("link-active");
  });
}
$(links_menu_mobile).click(() => {
  $("#menu-desplage-mobile").toggleClass("view-menu");
});
