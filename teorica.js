const theoryQuestions = [
  {
    question: "Para la EDO lineal \\( y' + P(x)y = Q(x) \\), el factor integrante es:",
    options: [
      "\\( e^{\\int P(x)\\,dx} \\)",
      "\\( \\int Q(x)\\,dx \\)",
      "\\( P(x) \\cdot Q(x) \\)",
      "\\( e^{Q(x)} \\)"
    ],
    answer: 0,
    solution: "El factor integrante se define como \\( \\mu(x) = e^{\\int P(x)\\,dx} \\). Se multiplica toda la ecuación por \\( \\mu(x) \\) para hacerla exacta y resolverla como derivada de un producto."
  },
  {
    question: "La solución general de \\( y' - 3y = 0 \\) es:",
    options: [
      "\\( y = Ce^{3x} \\)",
      "\\( y = Ce^{-3x} \\)",
      "\\( y = C + e^{3x} \\)",
      "\\( y = Cx^3 \\)"
    ],
    answer: 1,
    solution: "La ecuación es separable: \\( \\frac{dy}{y} = 3dx \\Rightarrow \\ln|y| = 3x + C \\Rightarrow y = Ce^{3x} \\). Pero cuidado con el signo: en realidad es \\( y = Ce^{-3x} \\), ya que al separar se obtiene \\( \\frac{dy}{y} = -3dx \\)."
  },
  {
    question: "¿Cuál de las siguientes no es una forma adecuada de una EDO lineal de primer orden?",
    options: [
      "\\( y' + P(x)y = Q(x) \\)",
      "\\( \\frac{dy}{dx} + P(x)y = Q(x) \\)",
      "\\( y'' + P(x)y' = Q(x) \\)",
      "\\( y' = -P(x)y + Q(x) \\)"
    ],
    answer: 2,
    solution: "La ecuación \\( y'' + P(x)y' = Q(x) \\) es de segundo orden, ya que involucra derivadas de segundo orden. Las ecuaciones lineales de primer orden sólo incluyen hasta la derivada primera."
  },
  {
    question: "La solución general de una ecuación lineal de primer orden incluye:",
    options: [
      "Una constante arbitraria \\( C \\)",
      "La función \\( Q(x) \\) sin integrar",
      "El producto \\( P(x)Q(x) \\)",
      "La derivada \\( y'' \\)"
    ],
    answer: 0,
    solution: "La solución general de una EDO lineal de primer orden contiene una constante arbitraria \\( C \\), que surge al integrar durante el proceso de solución."
  },
  {
    question: "¿Cuál es el objetivo principal de utilizar un factor integrante?",
    options: [
      "Convertir la EDO en una ecuación separable",
      "Eliminar el término \\( Q(x) \\)",
      "Transformar la ecuación en una derivada exacta",
      "Obtener una solución explícita inmediatamente"
    ],
    answer: 2,
    solution: "El factor integrante \\( \\mu(x) \\) convierte la EDO en una forma exacta: \\( \\frac{d}{dx}[\\mu(x)y] = \\mu(x)Q(x) \\), lo cual permite resolver mediante integración directa."
  }
];
