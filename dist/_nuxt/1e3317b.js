(window.webpackJsonp=window.webpackJsonp||[]).push([[29,8,12,14],{444:function(t,e,n){var map={"./BraveHeart.png":462,"./CardioConnect.png":463,"./EyePower.png":464,"./FitAndShapeNetwork.png":465,"./GlowZoneNetwork.png":466,"./Rectangle 690 (1).png":473,"./SereneMind&Wellness.png":467,"./SweetLifeCircle.png":468,"./WarriorAlliance.png":469,"./admin.png":474,"./aeroplane.png":445,"./avatar.png":256,"./avatar1.png":475,"./avatar2.png":449,"./avatar3.png":450,"./avatar4.png":476,"./avatar5.png":477,"./avatar6.png":478,"./avatar7.png":479,"./bookmark.png":456,"./brave-heart.png":263,"./cardio-connect.png":480,"./comment.png":454,"./doctor.png":481,"./eye-power.png":482,"./first-aid.png":458,"./fitness.png":483,"./glow-zone.png":484,"./hands.png":470,"./like.png":455,"./logo.png":135,"./love.png":485,"./minus.png":486,"./plus.png":487,"./pregnancy.png":488,"./pregnancy_maternity.png":471,"./repro-active.png":261,"./repro.png":472,"./reset-success.png":461,"./search.png":460,"./send.png":457,"./serene-mind.png":489,"./success.png":459,"./sweet-life-cycle.png":262,"./user.png":453,"./warrior.png":490};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=444},445:function(t,e,n){t.exports=n.p+"img/aeroplane.a78ef4d.png"},446:function(t,e,n){"use strict";n.r(e);var o={props:{isVisible:{type:Boolean,default:!1}},data:function(){return{}},methods:{closeModal:function(){this.$emit("close")}}},r=n(14),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return t.isVisible?e("div",{staticClass:"fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4"},[e("div",{staticClass:"bg-white p-4 rounded-lg max-w-2xl w-full space-y-4 overflow-y-auto h-[500px]"},[e("div",{staticClass:"flex justify-center items-center relative"},[t._t("header"),t._v(" "),e("div",{staticClass:"border-2 border-gray-600 rounded-full p-1 z-50 absolute right-0 top-0"},[e("svg",{staticClass:"cursor-pointer",attrs:{width:"6",height:"6",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},on:{click:t.closeModal}},[e("path",{attrs:{d:"M4.76771 1.23218L1.23218 4.76771M4.76771 4.76771L1.23218 1.23218",stroke:"#696969","stroke-width":"1.5","stroke-linecap":"round"}})])])],2),t._v(" "),t._t("content")],2)]):t._e()}),[],!1,null,"54b840ba",null);e.default=component.exports},447:function(t,e,n){var content=n(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("7090d816",content,!0,{sourceMap:!1})},448:function(t,e,n){var content=n(494);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("d7ece4ba",content,!0,{sourceMap:!1})},449:function(t,e,n){t.exports=n.p+"img/avatar2.132afb9.png"},450:function(t,e,n){t.exports=n.p+"img/avatar3.2588df2.png"},451:function(t,e,n){"use strict";n.r(e);n(260);var o={props:{fullText:{type:String,required:!0},previewLength:{type:Number,default:100}},data:function(){return{isExpanded:!1}},computed:{shortText:function(){var t;return(null===(t=this.fullText)||void 0===t?void 0:t.substring(0,this.previewLength))+"..."}},methods:{toggleExpand:function(){console.log("you clicked"),this.isExpanded=!this.isExpanded}}},r=(n(491),n(14)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"space-y-2"},[e("div",[e("p",{staticClass:"text-gray-800"},[t._v("\n      "+t._s(t.isExpanded?t.fullText:t.shortText)+"\n    ")])]),t._v(" "),e("button",{staticClass:"text-[#696969] hover:text-blue-700 font-medium transition-colors duration-200 ease-in-out text-sm",class:[t.fullText.length>t.previewLength?"visible":"hidden"],on:{click:t.toggleExpand}},[t._v("\n    "+t._s(t.isExpanded?"View Less":"View More")+"\n  ")])])}),[],!1,null,"7ec88df2",null);e.default=component.exports},452:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{isOpen:!1,options:[{text:"Joined",img:"group"},{text:"Pending",img:"group"}],selectedOption:null}},methods:{toggleDropdown:function(){this.isOpen=!this.isOpen},selectOption:function(option){this.selectedOption=option,this.isOpen=!1,this.$emit("input",option)}}},r=(n(493),n(14)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"relative"},[e("button",{staticClass:"bg-gray-100 border border-gray-300 rounded-md flex gap-3 px-3 py-2.5 items-center justify-between w-full",on:{click:t.toggleDropdown}},[e("svg",{attrs:{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M10 9C11.3261 9 12.5979 9.52678 13.5355 10.4645C14.4732 11.4021 15 12.6739 15 14V20H13V14C13 13.2348 12.7077 12.4985 12.1827 11.9417C11.6578 11.385 10.9399 11.0499 10.176 11.005L10 11C9.23479 11 8.49849 11.2923 7.94174 11.8173C7.38499 12.3422 7.04989 13.0601 7.005 13.824L7 14V20H5V14C5 12.6739 5.52678 11.4021 6.46447 10.4645C7.40215 9.52678 8.67392 9 10 9ZM3.5 12C3.779 12 4.05 12.033 4.31 12.094C4.13902 12.603 4.03777 13.1328 4.009 13.669L4 14V14.086C3.88505 14.0449 3.76549 14.018 3.644 14.006L3.5 14C3.12712 14 2.76761 14.1389 2.49158 14.3896C2.21555 14.6403 2.0428 14.9848 2.007 15.356L2 15.5V20H0V15.5C0 14.5717 0.368749 13.6815 1.02513 13.0251C1.6815 12.3687 2.57174 12 3.5 12ZM16.5 12C17.4283 12 18.3185 12.3687 18.9749 13.0251C19.6313 13.6815 20 14.5717 20 15.5V20H18V15.5C18 15.1271 17.8611 14.7676 17.6104 14.4916C17.3597 14.2156 17.0152 14.0428 16.644 14.007L16.5 14C16.325 14 16.157 14.03 16 14.085V14C16 13.334 15.892 12.694 15.691 12.096C15.95 12.033 16.221 12 16.5 12ZM3.5 6C4.16304 6 4.79893 6.26339 5.26777 6.73223C5.73661 7.20107 6 7.83696 6 8.5C6 9.16304 5.73661 9.79893 5.26777 10.2678C4.79893 10.7366 4.16304 11 3.5 11C2.83696 11 2.20107 10.7366 1.73223 10.2678C1.26339 9.79893 1 9.16304 1 8.5C1 7.83696 1.26339 7.20107 1.73223 6.73223C2.20107 6.26339 2.83696 6 3.5 6ZM16.5 6C17.163 6 17.7989 6.26339 18.2678 6.73223C18.7366 7.20107 19 7.83696 19 8.5C19 9.16304 18.7366 9.79893 18.2678 10.2678C17.7989 10.7366 17.163 11 16.5 11C15.837 11 15.2011 10.7366 14.7322 10.2678C14.2634 9.79893 14 9.16304 14 8.5C14 7.83696 14.2634 7.20107 14.7322 6.73223C15.2011 6.26339 15.837 6 16.5 6ZM3.5 8C3.36739 8 3.24021 8.05268 3.14645 8.14645C3.05268 8.24021 3 8.36739 3 8.5C3 8.63261 3.05268 8.75979 3.14645 8.85355C3.24021 8.94732 3.36739 9 3.5 9C3.63261 9 3.75979 8.94732 3.85355 8.85355C3.94732 8.75979 4 8.63261 4 8.5C4 8.36739 3.94732 8.24021 3.85355 8.14645C3.75979 8.05268 3.63261 8 3.5 8ZM16.5 8C16.3674 8 16.2402 8.05268 16.1464 8.14645C16.0527 8.24021 16 8.36739 16 8.5C16 8.63261 16.0527 8.75979 16.1464 8.85355C16.2402 8.94732 16.3674 9 16.5 9C16.6326 9 16.7598 8.94732 16.8536 8.85355C16.9473 8.75979 17 8.63261 17 8.5C17 8.36739 16.9473 8.24021 16.8536 8.14645C16.7598 8.05268 16.6326 8 16.5 8ZM10 0C11.0609 0 12.0783 0.421427 12.8284 1.17157C13.5786 1.92172 14 2.93913 14 4C14 5.06087 13.5786 6.07828 12.8284 6.82843C12.0783 7.57857 11.0609 8 10 8C8.93913 8 7.92172 7.57857 7.17157 6.82843C6.42143 6.07828 6 5.06087 6 4C6 2.93913 6.42143 1.92172 7.17157 1.17157C7.92172 0.421427 8.93913 0 10 0ZM10 2C9.46957 2 8.96086 2.21071 8.58579 2.58579C8.21071 2.96086 8 3.46957 8 4C8 4.53043 8.21071 5.03914 8.58579 5.41421C8.96086 5.78929 9.46957 6 10 6C10.5304 6 11.0391 5.78929 11.4142 5.41421C11.7893 5.03914 12 4.53043 12 4C12 3.46957 11.7893 2.96086 11.4142 2.58579C11.0391 2.21071 10.5304 2 10 2Z",fill:"#444444"}})]),t._v(" "),e("span",[t._v(t._s(t.selectedOption?t.selectedOption.text:"Select an option"))]),t._v(" "),t.selectedOption?e("img",{staticClass:"w-6 h-6 mr-2",attrs:{src:n(134)("./".concat(t.selectedOption.img,".svg")),alt:""}}):t._e()]),t._v(" "),t.isOpen?e("div",{staticClass:"absolute bg-white border border-gray-300 mt-1 rounded-md w-full z-10",on:{click:t.toggleDropdown}},[e("ul",t._l(t.options,(function(option,o){return e("li",{key:o,staticClass:"p-2 flex items-center cursor-pointer hover:bg-gray-100",on:{click:function(e){return t.selectOption(option)}}},[e("img",{staticClass:"w-6 h-6 mr-2",attrs:{src:n(134)("./".concat(option.img,".svg")),alt:""}}),t._v(" "),e("span",[t._v(t._s(option.text))])])})),0)]):t._e()])}),[],!1,null,"a833c7ec",null);e.default=component.exports},453:function(t,e,n){t.exports=n.p+"img/user.0d14c69.png"},454:function(t,e,n){t.exports=n.p+"img/comment.5dd0968.png"},455:function(t,e,n){t.exports=n.p+"img/like.c412cba.png"},456:function(t,e,n){t.exports=n.p+"img/bookmark.2ddc6ff.png"},457:function(t,e,n){t.exports=n.p+"img/send.8698d16.png"},458:function(t,e,n){t.exports=n.p+"img/first-aid.fc5d478.png"},459:function(t,e,n){t.exports=n.p+"img/success.0c4a3f3.png"},460:function(t,e,n){t.exports=n.p+"img/search.9b0d6e6.png"},461:function(t,e,n){t.exports=n.p+"img/reset-success.646c49e.png"},462:function(t,e,n){t.exports=n.p+"img/BraveHeart.fe9c496.png"},463:function(t,e,n){t.exports=n.p+"img/CardioConnect.50044fe.png"},464:function(t,e,n){t.exports=n.p+"img/EyePower.02bcce7.png"},465:function(t,e,n){t.exports=n.p+"img/FitAndShapeNetwork.9966539.png"},466:function(t,e,n){t.exports=n.p+"img/GlowZoneNetwork.6b1507c.png"},467:function(t,e,n){t.exports=n.p+"img/SereneMind&Wellness.e8e9976.png"},468:function(t,e,n){t.exports=n.p+"img/SweetLifeCircle.5c4fb87.png"},469:function(t,e,n){t.exports=n.p+"img/WarriorAlliance.7cd0549.png"},470:function(t,e,n){t.exports=n.p+"img/hands.c44e240.png"},471:function(t,e,n){t.exports=n.p+"img/pregnancy_maternity.eb31c15.png"},472:function(t,e,n){t.exports=n.p+"img/repro.81d4d34.png"},473:function(t,e,n){t.exports=n.p+"img/Rectangle 690 (1).1f2e696.png"},474:function(t,e,n){t.exports=n.p+"img/admin.1b14311.png"},475:function(t,e,n){t.exports=n.p+"img/avatar1.70ad3f1.png"},476:function(t,e,n){t.exports=n.p+"img/avatar4.cae9f2a.png"},477:function(t,e,n){t.exports=n.p+"img/avatar5.0afadc7.png"},478:function(t,e,n){t.exports=n.p+"img/avatar6.0d9c1eb.png"},479:function(t,e,n){t.exports=n.p+"img/avatar7.97bad44.png"},480:function(t,e,n){t.exports=n.p+"img/cardio-connect.b265148.png"},481:function(t,e,n){t.exports=n.p+"img/doctor.5dd540c.png"},482:function(t,e,n){t.exports=n.p+"img/eye-power.3fd426c.png"},483:function(t,e,n){t.exports=n.p+"img/fitness.06e91e8.png"},484:function(t,e,n){t.exports=n.p+"img/glow-zone.ebf168e.png"},485:function(t,e,n){t.exports=n.p+"img/love.df58b83.png"},486:function(t,e,n){t.exports=n.p+"img/minus.dd4926b.png"},487:function(t,e,n){t.exports=n.p+"img/plus.ee8012e.png"},488:function(t,e,n){t.exports=n.p+"img/pregnancy.da227ef.png"},489:function(t,e,n){t.exports=n.p+"img/serene-mind.cab7aea.png"},490:function(t,e,n){t.exports=n.p+"img/warrior.9ec95e6.png"},491:function(t,e,n){"use strict";n(447)},492:function(t,e,n){var o=n(20)((function(i){return i[1]}));o.push([t.i,"",""]),o.locals={},t.exports=o},493:function(t,e,n){"use strict";n(448)},494:function(t,e,n){var o=n(20)((function(i){return i[1]}));o.push([t.i,"",""]),o.locals={},t.exports=o},561:function(t,e,n){"use strict";n.r(e);n(22);var o=[function(){var t=this._self._c;return t("div",[t("img",{attrs:{src:n(468),alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"md:flex items-center gap-x-3"},[e("h1",{staticClass:"text-lg lg:text-base font-semibold"},[t._v("\n              SWEET LIFE CIRCLE\n            ")]),t._v(" "),e("p",{staticClass:"font-thin"},[t._v("\n              2.1k members · 812 posts\n            ")])])},function(){var t=this._self._c;return t("div",[t("p",{staticClass:"leading-relaxed lg:pr-32 pt-3 lg:pt-0 font-extralight text-gray-600"},[this._v("\n            A supportive community for pregnancy, reproductive issues, and\n            fertility\n            treatments. Find guidance, support,\n            and a safe space to share your journey with individuals from diverse backgrounds and stages of\n            reproductive\n            health, fostering understanding and solidarity.\n          ")])])},function(){var t=this._self._c;return t("div",{staticClass:"pt-2.5"},[t("img",{staticClass:"lg:h-14 h-8 lg:w-14 w-8",attrs:{src:n(256),alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"w-full"},[t("input",{staticClass:"w-full py-3 rounded-full text-xs lg:text-base border bg-gray-100 border-gray-500 px-4",attrs:{placeholder:"What would you like to share with the ReproActive community May?",type:"text"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center gap-x-6"},[e("div",{staticClass:"flex items-center gap-x-2 text-sm lg:text-base"},[e("img",{staticClass:"h-6 w-6",attrs:{src:n(268)}}),t._v(" Photos\n              ")]),t._v(" "),e("div",{staticClass:"flex items-center gap-x-2 text-sm lg:text-base"},[e("img",{staticClass:"h-6 w-6",attrs:{src:n(269)}}),t._v(" Video\n              ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex items-center justify-between"},[e("p",{staticClass:"w-8/12 lg:w-10/12 border bg-gray-900 border-gray-700 mt-3"}),t._v(" "),e("div",{staticClass:"flex items-center gap-x-2 text-sm lg:text-base"},[e("span",{staticClass:"text-gray-400 font-light text-sm lg:text-base"},[t._v("Sort by:")]),t._v(" "),e("select",{staticClass:"text-sm lg:text-base"},[e("option",[t._v("Latest")])])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"flex justify-between items-center pt-3"},[e("div",{staticClass:"flex items-center space-x-6"},[e("button",{staticClass:"flex items-center gap-x-2 cursor-pointer"},[e("img",{staticClass:"h-4 w-4",attrs:{src:n(255),alt:""}}),t._v(" "),e("p",{staticClass:"font-medium p-0 m-0"},[t._v("\n                    3\n                  ")])]),t._v(" "),e("button",{staticClass:"flex items-center gap-x-2 cursor-pointer"},[e("img",{staticClass:"h-4 w-4",attrs:{src:n(257),alt:""}}),t._v(" "),e("p",{staticClass:"font-medium p-0 m-0"},[t._v("\n                    4\n                  ")])])]),t._v(" "),e("button",{staticClass:"flex items-center gap-x-2 cursor-pointer"},[e("img",{staticClass:"h-4 w-4",attrs:{src:n(259),alt:""}}),t._v(" "),e("p",{staticClass:"font-medium p-0 m-0 text-[15px]"},[t._v("\n                  Save\n                ")])])])},function(){var t=this._self._c;return t("div",{staticClass:"w-1/12 flex justify-center items-start"},[t("img",{attrs:{src:n(258),alt:"avatar"}})])}],r=n(451),l=n(446),c={components:{CustomSelect:n(452).default,TermsModal:l.default,ViewMoreLess:r.default},data:function(){return{isModalVisible:!1,isConversationModalVisible:!1,selectedConversation:{},conversations:[{image:"avatar4",replies:[{image:"avatar5",likes:3,replies:[],time:"· 2 hr. ago",comments:3,name:"Miriam Muhammad",content:"Your post couldn't have come at a better time. It's been a mix of highs and lows for me lately, but knowing I can come here and connect with others who understand makes all the difference. One recent highlight was having a heart-to-heart with my partner about our hopes and fears. It brought us closer together amidst the uncertainties. Grateful for this space and looking forward to hearing everyone's stories!"},{image:"avatar7",likes:3,time:"·  2 min. ago",comments:3,name:"Kenneth Adigwe",content:"I've been quietly following the conversations here for a while, and I just wanted to say how grateful I am for this space. As a guy navigating fertility challenges, it's disheartening to see society often frame it as solely a female issue. But I'm grateful to walk this journey hand in hand with my wife, knowing that fertility struggles affect us both deeply.\nTo all the guys out there facing similar challenges, let's continue to challenge stereotypes and misconceptions. Our journey towards parenthood is a shared one, and it's okay to lean on each other for support.\nHere's to breaking down barriers and fostering a more inclusive dialogue around reproductive health. Together, let's support one another and rewrite the narrative."}],likes:3,time:"·  2 min. ago",comments:3,name:"Jade Adetubo",content:"Hey wonderful folks of Reproactive,\nI hope you're all doing well on your unique journeys. Today, I felt inspired to share a glimpse of my own adventure towards parenthood and reproductive wellness. From unexpected twists to moments of pure joy, it's been a whirlwind of emotions.But one thing I've learned is that sharing our stories and experiences can truly uplift and inspire us all. I'd love to hear from you! What's been the highlight of your journey lately? Whether it's a small victory, a moment of reflection, or even a challenge you're facing, this is a safe space to share. Feel free to drop your thoughts, questions, or even just a friendly hello below. Let's connect, support each other, and continue embracing this journey together! Looking forward to hearing from you all."},{image:"avatar1",likes:3,time:"·  2 min. ago",comments:3,name:"Simi Chinyere",content:"Just wanted to take a moment to express my gratitude for being part of this incredible community. The support and understanding I've found here have been invaluable as I navigate my journey towards parenthood. Knowing that I'm not alone in this journey has made all the difference. Here's to all of us supporting each other through the ups and downs 💖💖."},{image:"avatar2",likes:3,time:"·  2 min. ago",comments:3,name:"Kenneth Adigwe",content:"I've been quietly following the conversations here for a while, and I just wanted to say how grateful I am for this space. As a guy navigating fertility challenges, it's disheartening to see society often frame it as solely a female issue. But I'm grateful to walk this journey hand in hand with my wife, knowing that fertility struggles affect us both deeply.\nTo all the guys out there facing similar challenges, let's continue to challenge stereotypes and misconceptions. Our journey towards parenthood is a shared one, and it's okay to lean on each other for support.\nHere's to breaking down barriers and fostering a more inclusive dialogue around reproductive health. Together, let's support one another and rewrite the narrative."},{image:"avatar3",likes:3,time:"·  2 min. ago",replies:[{image:"avatar3",likes:3,replies:[{image:"avatar5",likes:3,replies:[],time:"· 2 hr. ago",comments:3,name:"Miriam Muhammad",content:"My recent highlight was receiving encouraging test results after weeks of uncertainty. Grateful for the small victories along the way"},{image:"avatar7",likes:3,replies:[],time:"· 2 hr. ago",comments:3,name:"Miriam Muhammad",content:"My recent highlight was receiving encouraging test results after weeks of uncertainty. Grateful for the small victories along the way"}],time:"· 2 hr. ago",comments:3,name:"Jane Okoro",content:"Lately, my highlight has been feeling the support and understanding from everyone here. It's a reminder that we're in this together."},{image:"avatar2",likes:3,time:"·  2 min. ago",comments:3,replies:[],name:"Zulaiko Raimah",content:"My recent highlight was receiving encouraging test results after weeks of uncertainty. Grateful for the small victories along the way"}],comments:3,name:"Fatimah Abubakar",content:"To all the women here on similar paths, your strength and resilience inspire me every day. Let's continue to support each other, share our stories, and find hope in the journey ahead."}],otherCommunities:[{image:"warrior",name:"WarriorAlliance",members:"2.1k members ·",posts:"812 posts"},{image:"cardio-connect",name:"CardioConnect",members:"2.1k members ·",posts:"812 posts"},{image:"brave-heart",name:"BraveHeart",members:"2.1k members ·",posts:"812 posts"},{image:"sweet-life-cycle",name:"SweetLife Circle",members:"2.1k members ·",posts:"812 posts"},{image:"fitness",name:"Fit & Shape Network",members:"2.1k members ·",posts:"812 posts"},{image:"serene-mind",name:"SereneMind  & Wellness",members:"2.1k members ·",posts:"812 posts"},{image:"eye-power",name:"EyePower Villa",members:"2.1k members ·",posts:"812 posts"},{image:"glow-zone",name:"GlowZone Network",members:"2.1k members ·",posts:"812 posts"},{image:"pregnancy",name:"Pregnancy & Maternity",members:"2.1k members ·",posts:"812 posts"}],guidelines:["Protect personal information and respect the confidentiality of fellow members.","Offer kindness and encouragement to others on their reproductive health journeys.","Acknowledge the emotional nature of topics and communicate with empathy.","Keep discussions focused on pregnancy, reproductive health, and fertility treatments."]}},methods:{handleSelection:function(t){console.log(t)},openChatModal:function(t){this.selectedConversation=t,this.isConversationModalVisible=!0}}},m=n(14),component=Object(m.a)(c,(function(){var t=this,e=t._self._c;return e("main",[e("section",{staticClass:"space-y-10 mb-10"},[e("section",{staticClass:"relative"},[t._m(0),t._v(" "),e("div",{staticClass:"lg:absolute left-52 top-64 pt-6 lg:pt-0"},[e("div",{staticClass:"lg:flex justify-between items-center"},[t._m(1),t._v(" "),e("div",[e("CustomSelect",{on:{input:t.handleSelection}})],1)]),t._v(" "),t._m(2)])]),t._v(" "),e("section",{staticClass:"lg:flex justify-start items-start gap-x-10 lg:px-10 space-y-6 lg:space-y-0"},[e("div",{staticClass:"lg:w-9/12 space-y-10"},[e("div",{staticClass:"rounded-lg bg-white shadow p-3 lg:p-4 flex justify-start items-start gap-x-3 lg:gap-x-4"},[t._m(3),t._v(" "),e("div",{staticClass:"space-y-6 w-full"},[t._m(4),t._v(" "),t._m(5),t._v(" "),e("div",{staticClass:"flex justify-end items-end"},[e("button",{staticClass:"text-white bg-[#064B05] text-sm px-3 py-2 rounded-md",on:{click:function(e){t.isModalVisible=!0}}},[t._v("\n                Create post\n              ")])])])]),t._v(" "),t._m(6),t._v(" "),t._l(t.conversations,(function(o,r){return e("div",{key:r,staticClass:"bg-white shadow cursor-pointer p-3 rounded-lg border flex gap-x-8 lg:gap-x-0",on:{click:function(e){return t.openChatModal(o)}}},[e("div",{staticClass:"w-1/12"},[e("div",{staticClass:"h-32 w-32"},[e("img",{staticClass:"h-[50px] w-[50px]",attrs:{src:n(444)("./".concat(o.image,".png")),alt:"avatar"}})])]),t._v(" "),e("div",{staticClass:"w-10/12"},[e("div",{staticClass:"flex items-center gap-x-2"},[e("p",{staticClass:"font-semibold lg:text-xl text-gray-800"},[t._v("\n                "+t._s(o.name)+"\n              ")]),t._v(" "),e("p",{staticClass:"text-gray-500 text-xs font-light"},[t._v("\n                "+t._s(o.time)+"\n              ")])]),t._v(" "),e("div",{},[e("ViewMoreLess",{staticClass:"leading-loose font-light text-sm text-justify",attrs:{"full-text":o.content,"preview-length":500}})],1),t._v(" "),t._m(7,!0)]),t._v(" "),t._m(8,!0)])}))],2),t._v(" "),e("div",{staticClass:"bg-white rounded-lg p-3 lg:w-3/12 shadow border border-gray-400 space-y-6"},[e("h1",{staticClass:"text-lg uppercase font-semibold pl-6"},[t._v("\n          other communities\n        ")]),t._v(" "),e("div",{staticClass:"space-y-6"},t._l(t.otherCommunities,(function(o,r){return e("div",{key:r,staticClass:"flex items-start gap-x-3 px-6"},[e("div",[e("img",{staticClass:"h-8 w-8 rounded-full",attrs:{src:n(444)("./".concat(o.image,".png")),alt:""}})]),t._v(" "),e("div",{staticClass:"space-y-6"},[e("p",{staticClass:"font-semibold text-gray-700 p-0 m-0"},[t._v("\n                "+t._s(o.name)+"\n              ")]),t._v(" "),e("p",{staticClass:"text-sm text-gray-500 p-0 m-0"},[t._v("\n                "+t._s(o.members)+" . "+t._s(o.posts)+"\n              ")])])])})),0)])])]),t._v(" "),e("TermsModal",{staticClass:"p-4",attrs:{"is-visible":t.isModalVisible},on:{close:function(e){t.isModalVisible=!1}},scopedSlots:t._u([{key:"header",fn:function(){return[e("h2",{staticClass:"text-xl font-bold text-center flex justify-center items-center"},[t._v("\n        Create Post\n      ")])]},proxy:!0},{key:"content",fn:function(){return[e("div",{staticClass:"bg-[#CEEACE] rounded-md p-6 space-y-3"},[e("h1",{staticClass:"font-semibold text-[#064B05] text-lg"},[t._v("\n          Guidelines\n        ")]),t._v(" "),e("div",{staticClass:"space-y-1"},t._l(t.guidelines,(function(n,o){return e("div",{key:o,staticClass:"text-gray-800 space-x-2 flex items-center"},[e("span",{staticClass:"h-0.5 w-0.5 p-0.5 bg-[#064B05] rounded-full mr-2"}),t._v(" "),e("p",{staticClass:"text-sm font-extralight text-[#064B05] p-0 m-0"},[t._v("\n              "+t._s(n)+"\n            ")])])})),0)]),t._v(" "),e("div",{staticClass:"space-y-6"},[e("div",{staticClass:"flex items-center gap-x-4"},[e("img",{staticClass:"h-14 w-14 rounded-full",attrs:{src:n(450),alt:""}}),t._v(" "),e("p",{staticClass:"font-semibold text-[#060606] pt-3"},[t._v("\n            May Francis\n          ")])]),t._v(" "),e("div",{staticClass:"w-full"},[e("textarea",{staticClass:"p-0 m-0 outline-none w-full font-extralight text-gray-400 resize-none placeholder:text-gray-300 placeholder:text-sm",attrs:{placeholder:"What would you like to share with the ReproActive community May?",cols:"7",rows:"7"}},[t._v("            What would you like to share with the ReproActive community May?\n          ")]),t._v(" "),e("div",{staticClass:"flex items-center justify-end gap-x-6"},[e("div",{staticClass:"flex items-center gap-x-2 font-extralight text-gray-600 cursor-pointer"},[e("img",{staticClass:"h-[20px] w-[20px]",attrs:{src:n(266)}}),t._v(" Photos\n            ")]),t._v(" "),e("div",{staticClass:"flex items-center gap-x-2 font-extralight text-gray-600 cursor-pointer"},[e("img",{staticClass:"h-[20px] w-[20px]",attrs:{src:n(264)}}),t._v(" Video\n            ")]),t._v(" "),e("div",{staticClass:"flex items-center gap-x-2 font-extralight text-gray-600 cursor-pointer"},[e("img",{staticClass:"h-[20px] w-[20px]",attrs:{src:n(270)}}),t._v(" Feeling\n            ")])])])]),t._v(" "),e("div",{staticClass:"border-t border-gray-300 pt-4 flex justify-end items-end"},[e("button",{staticClass:"text-sm text-[#696969] bg-white px-6 py-2.5 font-medium",on:{click:function(e){t.isModalVisible=!1}}},[t._v("\n          Cancel\n        ")]),t._v(" "),e("button",{staticClass:"text-sm text-white bg-[#064B05] px-6 py-2.5 rounded-md font-medium"},[t._v("\n          Post\n        ")])])]},proxy:!0}])}),t._v(" "),e("TermsModal",{staticClass:"p-4",attrs:{"is-visible":t.isConversationModalVisible},on:{close:function(e){t.isConversationModalVisible=!1}},scopedSlots:t._u([{key:"content",fn:function(){var o;return[e("section",{},[e("div",{staticClass:"pt-6"},[e("div",{staticClass:"flex justify-between items-center"},[e("div",{staticClass:"flex justify-center items-center gap-x-3"},[e("div",{},[e("img",{staticClass:"h-[40px] w-[40px]",attrs:{src:n(444)("./".concat(t.selectedConversation.image,".png")),alt:"avatar"}})]),t._v(" "),e("div",{},[e("p",{staticClass:"font-semibold text-sm p-0 m-0 text-gray-800"},[t._v("\n                  "+t._s(t.selectedConversation.name)+"\n                ")]),t._v(" "),e("p",{staticClass:"text-gray-500 text-xs p-0 m-0 font-light"},[t._v("\n                  "+t._s(t.selectedConversation.time)+"\n                ")])])]),t._v(" "),e("div",{staticClass:"w-1/12 flex justify-center items-start"},[e("svg",{attrs:{width:"4",height:"18",viewBox:"0 0 4 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M2 0C1.175 0 0.5 0.675 0.5 1.5C0.5 2.325 1.175 3 2 3C2.825 3 3.5 2.325 3.5 1.5C3.5 0.675 2.825 0 2 0ZM2 15C1.175 15 0.5 15.675 0.5 16.5C0.5 17.325 1.175 18 2 18C2.825 18 3.5 17.325 3.5 16.5C3.5 15.675 2.825 15 2 15ZM2 7.5C1.175 7.5 0.5 8.175 0.5 9C0.5 9.825 1.175 10.5 2 10.5C2.825 10.5 3.5 9.825 3.5 9C3.5 8.175 2.825 7.5 2 7.5Z",fill:"#444444"}})])])]),t._v(" "),e("div",{staticClass:"leading-loose font-light text-sm text-justify pt-3"},[t._v("\n            "+t._s(t.selectedConversation.content)+"\n          ")]),t._v(" "),e("div",{staticClass:"flex justify-between items-center pt-3"},[e("div",{staticClass:"flex items-center space-x-6"},[e("button",{staticClass:"flex items-center gap-x-2 cursor-pointer"},[e("img",{staticClass:"h-4 w-4",attrs:{src:n(255),alt:""}}),t._v(" "),e("p",{staticClass:"font-medium p-0 m-0 text-sm"},[t._v("\n                  3\n                ")])]),t._v(" "),e("button",{staticClass:"flex items-center gap-x-2 cursor-pointer"},[e("img",{staticClass:"h-4 w-4",attrs:{src:n(257),alt:""}}),t._v(" "),e("p",{staticClass:"font-medium p-0 m-0 text-sm"},[t._v("\n                  4\n                ")])])]),t._v(" "),e("button",{staticClass:"flex items-center gap-x-2 cursor-pointer"},[e("img",{staticClass:"h-4 w-4",attrs:{src:n(259),alt:""}}),t._v(" "),e("p",{staticClass:"font-medium p-0 m-0 text-sm"},[t._v("\n                Save\n              ")])])]),t._v(" "),e("div",{staticClass:"lg:flex justify-between items-center gap-x-10 pt-10 space-y-3 lg:space-y-0"},[e("div",{staticClass:"flex justify-between items-center gap-x-2 w-full"},[e("div",[e("img",{staticClass:"h-12 w-14",attrs:{src:n(449),alt:"avatar"}})]),t._v(" "),e("div",{staticClass:"w-full relative"},[e("input",{staticClass:"w-full rounded-md outline-none text-sm lg:text-base py-2.5 px-3 border bg-gray-200 placeholder:text-[#0A0A0A]",attrs:{placeholder:"Add a comment"}}),t._v(" "),e("img",{staticClass:"h-6 w-6 absolute right-3 top-3",attrs:{src:n(265),alt:""}})])]),t._v(" "),e("div",{staticClass:"flex justify-end items-end lg:justify-start lg:items-start"},[e("button",{staticClass:"text-white bg-[#064B05] text-xs lg:text-sm px-3 py-2.5 rounded-md",on:{click:function(e){t.isModalVisible=!0}}},[t._v("\n                post\n              ")])])]),t._v(" "),e("div",{staticClass:"flex items-center gap-x-2 text-sm pt-10"},[e("span",{staticClass:"text-gray-400 font-light"},[t._v("Sort by:")]),t._v(" "),e("select",{},[e("option",[t._v("Top")])])])]),t._v(" "),null!==(o=t.selectedConversation)&&void 0!==o&&null!==(o=o.replies)&&void 0!==o&&o.length?e("div",{staticClass:"pt-6 space-y-6"},t._l(t.selectedConversation.replies,(function(o,r){var l,c;return e("div",{key:r,staticClass:"flex gap-x-6 lg:gap-x-0",on:{click:function(e){return t.openChatModal(o)}}},[e("div",{staticClass:"w-1/12"},[e("div",{staticClass:"h-32 w-32"},[e("img",{staticClass:"h-[40px] w-[40px]",attrs:{src:n(444)("./".concat(o.image,".png")),alt:"avatar"}})])]),t._v(" "),e("div",{staticClass:"w-10/12"},[e("div",{staticClass:"flex items-center gap-x-2"},[e("p",{staticClass:"font-semibold text-sm text-gray-800"},[t._v("\n                  "+t._s(o.name)+"\n                ")]),t._v(" "),e("p",{staticClass:"text-gray-500 text-xs font-light"},[t._v("\n                  "+t._s(o.time)+"\n                ")])]),t._v(" "),e("div",{staticClass:"leading-loose font-light text-sm text-justify"},[t._v("\n                "+t._s(o.content)+"\n              ")]),t._v(" "),e("div",{staticClass:"flex justify-between items-center pt-3"},[e("div",{staticClass:"flex items-center space-x-6"},[e("button",{staticClass:"flex items-center gap-x-2 cursor-pointer"},[e("img",{staticClass:"h-4 w-4",attrs:{src:n(255),alt:""}}),t._v(" "),e("p",{staticClass:"font-medium p-0 m-0 text-sm"},[t._v("\n                      3\n                    ")])]),t._v(" "),e("button",{staticClass:"flex items-center gap-x-2 cursor-pointer"},[e("p",{staticClass:"font-medium p-0 m-0 text-blue-700 text-sm flex items-center gap-x-3"},[t._v("\n                      Reply "),null!=o&&null!==(l=o.replies)&&void 0!==l&&l.length?e("span",{staticClass:"text-xs text-gray-400"},[t._v(t._s("".concat(null==o||null===(c=o.replies)||void 0===c?void 0:c.length,"\n                        replies")))]):t._e(),t._v(" "),e("img",{staticClass:"h-2 w-2",attrs:{src:n(267),alt:""}})])])])]),t._v(" "),t._l(o.replies,(function(o,r){return e("div",{key:r,staticClass:"pt-6 flex gap-x-2 lg:gap-x-0"},[e("div",{staticClass:"w-1/12"},[e("div",{staticClass:"h-32 w-32"},[e("img",{staticClass:"lg:h-[40px] lg:w-[40px] h-[20px] w-[20px]",attrs:{src:n(444)("./".concat(o.image,".png")),alt:"avatar"}})])]),t._v(" "),e("div",{staticClass:"w-10/12"},[e("div",{staticClass:"flex items-center gap-x-2"},[e("p",{staticClass:"font-semibold text-xs lg:text-sm text-gray-800"},[t._v("\n                      "+t._s(o.name)+"\n                    ")]),t._v(" "),e("p",{staticClass:"text-gray-500 text-xs font-light"},[t._v("\n                      "+t._s(o.time)+"\n                    ")])]),t._v(" "),e("div",{staticClass:"leading-loose font-light text-xs lg:text-sm text-justify"},[t._v("\n                    "+t._s(o.content)+"\n                  ")]),t._v(" "),e("div",{staticClass:"flex justify-between items-center pt-3"},[e("div",{staticClass:"flex items-center space-x-6"},[e("button",{staticClass:"flex items-center gap-x-2 cursor-pointer"},[e("img",{staticClass:"h-4 w-4",attrs:{src:n(255),alt:""}}),t._v(" "),e("p",{staticClass:"font-medium p-0 m-0 text-sm"},[t._v("\n                          3\n                        ")])]),t._v(" "),e("button",{staticClass:"flex items-center gap-x-2 cursor-pointer"},[e("p",{staticClass:"font-medium p-0 m-0 text-blue-700 text-sm flex items-center gap-x-3"},[t._v("\n                          Reply\n                        ")])])])])])])}))],2),t._v(" "),e("div",{staticClass:"w-1/12 flex justify-center items-start"},[e("img",{attrs:{src:n(258),alt:"avatar"}})])])})),0):t._e()])]},proxy:!0}])})],1)}),o,!1,null,null,null);e.default=component.exports;installComponents(component,{CustomSelect:n(452).default,ViewMoreLess:n(451).default,TermsModal:n(446).default})}}]);