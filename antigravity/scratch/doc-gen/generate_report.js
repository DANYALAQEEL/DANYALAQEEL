const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  Header, Footer, AlignmentType, HeadingLevel, BorderStyle, WidthType,
  ShadingType, PageNumber, PageBreak, LevelFormat, ExternalHyperlink,
  TableOfContents, VerticalAlign
} = require('docx');
const fs = require('fs');

// Colors
const PAKBLUE = "1F4E79";
const MIDBLUE = "2E75B6";
const LIGHTBLUE = "C6E0FF";
const ROWALT = "F5F9FF";
const CODEGRAY = "F5F5F5";

const border = { style: BorderStyle.SINGLE, size: 1, color: "CCCCCC" };
const borders = { top: border, bottom: border, left: border, right: border };

// Helpers
function h(level, text, opts = {}) {
  const hMap = { 1: HeadingLevel.HEADING_1, 2: HeadingLevel.HEADING_2, 3: HeadingLevel.HEADING_3 };
  return new Paragraph({
    heading: hMap[level],
    children: [new TextRun({ text, bold: true, color: level === 1 ? PAKBLUE : MIDBLUE })],
    spacing: { before: 240, after: 120 },
    ...opts
  });
}

function p(text, opts = {}) {
  return new Paragraph({
    children: [new TextRun(text)],
    spacing: { before: 120, after: 120 },
    ...opts
  });
}

function cell(text, opts = {}) {
  const { bold = false, fill = undefined, align = AlignmentType.LEFT } = opts;
  return new TableCell({
    borders,
    shading: fill ? { fill, type: ShadingType.CLEAR } : undefined,
    margins: { top: 80, bottom: 80, left: 120, right: 120 },
    children: [new Paragraph({
      alignment: align,
      children: [new TextRun({ text, bold })]
    })],
    verticalAlign: VerticalAlign.CENTER
  });
}

function createDoc() {
  const doc = new Document({
    sections: [{
      properties: {},
      children: [
        // Title Page
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "PakOS Project", bold: true, size: 72, color: PAKBLUE }),
            new TextRun({ break: 1 }),
            new TextRun({ text: "Bootloader & Security/Access Control", bold: true, size: 36, color: MIDBLUE }),
            new TextRun({ break: 4 }),
          ]
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          children: [
            new TextRun({ text: "Technical Design & Distribution Recommendation", size: 28 }),
            new TextRun({ break: 1 }),
            new TextRun({ text: "Module: OS Security Infrastructure", size: 24, italic: true }),
            new TextRun({ break: 8 }),
          ]
        }),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({
              children: [
                cell("Project Code", { bold: true, fill: LIGHTBLUE }),
                cell("PAK-OS-2024-SEC"),
              ]
            }),
            new TableRow({
              children: [
                cell("Version", { bold: true, fill: LIGHTBLUE }),
                cell("1.0.0-FINAL"),
              ]
            }),
            new TableRow({
              children: [
                cell("Classification", { bold: true, fill: LIGHTBLUE }),
                cell("SENSITIVE / TECHNICAL"),
              ]
            })
          ]
        }),
        new Paragraph({ children: [new PageBreak()] }),

        // Abstract
        h(1, "1. Abstract & Scope"),
        p("The PakOS initiative aims to develop a secure, sovereign operating system environment for critical infrastructure and government applications. This module focuses on the foundational security layers: the Bootloader and the Security/Access Control mechanisms. The document defines the security perimeter, ranging from the initial hardware root-of-trust to the enforcement of mandatory access controls (MAC) in the user space."),
        p("Key focus areas include Secure Boot verification, kernel hardening, and the implementation of a zero-trust architecture at the system level."),

        h(2, "1.1 Security Perimeter"),
        p("The security perimeter for PakOS is defined by the following layers:"),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({ children: [cell("Layer", { bold: true, fill: PAKBLUE }), cell("Description", { bold: true, fill: PAKBLUE })] }),
            new TableRow({ children: [cell("Hardware", { bold: true }), cell("TPM 2.0 based hardware root-of-trust and measured boot.")] }),
            new TableRow({ children: [cell("Bootloader", { bold: true }), cell("GRUB2 with signature enforcement and kernel lockdown.")] }),
            new TableRow({ children: [cell("Kernel", { bold: true }), cell("LSM (Linux Security Modules) - AppArmor/SELinux integration.")] }),
            new TableRow({ children: [cell("User Space", { bold: true }), cell("PAM (Pluggable Authentication Modules) and Namespace isolation.")] })
          ]
        }),

        // Stakeholder Requirements
        h(1, "2. Stakeholder Requirements"),
        p("The following requirements outline the needs of various personas involved in the PakOS ecosystem."),

        h(2, "2.1 Functional Requirements"),
        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({ children: [cell("ID", { bold: true, fill: PAKBLUE }), cell("Stakeholder", { bold: true, fill: PAKBLUE }), cell("Requirement", { bold: true, fill: PAKBLUE })] }),
            new TableRow({ children: [cell("FR-01"), cell("End User"), cell("Unified login via biometric and smart card integration.")] }),
            new TableRow({ children: [cell("FR-02"), cell("System Admin"), cell("Centralized policy enforcement for access control lists (ACLs).")] }),
            new TableRow({ children: [cell("FR-03"), cell("Kernel Engineer"), cell("Ability to hot-patch security vulnerabilities without rebooting.")] }),
            new TableRow({ children: [cell("FR-04"), cell("Security Auditor"), cell("Immutable audit logs with remote signing capability.")] })
          ]
        }),

        // Comparative Analysis
        h(1, "3. Comparative Analysis: Ubuntu 24.04 vs Debian 12"),
        p("To determine the base distribution for PakOS, a head-to-head comparison was conducted between Ubuntu 24.04 LTS (Noble Numbat) and Debian 12 (Bookworm)."),

        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({ children: [cell("Metric", { bold: true, fill: PAKBLUE }), cell("Ubuntu 24.04 LTS", { bold: true, fill: PAKBLUE }), cell("Debian 12", { bold: true, fill: PAKBLUE })] }),
            new TableRow({ children: [cell("Security Focus"), cell("AppArmor enabled by default; Kernel Lockdown integration."), cell("SELinux/AppArmor available but requires manual configuration.")] }),
            new TableRow({ children: [cell("Release Cycle"), cell("5-year standard support; 12-year Expanded Security Maintenance."), cell("Approx. 2 years; 5 years total LTS support via community.")] }),
            new TableRow({ children: [cell("Hardware Compatibility"), cell("Extensive OEM certification; latest HWE kernels."), cell("Focus on stability; older kernel versions in stable.")] }),
            new TableRow({ children: [cell("Package Freshness"), cell("Modern toolchains (GCC 13, LLVM 18)."), cell("Conservative versions to ensure stability.")] })
          ]
        }),

        // Implementation Mapping
        h(1, "4. Implementation Mapping"),
        p("The following matrix maps high-level security requirements to specific technical implementations within the PakOS kernel and system architecture."),

        new Table({
          width: { size: 100, type: WidthType.PERCENTAGE },
          rows: [
            new TableRow({ children: [cell("Requirement", { bold: true, fill: PAKBLUE }), cell("Technical Implementation", { bold: true, fill: PAKBLUE }), cell("Component", { bold: true, fill: PAKBLUE })] }),
            new TableRow({ children: [cell("Boot Integrity"), cell("Secure Boot + IMA/EVM signature validation."), cell("Shim/GRUB2")] }),
            new TableRow({ children: [cell("Process Isolation"), cell("User Namespaces + CGroups v2."), cell("Linux Kernel")] }),
            new TableRow({ children: [cell("Access Control"), cell("AppArmor Profile enforcement (Enforced Mode)."), cell("Systemd/LSM")] }),
            new TableRow({ children: [cell("Audit Compliance"), cell("Auditd with syscall filtering and remote logging."), cell("Audit Subsystem")] })
          ]
        }),

        // Certification
        h(1, "5. Formal Recommendation & Certification"),
        p("Based on the technical evaluation and stakeholder requirements, the project team formally recommends Ubuntu 24.04 LTS as the base distribution for PakOS. Its superior security-by-default posture, extended support lifecycle, and tight integration with modern hardware security features (TPM/Secure Boot) make it the most suitable foundation for a national-grade operating system."),
        p("Certified by: PakOS Security Engineering Board"),
        p("Date: May 2026")
      ]
    }]
  });

  Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync("PakOS_Project_Report_Final.docx", buffer);
    console.log("Document created successfully: PakOS_Project_Report_Final.docx");
  });
}

createDoc();
