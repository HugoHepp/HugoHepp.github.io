function isIOS(){return["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod"].includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"ontouchend"in document}window.addEventListener("DOMContentLoaded",e=>{if(window.matchMedia("(min-width: 768px)").matches){let e=0,t=0,a=document.getElementById("cursor_custom");document.onmousemove=(a=>{e=a.pageX,t=a.pageY});let n=2,i=0,s=0;!function r(){requestAnimationFrame(r),i+=(e-i)/n,s+=(t-s)/n,a.style.top=s+"px",a.style.left=i+"px"}()}document.querySelector(".section_color1").addEventListener("mouseenter",function(e){document.getElementById("cursor_custom").style.border="1px solid #FFFFFF"}),document.querySelector(".section_color2").addEventListener("mouseenter",function(e){document.getElementById("cursor_custom").style.border="1px solid #000000"}),document.querySelector(".section_color3").addEventListener("mouseenter",function(e){document.getElementById("cursor_custom").style.border="1px solid #FFFFFF"}),document.querySelector(".section_color4").addEventListener("mouseenter",function(e){document.getElementById("cursor_custom").style.border="1px solid #000000"}),document.querySelector(".section_color5").addEventListener("mouseenter",function(e){document.getElementById("cursor_custom").style.border="1px solid #FFFFFF"}),document.querySelector(".navbar").addEventListener("mouseenter",function(e){document.getElementById("cursor_custom").style.border="1px solid #FFFFFF"}),anime({targets:"#dynamic",keyframes:[{translateX:77,translateY:0,duration:1500},{translateX:77,translateY:80,duration:1500},{translateX:0,translateY:80,duration:1500},{translateX:0,translateY:0,duration:1500}],easing:"easeOutElastic(1, .8)",loop:!0}),anime({targets:"#responsive",keyframes:[{scaleX:2.75,scale:.65}],delay:1350,direction:"alternate",duration:1650,easing:"easeOutElastic(1.3, .4)",loop:!0}),anime({targets:"#convenient",keyframes:[{opacity:0,scale:.8,duration:250},{rotateZ:90,opacity:0,duration:250},{opacity:1,scale:1,duration:1e3},{opacity:0,scale:.8,duration:250},{rotateZ:180,opacity:0,duration:250},{opacity:1,scale:1,duration:1e3},{opacity:0,scale:.8,duration:250},{rotateZ:270,opacity:0,duration:250},{opacity:1,scale:1,duration:1e3},{opacity:0,scale:.8,duration:250},{rotateZ:360,opacity:0,duration:250},{opacity:1,scale:1,duration:1e3}],easing:"easeOutElastic(1, 1)",loop:!0}),window.onscroll=(()=>{window.innerHeight+window.scrollY>1860?(anime({targets:".skill_progress_html",width:200,duration:2e3,easing:"easeOutElastic(.2, 10)"}),anime({targets:".skill_progress_css",width:195,duration:2e3,easing:"easeOutElastic(.2, 10)"}),anime({targets:".skill_progress_js",width:186,duration:2e3,easing:"easeOutElastic(.2, 10)"}),anime({targets:".skill_progress_python",width:187,duration:2e3,easing:"easeOutElastic(.2, 10)"}),anime({targets:".skill_progress_php",width:180,duration:2e3,easing:"easeOutElastic(.2, 10)"}),anime({targets:".skill_progress_react",width:166,duration:2e3,easing:"easeOutElastic(.2, 10)"}),anime({targets:".skill_progress_django",width:166,duration:2e3,easing:"easeOutElastic(.2, 10)"}),anime({targets:".skill_progress_bootstrap",width:185,duration:2e3,easing:"easeOutElastic(.2, 10)"}),anime({targets:".skill_progress_sql",width:134,duration:2e3,easing:"easeOutElastic(.2, 10)"}),anime({targets:".skill_progress_figma",width:175,duration:2e3,easing:"easeOutElastic(.2, 10)"}),anime({targets:".skill_progress_wordpress",width:175,duration:2e3,easing:"easeOutElastic(.2, 10)"})):(anime({targets:".skill_progress_html",width:0,duration:1,easing:"linear"}),anime({targets:".skill_progress_css",width:0,duration:1,easing:"linear"}),anime({targets:".skill_progress_js",width:0,duration:1,easing:"linear"}),anime({targets:".skill_progress_python",width:0,duration:1,easing:"linear"}),anime({targets:".skill_progress_php",width:0,duration:1,easing:"linear"}),anime({targets:".skill_progress_react",width:0,duration:1,easing:"linear"}),anime({targets:".skill_progress_django",width:0,duration:1,easing:"linear"}),anime({targets:".skill_progress_bootstrap",width:0,duration:1,easing:"linear"}),anime({targets:".skill_progress_sql",width:0,duration:1,easing:"linear"}),anime({targets:".skill_progress_figma",width:0,duration:1,easing:"linear"}),anime({targets:".skill_progress_wordpress",width:0,duration:1,easing:"linear"}))}),document.getElementById("lets_go").addEventListener("mouseenter",function(e){anime({targets:"#lets_go",keyframes:[{background:"#ED7A27",color:"#FFFFFF",scale:1.05}],duration:500,easing:"easeOutElastic(1, 1)"})}),document.getElementById("lets_go").addEventListener("mouseleave",function(e){anime({targets:"#lets_go",keyframes:[{background:"#FFFFFF",color:"#000000",scale:1}],duration:500,easing:"easeOutElastic(1, 1)"})}),document.querySelector(".linkedin_button").addEventListener("mouseenter",function(e){anime({targets:".linkedin_button",keyframes:[{background:"#ED7A27",color:"#FFFFFF",scale:1.05}],duration:500,easing:"easeOutElastic(1, 1)"})}),document.querySelector(".linkedin_button").addEventListener("mouseleave",function(e){anime({targets:".linkedin_button",keyframes:[{background:"#000000",color:"#FFFFFF",scale:1}],duration:500,easing:"easeOutElastic(1,.8)"})}),document.querySelector("#project_aimtrainer").addEventListener("mouseenter",function(e){anime({targets:"#img_aimtrainer",keyframes:[{scale:1.05}],duration:750,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#project_aimtrainer").addEventListener("mouseleave",function(e){anime({targets:"#img_aimtrainer",keyframes:[{scale:1}],duration:750,easing:"easeOutElastic(1,.8)"})}),document.querySelector("#project_simplepost").addEventListener("mouseenter",function(e){anime({targets:"#img_simplepost",keyframes:[{scale:1.05}],duration:750,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#project_simplepost").addEventListener("mouseleave",function(e){anime({targets:"#img_simplepost",keyframes:[{scale:1}],duration:750,easing:"easeOutElastic(1,.8)"})}),document.querySelector("#project_auction").addEventListener("mouseenter",function(e){anime({targets:"#img_auction",keyframes:[{scale:1.05}],duration:750,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#project_auction").addEventListener("mouseleave",function(e){anime({targets:"#img_auction",keyframes:[{scale:1}],duration:750,easing:"easeOutElastic(1,.8)"})}),document.querySelector("#project_sheltergallery").addEventListener("mouseenter",function(e){anime({targets:"#img_sheltergallery",keyframes:[{scale:1.05}],duration:750,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#project_sheltergallery").addEventListener("mouseleave",function(e){anime({targets:"#img_sheltergallery",keyframes:[{scale:1}],duration:750,easing:"easeOutElastic(1,.8)"})}),document.querySelector("#project_musiciantoolkit").addEventListener("mouseenter",function(e){anime({targets:"#img_musiciantoolkit",keyframes:[{scale:1.05}],duration:750,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#project_musiciantoolkit").addEventListener("mouseleave",function(e){anime({targets:"#img_musiciantoolkit",keyframes:[{scale:1}],duration:750,easing:"easeOutElastic(1,.8)"})}),document.querySelector("#project_mail").addEventListener("mouseenter",function(e){anime({targets:"#img_mail",keyframes:[{scale:1.05}],duration:750,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#project_mail").addEventListener("mouseleave",function(e){anime({targets:"#img_mail",keyframes:[{scale:1}],duration:750,easing:"easeOutElastic(1,.8)"})}),document.querySelector("#project_wiki").addEventListener("mouseenter",function(e){anime({targets:"#img_wiki",keyframes:[{scale:1.05}],duration:750,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#project_wiki").addEventListener("mouseleave",function(e){anime({targets:"#img_wiki",keyframes:[{scale:1}],duration:750,easing:"easeOutElastic(1,.8)"})}),document.querySelector("#project_finance").addEventListener("mouseenter",function(e){anime({targets:"#img_finance",keyframes:[{scale:1.05}],duration:750,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#project_finance").addEventListener("mouseleave",function(e){anime({targets:"#img_finance",keyframes:[{scale:1}],duration:750,easing:"easeOutElastic(1,.8)"})}),document.querySelector("#github_aimtrainer").addEventListener("mouseenter",function(e){anime({targets:"#github_aimtrainer",keyframes:[{background:"#ED7A27",color:"#FFFFFF"}],duration:750,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#github_aimtrainer").addEventListener("mouseleave",function(e){anime({targets:"#github_aimtrainer",keyframes:[{background:"#010101",color:"#FFFFFF"}],duration:750,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#github_simplepost").addEventListener("mouseenter",function(e){anime({targets:"#github_simplepost",keyframes:[{background:"#ED7A27",color:"#FFFFFF"}],duration:750,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#github_simplepost").addEventListener("mouseleave",function(e){anime({targets:"#github_simplepost",keyframes:[{background:"#010101",color:"#FFFFFF"}],duration:750,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#github_auction").addEventListener("mouseenter",function(e){anime({targets:"#github_auction",keyframes:[{background:"#ED7A27",color:"#FFFFFF"}],duration:750,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#github_auction").addEventListener("mouseleave",function(e){anime({targets:"#github_auction",keyframes:[{background:"#010101",color:"#FFFFFF"}],duration:750,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#github_sheltergallery").addEventListener("mouseenter",function(e){anime({targets:"#github_sheltergallery",keyframes:[{background:"#ED7A27",color:"#FFFFFF"}],duration:750,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#github_sheltergallery").addEventListener("mouseleave",function(e){anime({targets:"#github_sheltergallery",keyframes:[{background:"#010101",color:"#FFFFFF"}],duration:750,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#github_musiciantoolkit").addEventListener("mouseenter",function(e){anime({targets:"#github_musiciantoolkit",keyframes:[{background:"#ED7A27",color:"#FFFFFF"}],duration:750,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#github_musiciantoolkit").addEventListener("mouseleave",function(e){anime({targets:"#github_musiciantoolkit",keyframes:[{background:"#010101",color:"#FFFFFF"}],duration:750,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#github_mail").addEventListener("mouseenter",function(e){anime({targets:"#github_mail",keyframes:[{background:"#ED7A27",color:"#FFFFFF"}],duration:750,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#github_mail").addEventListener("mouseleave",function(e){anime({targets:"#github_mail",keyframes:[{background:"#010101",color:"#FFFFFF"}],duration:750,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#github_wiki").addEventListener("mouseenter",function(e){anime({targets:"#github_wiki",keyframes:[{background:"#ED7A27",color:"#FFFFFF"}],duration:750,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#github_wiki").addEventListener("mouseleave",function(e){anime({targets:"#github_wiki",keyframes:[{background:"#010101",color:"#FFFFFF"}],duration:750,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#github_finance").addEventListener("mouseenter",function(e){anime({targets:"#github_finance",keyframes:[{background:"#ED7A27",color:"#FFFFFF"}],duration:750,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#github_finance").addEventListener("mouseleave",function(e){anime({targets:"#github_finance",keyframes:[{background:"#010101",color:"#FFFFFF"}],duration:750,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#contact_submit").addEventListener("mouseenter",function(e){anime({targets:"#contact_submit",keyframes:[{background:"#000000",color:"#ED7A27",scale:1.05}],duration:500,easing:"easeOutElastic(1, 1)"})}),document.querySelector("#contact_submit").addEventListener("mouseleave",function(e){anime({targets:"#contact_submit",keyframes:[{background:"#000000",color:"#FFFFFF",scale:1}],duration:500,easing:"easeOutElastic(1,.8)"})}),isIOS()||(document.querySelector(".contact_email").addEventListener("mouseenter",function(e){anime({targets:".contact_email",keyframes:[{scale:1.04}],duration:500,easing:"easeOutElastic(1, 1)"})}),document.querySelector(".contact_email").addEventListener("mouseleave",function(e){anime({targets:".contact_email",keyframes:[{scale:1}],duration:500,easing:"easeOutElastic(1,.8)"})}),document.querySelector(".contact_subject").addEventListener("mouseenter",function(e){anime({targets:".contact_subject",keyframes:[{scale:1.04}],duration:500,easing:"easeOutElastic(1, 1)"})}),document.querySelector(".contact_subject").addEventListener("mouseleave",function(e){anime({targets:".contact_subject",keyframes:[{scale:1}],duration:500,easing:"easeOutElastic(1,.8)"})})),document.querySelector(".contact_message").addEventListener("mouseenter",function(e){anime({targets:".contact_message",keyframes:[{scale:1.04}],duration:500,easing:"easeOutElastic(1, 1)"})}),document.querySelector(".contact_message").addEventListener("mouseleave",function(e){anime({targets:".contact_message",keyframes:[{scale:1}],duration:500,easing:"easeOutElastic(1,.8)"})})});