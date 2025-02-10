/*! @license Rematrix v0.3.0

	Copyright 2018 Julian Lloyd.

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in
	all copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
	THE SOFTWARE.
*/function s(t){if(t.constructor!==Array)throw new TypeError("Expected array.");if(t.length===16)return t;if(t.length===6){var r=n();return r[0]=t[0],r[1]=t[1],r[4]=t[2],r[5]=t[3],r[12]=t[4],r[13]=t[5],r}throw new RangeError("Expected array with either 6 or 16 values.")}function n(){for(var t=[],r=0;r<16;r++)r%5==0?t.push(1):t.push(0);return t}function M(t,r){for(var a=s(t),f=s(r),o=[],e=0;e<4;e++)for(var h=[a[e],a[e+4],a[e+8],a[e+12]],u=0;u<4;u++){var v=u*4,i=[f[v],f[v+1],f[v+2],f[v+3]],p=h[0]*i[0]+h[1]*i[1]+h[2]*i[2]+h[3]*i[3];o[e+v]=p}return o}function c(t){if(typeof t=="string"){var r=t.match(/matrix(3d)?\(([^)]+)\)/);if(r){var a=r[2].split(", ").map(parseFloat);return s(a)}}return n()}function l(t){var r=Math.PI/180*t,a=n();return a[5]=a[10]=Math.cos(r),a[6]=a[9]=Math.sin(r),a[9]*=-1,a}function m(t){var r=Math.PI/180*t,a=n();return a[0]=a[10]=Math.cos(r),a[2]=a[8]=Math.sin(r),a[2]*=-1,a}function y(t){var r=Math.PI/180*t,a=n();return a[0]=a[5]=Math.cos(r),a[1]=a[4]=Math.sin(r),a[4]*=-1,a}function x(t,r){var a=n();return a[0]=t,a[5]=t,a}function d(t){var r=n();return r[12]=t,r}function g(t){var r=n();return r[13]=t,r}export{d as a,m as b,y as c,M as m,c as p,l as r,x as s,g as t};
