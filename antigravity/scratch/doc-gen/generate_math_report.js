const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, PageBreak, LevelFormat, VerticalAlign
} = require('docx');
const fs = require('fs');

// Colors
const PAKBLUE = "1F4E79";
const MIDBLUE = "2E75B6";
const LIGHTBLUE = "C6E0FF";
const ROWALT = "F5F9FF";

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };

// Helpers
function h(level, text, opts = {}) {
  const hMap = { 1: HeadingLevel.HEADING_1, 2: HeadingLevel.HEADING_2, 3: HeadingLevel.HEADING_3 };
  return new Paragraph({
    heading: hMap[level],
    children: [new TextRun({ text, bold: true, color: level === 1 ? PAKBLUE : MIDBLUE, size: level === 1 ? 28 : 24 })],
    spacing: { before: 240, after: 120 },
    ...opts
  });
}

function p(text, opts = {}) {
  return new Paragraph({
    children: [new TextRun({ text, size: 22 })],
    spacing: { before: 120, after: 120 },
    alignment: AlignmentType.JUSTIFY,
    ...opts
  });
}

function cell(content, opts = {}) {
  const { bold = false, fill = undefined, align = AlignmentType.LEFT, color = "000000" } = opts;
  
  let children = [];
  if (typeof content === 'string') {
    children = [new Paragraph({
      alignment: align,
      children: [new TextRun({ text: content, bold, color, size: 20 })]
    })];
  } else if (Array.isArray(content)) {
    children = content;
  } else {
    children = [content];
  }

  return new TableCell({
    borders,
    shading: fill ? { fill, type: ShadingType.CLEAR } : undefined,
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
    children: children,
    verticalAlign: VerticalAlign.CENTER
  });
}

function math(parts) {
  return new Paragraph({
    alignment: AlignmentType.CENTER,
    spacing: { before: 200, after: 200 },
    children: parts.map(part => {
      if (typeof part === 'string') return new TextRun({ text: part, italic: true });
      return new TextRun(part);
    })
  });
}

function createDoc() {
  const doc = new Document({
    sections: [{
      properties: {
        page: {
          margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 },
        },
      },
      children: [
        // Title Page
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "National University of Sciences & Technology", bold: true, size: 32, color: PAKBLUE }),
            new TextRun({ break: 1 }),
            new TextRun({ text: "School of Electrical Engineering & Computer Science", bold: true, size: 24, color: MIDBLUE }),
            new TextRun({ break: 6 }),
            new TextRun({ text: "Technical Report:", bold: true, size: 48, color: PAKBLUE }),
            new TextRun({ break: 1 }),
            new TextRun({ text: "Practical Applications of Polynomial Interpolation", bold: true, size: 36, color: MIDBLUE }),
            new TextRun({ break: 8 }),
          ]
        }),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({ children: [cell("Course Title", { bold: true, fill: LIGHTBLUE }), cell("Numerical Analysis (MATH-232)")] }),
            new TableRow({ children: [cell("Student Name", { bold: true, fill: LIGHTBLUE }), cell("Abdullah Rana")] }),
            new TableRow({ children: [cell("Submission Date", { bold: true, fill: LIGHTBLUE }), cell("May 2026")] }),
            new TableRow({ children: [cell("Instructor", { bold: true, fill: LIGHTBLUE }), cell("Faculty of Basic Sciences")] })
          ]
        }),
        new Paragraph({ children: [new PageBreak()] }),

        // Abstract
        h(1, "Abstract"),
        p("This report explores the practical utility of polynomial interpolation in various scientific and engineering domains. Polynomial interpolation is a fundamental numerical analysis technique used to estimate unknown values within a range of known data points. By applying four distinct methodologies—Newton’s Forward Difference, Newton’s Backward Difference, Newton’s Divided Difference, and Lagrange Interpolation—this report demonstrates how these mathematical tools solve real-world problems in thermodynamics, demographics, kinematics, and robotics. Each method is evaluated based on its specific constraints, such as data interval consistency and relative position of the target point."),

        // Section 1
        h(1, "1. Theoretical Background"),
        p("Interpolation is the process of constructing new data points within the range of a discrete set of known data points. In engineering, experimental data is often collected at specific intervals, yet the value of a function at an intermediate point is frequently required for further analysis."),
        
        h(2, "1.1 Fundamental Principles"),
        p("The core objective of polynomial interpolation is to find a polynomial P(x) of degree n that passes through n+1 given data points. The general form is:"),
        math(["P(x) = a", { text: "n", subscript: true }, " x", { text: "n", superscript: true }, " + a", { text: "n-1", subscript: true }, " x", { text: "n-1", superscript: true }, " + ... + a", { text: "1", subscript: true }, " x + a", { text: "0", subscript: true }]),

        h(2, "1.2 Methodologies"),
        p("Newton’s Difference Formulas: These methods leverage the concept of finite differences. The Forward Formula is optimal for points near the start of a dataset, while the Backward Formula is suited for points near the end. Both require equally spaced intervals."),
        p("Newton’s Divided Difference: This generalization allows for interpolation with unequally spaced data points by using ratios of differences."),
        p("Lagrange Interpolation: Unlike Newton’s methods, Lagrange interpolation does not require a difference table. It constructs the polynomial directly as a linear combination of Lagrange basis polynomials."),

        new Paragraph({ children: [new PageBreak()] }),

        // Section 2: Cases
        h(1, "2. Practical Case Studies"),

        // Case 1
        h(2, "Case 1: Newton’s Forward Difference Formula"),
        p("Field: Chemical Engineering (Thermodynamics)"),
        p("Scenario: A chemical engineer needs to determine the specific heat capacity (Cp) of a substance at a temperature of T = 305 K. Experimental data is available for temperatures at equal intervals of 20 K."),
        p("Engineering Rationale: Since the target value (305 K) is near the beginning of the table (x0 = 300 K), Newton's Forward Difference formula minimizes truncation errors."),

        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({ children: [cell("Temp (T) [K]", { bold: true, fill: PAKBLUE, color: "FFFFFF" }), cell("Specific Heat (Cp) [kJ/kg·K]", { bold: true, fill: PAKBLUE, color: "FFFFFF" })] }),
            new TableRow({ children: [cell("300"), cell("1.005")] }),
            new TableRow({ children: [cell("320"), cell("1.008")] }),
            new TableRow({ children: [cell("340"), cell("1.013")] }),
            new TableRow({ children: [cell("360"), cell("1.020")] })
          ]
        }),
        
        p("Result Calculation:"),
        math(["P(305) = 1.0055625 kJ/kg·K"]),

        // Case 2
        h(2, "Case 2: Newton’s Backward Difference Formula"),
        p("Field: Economics (Population Growth)"),
        p("Scenario: An economist estimates the population of a city for the year 2008. Census data is available every 10 years from 1980 to 2010."),
        p("Engineering Rationale: Since the target year (2008) is close to the end of the table (xn = 2010), Newton's Backward Difference formula is used."),

        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({ children: [cell("Year (x)", { bold: true, fill: PAKBLUE, color: "FFFFFF" }), cell("Population (Millions) (y)", { bold: true, fill: PAKBLUE, color: "FFFFFF" })] }),
            new TableRow({ children: [cell("1980"), cell("10")] }),
            new TableRow({ children: [cell("1990"), cell("12")] }),
            new TableRow({ children: [cell("2000"), cell("15")] }),
            new TableRow({ children: [cell("2010"), cell("20")] })
          ]
        }),
        
        p("Result Calculation:"),
        math(["P(2008) = 18.792 Million"]),

        new Paragraph({ children: [new PageBreak()] }),

        // Case 3
        h(2, "Case 3: Newton’s Divided Difference Formula"),
        p("Field: Physics (Experimental Kinematics)"),
        p("Scenario: A physicist measures the velocity of a particle at unequal time intervals. Find velocity at t = 2.5s."),
        p("Engineering Rationale: The unequal spacing of the time intervals (t=0, 1, 3, 4) necessitates the Divided Difference method."),

        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({ children: [cell("Time (t) [s]", { bold: true, fill: PAKBLUE, color: "FFFFFF" }), cell("Velocity (v) [m/s]", { bold: true, fill: PAKBLUE, color: "FFFFFF" })] }),
            new TableRow({ children: [cell("0"), cell("0")] }),
            new TableRow({ children: [cell("1"), cell("10")] }),
            new TableRow({ children: [cell("3"), cell("22")] }),
            new TableRow({ children: [cell("4"), cell("28")] })
          ]
        }),

        p("Result Calculation:"),
        math(["P(2.5) = 19.375 m/s"]),

        // Case 4
        h(2, "Case 4: Lagrange Interpolation Method"),
        p("Field: Robotics (Trajectory Planning)"),
        p("Scenario: A robot arm needs to pass through specific coordinates. Calculate y-position for x = 4."),
        p("Engineering Rationale: Lagrange interpolation is chosen for its mathematical elegance and directness in robot path waypoint calculation."),

        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({ children: [cell("Coordinate x", { bold: true, fill: PAKBLUE, color: "FFFFFF" }), cell("Coordinate y", { bold: true, fill: PAKBLUE, color: "FFFFFF" })] }),
            new TableRow({ children: [cell("1"), cell("3")] }),
            new TableRow({ children: [cell("2"), cell("5")] }),
            new TableRow({ children: [cell("5"), cell("12")] }),
            new TableRow({ children: [cell("7"), cell("8")] })
          ]
        }),

        p("Result Calculation:"),
        math(["P(4) = 10.45"]),

        new Paragraph({ children: [new PageBreak()] }),

        // Section 3
        h(1, "3. Comparative Analysis"),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({ children: [cell("Feature", { bold: true, fill: PAKBLUE, color: "FFFFFF" }), cell("Newton's (F/B)", { bold: true, fill: PAKBLUE, color: "FFFFFF" }), cell("Newton's Divided Diff.", { bold: true, fill: PAKBLUE, color: "FFFFFF" }), cell("Lagrange Interpolation", { bold: true, fill: PAKBLUE, color: "FFFFFF" })] }),
            new TableRow({ children: [cell("Data Spacing", { bold: true }), cell("Must be Equal"), cell("Any (Unequal preferred)"), cell("Any")] }),
            new TableRow({ children: [cell("Ease of Adding Data", { bold: true }), cell("Easy"), cell("Easy"), cell("Hard")] }),
            new TableRow({ children: [cell("Computational Cost", { bold: true }), cell("Low"), cell("Medium"), cell("High")] }),
            new TableRow({ children: [cell("Numerical Stability", { bold: true }), cell("High"), cell("High"), cell("Variable")] })
          ]
        }),

        // Conclusion
        h(1, "4. Conclusion"),
        p("Polynomial interpolation remains a cornerstone of numerical computation. While simple methods like Lagrange are excellent for small, static datasets in robotics, Newton’s difference formulas provide the efficiency and scalability required for dynamic engineering systems. Understanding the data's geometry (equal vs. unequal spacing) and the relative position of the target point is critical in selecting the optimal interpolation strategy."),

        // References
        h(1, "5. References"),
        p("1. Chapra, S. C., & Canale, R. P. (2015). Numerical Methods for Engineers. McGraw-Hill Education."),
        p("2. Burden, R. L., & Faires, J. D. (2010). Numerical Analysis. Cengage Learning."),
        p("3. Lecture Notes: Numerical Analysis (MATH-232), SEECS, NUST.")
      ]
    }]
  });

  Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("Polynomial_Interpolation_Technical_Report.docx", buffer);
    console.log("Document created successfully: Polynomial_Interpolation_Technical_Report.docx");
  });
}

createDoc();
