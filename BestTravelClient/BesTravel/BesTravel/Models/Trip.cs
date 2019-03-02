using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BesTravel.Models
{
  /// <summary>
  /// A collection of places and data of the trip
  /// </summary>
  public class Trip
  {
    public int tripId { get; set; }
    public string tripName { get; set; }
    public int tripDuration { get; set; }
    public string tripCity { get; set; }
    // save a list of all the places in the same format of google api
    public List<Result> locations { get; set; }
    public Trip()
    {
      //
      // TODO: Add constructor logic here
      //
    }
  }
}
