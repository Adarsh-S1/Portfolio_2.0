import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';

export const CertificateViewerPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const pdfPath = searchParams.get('pdf');
  const certName = searchParams.get('name') || 'Certificate';

  return (
    <div className="min-h-screen bg-[#d0d0d0] dark:bg-[#121212] p-4 sm:p-8 flex flex-col font-sans">
      <div className="max-w-6xl w-full mx-auto flex-1 flex flex-col bg-white dark:bg-[#1e1e1e] border-4 border-black dark:border-white shadow-[12px_12px_0px_#000] dark:shadow-[12px_12px_0px_#fff]">
        {/* Viewer Header */}
        <div className="bg-[#ffd93d] text-black px-6 py-4 border-b-4 border-black flex items-center justify-between">
          <h1 className="text-xl font-bold font-mono uppercase truncate mr-4">
            {certName}
          </h1>

          <div className="flex items-center gap-3 shrink-0">
            {pdfPath && (
              <a
                href={pdfPath}
                download
                title="Download PDF"
                className="w-10 h-10 bg-[#a8e6cf] text-black border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-transform"
              >
                <Download className="w-5 h-5" />
              </a>
            )}

            <button
              onClick={() => navigate('/')}
              title="Back to portfolio"
              className="w-10 h-10 bg-[#66d9ef] text-black border-2 border-black flex items-center justify-center shadow-[3px_3px_0px_#000] hover:translate-x-[1px] hover:translate-y-[1px] transition-transform"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Viewer Body */}
        <div className="flex-1 min-h-[75vh]">
          {pdfPath ? (
            <iframe
              src={pdfPath}
              title={certName}
              className="w-full h-full border-none min-h-[75vh]"
            />
          ) : (
            <div className="flex flex-col items-center justify-center h-full p-12 text-center font-mono font-bold text-lg">
              <p>No certificate specified.</p>
              <button
                onClick={() => navigate('/')}
                className="mt-4 bg-[#66d9ef] text-black px-6 py-2 border-2 border-black shadow-[3px_3px_0px_#000]"
              >
                Return to Home
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateViewerPage;
