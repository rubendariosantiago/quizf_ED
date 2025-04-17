const practicalTemplates = [
  {
    type: "lineal_constante",
    template: "Resuelve: \\( y' + {{a}}y = {{b}} \\) con \\( y(0) = {{c}} \\)",
    solution_mathjs: "{{b/a}} + ({{c}} - {{b/a}}) * exp(-{{a}}*x)",
    solution_latex: "{{b/a}} + \\left( {{c - b/a}} \\right) e^{-{{a}}x}",
    steps: [
      "Identificamos que es una EDO lineal de primer orden con término constante.",
      "El factor integrante es \\( \\mu(x) = e^{\\int {{a}} \\, dx} = e^{a x} \\).",
      "Multiplicamos ambos lados por \\( \\mu(x) \\): \\( e^{a x} y' + a e^{a x} y = b e^{a x} \\).",
      "Reescribimos la ecuación como \\( \\frac{d}{dx}(e^{a x} y) = b e^{a x} \\).",
      "Integramos ambos lados: \\( e^{a x} y = \\int b e^{a x} dx = \\frac{b}{a} e^{a x} + C \\).",
      "Despejamos la solución general: \\( y = \\frac{b}{a} + C e^{-a x} \\).",
      "Aplicamos la condición inicial \\( y(0) = c \\), lo que nos da \\( C = c - \\frac{b}{a} \\).",
      "Finalmente, la solución es: \\( y(x) = \\frac{b}{a} + (c - \\frac{b}{a}) e^{-a x} \\)."
    ],
    params: {
      a: { min: 2, max: 5 },
      b: { min: 2, max: 5 },
      c: { min: -3, max: 3 }
    },
    conditions: ["a != 0"]
  },

  {
    type: "trigonometrica_coseno",
    template: "Resuelve: \\( y' + {{a}}y = {{b}} \\cos({{c}}x) \\) con \\( y(0) = {{d}} \\)",
    solution_mathjs: "({{a*b}}*cos({{c}}*x) + {{b*c}}*sin({{c}}*x))/({{a^2 + c^2}}) + ({{d}} - {{a*b/(a^2 + c^2)}}) * exp(-{{a}}*x)",
    solution_latex: "\\frac{ {{a*b}} \\cos({{c}}x) + {{b*c}} \\sin({{c}}x) }{ {{a^2 + c^2}} } + \\left( {{d}} - \\frac{ {{a*b}} }{ {{a^2 + c^2}} } \\right) e^{-{{a}}x}",
    steps: [
      "Es una EDO lineal de primer orden con un término no homogéneo trigonométrico.",
      "El factor integrante es \\( \\mu(x) = e^{\\int {{a}} dx} = e^{a x} \\).",
      "Multiplicamos por el factor integrante: \\( e^{a x} y' + a e^{a x} y = b \\cos(c x) e^{a x} \\).",
      "Reescribimos la ecuación como derivada del producto: \\( \\frac{d}{dx}(e^{a x} y) = b \\cos(c x) e^{a x} \\).",
      "Integramos ambos lados, usando el método de integración por partes o una fórmula conocida.",
      "La solución particular es: \\( y_p = \\frac{a b \\cos(c x) + b c \\sin(c x)}{a^2 + c^2} \\).",
      "La solución general es: \\( y = y_p + C e^{-a x} \\).",
      "Aplicamos la condición inicial \\( y(0) = d \\) para encontrar el valor de \\( C \\)."
    ],
    params: {
      a: { min: 2, max: 5 },
      b: { min: 2, max: 5 },
      c: { min: 2, max: 5 },
      d: { min: -3, max: 3 }
    }
  },

  {
    type: "exponencial_positivo",
    template: "Resuelve: \\( y' + {{a}}y = {{b}}e^{ {{c}}x } \\) con \\( y(0) = {{d}} \\)",
    solution_mathjs: "({{b/(c+a)}}*exp({{c}}*x) + {{d-b/(c+a) }}*exp({-{a}}*x))",
    solution_latex: "\\frac{ {{b}} }{ {{c}}+{{a}} } e^{ {{c}}x } + \\left( {{d}} - \\frac{ {{b}} }{ {{c}}+{{a}} } \\right) e^{-{{a}}x}",
    steps: [
      "Esta es una EDO lineal de primer orden con término exponencial.",
      "El factor integrante es \\( \\mu(x) = e^{a x} \\).",
      "Multiplicamos la ecuación por el factor integrante: \\( e^{{{a}} x} y' + a e^{a x} y = b e^{(a + c)x} \\).",
      "Reescribimos la ecuación como derivada del producto: \\( \\frac{d}{dx}(e^{a x} y) = b e^{(a + c)x} \\).",
      "Integramos ambos lados: \\( e^{a x} y = \\frac{b}{a + c} e^{(a + c)x} + C \\).",
      "Despejamos la solución: \\( y = \\frac{b}{a + c} e^{c x} + C e^{-a x} \\).",
      "Aplicamos la condición inicial \\( y(0) = d \\), despejamos \\( C \\).",
      "Finalmente, la solución es: \\( y(x) = \\frac{b}{a + c} e^{c x} + (d - \\frac{b}{a + c}) e^{-a x} \\)."
    ],
    conditions: ["c != -a"],
    params: {
      a: {min: 2, max: 4},
      b: {min: 2, max: 4},
      c: {min: 2, max: 4},
      d: {min: -3, max: 3}
    }
  }
];
