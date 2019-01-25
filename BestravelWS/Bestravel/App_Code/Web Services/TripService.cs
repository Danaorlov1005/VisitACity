using System;
using System.Collections.Generic;
using System.Linq;
using System.ServiceModel;
using System.ServiceModel.Web;
using System.Web;

/// <summary>
/// Summary description for TripService
/// </summary>
/// 
public class TripService : ITripService
{
  public IEnumerable<dynamic> get()
  {
    return DBAccses.getTrips();
  }

  public bool AddTrip(string username)
  {
    throw new NotImplementedException();
  }

  public bool DeleteTrip(int tripId)
  {
    throw new NotImplementedException();
  }

  public bool DeleteTripsByUsername(string username)
  {
    throw new NotImplementedException();
  }

  public Trip[] GetAllTrips()
  {
    throw new NotImplementedException();
  }

  public Trip[] GetTrips(string username)
  {
    throw new NotImplementedException();
  }

  public Trip[] GetTripsByParams(string tripName, int tripDuration)
  {
    throw new NotImplementedException();
  }

  public Trip[] GetTripsByParams(string tripName)
  {
    throw new NotImplementedException();
  }

  //public Trip[] GetTripsByParams(int tripDuration)
  //{
  //  throw new NotImplementedException();
  //}

  public Trip[] GetTripsByUsername(string username)
  {
    throw new NotImplementedException();
  }
}


[ServiceContract]
public interface ITripService
{
  [OperationContract]
  [WebGet]
  Trip[] GetTripsByUsername(string username);
  [WebGet]
  Trip[] GetAllTrips();
  [WebGet]
  Trip[] GetTripsByParams(string tripName, int tripDuration);
  [WebGet]
  Trip[] GetTripsByParams(string tripName);
  [WebGet]
  Trip[] GetTripsByParams(int tripDuration);
  [WebInvoke]
  bool DeleteTripsByUsername(string username);
  [WebInvoke]
  bool DeleteTrip(int tripId);
  [WebInvoke]
  bool AddTrip(string username);
}
