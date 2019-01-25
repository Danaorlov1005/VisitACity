using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BesTravel.BL
{
  public static class tripBL
  {
    public static dynamic getDataForClient(string location, int numOfDays)
    {
      dynamic result  = externalServices.getGooglePlacesByLocation(location);
      return result;
    }
  }
}
