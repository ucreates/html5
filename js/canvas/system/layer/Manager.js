//======================================================================
// Project Name    : htm5
//
// Copyright © 2016 U-CREATES. All rights reserved.
//
// This source code is the property of U-CREATES.
// If such findings are accepted at any time.
// We hope the tips and helpful in developing.
//======================================================================
Html5.System.Layer.Manager = function()
{
 var _count = 0;
 this.list = new Array();
 
 this.count = function(count,arr)
 {
  var ret = 0;
  var llist = null;
  if (0 != arguments.length)
  {
   ret = count;
   for (var obj in arr)
   {
     var ins = arr[obj];
     if (typeof ins.core   !==   "undefined")
     {
      if (Html5.System.Utility.Array.isArray(ins.core))
      {
       ret = this.count(ret,ins.core);
      }
     }
     else
     {
      ret++;
     }
   }
  }
  else
  {
   for (var obj in this.list)
   {
    var ins = this.list[obj];
    if (typeof ins.core   !==   "undefined")
    {
     if (Html5.System.Utility.Array.isArray(ins.core))
     {
      ret = this.count(ret,ins.core);
     }
     else
     {
      ret++;
     }
    }
   }
  }
  return ret;
 };
};

