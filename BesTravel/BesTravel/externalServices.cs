using BesTravel.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;

namespace BesTravel
{
  public static class externalServices
  {
    public static async Task<dynamic> getGooglePlacesByLocation(string location)
    {
      dynamic result;

      Geometry toSearch = new Geometry(41.9038463, 12.4904047);

      using (var client = new HttpClient())
      {
        try
        {
          var response = await client.GetStringAsync(string.Format(Consts.googlePlacesAPIUrl, toSearch.location.locationX, toSearch.location.locationY));
          result = JsonConvert.DeserializeObject<PlacesApiQueryResponse>(response);
        }
        catch (Exception ex)
        {
          throw ex;
        }
          
      }
      return result;
    }
  }

}
