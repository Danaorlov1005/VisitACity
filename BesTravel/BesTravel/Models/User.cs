using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// a person using the site
/// </summary>
public class User
{
  public int userId { get; set; }
  private string username { get; set; }
  private string password { get; set; }
  public int[] trips { get; set; }

  public User(string username, string password)
  {
    this.username = username;
    this.password = password;
    this.trips = new int[0];
  }

  public void ChangePassword(string password)
  {
    this.password = password;
  }
}
