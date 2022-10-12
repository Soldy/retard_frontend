const  retard = new(function () {
     this.make = function (tag, attrs, inside) {
         multi(tag, attrs, inside);
     }
     this.single = function (tag, attrs) {
         return single(tag, attrs);
     }
     const multi = function(tag, attrs, inside){
         let el = single(tag, attrs);
         if(!Array.isArray(inside))
             inside = [inside];
         for(let i of inside)
             el.appendChild(i);
         return el;
     };
     const single = (tag, attrs)=>{
         let el = document.createElement(tag);
         for (let attr in attrs)
             el.setAttribute(
                 attr,
                 attrVal(attrs[attr])
             );
         return el;
     };
     const attrVall = (val)=>{
         var out = '';
         if (Array.isArray(val))
            for (let i = 0; val.length > i; i++)
                out += val[i] + ' ';
        else
            out = val;
        return out;

     };
})();

