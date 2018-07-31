Module.register("AlertsNstats", {
	default: {
	},

	getStyles: function () {
		return ["alertsnstatsstyle.css",];
	},

	getDom: function() {
		var self = this;
		var wrapper = document.createElement("div");
			wrapper.className = "alertsnstats-container";
			wrapper.innerHTML = '<div id="alert"></div><div id="warning"></div><div id="info"></div>';
		return wrapper;
	},

	showmsg: function(message) {
		var node = document.createElement("div");
		var span = document.createElement("span");
		var image = document.createElement("img");
		var att = document.createAttribute("src");
		var textnode = document.createTextNode(message.comment);
		att.value = "modules/AlertsNstats/"+message.type+".png";
		image.setAttributeNode(att);
			if(message.type == "warning"){
				image.className = "icon-stats yellow-stats";
			}else if(message.type == "alert"){
				image.className = "icon-stats red-stats";
			}else{
				image.className = "icon-stats"
			}
		node.className = "default-stats";
		node.appendChild(image);
		node.id = message.id;
		span.id = message.id+"-sp";
    		span.appendChild(textnode);
		node.appendChild(span);
		list = document.getElementById(message.type);
		list.insertBefore(node, list.childNodes[0]);
		setTimeout(function(){node.className = "ani-stats";}, 600);
	},

	hidemsg: function(message) {
		document.getElementById(message.id).className = "default-stats";
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
		var module;
		switch(notification){
			case "SHOW_STAT":
				console.log("showing msg id="+payload.id)
				this.checkobj(payload);
				break;
			case "HIDE_STAT":
				console.log("hiding msg id="+payload.id)
				this.hidemsg(payload);
				break;
			case "SHOW_CAMERA":
				this.sendNotification("RTSP-PLAY", "stream1");
				module[0].show(1000);
				break;
			case "HIDE_CAMERA":
				module[0].hide(1000);
				this.sendNotification("RTSP-STOP", "stream1");
				break;
			case "ALL_MODULES_STARTED":
				module = MM.getModules().withClass("MMM-RTSPStream");
				console.log(module);
				break;
		}
	},
});
