(this["webpackJsonpreact-app"]=this["webpackJsonpreact-app"]||[]).push([[0],{34:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(26),i=a.n(l),c=(a(34),a(28)),o=a(27),s=(a(35),a(1)),p="dark",C=function(){var e=Object(o.useMediaQuery)({query:"(prefers-color-scheme: dark)"},void 0,(function(e){l(e)})),t=Object(r.useState)(e),a=Object(c.a)(t,2),n=a[0],l=a[1];return Object(r.useEffect)((function(){n?document.documentElement.classList.add(p):document.documentElement.classList.remove(p)}),[n]),console.log(n),Object(s.jsx)("input",{type:"checkbox",className:"toggle",checked:n,onChange:function(e){return l(e.target.checked)}})},m=a(9),E=a.n(m),d=(a(49),a(50),a.p+"static/media/logo3.5ca6d51a.svg");var f=function(){return Object(s.jsx)("object",{type:"image/svg+xml",data:d,className:"robot"})},y=a(29),g=a(3),h=a(10),u=a(11),M=a(12),b=new M.a;var O=function(){function e(t,a,r){Object(h.a)(this,e),this.createChatBotMessage=t,this.setState=a,this.createClientMessage=r}return Object(u.a)(e,[{key:"answer",value:function(e){var t=this.createChatBotMessage(e.message);this.updateChatbotState(t);var a,r=this.createChatBotMessage("This is the code\ud83d\udc47\ud83c\udffb",{widget:"CodeViewer",loading:!0,terminateLoading:!0,withAvatar:!0});this.updateChatbotState(r),a=e.code,b.set("code",a,{path:"/"}),console.log(b.get("code"))}},{key:"get_best_results",value:function(){var e=this.createChatBotMessage("Wait a moment. Getting best results for you!");this.updateChatbotState(e)}},{key:"dont_be_silent",value:function(){var e=this.createChatBotMessage("Please say something don't be silent :(");this.updateChatbotState(e)}},{key:"ask_for_code",value:function(){var e=this.createChatBotMessage("Do you have any code related to this? (Say 'no' or enter code)");this.updateChatbotState(e)}},{key:"updateChatbotState",value:function(e){this.setState((function(t){return Object(g.a)(Object(g.a)({},t),{},{messages:[].concat(Object(y.a)(t.messages),[e])})})),console.log("done")}}]),e}(),w=function(){function e(t,a){Object(h.a)(this,e),this.actionProvider=t,this.state=a}return Object(u.a)(e,[{key:"parse",value:function(e){var t=this;if(""===(e=(e=e.toLowerCase()).trim()))this.actionProvider.dont_be_silent();else{this.actionProvider.get_best_results();var a=new FormData;a.append("search",e),fetch("https://anshiflutterapp.web.app/api/inputValue",{method:"POST",mode:"cors",body:a}).then((function(e){return e.json()})).then((function(e){console.log(e),"{}"===JSON.stringify(e)?t.actionProvider.answer("Could not fetch data! :("):t.actionProvider.answer(e)})).catch(console.error)}}}]),e}();a(51);function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}function _(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var j=r.createElement("path",{d:"M683.911 761.479C681.373 763.691 666.622 777.558 623.197 770.325C625.67 773.808 630.768 775.197 634.424 776.434C631.996 779.664 624.373 779.437 620.504 779.659C614.437 780.013 608.969 780.486 603.093 779.258C600.713 778.758 588.202 773.669 582.684 769.571C589.36 777.334 609.956 790.739 651.324 788.8C664.977 788.157 678.718 784.074 690.745 778.364C701.695 773.171 710.047 765.902 707.151 753.96C702.004 760.671 686.41 759.303 683.911 761.479ZM580.175 765.902C579.698 766.852 580.773 768.151 582.684 769.571C580.992 767.603 580.192 765.998 580.175 765.096V765.902Z",fill:"url(#paint0_linear)"}),v=r.createElement("path",{d:"M539.967 806.913C539.967 806.913 546.803 790.828 568.515 797.264C583.767 801.782 586.208 810.934 586.208 810.934L587.011 948.845C587.011 948.845 583.39 964.931 562.083 963.723C540.773 962.517 535.544 951.261 535.544 951.261L539.967 806.913Z",fill:"#B3B3B3"}),U=r.createElement("g",{opacity:.300003},r.createElement("g",{opacity:.300003},r.createElement("g",{opacity:.300003},r.createElement("g",{opacity:.300003},r.createElement("g",{opacity:.300003},r.createElement("path",{opacity:.300003,d:"M539.967 806.912C539.967 806.912 546.803 790.829 568.515 797.265C583.767 801.781 586.208 810.935 586.208 810.935L587.011 948.846C587.011 948.846 583.392 964.93 562.083 963.722C540.773 962.518 535.544 951.262 535.544 951.262L539.967 806.912Z",fill:"url(#paint1_linear)"})))))),S=r.createElement("g",{opacity:.199997},r.createElement("g",{opacity:.199997},r.createElement("path",{opacity:.199997,d:"M536.047 924.721C540.059 922.586 547.23 917.987 551.924 919.906C547.024 921.077 538.218 925.957 536.578 931.032C536.419 929.104 537.171 926.384 536.952 924.119",fill:"black"}))),Z=r.createElement("path",{d:"M516.245 974.979L531.927 959.703C531.927 959.703 526.7 918.689 559.266 919.495C589.426 920.239 586.207 955.279 586.207 955.279L611.537 974.581C611.537 974.581 632.043 1037.71 636.064 1061.43C640.087 1085.15 653.353 1131.79 590.629 1133.8C509.041 1136.42 506.915 1114.1 506.192 1087.97C504.585 1029.66 516.245 974.979 516.245 974.979Z",fill:"#CCCCCC"}),L=r.createElement("g",{opacity:.199997},r.createElement("g",{opacity:.199997},r.createElement("g",{opacity:.199997},r.createElement("g",{opacity:.199997},r.createElement("g",{opacity:.199997},r.createElement("g",{opacity:.199997},r.createElement("path",{opacity:.199997,d:"M516.244 974.979L531.925 959.703C531.925 959.703 526.699 918.691 559.267 919.497C589.424 920.24 586.207 955.278 586.207 955.278L611.538 974.581C611.538 974.581 632.044 1037.71 636.062 1061.43C640.085 1085.15 653.351 1131.79 590.63 1133.8C509.039 1136.42 506.913 1114.1 506.193 1087.97C504.585 1029.66 516.244 974.979 516.244 974.979",fill:"url(#paint2_linear)"}))))))),k=r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("path",{opacity:.5,d:"M516.244 974.979L531.925 959.703C531.925 959.703 526.699 918.691 559.267 919.497C589.424 920.24 586.207 955.278 586.207 955.278L611.538 974.581C611.538 974.581 632.044 1037.71 636.062 1061.43C640.085 1085.15 653.351 1131.79 590.63 1133.8C509.039 1136.42 506.913 1114.1 506.193 1087.97C504.585 1029.66 516.244 974.979 516.244 974.979",fill:"url(#paint3_linear)"}))))))),B=r.createElement("path",{d:"M515.842 1114.1L512.627 1103.65C512.627 1103.65 545.371 1053.58 577.764 1055.8C607.114 1057.81 638.476 1090.78 638.476 1090.78C638.476 1090.78 641.693 1107.67 595.053 1115.7C548.411 1123.75 515.842 1114.1 515.842 1114.1Z",fill:"#808080"}),G=r.createElement("path",{d:"M512.627 1103.65L515.842 1114.1C515.842 1114.1 548.409 1123.75 595.051 1115.71C641.693 1107.67 638.474 1090.78 638.474 1090.78C638.474 1090.78 607.115 1057.81 577.764 1055.8C577.06 1055.75 576.359 1055.73 575.655 1055.73C543.965 1055.73 512.627 1103.65 512.627 1103.65Z",fill:"url(#paint4_linear)"}),D=r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("path",{opacity:.5,d:"M576.155 945.633C576.155 956.288 567.513 964.93 556.854 964.93C546.195 964.93 537.556 956.288 537.556 945.633C537.556 934.968 546.195 926.331 556.854 926.331C567.513 926.331 576.155 934.968 576.155 945.633Z",fill:"url(#paint5_linear)"})))))),T=r.createElement("path",{d:"M572.535 945.633C572.535 954.291 565.514 961.31 556.856 961.31C548.196 961.31 541.174 954.291 541.174 945.633C541.174 936.97 548.196 929.947 556.856 929.947C565.514 929.947 572.535 936.97 572.535 945.633Z",fill:"#333333"}),A=r.createElement("path",{d:"M572.536 945.633C572.536 954.291 565.514 961.311 556.854 961.311C548.194 961.311 541.175 954.291 541.175 945.633C541.175 936.969 548.194 929.946 556.854 929.946C565.514 929.946 572.536 936.969 572.536 945.633Z",fill:"url(#paint6_radial)"}),P=r.createElement("path",{d:"M510.616 1144.66C510.616 1144.66 509.817 1064.97 580.176 1065.85C644.909 1066.66 649.737 1142.25 649.737 1142.25C649.737 1142.25 636.869 1168.78 579.772 1167.98C512.557 1167.03 510.616 1144.66 510.616 1144.66Z",fill:"#4D4D4D"}),N=r.createElement("g",{opacity:.699997},r.createElement("g",{opacity:.699997},r.createElement("g",{opacity:.699997},r.createElement("g",{opacity:.699997},r.createElement("g",{opacity:.699997},r.createElement("g",{opacity:.699997},r.createElement("path",{opacity:.699997,d:"M510.616 1144.66C510.616 1144.66 509.818 1064.98 580.175 1065.85C644.908 1066.66 649.737 1142.25 649.737 1142.25C649.737 1142.25 636.869 1168.78 579.773 1167.98C512.556 1167.03 510.616 1144.66 510.616 1144.66",fill:"url(#paint7_radial)"}))))))),H=r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("path",{opacity:.5,d:"M510.616 1144.66C510.616 1144.66 509.818 1064.98 580.175 1065.85C644.908 1066.66 649.737 1142.25 649.737 1142.25C649.737 1142.25 636.869 1168.78 579.773 1167.98C512.556 1167.03 510.616 1144.66 510.616 1144.66",fill:"url(#paint8_linear)"}))))))),V=r.createElement("path",{d:"M642.786 1143.34C638.938 1146.33 636.421 1150.1 632.007 1152.63C627.255 1155.35 621.891 1156.92 616.6 1158.19C605.854 1160.77 594.62 1161.35 583.605 1161.41C560.579 1161.55 533.995 1160.57 515.438 1145.47C514.507 1144.71 512.894 1145.69 513.66 1146.84C520.906 1157.7 537.47 1161.19 549.362 1163.37C560.571 1165.43 572.217 1165.84 583.605 1165.9C595.969 1165.97 608.479 1165.05 620.492 1162C628.556 1159.95 643.9 1154.7 645.906 1145.15C646.195 1143.77 645.231 1142.87 644.127 1142.87C643.678 1142.87 643.207 1143.02 642.786 1143.34",fill:"url(#paint9_linear)"}),F=r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("path",{opacity:.5,d:"M580.375 1070.67C617.167 1086.96 622.46 1134.33 620.785 1123.75C619.478 1115.49 616.069 1094.31 611.134 1087.56C628.021 1098.42 629.227 1127.97 631.599 1132.44C635.578 1139.94 636.925 1136.8 644.388 1134.69C644.733 1120.67 635.113 1099.78 626.012 1088.97C617.939 1079.38 595.411 1064.62 581.783 1070.47",fill:"url(#paint10_linear)"}))))))),I=r.createElement("path",{d:"M714.872 1129.78C714.872 1129.78 752.869 1130.99 770.358 1115.3C787.849 1099.63 808.357 1073.09 808.958 1047.15C809.069 1042.29 751.661 1055 734.17 1079.72C716.681 1104.45 714.872 1129.78 714.872 1129.78Z",fill:"#666666"}),W=r.createElement("path",{d:"M719.23 1135.01C719.23 1135.01 726.224 1065.57 799.925 1055.57C887.85 1043.63 887.486 1133.02 887.486 1133.02C887.486 1133.02 893.298 1148.03 815.592 1147.27C743.969 1146.58 719.23 1135.01 719.23 1135.01Z",fill:"#4D4D4D"}),J=r.createElement("g",{opacity:.699997},r.createElement("g",{opacity:.699997},r.createElement("g",{opacity:.699997},r.createElement("g",{opacity:.699997},r.createElement("g",{opacity:.699997},r.createElement("g",{opacity:.699997},r.createElement("path",{opacity:.699997,d:"M719.23 1135.01C719.23 1135.01 726.224 1065.57 799.925 1055.57C887.851 1043.63 887.486 1133.02 887.486 1133.02C887.486 1133.02 893.298 1148.03 815.592 1147.27C743.969 1146.58 719.23 1135.01 719.23 1135.01",fill:"url(#paint11_radial)"}))))))),q=r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("path",{opacity:.5,d:"M719.23 1135.01C719.23 1135.01 726.224 1065.57 799.925 1055.57C887.851 1043.63 887.486 1133.02 887.486 1133.02C887.486 1133.02 893.298 1148.03 815.592 1147.27C743.969 1146.58 719.23 1135.01 719.23 1135.01",fill:"url(#paint12_linear)"}))))))),Q=r.createElement("path",{d:"M882.961 1130.22C877.046 1137.79 864.714 1138.68 855.932 1139.73C838.695 1141.81 821.164 1141.8 803.834 1141.37C786.357 1140.94 768.835 1139.81 751.474 1137.79C745.218 1137.06 738.955 1136.18 732.781 1134.92C729.918 1134.34 725.327 1133.9 722.988 1131.92C721.976 1131.06 720.177 1132.19 721.035 1133.43C722.813 1135.98 726.512 1137.01 729.339 1137.84C735.736 1139.71 742.366 1140.77 748.95 1141.73C767.538 1144.44 786.314 1145.74 805.083 1146.31C823.517 1146.88 842.124 1146.75 860.425 1144.25C867.078 1143.35 886.266 1141.38 886.464 1131.67C886.487 1130.53 885.35 1129.58 884.269 1129.58C883.786 1129.58 883.313 1129.77 882.961 1130.22",fill:"url(#paint13_linear)"}),R=r.createElement("path",{d:"M696.376 822.192C696.376 822.192 698.606 807.927 720.913 804.027C736.584 801.282 737.388 810.934 737.388 810.934L766.34 949.249C766.34 949.249 767.222 965.849 746.067 968.691C724.915 971.54 717.654 961.474 717.654 961.474L696.376 822.192Z",fill:"#B3B3B3"}),z=r.createElement("path",{d:"M758.9 1074.3C764.027 1070.26 791.467 1050.77 808.958 1047.15C805.942 1035.09 772.168 906.63 767.946 895.169C740.806 889.139 740.806 925.322 741.409 934.372C731.154 937.987 691.954 971.767 691.954 971.767C691.954 971.767 682.305 1046.55 702.811 1108.67C710.505 1131.98 714.871 1129.78 714.871 1129.78C714.871 1129.78 713.663 1109.88 758.9 1074.3",fill:"#CCCCCC"}),K=r.createElement("path",{d:"M779.788 920.765C781.423 928.93 780.277 936.201 773.15 937.583C766.02 938.966 758.955 933.461 757.371 925.286C755.784 917.107 760.421 909.96 767.407 907.978C771.626 906.777 777.206 907.857 779.788 920.765",fill:"url(#paint14_radial)"}),X=r.createElement("path",{d:"M387.359 890.178C387.359 890.178 380.288 899.804 378.63 904.537C375.238 914.209 381.375 936.998 363.091 935.53C344.806 934.066 334.133 914.297 349.062 886.901C363.99 859.507 375.055 870.097 379.857 873.137C390.439 879.838 387.359 890.178 387.359 890.178Z",fill:"#666666"}),Y=r.createElement("path",{d:"M463.371 873.455C463.371 873.455 460.356 900.597 471.213 913.865C482.068 927.136 492.321 931.956 501.97 923.513C510.959 915.652 511.821 912.46 502.776 890.746C494.951 871.964 485.083 843.902 485.083 843.902L463.371 873.455Z",fill:"#666666"}),$=r.createElement("path",{d:"M392.99 725.088C392.99 744.597 408.807 760.411 428.313 760.411C447.822 760.411 463.634 744.597 463.634 725.088C463.634 705.579 447.822 689.767 428.313 689.767C408.807 689.767 392.99 705.579 392.99 725.088Z",fill:"#808080"}),ee=r.createElement("path",{d:"M432.611 733.533C470.608 733.533 482.067 742.58 482.067 742.58C482.067 742.58 491.114 799.271 486.894 852.348C482.671 905.42 374.111 892.154 369.888 880.092C357.122 843.613 362.65 758.259 368.078 739.563C369.284 731.723 414.217 733.533 432.611 733.533Z",fill:"#CCCCCC"}),te=r.createElement("path",{d:"M398.838 893.96C398.838 893.96 402.13 903.397 402.288 908.784C402.613 919.795 418.249 940.728 398.411 945.717C378.576 950.712 359.379 934.452 364.064 901.384C368.752 868.311 384.802 874.602 390.94 876.509C402.455 880.091 398.838 893.96 398.838 893.96Z",fill:"#666666"}),ae=r.createElement("path",{d:"M433.417 888.939C433.417 888.939 433.254 902.12 435.024 907.431C438.643 918.288 461.562 934.773 441.86 945.231C422.16 955.681 396.827 944.827 392.003 910.649C387.178 876.475 406.197 878.848 413.312 878.484C428.992 877.678 433.417 888.939 433.417 888.939Z",fill:"#666666"}),re=r.createElement("path",{d:"M459.752 717.551L521.572 642.463L486.592 613.511L419.945 695.235C419.945 695.235 428.647 695.417 439.548 703.979C452.214 713.932 451.862 718.309 452.549 719.585C453.234 720.862 459.752 717.551 459.752 717.551Z",fill:"#B3B3B3"}),ne=r.createElement("path",{d:"M940.788 853.084C940.788 853.084 949.719 861.011 952.338 865.29C957.683 874.034 956.471 897.601 974.039 892.33C991.607 887.054 997.891 865.486 977.537 841.838C957.19 818.19 948.596 830.869 944.542 834.848C935.601 843.622 940.788 853.084 940.788 853.084Z",fill:"#666666"}),le=r.createElement("path",{d:"M862.958 852.705C862.958 852.705 871.605 878.604 863.78 893.859C855.953 909.113 846.943 915.98 835.734 909.752C825.296 903.953 823.78 901.013 828.063 877.886C831.77 857.879 835.522 828.372 835.522 828.372L862.958 852.705Z",fill:"#666666"}),ie=r.createElement("path",{d:"M900.601 692.862C904.699 711.933 892.561 730.717 873.488 734.815C854.415 738.913 835.631 726.774 831.533 707.702C827.435 688.629 839.572 669.845 858.648 665.747C877.719 661.649 896.503 673.789 900.601 692.862Z",fill:"#808080"}),ce=r.createElement("path",{d:"M863.639 709.441C826.485 717.422 817.186 728.674 817.186 728.674C817.186 728.674 820.249 786.005 835.524 837.008C850.802 888.012 954.154 852.233 955.747 839.554C960.568 801.21 937.232 718.921 927.997 701.782C925.174 694.369 881.623 705.578 863.639 709.441Z",fill:"#CCCCCC"}),oe=r.createElement("path",{d:"M930.358 859.196C930.358 859.196 929.121 869.109 930.098 874.415C932.093 885.242 921.205 908.991 941.646 909.707C962.09 910.423 977.44 890.492 965.915 859.146C954.387 827.795 940.014 837.317 934.415 840.472C923.905 846.394 930.358 859.196 930.358 859.196Z",fill:"#666666"}),se=r.createElement("path",{d:"M895.495 861.547C895.495 861.547 898.425 874.4 897.806 879.966C896.551 891.342 877.604 912.272 899.066 918.355C920.523 924.437 943.008 908.503 940.548 874.076C938.083 839.646 919.988 845.965 912.955 847.102C897.454 849.609 895.495 861.547 895.495 861.547Z",fill:"#666666"}),pe=r.createElement("path",{d:"M833.745 699.516L757.531 639.09L785.649 603.437L867.973 669.336C867.973 669.336 859.507 671.344 850.647 682.005C840.356 694.396 841.618 698.6 841.216 699.993C840.814 701.384 833.745 699.516 833.745 699.516Z",fill:"#B3B3B3"}),Ce=r.createElement("path",{d:"M686.579 748.03C686.579 767.153 661.8 770.325 644.363 770.35C627.947 770.377 603.349 767.153 603.349 748.03L604.301 689.105C604.301 669.981 616.88 672.247 633.567 672.247H655.153C671.843 672.247 687.528 669.981 687.528 689.105L686.579 748.03Z",fill:"#4D4D4D"}),me=r.createElement("path",{d:"M795.953 605.671C795.953 628.176 777.708 646.418 755.201 646.418C732.698 646.418 714.453 628.176 714.453 605.671C714.453 583.166 732.698 564.921 755.201 564.921C777.708 564.921 795.953 583.166 795.953 605.671Z",fill:"url(#paint15_radial)"}),Ee=r.createElement("path",{d:"M484.667 605.671C484.667 628.176 502.909 646.418 525.414 646.418C547.919 646.418 566.164 628.176 566.164 605.671C566.164 583.166 547.919 564.921 525.414 564.921C502.909 564.921 484.667 583.166 484.667 605.671Z",fill:"url(#paint16_radial)"}),de=r.createElement("path",{d:"M537.555 574.522C537.555 574.522 554.443 563.466 640.687 564.917C712.5 566.125 750.455 567.53 754.676 579.091C758.901 590.652 757.693 672.646 733.568 684.134C709.443 695.622 567.107 700.188 550.824 682.912C534.54 665.637 532.127 633.5 529.11 608.7C526.095 583.901 537.555 574.522 537.555 574.522Z",fill:"#B3B3B3"}),fe=r.createElement("path",{d:"M672.253 568.079C672.253 577.405 660.588 580.139 649.334 580.139C638.075 580.139 626.412 577.405 626.412 568.079V549.18C626.412 539.854 633.975 532.293 643.304 532.293H655.366C664.692 532.293 672.253 539.854 672.253 549.18V568.079Z",fill:"#333333"}),ye=r.createElement("path",{d:"M694.768 571.295C710.405 602.3 636.084 600.417 621.156 602.974C660.055 603.876 679.765 601.504 704.685 598.148C717.183 596.465 745.964 594.108 750.959 579.339C748.715 567.387 713.618 569.2 697.446 567.691L694.768 571.295Z",fill:"url(#paint17_linear)"}),ge=r.createElement("path",{d:"M834.29 358.093C834.29 464.183 748.285 550.186 642.195 550.186C536.106 550.186 450.103 464.183 450.103 358.093C450.103 252.002 536.106 166.001 642.195 166.001C748.285 166.001 834.29 252.002 834.29 358.093Z",fill:"#CCCCCC"}),he=r.createElement("path",{d:"M834.291 358.094C834.291 464.182 748.286 550.185 642.195 550.185C536.107 550.185 450.102 464.182 450.102 358.094C450.102 252.003 536.107 166 642.195 166C748.286 166 834.291 252.003 834.291 358.094Z",fill:"url(#paint18_linear)"}),ue=r.createElement("path",{d:"M834.291 358.094C834.291 464.182 748.286 550.185 642.195 550.185C536.107 550.185 450.102 464.182 450.102 358.094C450.102 252.003 536.107 166 642.195 166C748.286 166 834.291 252.003 834.291 358.094Z",fill:"url(#paint19_radial)"}),Me=r.createElement("path",{d:"M406.206 391.185C409.25 430.298 442.312 460.097 478.56 459.214C480.461 441.45 467.02 428.563 463.976 389.45C460.93 350.337 471.214 333.869 455.932 318.789C426.181 321.18 403.162 352.072 406.206 391.185Z",fill:"#808080"}),be=r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("path",{opacity:.5,d:"M406.206 391.185C409.25 430.298 442.312 460.097 478.56 459.216C480.461 441.45 467.02 428.563 463.975 389.45C460.931 350.337 471.213 333.869 455.934 318.791C426.181 321.182 403.161 352.072 406.206 391.185",fill:"url(#paint20_linear)"}))))))),Oe=r.createElement("g",{opacity:.300003},r.createElement("g",{opacity:.300003},r.createElement("g",{opacity:.300003},r.createElement("g",{opacity:.300003},r.createElement("g",{opacity:.300003},r.createElement("g",{opacity:.300003},r.createElement("path",{opacity:.300003,d:"M406.206 391.185C409.25 430.298 442.312 460.097 478.56 459.216C480.461 441.45 467.02 428.563 463.975 389.45C460.931 350.337 471.213 333.869 455.934 318.791C426.181 321.182 403.161 352.072 406.206 391.185",fill:"url(#paint21_radial)"}))))))),we=r.createElement("g",{opacity:.699997},r.createElement("g",{opacity:.699997},r.createElement("g",{opacity:.699997},r.createElement("g",{opacity:.699997},r.createElement("g",{opacity:.699997},r.createElement("g",{opacity:.699997},r.createElement("path",{opacity:.699997,d:"M406.206 391.185C409.25 430.298 442.312 460.097 478.56 459.216C480.461 441.45 467.02 428.563 463.975 389.45C460.931 350.337 471.213 333.869 455.934 318.791C426.181 321.182 403.161 352.072 406.206 391.185",fill:"url(#paint22_radial)"}))))))),xe=r.createElement("path",{d:"M879.746 389.979C876.702 429.092 843.64 458.891 807.392 458.008C805.493 440.242 818.93 427.357 821.978 388.245C825.024 349.132 814.736 332.665 830.018 317.583C859.773 319.974 882.792 350.866 879.746 389.979Z",fill:"#808080"}),_e=r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("path",{opacity:.5,d:"M879.746 389.979C876.702 429.092 843.64 458.891 807.392 458.008C805.493 440.242 818.93 427.357 821.979 388.244C825.023 349.132 814.737 332.665 830.018 317.583C859.774 319.974 882.793 350.866 879.746 389.979",fill:"url(#paint23_linear)"}))))))),je=r.createElement("g",{opacity:.300003},r.createElement("g",{opacity:.300003},r.createElement("g",{opacity:.300003},r.createElement("g",{opacity:.300003},r.createElement("g",{opacity:.300003},r.createElement("g",{opacity:.300003},r.createElement("path",{opacity:.300003,d:"M879.746 389.979C876.702 429.092 843.64 458.891 807.392 458.008C805.493 440.242 818.93 427.357 821.979 388.244C825.023 349.132 814.737 332.665 830.018 317.583C859.774 319.974 882.793 350.866 879.746 389.979",fill:"url(#paint24_radial)"}))))))),ve=r.createElement("g",{opacity:.699997},r.createElement("g",{opacity:.699997},r.createElement("g",{opacity:.699997},r.createElement("g",{opacity:.699997},r.createElement("g",{opacity:.699997},r.createElement("g",{opacity:.699997},r.createElement("path",{opacity:.699997,d:"M879.746 389.979C876.702 429.092 843.64 458.891 807.392 458.008C805.493 440.242 818.93 427.357 821.979 388.244C825.023 349.132 814.737 332.665 830.018 317.583C859.774 319.974 882.793 350.866 879.746 389.979",fill:"url(#paint25_radial)"}))))))),Ue=r.createElement("path",{d:"M491.115 332.46C491.115 332.46 495.335 393.978 497.145 398.803C498.954 403.627 486.29 420.516 492.924 438.609C499.558 456.702 551.981 518.138 644.308 517.616C751.056 517.014 809.403 438.842 807.148 411.467C805.743 394.38 796.293 387.946 796.293 387.946C796.293 387.946 804.558 350.544 805.339 319.19C805.942 295.067 779.596 276.05 767.344 268.529C733.051 247.488 613.607 226.057 536.35 270.338C486.894 298.686 491.115 332.46 491.115 332.46Z",fill:"#333333"}),Se=r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("path",{opacity:.5,d:"M491.115 332.46C491.115 332.46 495.335 393.978 497.145 398.803C498.954 403.627 486.29 420.516 492.924 438.609C499.558 456.702 551.981 518.138 644.308 517.616C751.056 517.014 809.403 438.842 807.148 411.467C805.743 394.38 796.293 387.946 796.293 387.946C796.293 387.946 804.558 350.544 805.339 319.19C805.942 295.067 779.596 276.05 767.344 268.529C733.051 247.488 613.607 226.057 536.35 270.338C486.894 298.686 491.115 332.46 491.115 332.46Z",stroke:"white",strokeWidth:3.86133,strokeMiterlimit:10}))),Ze=r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("path",{opacity:.5,d:"M529.715 440.418C529.715 440.418 553.219 464.843 653.352 463.337C733.567 462.129 764.932 436.197 764.932 436.197C764.932 436.197 781.95 417.523 783.047 370.758C784.23 320.397 776.388 323.414 776.388 323.414C776.388 323.414 709.623 287.92 611.938 301.099C529.819 312.178 514.033 336.078 514.033 336.078C514.033 336.078 506.293 354.254 509.81 389.153C513.331 424.051 529.715 440.418 529.715 440.418Z",stroke:"black",strokeWidth:6.952,strokeMiterlimit:10}))),Le=r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("path",{opacity:.5,d:"M518.826 338.745C517.683 341.917 512.227 359.014 515.213 388.609C518.468 420.894 533.419 436.442 533.568 436.594C533.785 436.807 556.492 457.973 644.571 457.975H644.592C647.424 457.975 650.306 457.954 653.273 457.908C726.414 456.811 757.664 434.891 761.146 432.267C763.065 429.865 776.663 411.447 777.621 370.631C778.343 339.893 775.638 330.926 774.526 328.569L773.841 328.207C773.381 327.964 726.518 303.593 655.413 303.593C641.237 303.593 626.855 304.563 612.665 306.477C540.346 316.234 521.185 335.968 518.826 338.745V338.745ZM644.592 468.832H644.571C550.62 468.83 526.776 445.19 525.806 444.184C525.154 443.535 508.082 426.106 504.413 389.698C500.794 353.823 508.7 334.745 509.04 333.952L509.233 333.498L509.506 333.088C510.206 332.026 527.609 306.997 611.213 295.718C625.885 293.74 640.752 292.736 655.413 292.736C724.205 292.736 770.149 314.202 777.854 318.062C779.338 318.341 780.754 319.12 781.935 320.328C785.173 323.645 789.375 332.494 788.475 370.887C787.34 419.124 769.693 439.029 768.942 439.853L768.39 440.38C767.049 441.488 734.622 467.543 653.435 468.763C650.414 468.809 647.48 468.832 644.592 468.832",fill:"url(#paint26_linear)"}))))))),ke=r.createElement("path",{d:"M529.715 440.418C529.715 440.418 553.219 464.843 653.352 463.337C733.567 462.129 764.932 436.197 764.932 436.197C764.932 436.197 781.95 417.523 783.047 370.758C784.23 320.397 776.388 323.414 776.388 323.414C776.388 323.414 709.623 287.92 611.938 301.099C529.819 312.178 514.033 336.078 514.033 336.078C514.033 336.078 506.293 354.254 509.81 389.153C513.331 424.051 529.715 440.418 529.715 440.418Z",fill:"#3E7DA3"}),Be=r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("g",{opacity:.5},r.createElement("path",{opacity:.5,d:"M529.714 440.417C529.714 440.417 553.219 464.842 653.352 463.337C733.568 462.129 764.931 436.197 764.931 436.197C764.931 436.197 781.949 417.523 783.047 370.758C784.232 320.399 776.388 323.414 776.388 323.414C776.388 323.414 709.625 287.92 611.938 301.098C529.818 312.178 514.033 336.078 514.033 336.078C514.033 336.078 506.293 354.254 509.812 389.152C513.331 424.051 529.714 440.417 529.714 440.417",fill:"url(#paint27_radial)"}))))))),Ge=r.createElement("path",{d:"M704.92 369.25V347.941H672.171C664.989 347.941 659.267 353.769 659.388 360.959L660.033 399.657C660.156 406.845 666.074 412.674 673.258 412.674H715.513C722.697 412.674 728.421 406.845 728.3 399.657L728.033 369.25H704.92Z",fill:"white"}),De=r.createElement("path",{d:"M626.515 377.694L627.117 359.801H596.195C590.134 359.801 585.303 364.722 585.403 370.789L585.953 403.447C586.053 409.517 591.048 414.435 597.109 414.435H632.774C638.836 414.435 643.664 409.517 643.564 403.447L643.341 377.392L626.515 377.694Z",fill:"white"}),Te=r.createElement("g",{opacity:.199997},r.createElement("g",{opacity:.199997},r.createElement("path",{opacity:.199997,d:"M712.458 956.483C718.087 978.201 720.5 1024.84 720.5 1024.84C712.948 1027.45 701.903 1037.5 701.903 1037.5C701.903 1037.5 708.338 1090.98 722.407 1112.29",stroke:"black",strokeWidth:1.54533,strokeMiterlimit:10,strokeLinecap:"round"})),r.createElement("g",{opacity:.199997},r.createElement("path",{opacity:.199997,d:"M600.682 968.948C603.78 977.627 615.659 1025.14 615.659 1025.14L625.61 1030.27C625.61 1030.27 633.652 1070.67 636.869 1090.78",stroke:"black",strokeWidth:1.54533,strokeMiterlimit:10,strokeLinecap:"round"})),r.createElement("g",{opacity:.199997},r.createElement("path",{opacity:.199997,d:"M606.611 566.168C603.596 570.089 601.485 576.119 603.898 586.372C610.23 593.912 645.668 593.125 664.208 592.203C684.413 591.197 697.985 589.689 689.239 567.074",stroke:"black",strokeWidth:1.54533,strokeMiterlimit:10,strokeLinecap:"round"}))),Ae=r.createElement("defs",null,r.createElement("linearGradient",{id:"paint0_linear",x1:652.553,y1:792.462,x2:644.511,y2:763.511,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"white"}),r.createElement("stop",{offset:1,stopColor:"white"})),r.createElement("linearGradient",{id:"paint1_linear",x1:535.544,y1:879.765,x2:587.011,y2:879.765,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"#DED9D6"}),r.createElement("stop",{offset:.0298098,stopColor:"#DED9D6"}),r.createElement("stop",{offset:.17731,stopColor:"#465053"}),r.createElement("stop",{offset:.518405,stopColor:"white"}),r.createElement("stop",{offset:.61385,stopColor:"white"}),r.createElement("stop",{offset:.7085,stopColor:"white"}),r.createElement("stop",{offset:1,stopColor:"#8B9298"})),r.createElement("linearGradient",{id:"paint2_linear",x1:490.511,y1:1026.75,x2:574.97,y2:1026.75,gradientUnits:"userSpaceOnUse"},r.createElement("stop",null),r.createElement("stop",{offset:.467742}),r.createElement("stop",{offset:1})),r.createElement("linearGradient",{id:"paint3_linear",x1:555.033,y1:1029.15,x2:626.603,y2:1020.31,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"white"}),r.createElement("stop",{offset:.494624,stopColor:"white"}),r.createElement("stop",{offset:1,stopColor:"white"})),r.createElement("linearGradient",{id:"paint4_linear",x1:574.141,y1:1035.2,x2:575.749,y2:1105.15,gradientUnits:"userSpaceOnUse"},r.createElement("stop",null),r.createElement("stop",{offset:.00537634}),r.createElement("stop",{offset:1})),r.createElement("linearGradient",{id:"paint5_linear",x1:541.959,y1:963.429,x2:574.929,y2:924.026,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"white"}),r.createElement("stop",{offset:1})),r.createElement("radialGradient",{id:"paint6_radial",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(556.855 945.628) scale(15.6809)"},r.createElement("stop",{stopColor:"white"}),r.createElement("stop",{offset:.0878393,stopColor:"white"}),r.createElement("stop",{offset:.522472,stopColor:"#ADAEB0"}),r.createElement("stop",{offset:.63952,stopColor:"#ADAEB0"}),r.createElement("stop",{offset:1,stopColor:"#465053"})),r.createElement("radialGradient",{id:"paint7_radial",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(591.435 1110.49) rotate(46.7411) scale(64.3002 48.5308)"},r.createElement("stop",{stopColor:"white"}),r.createElement("stop",{offset:1,stopColor:"white"})),r.createElement("linearGradient",{id:"paint8_linear",x1:510.263,y1:1143.33,x2:618.02,y2:1105.53,gradientUnits:"userSpaceOnUse"},r.createElement("stop",null),r.createElement("stop",{offset:.00537634}),r.createElement("stop",{offset:1})),r.createElement("linearGradient",{id:"paint9_linear",x1:514.179,y1:1154.39,x2:644.625,y2:1154.39,gradientUnits:"userSpaceOnUse"},r.createElement("stop",null),r.createElement("stop",{offset:.00537634}),r.createElement("stop",{offset:1})),r.createElement("linearGradient",{id:"paint10_linear",x1:630.126,y1:1069.8,x2:601.742,y2:1122.4,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"white"}),r.createElement("stop",{offset:1,stopColor:"white"})),r.createElement("radialGradient",{id:"paint11_radial",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(817.032 1095.04) rotate(40.3348) scale(75.5368 45.5527)"},r.createElement("stop",{stopColor:"white"}),r.createElement("stop",{offset:1,stopColor:"white"})),r.createElement("linearGradient",{id:"paint12_linear",x1:718.154,y1:1131.86,x2:843.556,y2:1076.82,gradientUnits:"userSpaceOnUse"},r.createElement("stop",null),r.createElement("stop",{offset:.00537634}),r.createElement("stop",{offset:1})),r.createElement("linearGradient",{id:"paint13_linear",x1:721.601,y1:1138.08,x2:885.044,y2:1138.08,gradientUnits:"userSpaceOnUse"},r.createElement("stop",null),r.createElement("stop",{offset:.00537634}),r.createElement("stop",{offset:1})),r.createElement("radialGradient",{id:"paint14_radial",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(770.359 921.898) scale(13.5014 16.475)"},r.createElement("stop",{stopColor:"white"}),r.createElement("stop",{offset:.0878393,stopColor:"white"}),r.createElement("stop",{offset:.522472,stopColor:"#ADAEB0"}),r.createElement("stop",{offset:.63952,stopColor:"#ADAEB0"}),r.createElement("stop",{offset:1,stopColor:"#465053"})),r.createElement("radialGradient",{id:"paint15_radial",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(759.266 606.066) scale(40.7492)"},r.createElement("stop",{stopColor:"white"}),r.createElement("stop",{offset:1,stopColor:"white"})),r.createElement("radialGradient",{id:"paint16_radial",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(521.35 606.066) rotate(180) scale(40.7493)"},r.createElement("stop",{stopColor:"white"}),r.createElement("stop",{offset:1,stopColor:"white"})),r.createElement("linearGradient",{id:"paint17_linear",x1:693.309,y1:612.944,x2:680.844,y2:575.348,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"white"}),r.createElement("stop",{offset:1,stopColor:"white"})),r.createElement("linearGradient",{id:"paint18_linear",x1:441.521,y1:402.563,x2:770.555,y2:329.652,gradientUnits:"userSpaceOnUse"},r.createElement("stop",null),r.createElement("stop",{offset:.00537634}),r.createElement("stop",{offset:1})),r.createElement("radialGradient",{id:"paint19_radial",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(652.311 325.586) scale(179.832)"},r.createElement("stop",{stopColor:"white"}),r.createElement("stop",{offset:1,stopColor:"white"})),r.createElement("linearGradient",{id:"paint20_linear",x1:489.654,y1:394.61,x2:418.165,y2:385.533,gradientUnits:"userSpaceOnUse"},r.createElement("stop",null),r.createElement("stop",{offset:.00537634}),r.createElement("stop",{offset:1})),r.createElement("radialGradient",{id:"paint21_radial",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(470.375 385.339) rotate(175.403) scale(66.6655 72.018)"},r.createElement("stop",null),r.createElement("stop",{offset:.132026}),r.createElement("stop",{offset:.654923}),r.createElement("stop",{offset:.766556}),r.createElement("stop",{offset:.828831}),r.createElement("stop",{offset:.938559}),r.createElement("stop",{offset:1})),r.createElement("radialGradient",{id:"paint22_radial",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(455.979 383.136) rotate(178.596) scale(51.2073 55.3186)"},r.createElement("stop",{stopColor:"white"}),r.createElement("stop",{offset:1,stopColor:"white"})),r.createElement("linearGradient",{id:"paint23_linear",x1:796.299,y1:393.404,x2:867.789,y2:384.327,gradientUnits:"userSpaceOnUse"},r.createElement("stop",null),r.createElement("stop",{offset:.00537634}),r.createElement("stop",{offset:1})),r.createElement("radialGradient",{id:"paint24_radial",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(815.576 384.133) rotate(4.59739) scale(66.6651 72.0176)"},r.createElement("stop",null),r.createElement("stop",{offset:.132026}),r.createElement("stop",{offset:.654923}),r.createElement("stop",{offset:.766556}),r.createElement("stop",{offset:.828831}),r.createElement("stop",{offset:.938559}),r.createElement("stop",{offset:1})),r.createElement("radialGradient",{id:"paint25_radial",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(829.973 381.929) rotate(1.4042) scale(51.207 55.3184)"},r.createElement("stop",{stopColor:"white"}),r.createElement("stop",{offset:1,stopColor:"white"})),r.createElement("linearGradient",{id:"paint26_linear",x1:603.399,y1:478.557,x2:683.784,y2:279.597,gradientUnits:"userSpaceOnUse"},r.createElement("stop",{stopColor:"white"}),r.createElement("stop",{offset:.543011,stopColor:"white"}),r.createElement("stop",{offset:1,stopColor:"white"})),r.createElement("radialGradient",{id:"paint27_radial",cx:0,cy:0,r:1,gradientUnits:"userSpaceOnUse",gradientTransform:"translate(672.399 345.464) scale(123.13 116.294)"},r.createElement("stop",{stopColor:"white"}),r.createElement("stop",{offset:1,stopColor:"white"})));function Pe(e,t){var a=e.title,n=e.titleId,l=_(e,["title","titleId"]);return r.createElement("svg",x({width:1334,height:1483,viewBox:"0 0 1334 1483",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":n},l),a?r.createElement("title",{id:n},a):null,j,v,U,S,Z,L,k,B,G,D,T,A,P,N,H,V,F,I,W,J,q,Q,R,z,K,X,Y,$,ee,te,ae,re,ne,le,ie,ce,oe,se,pe,Ce,me,Ee,de,fe,ye,ge,he,ue,Me,be,Oe,we,xe,_e,je,ve,Ue,Se,Ze,Le,ke,Be,Ge,De,Te,Ae)}var Ne=r.forwardRef(Pe),He=(a.p,a(52),a(56),function(){return Object(s.jsx)("div",{className:"react-chatbot-kit-chat-bot-avatar",children:Object(s.jsx)("div",{className:"react-chatbot-kit-chat-bot-avatar-container",children:Object(s.jsx)(Ne,{className:"react-chatbot-kit-chat-bot-avatar-icon"})})})}),Ve=function(e){e.setState;var t=(new M.a).get("code");return console.log("hello"),console.log(t),Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"code-viewer-container",children:Object(s.jsx)("pre",{children:Object(s.jsx)("code",{children:t})})})})},Fe={botName:"DevAssistant",initialMessages:[Object(m.createChatBotMessage)("Hi, I'm here to help you with your coding doubts. Shoot me with your doubts?")],customComponents:{header:function(){return Object(s.jsx)("div",{className:"Chatbot-header",children:"DevAssist"})},botAvatar:function(e){return Object(s.jsx)(He,Object(g.a)({},e))}},customStyles:{},widgets:[{widgetName:"CodeViewer",widgetFunc:function(e){return Object(s.jsx)(Ve,Object(g.a)({},e))}}]};var Ie=function(){return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsx)(f,{}),Object(s.jsx)(C,{}),Object(s.jsx)("header",{className:"App-header",children:Object(s.jsx)(E.a,{config:Fe,actionProvider:O,messageParser:w})})]})},We=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,69)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,l=t.getLCP,i=t.getTTFB;a(e),r(e),n(e),l(e),i(e)}))};i.a.render(Object(s.jsx)(n.a.StrictMode,{children:Object(s.jsx)(Ie,{})}),document.getElementById("root")),We()}},[[68,1,2]]]);
//# sourceMappingURL=main.1ce584c1.chunk.js.map