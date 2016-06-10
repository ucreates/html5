//======================================================================
// Project Name    : html5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Mathmatics.Sort = function()
{};

Html5.Mathmatics.Sort.Random = function(array)
{
 var ar = array;
 var n = ar.length-1;
 while(n>-1)
 {
  var val = Math.floor(Math.random()*(n+1));
  if (n === val)
  {
   n--;
   continue;
  }
  var buf = ar[n];
  ar[n] = ar[val];
  ar[val] = buf;
 }
 return ar;
};
