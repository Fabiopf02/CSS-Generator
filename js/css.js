import { keyframes as CSS } from "./keyframes.js";
export function getCssAnimation(animation) {
  
  const text = CSS[animation][1];
  if (animation == "none"
    || !text) {
    return "";
  }
  const formated = format(text);

  const keyframe = `
    <span class="cvl b">@</span><span class="m">keyframes</span> ${animation} {
      ${formated}
    <br><span class="b">}</span>
  `;
  
  return keyframe;
}

function format(text) {
  const rgx = [
    {e: /\d{1,3}[%][ ]/g,r:"%",p:"<br>",s:"% ", cls:"n b2",el:"span"},
    {e: /(from |to )/g,r:" ",p:"<br>",s:" ", cls:"n b2",el:"span"},
    /*{e: /(to)/g,r:" ",p:"<br>",s:" ", cls:"n b",el:"span"},*/
    {e: /[(][-]*\d{1,4}[.]*[0-9]*/g, r:"(",p:"(", s:"",cls:"n",el:"span"},
    {e: /(-|)\d{1,4}(.|)[0-9]*[;]/g, r:";",p:" ", s:";",cls:"n",el:"span"},
    {e: /[ ][}]/g, r:" ",p:"<br>", s:"",cls:"b2",el:"span"},
    {e: /(px|deg|%)+[ ]/g, r:" ",p:"", s:"",cls:"m",el:"span"},
    {e: /(px|deg|%)+[)]/g, r:")",p:"", s:")",cls:"m",el:"span"},
    {e: /[ ]\w{1,15}[-]*\w{1,15}[:]/g, r:":",p:"", s:":",cls:"key b3",el:"span"},
    {e: /[{][ ]/g, r:" ",p:"{", s:"",cls:"",el:"<br>"},
  ];
  
  rgx.forEach((item) => {
    const array = text.match(item.e);
    if (array) {
    array.forEach((value) => {
      if (item.r !== " ") {
        value = value.replace(" ", "");
      }
      let el = item.el;
      if (item.el == "span") {
        el = `<span class='${item.cls}'>`;
        el += value.replace(item.r, "")+"</span>";
      }
      
      const newText = item.p+el+item.s;
      text = text.replace(value,newText);
    });
    }
  });
  return text;
}

export function getCssBlock(obj) {
  return `
		<span class="c">//HTML</span><br>
		<span class="b"><<span class="el">div</span><span class="key"> class</span>=<span class="cvl">"block"</span>><<span>/<span class="el">div</span><span>>
		</span>
		<br><br>
		  
		<span class="c">//CSS</span><br>
		<span class="cls b">.block</span> {<br>
		<span class="key b2">transition</span>: <span class="n">1</span><span class="m">s</span>;
				<br>
		<span class="key b2">width</span>: <span class="n">${obj.size}</span><span class="m">px</span>;
		  	<br>
		<span class="key b2">height</span>: <span class="n">${obj.size}</span><span class="m">px</span>;
				<br>
		<span class="key b2">border-radius</span>: <span class="n">${obj.radius}</span><span class="m">px</span>;
				<br>
		<span class="key b2">background-color</span>: <span class="cls">${obj.color}</span>;

				${obj.animated===true?(`
				<br>
		<span class="key b2">animation</span>: ${obj.animation}  <span class="n">${obj.time}</span><span class="m">s</span> <span class="n">${obj.delay}</span><span class="m">s</span> <span class="key">${obj.iteration}</span> <span class="key">${obj.direction}</span> <span class="key">both</span>;`):""}
	<br><span class="b">}</span>
  `;
}