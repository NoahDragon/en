window._bd_share_main.F.module("component/pop_base",function(t,e,n){var a=t("base/tangram").T,r=t("conf/const"),o=t("base/class").Class;e.PopBase=o.create(function(e){function n(t){a(t).click(function(t){t=a.event(t||window.event);var e=o(t.target);e&&(t.preventDefault(),i.fire("clickact",{cmd:a(e).attr(i._actBtnSet.cmdAttr),element:e,event:t,buttonType:i._poptype}))}).mouseover(function(t){var e=o(t.target);i.fire("mouseenter",{element:e,event:t}),a(e).attr("data-cmd")=="more"&&i.fire("moreover",{element:e,event:t})})}function o(t){if(c(t))return t;if(i._actBtnSet.maxDomDepth>0){var e=i._actBtnSet.maxDomDepth,n=0,r=a(t).parent().get(0),o=i.entities;while(n