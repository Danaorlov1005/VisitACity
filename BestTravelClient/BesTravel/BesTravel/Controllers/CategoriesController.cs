using BesTravel.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace BesTravel.Controllers
{
  public class CategoriesController : ApiController
  {
    [ActionName("getCategories")]
    public Categories getCategories()
    {
      // returns default starting values for all categories
      return new Categories();
    }

  }
}
