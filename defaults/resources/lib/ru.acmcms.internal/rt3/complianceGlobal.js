/**
 * Pre 678 RT3 compliance module.
 * 
 * Provides 'setupContext(context)' method. Supposed to be called from
 * 'global.js' where global context is 'this' which should be passed to
 * 'setupContext' method.
 * 
 * Creates and registers obsolete methods.
 * 
 * For everyone who's reading this - please, do not use these methods in any new
 * code... and replace them to something more meaningful and standard in old 
 * code you see.
 */

/**
 * indexOf(String, Token [, Start]).
 * <P>
 * Returns an integer with position of first token occurence or -1 if no token
 * occured.
 * 
 * @param s
 * @param token
 * @param start
 * @return int
 */
function indexOf(str, token, start) {
	return str 
		? String(str).indexOf(token, start || 0) 
		: -1;
}

/**
 * lastIndexOf(String, Token [, Start]).
 * <P>
 * Returns an integer with position of last token occurence or -1 if no token
 * occured.
 * 
 * @param s
 * @param token
 * @param start
 * @return int
 */
function lastIndexOf(str, token, start) {
	return str 
		? String(str).lastIndexOf(token, start || 0) 
		: -1;
}

/**
 * strlen(String).
 * <P>
 * Returns length of given string.
 * 
 * @param str
 * @return int
 */
function strlen(str) {
	return str === undefined || str === null ? 0 : String(str).length;
}

/**
 * substring(String, beginIndex [, endIndex]).
 * 
 * @param string
 * @param start
 * @param end
 * @return string
 */
function substring(str, start, end) {
	return str == null ? null : end === undefined ? String(str)
			.substring(start) : String(str).substring(start, end);
}

/**
 * substr(String, beginIndex [, endIndex]).
 * 
 * @param string
 * @param start
 * @param end
 * @return string
 */
function substr(str, start, end) {
	return str == null ? null : end === undefined ? String(str)
			.substr(start) : String(str).substr(start, end);
}

/**
 * trim(String).
 * <P>
 * 
 * @param o
 * @return string
 */
function trim(str) {
	return str && String(str).trim() || str;
}

/**
 * ArrayAppend(Array, Object).
 * <p>
 * Appends an element to a java.util.List. Returns an Object passed Array: an
 * instance of java.util.List. Object: any object
 * 
 * @param list
 * @param value
 * @return object
 * 
 * @deprecated
 */
function ArrayAppend(array, value) {
	if (array == null) {
		throw new Error("ArrayAppend(Array,Object) - Array is undefined!");
	}
	array.push(value);
	return value;
}

/**
 * returns true when argument is an array and is not an empty array.
 */
function ArrayFilled(o) {
	return o && o instanceof Array && o.length > 0
			&& Number(o.length) === o.length;
}

function IsInArray(a, o) {
	return ('function' === typeof a.contains) && a.contains(o);
}

/**
 * ArrayGet(Array,Index).
 * 
 * @param object
 * @param idx
 * @return object
 * 
 * @deprecated
 */
function ArrayGet(object, idx) {
	if (!object) {
		throw new IllegalArgumentException(
				"ArrayGet(Array,Index) - check your syntax!");
	}
	/**
	 * conversion to int32
	 */
	var index = idx << 0;
	if (object instanceof Array || object.length === Number(object.length)) {
		return object[index];
	}
	return String(object).split(",")[index];
}

/**
 * ArrayLength(Array).
 * <p>
 * Returns current array length. Array: java.util.List or a comma-separated
 * string
 * 
 * @param object
 * @return int
 * 
 * @deprecated
 */
function ArrayLength(array) {
	if(!array){
		return 0;
	}
	var length = Number(array.length);
	return array instanceof Array || array.length == length
		/**
		 * 
		 */
		? length
		/**
		 * support for Collections (such as java.util.Set)
		 */
		: typeof array.size === 'function' 
			? array.size() 
			/**
			 * failover
			 */
			: String(array).split(',').length;
}

/**
 * Maximal array element.
 * 
 * @param array
 * @returns
 */
function ArrayMax(array) {
	// return Math.max.apply(null, array);
	return array.length
		? array.reduce(ArrayMax.comparator, -Infinity)
		: undefined;
}

/**
 * This way cause we want this function to be created only once.
 */
ArrayMax.comparator = function(a, b) {
	return a > b ? a : b;
};

/**
 * Minimal array element.
 * 
 * @param array
 * @returns
 */
function ArrayMin(array) {
	// return Math.min.apply(null, array);
	return array.length 
		? array.reduce(ArrayMin.comparator, Infinity)
		: undefined;
}

ArrayMin.comparator = function(a, b) {
	return a < b ? a : b;
};

function ArrayRemove(arr, index) {
	arr.remove(index);
	return arr;
}

function ArraySet(arr, index, value) {
	return arr[index] = value;
}

function ArraySwap(arr, index1, index2) {
	var x = arr[index1];
	arr[index1] = arr[index2];
	arr[index2] = x;
	return arr;
}

/**
 * Returns true when given object is an array.
 * 
 * @param o
 * @returns {Boolean}
 */
function ArrayValid(o) {
	return Array.isArray(o);
}

/**
 * Returns true when given object is a map.
 * 
 * @param o
 * @returns {Boolean}
 */
function HashValid(o) {
	return Object.isMap(o);
}

function HashFilled(o) {
	return Object.isMap(o) && !!o.size();
}

function HashSize(o) {
	return Object.isMap(o) ? o.size() : 0;
}

/**
 * 
 * @param array
 * @param token
 * @returns
 */
function Join(array, token){
	return array instanceof Array 
		? array.join(token)
		: Array(array).join(token);
}

/**
 * EndsWith(String,Suffix).
 * <P>
 * Returns true if given String ends with suffix specified.
 * 
 * @param str
 * @param suffix
 * @return boolean
 */
function EndsWith(str, suffix) {
	return str && String(str).endsWith(suffix);
}


/**
 * @param o
 * @param defaultValue
 * @returns {Boolean}
 */
function Floating(o, defaultValue) {
	return o && Number(o) || defaultValue && Number(defaultValue) || 0;
}

/**
 * IsInHash(Hash,key).
 * <P>
 * Returns true if key is in the hash.
 * 
 * @param object
 * @param key
 * @return boolean
 */
function IsInHash(object, key) {
	return key in object;
}

/**
 * UpperCase(String).
 * <P>
 * 'A big bROWN fOx' -> 'A BIG BROWN FOX'
 * 
 * @param o
 * @return string
 */
function UpperCase(str) {
	return str && String(str).toUpperCase() || str;
}

/**
 * LowerCase(String).
 * <P>
 * 'A big bROWN fOx' -> 'a big brown fox'
 * 
 * @param o
 * @return string
 */
function LowerCase(str) {
	return str && String(str).toLowerCase() || str;
}

function Split(str, dividerRegexStr) {
	return splitRegex(str, dividerRegexStr || ',');
}

function Replace(str, whatRegexStr, toStr) {
	return replaceRegex(str, whatRegexStr, toStr);
}


/**
 * StartsWith(String,Prefix).
 * <P>
 * Returns true if given String starts with Prefix specified.
 * 
 * @param str
 * @param prefix
 * @return boolean
 */
function StartsWith(str, prefix) {
	return str && String(str).startsWith(prefix);
}

/**
 * 
 * @param object
 * @param defaultValue
 * @returns
 */
function Textual(object, defaultValue) {
	return object ? object instanceof Array ? '[' + object.join(',') + ']'
			: String(object) : defaultValue ? String(defaultValue) : null;
}

function StringToXml(o) {
	return Format.xmlNodeValue(o);
}

function StringToHtmlInput(o) {
	return Format.xmlAttributeFragment( o );
}

function StringToUrl(o) {
	return encodeURI( o );
}

function StringToUrlHard(o) {
	return encodeURIComponent( o );
}

function uniqueWords(o, delimiter) {
	return Format.uniqueWords(o, delimiter);
}

function HashApply(map1, map2) {
	for(var key in map2){
		map1[key] = map2[key];
	}
	return map1;
}


/**
 * HashRemove(Hash,key).
 * 
 * @param object
 * @param key
 * @return object
 */
function HashRemove(object, key) {
	try {
		return object[ key ];
	} finally {
		delete object[ key ];
	}
}

function exceptionToString(e) {
	return Format.throwableAsPlainText(e);
}

/**
 * @param date
 * @param format
 * @return string
 */
function formatDate(date, format) {
	return Format.date( date, format || "yyyy-MM-dd HH:mm:ss" );
}

/**
 * @param parameter
 * @return string
 */
function formatSqlStringParameter(parameter) {
	return Format.sqlStringFragment( parameter );
}

/**
 * @param parameter
 * @return string
 */
function clearHtmlFormatting(parameter) {
	return Format.htmlAsPlainText( parameter );
}


/**
 * 
 * @returns Date.now()
 */
function CurrentDate() {
	return Date.now();
}


function zipToMap(x){
	return require('ae3.util/Codecs').unzipToMap(x);
}


function mapToZip(x){
	return require('ae3.util/Codecs').mapToZip(x);
}


exports.setupContext = function(context) {

	console.log("RT3 complianceGlobal, ACM677 compatibility, going to patch 'global' object...");

	const add = (function(name, value){
		console.log("RT3 complianceGlobal, ACM677 compatibility, added: %s", name);
		Object.defineProperty(this, name, {
			value : value,
			writable : true,
			enumerable : false,
			configurable : true
		});
	}).bind(context);
	
	add("indexOf", indexOf);
	add("lastIndexOf", lastIndexOf);
	add("strlen", strlen);
	add("substring", substring);
	add("substr", substr);
	add("trim", trim);

	add("IsInArray", IsInArray);
	add("ArrayAppend", ArrayAppend);
	add("ArrayFilled", ArrayFilled);
	add("ArrayGet", ArrayGet);
	add("ArrayLength", ArrayLength);
	add("ArrayMax", ArrayMax);
	add("ArrayMin", ArrayMin);
	add("ArrayRemove", ArrayRemove);
	add("ArraySet", ArraySet);
	add("ArraySwap", ArraySwap);
	add("ArrayValid", ArrayValid);
	add("Join", Join);

	add("StartsWith", StartsWith);
	add("EndsWith", EndsWith);
	add("UpperCase", UpperCase);
	add("LowerCase", LowerCase);
	add("Textual", Textual);

	add("StringToXml", StringToXml);
	add("StringToHtmlInput", StringToHtmlInput);
	add("StringToUrl", StringToUrl);
	add("StringToUrlHard", StringToUrlHard);
	add("uniqueWords", uniqueWords);
	
	add("Split", Split);
	add("Replace", Replace);
	
	add("Floating", Floating);

	add("IsInHash", IsInHash);
	add("HashValid", HashValid);
	add("HashFilled", HashFilled);
	add("HashSize", HashFilled);
	add("HashApply", HashApply);
	add("HashCode", hashCode); // already defined
	add("HashRemove", HashRemove);

	add("exceptionToString", exceptionToString);
	
	add("formatDate", formatDate);
	add("formatSqlStringParameter", formatSqlStringParameter);
	add("clearHtmlFormatting", clearHtmlFormatting);
	
	add("CurrentDate", CurrentDate);
	
	add("zipToMap", zipToMap);
	add("mapToZip", mapToZip);

	try{
		add("ExcelWorkbook", require('ae3/xls'));
	}catch(e){
		console.error("Problems with ExcelSAPI: " + (e.getMessage ? Format.throwableAsPlainText(e) : e));
	}
	
	/**
	 * 677 compliance CHECK
	 */
	if (strlen("677") != 3 || !StartsWith("677", "67")) {
		throw "677 compliance failed!";
	}

	console.log("RT3 complianceGlobal, ACM677 compatibility, complete");

};
