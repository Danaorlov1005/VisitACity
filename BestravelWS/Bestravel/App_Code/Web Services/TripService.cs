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

  public Trip[] GetTripsByParams(int tripDuration)
  {
    throw new NotImplementedException();
  }

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
  Trip[] GetAllTrips();
  Trip[] GetTripsByParams(string tripName, int tripDuration);
  Trip[] GetTripsByParams(string tripName);
  Trip[] GetTripsByParams(int tripDuration);
  bool DeleteTripsByUsername(string username);
  bool DeleteTrip(int tripId);
  bool AddTrip(string username);
}
