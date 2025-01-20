import React, { useState } from 'react';
import './App.css';

// Los datos de la línea de tiempo
const timelineData = [
  {
    year: "1983",
    title: "Primer teléfono móvil comercial",
    description: "El Motorola DynaTAC 8000X, considerado el primer teléfono móvil comercial, se lanzó. Este dispositivo marcó el inicio de una nueva era en las comunicaciones personales. Con un precio de aproximadamente 4,000 dólares, era un lujo exclusivo en su momento. Su tamaño era considerablemente grande, lo que hacía que fuera difícil de transportar y manejar. La batería, que solo permitía 30 minutos de conversación, se convirtió rápidamente en un punto débil para los usuarios. A pesar de sus limitaciones, el DynaTAC 8000X estableció las bases para la tecnología móvil de los próximos años.",
    image: "/images/image1.jpg",
    curiosities: [
      "Pesaba alrededor de 1 kg.",
      "Tenía una batería que duraba solo 30 minutos de conversación.",
    ],
  },
  {
    year: "1992",
    title: "El primer smartphone: Simon Personal Communicator",
    description: "IBM lanzó el Simon Personal Communicator, el primer teléfono inteligente de la historia. Este dispositivo no solo realizaba llamadas, sino que también integraba funciones de fax, correo electrónico, calendario y agendas. Su pantalla táctil, un avance innovador para la época, permitía interactuar de una manera nunca vista. Aunque no era tan compacto como los smartphones actuales, su diseño revolucionario pavimentó el camino para los teléfonos inteligentes. Este dispositivo no solo fue un cambio en el diseño, sino que también introdujo nuevas posibilidades en la integración de software y hardware.",
    image: "/images/image2.jpeg",
    curiosities: [
      "Tenía una pantalla táctil.",
      "Fue un gran avance para la tecnología de los dispositivos móviles.",
    ],
  },
  {
    year: "2000",
    title: "Lanzamiento del primer teléfono con cámara",
    description: "El Sharp J-SH04, lanzado en Japón, fue el primer teléfono móvil con cámara digital, una innovación que transformó la forma en que las personas interactuaban con sus teléfonos. Aunque su resolución era muy baja (0.11 megapíxeles), el dispositivo ofreció una función que hoy es indispensable en la mayoría de los teléfonos inteligentes. Esta característica permitió a los usuarios capturar imágenes en cualquier momento y lugar, abriendo un nuevo mundo de posibilidades para la fotografía móvil. Esta innovación no solo cambió el mercado de los teléfonos, sino que también influenció la evolución de las redes sociales y la manera en que compartimos imágenes.",
    image: "/images/image3.webp",
    curiosities: [
      "Tenía una resolución de 0.11 megapíxeles.",
      "La cámara tenía una función de video llamada, aunque la calidad era muy baja.",
    ],
  },
  {
    year: "2007",
    title: "Lanzamiento del iPhone",
    description: "Apple revolucionó el mercado de los dispositivos móviles con el lanzamiento del iPhone. Este dispositivo fue el primero en integrar una pantalla táctil capacitiva, eliminando por completo el teclado físico que hasta ese momento había sido común en los teléfonos móviles. Además, introdujo el concepto de aplicaciones móviles y una interfaz de usuario intuitiva, que cambió para siempre la manera en que interactuamos con los dispositivos. El iPhone no solo cambió la industria de los teléfonos, sino también la industria del software, abriendo paso a una nueva era en la que las aplicaciones móviles se convirtieron en una parte esencial de nuestra vida diaria.",
    image: "/images/image4.jpg",
    curiosities: [
      "El iPhone no tenía un teclado físico.",
      "Introdujo el concepto de aplicaciones móviles para todos.",
    ],
  },
  {
    year: "2010",
    title: "Lanzamiento del iPad",
    description: "Apple presentó el iPad, un dispositivo que popularizó las tabletas en el mercado de consumo. Utilizando el sistema operativo iOS, que ya había sido un éxito con el iPhone, el iPad ofreció una experiencia de usuario fluida y accesible. Este dispositivo cambió la manera en que consumimos contenido multimedia, proporcionando una plataforma cómoda para ver videos, leer libros y navegar por la web. El iPad también permitió a los usuarios experimentar nuevas formas de productividad, con aplicaciones diseñadas específicamente para tabletas. Su éxito demostró que había un mercado para dispositivos que no encajaran en las categorías tradicionales de teléfonos o computadoras portátiles.",
    image: "/images/image5.webp",
    curiosities: [
      "El iPad utilizaba el sistema operativo iOS, el mismo del iPhone.",
      "Fue uno de los primeros dispositivos que facilitó el consumo de contenido multimedia portátil.",
    ],
  },
  {
    year: "2012",
    title: "Lanzamiento del primer teléfono 4G",
    description: "El Samsung Galaxy S2 fue uno de los primeros teléfonos en soportar la tecnología 4G LTE, lo que permitió una velocidad de conexión a Internet mucho más rápida. Esto marcó el comienzo de una nueva era en la que las aplicaciones móviles podían ofrecer contenidos multimedia de alta calidad en tiempo real. La capacidad de transmitir video en alta definición, realizar videollamadas más nítidas y jugar videojuegos en línea sin interrupciones fue una de las grandes ventajas de este avance. La llegada de 4G también permitió la expansión de la transmisión en vivo y otras tecnologías de comunicación en tiempo real, transformando la conectividad global.",
    image: "/images/image6.jpg",
    curiosities: [
      "Este dispositivo fue uno de los primeros en aprovechar la tecnología LTE.",
      "Permitió la transmisión de contenido en alta definición de forma más fluida.",
    ],
  },
  {
    year: "2017",
    title: "Lanzamiento del iPhone X",
    description: "Con el lanzamiento del iPhone X, Apple marcó un nuevo hito en el diseño de teléfonos inteligentes. Este modelo eliminó el botón de inicio, introdujo la pantalla OLED sin bordes y habilitó el reconocimiento facial para desbloquear el dispositivo. Además, el iPhone X mejoró significativamente las capacidades de la cámara, ofreciendo un modo retrato más avanzado. Esta serie de innovaciones redefinió las expectativas de los consumidores sobre lo que un teléfono inteligente podría hacer. Su lanzamiento también consolidó las pantallas OLED como una característica clave en los teléfonos de gama alta.",
    image: "/images/image7.jpg",
    curiosities: [
      "Introdujo el reconocimiento facial como principal método de desbloqueo.",
      "Fue el primer iPhone con una pantalla OLED.",
    ],
  },
  {
    year: "2019",
    title: "Lanzamiento del primer teléfono plegable",
    description: "Samsung presentó el Galaxy Fold, el primer teléfono móvil plegable en el mercado. Este dispositivo combinaba las características de un teléfono y una tableta en un solo dispositivo, lo que permitía a los usuarios tener una pantalla más grande cuando lo desdoblaban. El Galaxy Fold representó el futuro de los teléfonos móviles, ofreciendo nuevas posibilidades de diseño y funcionalidad. Aunque la tecnología plegable aún estaba en sus primeras etapas, este lanzamiento marcó el inicio de una nueva categoría en la industria móvil, con otros fabricantes siguiendo el ejemplo de Samsung.",
    image: "/images/image8.jpg",
    curiosities: [
      "La pantalla del Galaxy Fold se puede doblar para facilitar su transporte.",
      "Este dispositivo marcó el comienzo de una nueva era de dispositivos móviles plegables.",
    ],
    link: "https://es.wikipedia.org/wiki/Motorola_DynaTAC",
    },
  {
    year: "2021",
    title: "5G llega al mercado",
    description: "La llegada de la red 5G cambió drásticamente las expectativas sobre la conectividad móvil. Con velocidades hasta 100 veces más rápidas que 4G, 5G no solo mejoró la experiencia de navegación, sino que también permitió avances en tecnologías emergentes como la realidad aumentada (AR), la inteligencia artificial (IA) y el internet de las cosas (IoT). Las redes 5G también abrieron nuevas posibilidades para la transmisión de video en 8K, juegos en la nube sin latencia y aplicaciones de salud en tiempo real. Este avance promete transformar las ciudades, la atención médica y la forma en que nos conectamos.",
    image: "/images/image9.jpeg",
    curiosities: [
      "5G promete velocidades hasta 100 veces más rápidas que 4G.",
      "Esta red abre la puerta a nuevas tecnologías como la realidad aumentada y la inteligencia artificial en tiempo real.",
    ],
  },
  {
    year: "2023",
    title: "Lanzamiento del iPhone 14 y Android 13",
    description: "El iPhone 14 y Android 13 fueron dos de los lanzamientos más esperados en 2023. El iPhone 14 continuó con el legado de innovación de Apple, mejorando las cámaras y la grabación de video, especialmente en condiciones de baja luz. Por otro lado, Android 13 introdujo una mayor personalización de la interfaz de usuario y nuevas herramientas de privacidad y seguridad. Estos avances mostraron cómo las dos plataformas móviles más importantes seguían evolucionando para ofrecer experiencias de usuario más ricas, personalizadas y seguras.",
    image: "/images/image10.jpg",
    curiosities: [
      "El iPhone 14 introdujo nuevas funciones de cámara, incluyendo mejoras en la grabación de video en baja luz.",
      "Android 13 trajo mejoras en la personalización de la interfaz y nuevas herramientas de seguridad.",
    ],
  },
];

function App() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleClickEvent = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <div className="App">
      <h1 className="title">Evolución de los Dispositivos Móviles</h1>
      <div className="timeline">
        {timelineData.map((event, index) => (
          <div
            key={index}
            className="timeline-item"
            onClick={() => handleClickEvent(event)}
          >
            <div className="year">{event.year}</div>
            <img src={event.image} alt={event.title} className="device-image" />
          </div>
        ))}
      </div>

      {/* Modal para mostrar los detalles */}
      {selectedEvent && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-button" onClick={closeModal}>
              &times;
            </button>
            <h2>{selectedEvent.title}</h2>
            <p>{selectedEvent.description}</p>
            <div className="curiosities">
              <h3>Datos Curiosos:</h3>
              <ul>
                {selectedEvent.curiosities.map((curiosity, index) => (
                  <li key={index}>{curiosity}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
