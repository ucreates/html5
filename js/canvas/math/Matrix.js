//======================================================================
// Project Name    : html5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.Mathmatics.Matrix = function() {};
Html5.Mathmatics.Matrix.multiplication = function(aarray,barray)
{
 var colmun = new Array();
 var row = new Array();
 for (var ai = 0;ai<aarray.length;ai++)
 {
  var arowarray = aarray[ai];
  for (var aj = 0;aj<arowarray.length;aj++)
  {
    var ret = 0;
    var blength = 0;
    for (var bi = 0;bi<barray.length;bi++)
    {
     var browarray = barray[bi];
     blength = browarray.length;
     if (aj<blength)
     {
      var aval = arowarray[bi];
      var bval = browarray[aj];
      var ans  = aval*bval;
      ret += ans;
     }
    }
    if (aj<blength)
     colmun.push(ret);
  }
  row.push(colmun);
 }
 return row;
};

Html5.Mathmatics.Matrix.dump = function(matrix)
{
 for (var ri = 0;ri<matrix.length;ri++)
 {
  var colmun = matrix[ri];
  for (var ci = 0;ci<colmun.length;ci++)
  {
  }
 }
};

