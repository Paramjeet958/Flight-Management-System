// <!-- <div class="card shadow-sm">
// <div class="card-header bg-info text-white text-center">
//     <h3>My Bookings</h3>
// </div>
// <div class="card-body">
//     <% if (bookings.length > 0) { %>
//         <div class="list-group">
//             <% bookings.forEach(function(booking) { %>
//                 <a href="/booking/<%= booking.id %>" class="list-group-item list-group-item-action">
//                     <div class="d-flex w-100 justify-content-between">
//                         <h5 class="mb-1"><%= booking.title %></h5>
//                         <small><%= booking.date %></small>
//                     </div>
//                     <p class="mb-1"><%= booking.description %></p>
//                     <small><%= booking.location %></small>
//                 </a>
//             <% }); %>
//         </div>
//     <% } else { %>
//         <p class="text-center">No bookings available.</p>
//     <% } %>
// </div>
// </div> -->




//-------------------------- to remove double in allflights page---------
// <!-- <style>
      
       
// </style>
// </head> -->
// <!-- <body>
// <%- include('layouts/navbar'); -%>
// <div class="container mt-5">
//     <div class="card-header bg-success text-white text-center">
//         <h2>All Flights</h2>
//     </div><br>
//     <div class="table-container">
//         <table class="table table-bordered">
//             <thead>
//                 <tr>
//                     <th>Flight Number</th>
//                     <th>Flight Name</th>
//                     <th>Origin</th>
//                     <th>Destination</th>
//                     <th>Duration (minutes)</th>
//                     <th>Departure Date</th>
//                     <th>Arrival Date</th>
//                     <th>Status</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <% flights.forEach(flight => { %>
//                     <tr >
//                         <td><%= flight.flightNumber %></td>
//                         <td><%= flight.flightName %></td>
//                         <td><%= flight.origin %></td>
//                         <td><%= flight.destination %></td>
//                         <td><%= flight.duration %></td>
//                         <td><%= new Date(flight.departureDate).toLocaleString() %></td>
//                         <td><%= new Date(flight.arrivalDate).toLocaleString() %></td>
//                         <td><%= flight.status %></td>
//                     </tr>
//                 <% }) %>
//             </tbody>
//         </table>

//     </div>
// </div> -->

// Example flight details
    // const flightDetails = {
    //     flightNumber: flight.flightNumber,
    //     flightName: 'Flight ABC',
    //     departure: '2024-08-01T10:00:00Z',
    //     arrival: '2024-08-01T14:00:00Z',
    //     price: 299.99
    // };
    // <td>${flightDetails.flightName}</td>
    //         <td>${new Date(flightDetails.departure).toLocaleString()}</td>
    //         <td>${new Date(flightDetails.arrival).toLocaleString()}</td>
    //         <td>$${flightDetails.price.toFixed(2)}</td>
    //-----------checkout------
//     <table class="table table-bordered">
//     <thead>
//         <tr>
//             <th>Flight Number</th>
//             <th>Flight Name</th>
//             <th>Departure</th>
//             <th>Arrival</th>
//             <th>Price</th>
//             <th>Seat Number</th>
//         </tr>
//     </thead>
//     <tbody id="flight-summary-items">
//         <!-- Flight summary details will be dynamically added here -->
//         <tr>
//             <td><%= flight.flightNumber %></td>
//             <td><%= flight.flightName %></td>
//             <td><%= flight.departureDate %></td>
//             <td><%= flight.arrivalDate %></td>
//             <td><%= flight.price %></td>
//         </tr>
//     </tbody>
// </table>
// </div>