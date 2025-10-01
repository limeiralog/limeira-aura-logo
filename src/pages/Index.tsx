import { useState } from "react";
import logo from "@/assets/limeira-log-logo-v2.png";
import { Download, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Index = () => {
  const [copiedFormat, setCopiedFormat] = useState<string | null>(null);

  const downloadLogo = () => {
    const link = document.createElement('a');
    link.href = logo;
    link.download = 'limeira-log-logo.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    toast.success("Logo downloaded successfully!");
  };

  const copyToClipboard = async (format: string) => {
    try {
      await navigator.clipboard.writeText(format);
      setCopiedFormat(format);
      toast.success(`${format} copied to clipboard!`);
      setTimeout(() => setCopiedFormat(null), 2000);
    } catch (err) {
      toast.error("Failed to copy to clipboard");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 animate-in fade-in duration-700">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
            LIMEIRA LOG
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Financial advisory and logistics solutions. Strategic partnership for comprehensive services.
          </p>
        </div>

        {/* Logo Display */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-card rounded-3xl p-12 shadow-elegant border border-border/50 animate-in zoom-in duration-500">
            <img 
              src={logo} 
              alt="LIMEIRA LOG Logo" 
              className="w-full max-w-2xl mx-auto h-auto"
            />
          </div>

          {/* Download Button */}
          <div className="flex justify-center mt-8">
            <Button 
              onClick={downloadLogo}
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:shadow-lg transition-all duration-300 gap-2"
            >
              <Download className="w-5 h-5" />
              Download Logo (4K)
            </Button>
          </div>
        </div>

        {/* Logo Variations */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 mb-20">
          <div className="animate-in slide-in-from-left duration-700">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Light Background</h3>
            <div className="bg-white rounded-2xl p-8 shadow-soft border border-border/30">
              <img 
                src={logo} 
                alt="LIMEIRA LOG on Light Background" 
                className="w-full max-w-md mx-auto h-auto"
              />
            </div>
          </div>

          <div className="animate-in slide-in-from-right duration-700">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Dark Background</h3>
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 shadow-soft border border-border/30">
              <img 
                src={logo} 
                alt="LIMEIRA LOG on Dark Background" 
                className="w-full max-w-md mx-auto h-auto"
              />
            </div>
          </div>
        </div>

        {/* Brand Specifications */}
        <div className="max-w-4xl mx-auto animate-in fade-in duration-700 delay-300">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">Brand Specifications</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Colors */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Color Palette</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#00BFFF] shadow-md"></div>
                  <div>
                    <p className="font-semibold text-foreground">Light Blue</p>
                    <button 
                      onClick={() => copyToClipboard("#00BFFF")}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                    >
                      {copiedFormat === "#00BFFF" ? (
                        <>
                          <Check className="w-3 h-3" /> Copied!
                        </>
                      ) : (
                        "#00BFFF"
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg bg-[#808080] shadow-md"></div>
                  <div>
                    <p className="font-semibold text-foreground">Gray</p>
                    <button 
                      onClick={() => copyToClipboard("#808080")}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                    >
                      {copiedFormat === "#808080" ? (
                        <>
                          <Check className="w-3 h-3" /> Copied!
                        </>
                      ) : (
                        "#808080"
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Attributes */}
            <div className="bg-card rounded-2xl p-8 shadow-soft border border-border/50">
              <h3 className="text-xl font-semibold mb-6 text-foreground">Design Attributes</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Modern balanced aesthetic</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Subtle 3D depth elements</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Growth chart graphics integrated</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Stylized handshake symbolism</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Interconnection symbols</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Elegant professional typography</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>4K resolution quality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Brand Values */}
        <div className="max-w-4xl mx-auto mt-12 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Brand Values & Services</h3>
            <div className="flex flex-wrap justify-center gap-4 text-muted-foreground">
              <span className="px-4 py-2 bg-card rounded-full text-sm font-medium shadow-sm">
                Financial Advisory
              </span>
              <span className="px-4 py-2 bg-card rounded-full text-sm font-medium shadow-sm">
                Currency Exchange
              </span>
              <span className="px-4 py-2 bg-card rounded-full text-sm font-medium shadow-sm">
                Strategic Partnership
              </span>
              <span className="px-4 py-2 bg-card rounded-full text-sm font-medium shadow-sm">
                Security
              </span>
              <span className="px-4 py-2 bg-card rounded-full text-sm font-medium shadow-sm">
                Intelligence
              </span>
              <span className="px-4 py-2 bg-card rounded-full text-sm font-medium shadow-sm">
                Professional Support
              </span>
              <span className="px-4 py-2 bg-card rounded-full text-sm font-medium shadow-sm">
                Comprehensive Services
              </span>
              <span className="px-4 py-2 bg-card rounded-full text-sm font-medium shadow-sm">
                Logistics Solutions
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
