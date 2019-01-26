using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BesTravel.Models
{
  public class Geometry
  {
    public Geometry(double x, double y)
    {
      this.location = new Location(x, y);
    }
    public Location location { get; set; }
  }

}
