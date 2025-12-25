// Configuración: Fecha objetivo (30 de Diciembre del año actual)
const currentYear = new Date().getFullYear();
const targetDate = new Date(`December 30, ${currentYear} 20:00:00`).getTime();

// Función que actualiza el contador
const updateCountdown = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    // Si la fecha ya pasó
    if (distance < 0) {
        document.getElementById("countdown").innerHTML = "¡EMPEZARON!";
        return;
    }

    // Cálculos de tiempo
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Formato de salida: 00d 00h 00m 00s
    document.getElementById("countdown").innerHTML = 
        `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

// Actualizar cada 1 segundo (1000 milisegundos)
setInterval(updateCountdown, 1000);

// Ejecutar inmediatamente para no esperar 1 segundo al cargar
updateCountdown();