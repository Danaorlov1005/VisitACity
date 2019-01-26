using BesTravel.BL;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using System.Web.Http;

/// <summary>
/// Summary description for TripAPI
/// </summary>
public class TripController : ApiController
{
   [HttpGet]
  public async Task<dynamic> getTrips()
  {
    return await tripBL.getDataForClient("", 1);
  }

  [ActionName("getTripByFilters")]
  public static JObject getTripByFilters(JObject data)
  {
    string tripLocation = data["tripLocation"].ToString();
    JArray filterArray = (JArray)data["filters"];
    int numOfDays = Int32.Parse(data["numberOfDays"].ToString());

    ///go to google places by location
    dynamic result = tripBL.getDataForClient(tripLocation, numOfDays);


    /// return 3 random places for start
    return null;
  }
}
