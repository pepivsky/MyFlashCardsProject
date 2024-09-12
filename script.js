// Lista de países y capitales
// Lista de estados de México y sus capitales
const states = [
    { state: "Aguascalientes", capital: "Aguascalientes" },
    { state: "Baja California", capital: "Mexicali" },
    { state: "Baja California Sur", capital: "La Paz" },
    { state: "Campeche", capital: "San Francisco de Campeche" },
    { state: "Chiapas", capital: "Tuxtla Gutiérrez" },
    { state: "Chihuahua", capital: "Chihuahua" },
    { state: "Ciudad de México", capital: "Ciudad de México" },
    { state: "Coahuila", capital: "Saltillo" },
    { state: "Colima", capital: "Colima" },
    { state: "Durango", capital: "Victoria de Durango" },
    { state: "Guanajuato", capital: "Guanajuato" },
    { state: "Guerrero", capital: "Chilpancingo" },
    { state: "Hidalgo", capital: "Pachuca" },
    { state: "Jalisco", capital: "Guadalajara" },
    { state: "México", capital: "Toluca de Lerdo" },
    { state: "Michoacán", capital: "Morelia" },
    { state: "Morelos", capital: "Cuernavaca" },
    { state: "Nayarit", capital: "Tepic" },
    { state: "Nuevo León", capital: "Monterrey" },
    { state: "Oaxaca", capital: "Oaxaca de Juárez" },
    { state: "Puebla", capital: "Puebla de Zaragoza" },
    { state: "Querétaro", capital: "Santiago de Querétaro" },
    { state: "Quintana Roo", capital: "Chetumal" },
    { state: "San Luis Potosí", capital: "San Luis Potosí" },
    { state: "Sinaloa", capital: "Culiacán" },
    { state: "Sonora", capital: "Hermosillo" },
    { state: "Tabasco", capital: "Villahermosa" },
    { state: "Tamaulipas", capital: "Ciudad Victoria" },
    { state: "Tlaxcala", capital: "Tlaxcala de Xicohténcatl" },
    { state: "Veracruz", capital: "Xalapa" },
    { state: "Yucatán", capital: "Mérida" },
    { state: "Zacatecas", capital: "Zacatecas" }
];


// Referencia al contenedor de la cuadrícula
const gridContainer = document.getElementById('capital-grid');

// Función para generar las tarjetas
states.forEach(countryData => {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    const card = `
        <div class="card">
            <div class="front"><p class="front-text">${countryData.state}</p></div>
            <div class="back"><p class="back-text">${countryData.capital}</p></div>
        </div>
    `;

    gridItem.innerHTML = card;
    gridContainer.appendChild(gridItem);
});
