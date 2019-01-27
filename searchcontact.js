
;(function(){var ROOT_NAME_SPACE={};var root=this;var ROOTNSNAME;var assertRootName=function(){if(!ROOTNSNAME){throw"No Root Name configured for the namespace. Try calling namespace.init(\"MyNameSpace\");"}};var namespace=function(){"use strict";assertRootName();var a=arguments;for(var i=0;i<a.length;i=i+1){var d=a[i].split(".");var o=root[ROOTNSNAME];var s=(d[0]===ROOTNSNAME)?1:0;var n=ROOTNSNAME;for(var j=s;j<d.length;j=j+1){n=n+"."+d[j];o[d[j]]=o[d[j]]||(function(ns){var _parent;var _nsName=n;ns.extend=ROOT_NAME_SPACE.extend;ns.getChildren=function(){return ROOT_NAME_SPACE.getChildren(ns)};ns.setParent=function(p){_parent=p;};ns.getNSName=function(){return _nsName;};ns.toString=function(){return _nsName;};ns.isNamespace=true;ns.parent=function(propertyName){if(propertyName){return _parent[propertyName];}
return _parent;};return ns;})({});o[d[j]].setParent(o);o=o[d[j]];}}
return o;};ROOT_NAME_SPACE.namespace=namespace;ROOT_NAME_SPACE.setParent=function(){assertRootName();};ROOT_NAME_SPACE.isNamespace=true;ROOT_NAME_SPACE.getNSName=function(){assertRootName();return ROOTNSNAME;};ROOT_NAME_SPACE.toString=ROOT_NAME_SPACE.getNSName;ROOT_NAME_SPACE.parent=function(propertyName){return propertyName?root[propertyName]:root;};ROOT_NAME_SPACE.getChildren=function(me){var result=[];me=me||this;for(var k in me){if(me[k]&&me[k].isNamespace){var addChild=true;for(var rKey in result){if(result[rKey]===me[k])addChild=false;}
if(addChild){result.push(me[k]);}}}
return result===[]?undefined:result;};ROOT_NAME_SPACE.extend=function(c,p,o){"use strict";var _BASE_='base';var override=false;var child;var parent;if(arguments.length>2){child=c;parent=p;override=((typeof arguments[2])==="boolean")?o:override;}
if(arguments.length==2){if((typeof arguments[1])==="boolean"){child=this;parent=c;override=p;}else{child=c;parent=p;}}
if(arguments.length==1){child=this;parent=c;}
if(!child||!parent){throw new Error("Insufficient arguments for extend");}
if(!(typeof child==="object")||!(typeof parent==="object")){console.warn("Both child and parent must be objects, naughty, naughty");return child;}
if(child===parent){console.warn("Child and parent are the same, naughty, naughty");return;}
var property;for(property in parent){if(property in child){if(override){var to=child[property];var from=parent[property];var temp;if(Array.isArray(from)){temp=(to&&Array.isArray(to))?to:[];child[property]=e(temp,from,override);}else if(typeof from==="object"){temp=(to&&((typeof to)==="object"))?to:{};child[property]=e(temp,from,override);}else{child[property]=parent[property];}}else{var to=child[property];var from=parent[property];if((typeof to==="function")&&(typeof from==="function")){if(Object.keys(ROOT_NAME_SPACE).indexOf(property)===-1){var assignBase=function(t,f){return function(){var temp=this[_BASE_]?this[_BASE_]:undefined;this[_BASE_]=f;var result=t.apply(this,arguments);if(temp){this[_BASE_]=temp;}
return result;};};child[property]=assignBase(to,from);}}}}else{if(!(child===parent[property])&&!(typeof parent[property]==="object"&&parent[property].isNamespace)){child[property]=parent[property];}}}
child.setParent(parent);return child;};namespace.init=function(rootName){if(ROOTNSNAME){if(rootName!==ROOTNSNAME){throw"Root Namespace is already set. You cannot change the root NameSpace from: "+ROOTNSNAME+" to: "+rootName;}else{console.warn("Root Namespace is already set to: "+ROOTNSNAME);}}
ROOTNSNAME=rootName||ROOTNSNAME;root[ROOTNSNAME]=ROOT_NAME_SPACE;};ROOT_NAME_SPACE.noConflict=function(){assertRootName();var previous_RNS;if(root!=null){previous_RNS=root[ROOTNSNAME];}
root[ROOTNSNAME]=previous_RNS;return ROOT_NAME_SPACE;};if(typeof module!=='undefined'&&module.exports){module.exports=namespace;}
else if(typeof define!=='undefined'&&define.amd){define("namespace",[],function(){return namespace;});}
root.namespace=namespace;}());;namespace.init("RocketReachAPI");;(function(ns){ns.BASE_URL="//api.rocketreach.co/v1/api";var API_KEY_ERROR="[RocketReach]:API Key not Set. Please call 'RocketReachAPI.init($API_KEY)'";var USER;var pendingProfiles={};Object.defineProperty(ns,"API_KEY",{get:function(){if(USER&&USER.api_key){return USER.api_key;}
throw API_KEY_ERROR;},set:function(){throw API_KEY_ERROR;}});ns.DEBUG=false;var _debug=ns._debug=function(){if(ns.DEBUG&&console&&console.log){console.log.apply(console,arguments);}}
var _error=ns._error=function(){if(ns.DEBUG&&console&&console.error){console.error.apply(console,arguments);}}
var genericError=ns.genericError=function(d,jqXHR){if(jqXHR&&jqXHR.responseJSON){d.reject(jqXHR.responseJSON,jqXHR.status)}else{d.reject(jqXHR.responseText,jqXHR.status)}}
var genericSuccess=ns.genericError=function(d,data){d.resolve(data);}
var enforceAPIKEY=function(){if(!USER||!USER.api_key){throw API_KEY_ERROR;}}
ns.init=function(options){if(!options||!options.api_key||!options.api_key.length){var errorMessage="RocketReachAPI.init() must be called with a valid 'api_key'";if(options.error&&typeof options.error=="function"){options.error(errorMessage);}else{throw errorMessage;}}
var callSuccess=function(user){if(options.success&&typeof options.success=="function"){options.success(user);}}
var callError=function(jqXHR){if(options.error&&typeof options.error=="function"){if(jqXHR&&jqXHR.responseJSON){options.error(jqXHR.responseJSON,jqXHR.status);}else{options.error(jqXHR.responseText,jqXHR.status);}}}
var getAccount=function(){if(USER&&USER.api_key&&USER.api_key==options.api_key){callSuccess(USER);}else{_debug("[RocketReach]:Loading Account",options.api_key);var params={"api_key":options.api_key};if(options.external_user_id){console.log(this);params.external_user_id=options.external_user_id;}
jQuery.get(ns.BASE_URL+"/account",params).done(function(user){_debug("[RocketReach]:Account Found:",user);if(!USER||!USER.api_key||USER.api_key!=user.api_key){USER=user;}
setTimeout(poller,pollingDelay);callSuccess(user);}).fail(callError)}}
if(typeof jQuery!='undefined'){try{var version=/^(\d*)\.(\d*)/.exec(jQuery.fn.jquery);if(parseInt(version[1])>=1&&parseInt(version[2])>=5){getAccount();}else{throw"[RocketReach]:init() requires JQuery 1.5 or above!";}}catch(e){_error("[RocketReach]:init():",e);throw"[RocketReach]:init() requires JQuery 1.5 or above!";}}else{_debug("[RocketReach]:init() requires JQuery 1.5 or above!. Loading Jquery Now");function getScript(url,success){var script=document.createElement('script');script.src=url;var head=document.getElementsByTagName('head')[0],done=false;script.onload=script.onreadystatechange=function(){if(!done&&(!this.readyState||this.readyState=='loaded'||this.readyState=='complete')){done=true;success();script.onload=script.onreadystatechange=null;head.removeChild(script);}}
head.appendChild(script);}
getScript('//code.jquery.com/jquery-1.12.0.min.js',function onJQueryLoaded(){$.noConflict();getAccount();});}}
var pollingDelay=1000;var poller=function(){if(pendingProfiles&&Object.keys(pendingProfiles).length){var ids=Object.keys(pendingProfiles).join(",");jQuery.get(ns.BASE_URL+"/checkStatus",{'api_key':ns.API_KEY,'ids':ids}).then(function(profiles){if(profiles&&profiles.length){for(var p=0;p<profiles.length;p++){var profile=profiles[p];if(profile.status=="complete"||profile.status=="failed"){_debug("Profile now ready",profile);pendingProfiles[profile.id].d.resolve([profile]);delete pendingProfiles[profile.id];}}}})}
setTimeout(poller,pollingDelay);}
ns.lookupProfile=function(options){var d=jQuery.Deferred();try{var url=ns.BASE_URL+"/lookupProfile?";var params=jQuery.param(jQuery.extend({"api_key":ns.API_KEY},options),true);jQuery.get(url+params).done(function(profiles){if(profiles&&profiles.length){var allOK=true;for(var p=0;p<profiles.length;p++){var profile=profiles[p];_debug("Profile Found",profile)
if(profile&&profile.status!="complete"&&profile.status!="failed"){allOK=false;pendingProfiles[profile.id]={p:profile,d:d};}}
if(allOK){d.resolve(profiles);}}}).fail(genericError.bind(undefined,d))}catch(e){d.reject(e);}
return d;}
ns.search=function(options){var d=jQuery.Deferred();try{var url=ns.BASE_URL+"/search?";var params=jQuery.param(jQuery.extend({"api_key":ns.API_KEY},options),true);jQuery.get(url+params).done(genericSuccess.bind(undefined,d)).fail(genericError.bind(undefined,d))}catch(e){d.reject(e);}
return d;}
ns.account=function(){var d=jQuery.Deferred();try{var url=ns.BASE_URL+"/account";jQuery.get(url,{"api_key":ns.API_KEY}).done(genericSuccess.bind(undefined,d)).fail(genericError.bind(undefined,d))}catch(e){d.reject(e);}
return d;}}(RocketReachAPI));


    var API_KEY = "202411kf9f8086bea40a8ad4a043d2d4165f148";

    //Call lookup
    var mySuccessFunction = function (account) {
            //Lookup Profile
            RocketReachAPI.lookupProfile({
            name: "Marc Benioff",
            current_employer: "Salesforce"
        }).then(function (profiles) {
            //Print Result
            console.log(profiles[0] );
        });
    }

    //Initialise
    RocketReachAPI.init({
        "api_key":API_KEY,
        "success": mySuccessFunction,
        "error": myErrorHander
    });
