using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BesTravel.Models
{
  public class Categories
  {
    // defaults values 2 (out of 5)
    public Categories()
    {
      this.shopping = 2;
      this.culture = 2;
      this.sport = 2;
      this.romantic = 2;
      this.family = 2;
    }

    public int shopping { get; set; }
    public int culture { get; set; }
    public int sport { get; set; }
    public int romantic { get; set; }
    public int family { get; set; }
  }
}
