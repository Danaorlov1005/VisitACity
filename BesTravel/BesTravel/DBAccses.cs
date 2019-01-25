using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

/// <summary>
/// Summary description for DBAccses
/// </summary>
public static class DBAccses
{
  const string connectionString = "Host=manny.db.elephantsql.com;Port=5432;Username=kwwwxjgg;Password=Bmp6XEosDL9hdv0MoEAfWp_DHFAoz35k;Database=kwwwxjgg";

  public static List<dynamic> getTrips()
  {
    List<dynamic> trips = new List<dynamic>();
    using (var conn = new NpgsqlConnection(connectionString))
    {      conn.Open();
      // Retrieve all rows
      using (var cmd = new NpgsqlCommand("SELECT * FROM \"public\".\"Trip\"", conn))
      using (var reader = cmd.ExecuteReader())
        while (reader.Read())
          trips.Add(reader.GetString(0));
    }

    return trips;
  }  
}
