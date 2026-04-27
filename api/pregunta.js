export default function handler(req, res) {
  const preguntas = [
    {
      pregunta: "¿Función principal de los glóbulos rojos?",
      opciones: ["Defensa", "Transporte de oxígeno", "Coagulación", "Digestión"],
      correcta: 1
    },
    {
      pregunta: "¿Qué es el lavado de manos en salud?",
      opciones: ["Opcional", "Medida de prevención", "Solo estética", "Administrativo"],
      correcta: 1
    },
    {
      pregunta: "¿Qué sistema controla la respiración?",
      opciones: ["Digestivo", "Respiratorio", "Óseo", "Endocrino"],
      correcta: 1
    },
    {
      pregunta: "¿Qué significa RCP?",
      opciones: [
        "Reacción clínica preventiva",
        "Reanimación cardiopulmonar",
        "Registro de cuidado primario",
        "Respuesta controlada de pacientes"
      ],
      correcta: 1
    },
    {
      pregunta: "¿Dónde ocurre el intercambio gaseoso?",
      opciones: ["Tráquea", "Alvéolos", "Bronquios", "Corazón"],
      correcta: 1
    }
  ];

  const random = preguntas[Math.floor(Math.random() * preguntas.length)];

  res.status(200).json(random);
}
