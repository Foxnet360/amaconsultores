import React from 'react';
import { Document, Page, Text, View, StyleSheet, PDFDownloadLink, Image } from '@react-pdf/renderer';

// Create styles for PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 40,
    fontFamily: 'Helvetica',
  },
  header: {
    backgroundColor: '#0D1B3E',
    padding: 20,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 8,
  },
  headerSubtitle: {
    fontSize: 12,
    color: '#C9A84C',
    marginBottom: 4,
  },
  pricing: {
    fontSize: 16,
    color: '#C9A84C',
    fontWeight: 'bold',
    marginTop: 8,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#0D1B3E',
    marginBottom: 10,
    borderBottom: '2 solid #C9A84C',
    paddingBottom: 5,
  },
  text: {
    fontSize: 11,
    color: '#333333',
    lineHeight: 1.5,
    marginBottom: 8,
  },
  table: {
    display: 'table',
    width: 'auto',
    marginVertical: 10,
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e5e5',
    borderBottomStyle: 'solid',
    paddingVertical: 8,
  },
  tableHeader: {
    backgroundColor: '#0D1B3E',
    color: '#ffffff',
    fontWeight: 'bold',
    padding: 8,
    fontSize: 11,
  },
  tableCell: {
    flex: 1,
    padding: 8,
    fontSize: 10,
  },
  checklistSection: {
    backgroundColor: '#f8f9fa',
    padding: 15,
    marginBottom: 15,
    borderRadius: 5,
  },
  checklistTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#0D1B3E',
    marginBottom: 10,
  },
  checklistItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  checkbox: {
    width: 12,
    height: 12,
    borderWidth: 1,
    borderColor: '#0D1B3E',
    marginRight: 8,
  },
  checklistText: {
    fontSize: 10,
    color: '#333333',
    flex: 1,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    borderTop: '1 solid #e5e5e5',
    paddingTop: 10,
  },
  footerText: {
    fontSize: 8,
    color: '#666666',
    textAlign: 'center',
  },
  goldAccent: {
    color: '#C9A84C',
  },
  navyText: {
    color: '#0D1B3E',
  },
});

// PDF Document Component
const FactsheetPDF = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Logo Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20, borderBottom: '2 solid #C9A84C', paddingBottom: 10 }}>
        <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#C9A84C', alignItems: 'center', justifyContent: 'center', marginRight: 15 }}>
          <Text style={{ color: '#0D1B3E', fontSize: 20, fontWeight: 'bold' }}>AMA</Text>
        </View>
        <View>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#0D1B3E' }}>AMA Consultores</Text>
          <Text style={{ fontSize: 10, color: '#666666' }}>Expertos en movilidad internacional</Text>
        </View>
      </View>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerSubtitle}>Ley 14/2013 · RD 1155/2024 · Arts. 71 y ss. LOEx</Text>
        <Text style={styles.headerTitle}>Contratación Internacional en Origen</Text>
        <Text style={styles.headerTitle}>— Selección y Movilidad</Text>
        <Text style={styles.pricing}>Desde 1.800 € (IVA incluido)</Text>
        <Text style={{ color: '#ffffff', fontSize: 10, marginTop: 4 }}>Tasas oficiales: A cargo de la empresa</Text>
      </View>

      {/* Description */}
      <View style={styles.section}>
        <Text style={styles.text}>
          Servicio integral de selección y contratación de talento colombiano para empresas españolas. 
          Gestionamos todo el proceso desde la preselección en Colombia hasta la incorporación en España.
        </Text>
      </View>

      {/* Service Profile Table */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Perfil del Servicio</Text>
        
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={[styles.tableCell, { flex: 2 }]}>Aspecto</Text>
            <Text style={[styles.tableCell, { flex: 3 }]}>Detalle</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 2, fontWeight: 'bold' }]}>Origen del talento</Text>
            <Text style={[styles.tableCell, { flex: 3 }]}>Colombia (preselección en origen)</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 2, fontWeight: 'bold' }]}>Perfiles habituales</Text>
            <Text style={[styles.tableCell, { flex: 3 }]}>Personal de hogar, construcción, hostelería, cuidadores</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 2, fontWeight: 'bold' }]}>Marco legal</Text>
            <Text style={[styles.tableCell, { flex: 3 }]}>Ley 14/2013, RD 1155/2024, Arts. 71 y ss. LOEx, Catálogo SEPE</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 2, fontWeight: 'bold' }]}>Duración proceso</Text>
            <Text style={[styles.tableCell, { flex: 3 }]}>2-4 meses (según complejidad y carga administrativa)</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 2, fontWeight: 'bold' }]}>Garantía</Text>
            <Text style={[styles.tableCell, { flex: 3 }]}>Transparencia total, cumplimiento normativo, seguimiento post-incorporación</Text>
          </View>
        </View>
      </View>

      {/* The 4 Phases */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Las 4 Fases del Proceso</Text>
        
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#0D1B3E', marginBottom: 4 }}>1. Diagnóstico</Text>
          <Text style={styles.text}>Análisis de necesidades de la empresa y definición del perfil requerido</Text>
        </View>
        
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#0D1B3E', marginBottom: 4 }}>2. Selección</Text>
          <Text style={styles.text}>Preselección en Colombia mediante nuestro equipo local y entrevistas finales</Text>
        </View>
        
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#0D1B3E', marginBottom: 4 }}>3. Tramitación</Text>
          <Text style={styles.text}>Gestión completa de documentación migratoria, visados y autorizaciones</Text>
        </View>
        
        <View style={{ marginBottom: 10 }}>
          <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#0D1B3E', marginBottom: 4 }}>4. Incorporación</Text>
          <Text style={styles.text}>Acompañamiento en la llegada a España e integración en la empresa</Text>
        </View>
      </View>

      {/* Pricing Table */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Tarifas y Costes</Text>
        
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <Text style={[styles.tableCell, { flex: 3 }]}>Servicio</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>Precio</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 3 }]}>Selección completa (4 fases)</Text>
            <Text style={[styles.tableCell, { flex: 2, fontWeight: 'bold', color: '#C9A84C' }]}>Desde 1.800 €</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 3 }]}>Gestión trabajador (individual)</Text>
            <Text style={[styles.tableCell, { flex: 2, fontWeight: 'bold', color: '#C9A84C' }]}>500 €</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 3 }]}>Consulta diagnóstico inicial</Text>
            <Text style={[styles.tableCell, { flex: 2, fontWeight: 'bold', color: '#C9A84C' }]}>300 €</Text>
          </View>
          
          <View style={styles.tableRow}>
            <Text style={[styles.tableCell, { flex: 3 }]}>Tasas oficiales (visados, etc.)</Text>
            <Text style={[styles.tableCell, { flex: 2 }]}>A cargo de la empresa</Text>
          </View>
        </View>
        
        <Text style={{ fontSize: 9, color: '#666666', marginTop: 5 }}>
          * Todos los precios incluyen IVA. Las tasas oficiales varían según el tipo de visado y se pagan directamente a las autoridades.
        </Text>
      </View>

      {/* Company Checklist */}
      <View style={styles.checklistSection}>
        <Text style={styles.checklistTitle}>Checklist para la Empresa</Text>
        
        <View style={styles.checklistItem}>
          <View style={styles.checkbox} />
          <Text style={styles.checklistText}>CIF/NIF de la empresa vigente</Text>
        </View>
        
        <View style={styles.checklistItem}>
          <View style={styles.checkbox} />
          <Text style={styles.checklistText}>Contrato de trabajo para el candidato (mínimo 20h/semana)</Text>
        </View>
        
        <View style={styles.checklistItem}>
          <View style={styles.checkbox} />
          <Text style={styles.checklistText}>Cuenta bancaria española para domiciliación</Text>
        </View>
        
        <View style={styles.checklistItem}>
          <View style={styles.checkbox} />
          <Text style={styles.checklistText}>Oferta de empleo inscrita en el SEPE (si aplica)</Text>
        </View>
        
        <View style={styles.checklistItem}>
          <View style={styles.checkbox} />
          <Text style={styles.checklistText}>Comunicación de apertura de centro de trabajo</Text>
        </View>
      </View>

      {/* Worker Checklist */}
      <View style={styles.checklistSection}>
        <Text style={styles.checklistTitle}>Checklist para el Trabajador</Text>
        
        <View style={styles.checklistItem}>
          <View style={styles.checkbox} />
          <Text style={styles.checklistText}>Pasaporte válido (mínimo 1 año)</Text>
        </View>
        
        <View style={styles.checklistItem}>
          <View style={styles.checkbox} />
          <Text style={styles.checklistText}>Certificado de antecedentes penales apostillado</Text>
        </View>
        
        <View style={styles.checklistItem}>
          <View style={styles.checkbox} />
          <Text style={styles.checklistText}>Certificado médico oficial</Text>
        </View>
        
        <View style={styles.checklistItem}>
          <View style={styles.checkbox} />
          <Text style={styles.checklistText}>Documentos acreditativos de formación/experiencia</Text>
        </View>
        
        <View style={styles.checklistItem}>
          <View style={styles.checkbox} />
          <Text style={styles.checklistText}>Fotografías tamaño pasaporte</Text>
        </View>
      </View>

      {/* Contact Info */}
      <View style={[styles.section, { marginTop: 20 }]}>
        <Text style={styles.sectionTitle}>Contacto</Text>
        <Text style={styles.text}>AMA Consultores</Text>
        <Text style={styles.text}>Email: info@amaconsultores.eu</Text>
        <Text style={styles.text}>Tel. España: +34 664 824 098</Text>
        <Text style={styles.text}>Tel. Colombia: +57 301 717 4478</Text>
        <Text style={styles.text}>Web: amaconsultores.eu</Text>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          AMA Consultores | Expertos en movilidad internacional y seguridad jurídica transnacional | 
          © 2026 Todos los derechos reservados. La información tiene carácter orientativo y no sustituye la asesoría jurídica personalizada.
        </Text>
      </View>
    </Page>
  </Document>
);

export default FactsheetPDF;
