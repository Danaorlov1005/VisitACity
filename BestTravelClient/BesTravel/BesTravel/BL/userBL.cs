using BesTravel.DAL;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BesTravel.BL
{
  public class userBL
  {
    public static JObject getUserData(int userId)
    {
      dynamic result = userDAL.getUserData(userId);

      return new JObject();
    }
  }
}
