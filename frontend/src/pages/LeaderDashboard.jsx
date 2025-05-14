// LeaderDashboard.jsx avec WebSockets
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import io from 'socket.io-client';
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Trash, Trash2, RefreshCcw } from 'lucide-react';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';

export default function LeaderDashboard () {
    // 1. Hooks d'état
    const [membres, setMembres] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [lastSync, setLastSync] = useState('');
    const [selectedRows, setSelectedRows] = useState([]);

    // 3. Colonnes
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'nom', headerName: 'Nom', width: 130 },
        { field: 'prenom', headerName: 'Prénom', width: 130 },
        { field: 'codeApogee', headerName: 'Code Apogée', width: 130 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'age', headerName: 'Âge', type: 'number', width: 90 },
        { field: 'filiere', headerName: 'Filière', width: 130 },
        {
            field: 'actions',
            headerName: 'Actions',
            width: 100,
            renderCell: (params) => (
                <button
                    className="cursor-pointer w-8 h-8 inline-flex items-center justify-center enac-bg hover:bg-red-600 text-white rounded-full transition duration-300"
                    onClick={() => handleDelete(params.row.id)}
                >
                    <Trash className="w-4 h-4" />
                </button>
            ),
        },
    ];

    // 2. Fonctions
    const fetchMembres = async () => {
        try {
            setLoading(true);
            const response = await axios.get('http://localhost:5000/api/membres');
            setMembres(response.data);
            setLoading(false);
            setLastSync(new Date().toLocaleTimeString());
        } catch (err) {
            setError('Erreur lors de la récupération des membres.');
            setLoading(false);
            console.error('❌ Erreur:', err);
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('Êtes-vous sûr de vouloir supprimer ce membre ?')) {
            try {
                await axios.delete(`http://localhost:5000/api/membres/${id}`);
                fetchMembres();
            } catch (err) {
                setError('Erreur lors de la suppression du membre.');
                console.error('❌ Erreur:', err);
            }
        }
    };

    

    // 4. useEffect
    useEffect(() => {
        fetchMembres();
        const newSocket = io();
        newSocket.on('membresUpdate', () => {
            console.log('🔄 Actualisation des membres...');
            fetchMembres();
        });
        return () => {
            newSocket.disconnect();
        };
    }, []);

    // Ajout du console.log pour déboguer
    useEffect(() => {
        console.log('selectedRows:', selectedRows);
        console.log('membres:', membres);
    }, [selectedRows, membres]);

    // 5. Render
    if (loading && membres.length === 0) return (
        <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-orange-500"></div>
        </div>
    );

    if (error) return (
        <div className="flex justify-center items-center h-64">
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
                <p>{error}</p>
            </div>
        </div>
    );

    return (
        <div className="min-h-screen flex flex-col bg-nav">
            <div className="flex-1 container mx-auto px-4 py-8">
                <h1 className="text-5xl font-bold text-center text-heading-1 mb-8">
                    Tableau de bord des membres
                </h1>

                <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                    <div className="flex flex-col sm:flex-row gap-4 items-center">
                        <p className="text-heading-2 text-xl flex items-center">
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded">
                                {membres.length}
                            </span>
                            Membres au total
                        </p>

                        {lastSync && (
                            <p className="text-xl text-gray-500">
                                Dernière synchronisation: {lastSync}
                            </p>
                        )}
                    </div>

                    <div className="flex gap-4">
                        <button
                            onClick={fetchMembres}
                            className="cursor-pointer bg-btn hover:bg-[#F7941D] duration-300 text-white py-2 px-4 rounded-md transition ease-in-out flex items-center"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Synchronisation...
                                </>
                            ) : (
                                <>
                                    <span className="mr-2">
                                        <RefreshCcw />
                                    </span> 
                                    Synchroniser
                                </>
                            )}
                        </button>

                        {/* Nouveau bouton Delete All */}
                        
                            {/* <button
                                onClick={handleDeleteALL}
                            className="cursor-pointer bg-btn hover:bg-red-600 duration-300 text-white py-2 px-4 rounded-md transition ease-in-out flex items-center"
                            >
                                <span className="mr-2">
                                    <Trash2 />
                                </span> 
                                Delete All 
                            </button> */}
                    </div>
                </div>

                <Paper 
                    sx={{ 
                        flexGrow: 1,
                        height: 'calc(100vh - 250px)', // Hauteur dynamique
                        width: '100%', 
                        marginTop: 2,
                        display: 'flex',
                        flexDirection: 'column',
                        bgcolor: 'rgb(37,47,62)',     // Couleur de fond du Paper
                    }}
                >
                    <DataGrid
                        rows={membres}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { pageSize: 10, page: 0 }
                            }
                        }}
                        pageSizeOptions={[10, 25, 50, 100]}
                        checkboxSelection
                        disableRowSelectionOnClick
                        onRowSelectionModelChange={(newSelection) => {
                            console.log('Selection changed:', newSelection);
                            setSelectedRows(newSelection);
                        }}
                        selectionModel={selectedRows}
                        sx={{
                            flex: 1,
                            border: 0,
                            backgroundColor: 'rgb(246, 246, 233)',
                            '& .MuiDataGrid-cell': {
                                borderColor: 'rgb(229, 231, 235)'
                            },
                            '& .MuiDataGrid-columnHeaders': {
                                backgroundColor: 'rgb(249, 250, 251)',
                                color: 'rgb(107, 114, 128)',
                                fontSize: '0.75rem',
                                textTransform: 'uppercase',
                                letterSpacing: '0.05em',
                                bgcolor: 'rgb(25, 38, 85)',
                            },
                            '& .MuiDataGrid-row': {
                                backgroundColor: 'rgb(205, 213, 224)'
                            }
                        }}
                    />
                </Paper>
            </div>
        </div>
    );
}