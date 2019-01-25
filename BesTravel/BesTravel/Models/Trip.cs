using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// A collection of places and data of the trip
/// </summary>
public class Trip
{
  public int tripId { get; set; }
  public string tripName { get; set; }
  public int tripDuration { get; set; }
  public string tripCity { get; set; }
  public Location[] locations { get; set; }
  public Trip()
  {
    //
    // TODO: Add constructor logic here
    //
  }
}
