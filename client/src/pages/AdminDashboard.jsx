import React, { useState, useEffect } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingId, setEditingId] = useState(null);
    const [editData, setEditData] = useState({ status: '', adminDescription: '' });

    useEffect(() => {
        fetchBookings();
    }, []);

    const fetchBookings = async () => {
        try {
            const response = await fetch('/api/bookings');
            const data = await response.json();
            setBookings(data);
            setLoading(false);
        } catch (err) {
            console.error('Error fetching bookings:', err);
            setLoading(false);
        }
    };

    const handleEdit = (booking) => {
        setEditingId(booking._id);
        setEditData({ status: booking.status, adminDescription: booking.adminDescription || '' });
    };

    const handleUpdate = async (id) => {
        try {
            const response = await fetch(`/api/bookings/${id}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(editData)
            });
            if (response.ok) {
                setEditingId(null);
                fetchBookings();
            }
        } catch (err) {
            console.error('Error updating booking:', err);
        }
    };

    if (loading) return <div className="container section">Loading bookings...</div>;

    return (
        <div className="admin-dashboard">
            <div className="page-header admin-header">
                <div className="container">
                    <h1>Admin Dashboard</h1>
                    <p>Manage cleaning service bookings and statuses.</p>
                </div>
            </div>

            <section className="admin-content section">
                <div className="container">
                    <div className="booking-table-container">
                        <table className="booking-table">
                            <thead>
                                <tr>
                                    <th>Date</th>
                                    <th>Client</th>
                                    <th>Service(s)</th>
                                    <th>Details</th>
                                    <th>Status</th>
                                    <th>Admin Notes</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((booking) => (
                                    <tr key={booking._id} className={booking.status.replace(' ', '-')}>
                                        <td>{new Date(booking.createdAt).toLocaleDateString()}</td>
                                        <td>
                                            <strong>{booking.name}</strong><br />
                                            <small>{booking.email}</small><br />
                                            <small>{booking.phone}</small>
                                        </td>
                                        <td>
                                            {booking.serviceTypes.join(', ')}
                                        </td>
                                        <td>
                                            <small>Sq Ft: {booking.squareFootage}</small><br />
                                            <small>Source: {booking.leadSource}</small>
                                        </td>
                                        <td>
                                            {editingId === booking._id ? (
                                                <select
                                                    value={editData.status}
                                                    onChange={(e) => setEditData({ ...editData, status: e.target.value })}
                                                >
                                                    <option value="to contact">to contact</option>
                                                    <option value="contacted">contacted</option>
                                                    <option value="completed">completed</option>
                                                </select>
                                            ) : (
                                                <span className={`status-badge ${booking.status.replace(' ', '-')}`}>
                                                    {booking.status}
                                                </span>
                                            )}
                                        </td>
                                        <td className="admin-notes-cell">
                                            {editingId === booking._id ? (
                                                <textarea
                                                    value={editData.adminDescription}
                                                    onChange={(e) => setEditData({ ...editData, adminDescription: e.target.value })}
                                                    rows="3"
                                                ></textarea>
                                            ) : (
                                                <p className="admin-desc-text">{booking.adminDescription || '--'}</p>
                                            )}
                                        </td>
                                        <td>
                                            {editingId === booking._id ? (
                                                <div className="action-btns">
                                                    <button onClick={() => handleUpdate(booking._id)} className="btn btn-save">Save</button>
                                                    <button onClick={() => setEditingId(null)} className="btn btn-cancel">Cancel</button>
                                                </div>
                                            ) : (
                                                <button onClick={() => handleEdit(booking)} className="btn btn-edit">Edit</button>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AdminDashboard;
