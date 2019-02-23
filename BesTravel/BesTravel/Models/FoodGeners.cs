using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BesTravel.Models
{
  public class FoodGeners
  {
    // how much weight to give to cuisine when calculating trip
    public int priority { get; set; }
    public bool italian { get; set; }
    public bool asian { get; set; }
    public bool meat { get; set; }
    public bool bakeries { get; set; }
    public bool localCuisine { get; set; }
    public bool coffeeHouses { get; set; }
    public bool veganFriendly { get; set; }
  }
}
