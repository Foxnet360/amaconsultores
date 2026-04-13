import React, { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { Button } from '@/components/ui/button';
import { FileDown, Loader2 } from 'lucide-react';
import FactsheetPDF from './FactsheetPDF';

const PDFDownloadButton = () => {
  const [isGenerating, setIsGenerating] = useState(false);

  const handleDownload = async () => {
    setIsGenerating(true);
    try {
      // Generate PDF blob
      const blob = await pdf(<FactsheetPDF />).toBlob();
      
      // Create download link
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'AMA-Consultores-Ficha-Contratacion.pdf';
      
      // Trigger download
      document.body.appendChild(link);
      link.click();
      
      // Cleanup
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error generating PDF:', error);
      alert('Hubo un error al generar el PDF. Por favor, inténtalo de nuevo.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <Button
      onClick={handleDownload}
      disabled={isGenerating}
      variant="outline"
      className="border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-navy"
    >
      {isGenerating ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generando PDF...
        </>
      ) : (
        <>
          <FileDown className="mr-2 h-4 w-4" />
          Descargar ficha PDF
        </>
      )}
    </Button>
  );
};

export default PDFDownloadButton;
