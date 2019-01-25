using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

/// <summary>
/// Summary description for TripAPI
/// </summary>
public class TripController : ApiController
{

  public IEnumerable<dynamic> get()
  {
    return DBAccses.getTrips();
  }

  public static JObject getTripByFilters(JObject data)
  {
    string tripLocation = data["tripLocation"].ToString();
    JArray filterArray = (JArray)data["filters"];
    int numOfDays = Int32.Parse(data["numberOfDays"].ToString());


    return null;
  }
}
