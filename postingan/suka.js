!function(){Array.prototype.remove=function(){for(var e,t,i=arguments,o=i.length;o&&this.length;)for(e=i[--o];-1!==(t=this.indexOf(e));)this.splice(t,1);return this};var e=document.createElement("script");e.src="https://www.gstatic.com/firebasejs/4.9.0/firebase.js",e.onload=function(){firebase.initializeApp({apiKey:"AIzaSyAXMK5VbGoP8QHEWgxwkvd5oMi1WBcpw7o",databaseURL:"https://rafi-priatna-blog.firebaseio.com",projectId:"rafi-priatna-blog"}),function(e){for(var t=document.getElementsByClassName("sukapost"),i=0,o=t[i];i<t.length;i++){var a=o.getAttribute("data-id"),r=JSON.parse(localStorage.getItem("liked"))||[],c=0;e.ref("like/"+a+"/total").on("value",function(e){-1!==r.indexOf(a)&&o.querySelector(".icon").classList.add("active"),c=e.val()||0,o.querySelector(".total").innerText=c}),o.querySelector("a").addEventListener("click",function(){o.querySelector(".icon").classList.toggle("active"),o.querySelector(".icon").classList.contains("active")?(r.push(a),localStorage.setItem("liked",JSON.stringify(r)),c++):(r.remove(a),localStorage.setItem("liked",JSON.stringify(r)),c--),e.ref("like/"+a+"/total").set(c)})}}(firebase.database())},document.body.append(e)}();
