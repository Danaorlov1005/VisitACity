using BesTravel.BL;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

/// <summary>
/// Summary description for UserAPI
/// </summary>
public class UserController : ApiController
{
  public static JObject getUserData(JObject user) 
  {
    int userId = Int32.Parse(user["id"].ToString());
    return userBL.getUserData(userId);
  }

  public saveData(JObject trip)
  {

  }
}
