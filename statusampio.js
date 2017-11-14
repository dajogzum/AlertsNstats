Module.register("statusampio", {
	default: {
	},

	getStyles: function () {
		return ["ampiostyle.css",];
	},

	getDom: function() {
		var self = this;
		var wrapper = document.createElement("div");
			wrapper.className = "ampio-container";
			wrapper.innerHTML = '<div id="alert"></div><div id="warning"></div><div id="info"></div>';
		return wrapper;
	},

	showmsg: function(message) {
		var node = document.createElement("div");
		var span = document.createElement("span");
		var image = document.createElement("img");
		var att = document.createAttribute("src");
		var textnode = document.createTextNode(message.comment);
		att.value = "modules/statusampio/"+message.type+".png";
		image.setAttributeNode(att);
			if(message.type == "warning"){
				image.className = "icon-ampio yellow-ampio";
			}else if(message.type == "alert"){
				image.className = "icon-ampio red-ampio";
			}else{
				image.className = "icon-ampio"
			}
		node.className = "default-ampio";
		node.appendChild(image);
		node.id = message.id;
		span.id = message.id+"-sp";
    		span.appendChild(textnode);
		node.appendChild(span);
		list = document.getElementById(message.type);
		list.insertBefore(node, list.childNodes[0]);
		setTimeout(function(){node.className = "ani-ampio";}, 600);
	},

	hidemsg: function(message) {
		document.getElementById(message.id).className = "default-ampio";
		var item = document.getElementById(message.id);
		setTimeout(function(){ item.parentNode.removeChild(item); }, 600);
	},
	
	checkobj: function(message) {
		var exist = document.getElementById(message.id+"-sp");
		if (exist === null){
			this.showmsg(message);
		}else{

			exist.innerHTML= message.comment;
		}
	},
	
	notificationReceived: function(notification, payload, sender) {
		if (notification === "SHOW_AMPIO") {
			console.log("showing msg id="+payload.id)
			this.checkobj(payload);
		} else if(notification === "HIDE_AMPIO") {
			console.log("hiding msg id="+payload.id)
			this.hidemsg(payload);
		}
	},
});
