(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d72f5"],{7677:function(e,t,a){"use strict";a.r(t);var r=a("7a23"),n={ref:"alarmPieChartRef",style:{height:"200px"}};function c(e,t,a,c,i,o){return Object(r["D"])(),Object(r["j"])("div",n,null,512)}var i=a("5530"),o=a("313e"),l=Object(r["n"])({setup:function(){var e=Object(r["G"])(),t=Object(r["F"])({chart:null});Object(r["A"])((function(){a()}));var a=function(){t.chart=o["a"](e.value,"macarons"),t.chart.clear();var a={tooltip:{trigger:"item"},legend:{icon:"circle",itemWidth:10,bottom:0},series:[{type:"pie",radius:["55%","75%"],top:0,bottom:30,label:{show:!0},emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},data:[{value:10200,name:"高"},{value:735,name:"中"},{value:580,name:"低"}]}]};t.chart.setOption(a)};return Object(i["a"])(Object(i["a"])({alarmPieChartRef:e},Object(r["P"])(t)),{},{initChart:a})}});l.render=c;t["default"]=l}}]);