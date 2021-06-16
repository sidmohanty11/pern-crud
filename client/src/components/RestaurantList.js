import React from 'react';

function RestaurantList() {
    return (
        <div className="list-group">
            <table className="table table-hover table-dark">
                <thead>
                    <tr>
                        <th className="bg-secondary display-6">Restaurant</th>
                        <th className="bg-secondary display-6">Location</th>
                        <th className="bg-secondary display-6">Price Range</th>
                        <th className="bg-secondary display-6">Ratings</th>
                        <th className="bg-secondary display-6">Edit</th>
                        <th className="bg-secondary display-6">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>Otto</td>
                        <td>@Edit</td>
                        <td>@Delete</td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RestaurantList;
