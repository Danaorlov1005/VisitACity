using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;

namespace BesTravel.BL
{
  public static class tripBL
  {
    public static async Task<dynamic> getDataForClient(string location, int numOfDays)
    {
      dynamic result  = await externalServices.getGooglePlacesByLocation(location);
      return result;
    }
  }
}
