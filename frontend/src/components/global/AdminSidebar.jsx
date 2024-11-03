import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = ({ children }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#f0f0f0', padding: '1rem' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
          </svg>
        </button>
        <ul style={{
          listStyleType: 'none',
          margin: '0',
          padding: '0.5rem',  // Garde seulement une clé 'padding'
          display: 'none',
          position: 'absolute',
          backgroundColor: '#e0e0e0',
          marginTop: '1rem',
          borderRadius: '5px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)'
        }}>
          <li><Link to={'/admin-dashboard'}>Dashboard</Link></li>
          <li><Link to={'/admin-users'}>Utilisateurs</Link></li>
          <li><Link to={'/admin-tickets'}>Tickets</Link></li>
          <li><Link to={'/admin-filliales'}>Filiales</Link></li>
          <li><Link to={'/admin-reports'}>Rapports</Link></li>
          <li><Link to={'/admin-articles'}>Articles</Link></li>
          <li><Link to={'/admin-parameters'}>Paramètres</Link></li>
        </ul>
      </div>
      <div style={{ fontSize: '1.5rem' }}>
        RH Tickets-Support-Rapports
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </button>
        <button style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="20"
            width="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
