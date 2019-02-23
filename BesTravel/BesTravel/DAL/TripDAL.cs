using Npgsql;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BesTravel.DAL
{
  public static class TripDAL
  {
    public static List<dynamic> getTrips()
    {
      List<dynamic> trips = new List<dynamic>();
      using (var conn = new NpgsqlConnection(DBAccsesConsts.connectionString))
      {
        conn.Open();
        // Retrieve all rows
        using (var cmd = new NpgsqlCommand("SELECT * FROM \"public\".\"Trip\"", conn))
        using (var reader = cmd.ExecuteReader())
          while (reader.Read())
            trips.Add(reader.GetString(0));
      }

      return trips;
    }
  }
}
