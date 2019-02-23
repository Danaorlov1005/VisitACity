using BesTravel.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BesTravel.Controllers
{
  public class CategoriesController
  {
    public Categories GetCategories()
    {
      return new Categories();
    }

  }
}
