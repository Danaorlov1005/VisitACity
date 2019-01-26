using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for Places
/// </summary>
public class Location
{
  public double locationX { get; set; }
  public double locationY { get; set; }
  public Location(double x, double y)
  {
    this.locationX = x;
    this.locationY = y;
  }
}
