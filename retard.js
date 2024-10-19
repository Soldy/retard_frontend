
/**
 * @typedef DOMAttrObj
 * @type {Object}
 * @property {string} id
 * @property {string|Array.<string>}
**/

/**
 * @typedef DOMAttrArr
 * @type {Array}
 * @property {string} id
**/


/**
 * @typedef DOMTypes
 * @type {DOMElement|Array.<DOMElement>|string}
**/

const retard = new(function () {
  /**
   * 
   * @param {string}
   * @public
   * @return {DOMElement}
  **/ 
  this.text = (a)=>_text(a);
  /**
   * 
   * @param {?string} - tag
   * @param {DOMAttrObj|DOMAttrArr} - attrs
   * @param {?DOMTypes} - inside
   * @private
   * @return {string}
  **/
  this.make = function (tag, attrs, inside) {
    if(typeof tag === 'string')
      return _make(tag, attrs, inside);
    return _make('div', tag, attrs);
  };
  /**
   * 
   * @param {string} - tag
   * @param {DOMAttrObj|DOMAttrArr} - attrs
   * @public
   * @return {DOMElement}
  **/ 
  this.single = function (tag, attrs) {
    return _single(tag, attrs);
  };
  /**
   * 
   * @param {string} - tag
   * @param {DOMAttrObj|DOMAttrArr} - attrs
   * @param {string} - html
   * @public
   * @return {DOMElement}
  **/ 
  this.inner = function(tag, attrs, html){
    return _inner(tag, attrs, html);
  };
  /**
   * 
   * @param {string} - tag
   * @param {DOMAttrObj|DOMAttrArr} - attrs
   * @param {DOMTypes} - inside
   * @private
   * @return {string}
  **/
  const _multi = function(tag, attrs, inside){
    let el = _single(tag, attrs);
    if(!Array.isArray(inside))
      inside = [inside];
    for(let i of inside)
      if (typeof i === 'string')
        el.appendChild(text(i));
      else
        el.appendChild(i);
    return el;
  };
  /**
   * 
   * @param {string} - tag
   * @param {DOMAttrObj|DOMAttrArr} - attrs
   * @param {string} - html
   * @private
   * @return {DOMElement}
  **/ 
  const _inner = function(tag, attrs, html){
    let el = single(tag, attrs);
    el.innerHTML = html;
    return el;
  };
  /**
   * 
   * @param {string}
   * @private
   * @return {DOMElement}
  **/ 
  const _text = (text_)=>{
    return document.createTextNode(text_+' ');
  };
  /**
   * single html element crator
   *
   * @param {string} - tag
   * @param {DOMAttrObj|DOMAttrArr} - attrs
   * @private
   * @return {DOMElement}
  **/
  const _single = (tag, attrs)=>{
    let el = document.createElement(tag);
    _attrSet(el, attrs); 
    return el;
  };
  /**
   * 
   * @param {DOMElement} - el
   * @param {DOMAttrObj|DOMAttrArr} - attrs
   * @private
   * @return {void}
  **/
  const _attrSet = (el, attrs)=>{
    if (Array.isArray(attrs))
      attrs = {'class':attrs};
    for (let attr in attrs)
      el.setAttribute(
        attr,
        _attrVal(attrs[attr])
      );
  };
  /**
   * 
   * @param {Array<string>|string} - val
   * @private
   * @return {string}
  **/
  const _attrVal = (val)=>{
    if (Array.isArray(val))
      return val.join(' ');
    else
      return val;
  };
  /**
   * 
   * @param {?string} - tag
   * @param {DOMAttrObj|DOMAttrArr} - attrs
   * @param {?DOMTypes} - inside
   * @private
   * @return {string}
  **/
  const _make = function (tag, attrs, inside) {
    if(typeof inside === 'undefined')
      return _single(tag,attrs);
    if(typeof inside === 'string')
      return _multi(
        tag,
        attrs,
        _text(inside)
      );
    return _multi(tag,attrs,inside);
  };
})();

